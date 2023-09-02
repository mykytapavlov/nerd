# Contextvars

## Summary
Used in case when you want modify global variable per thread or per coroutine
* Context Variables (works per thread & corotine)
* Thread-Local Storage (works per thread)

## Example
```py
import asyncio
import contextvars
import time


# Imagine there is a single ORM like model: User.
# And there are many clients. Each client has it's own `Users` table in DB.
# We want to reuse model for every client since it's the same for all of them, 
# but each client should only access it's own table in DB.


class User:
    """
    `User` Model (Like in ORM)
    """
    table = None  # can point to a different table in DB based on client which access it at runtime.


async def read(client=None, table_name=None, t=0):
    User.table = table_name
    print(f'[{time.strftime("%X")}] Client: {client} start reading table: {User.table}')
    await asyncio.sleep(t)
    print(f'[{time.strftime("%X")}] Client: {client} finish reading table: {User.table}')
    
    await asyncio.sleep(t)
    
    print(f'[{time.strftime("%X")}] Client: {client} start reading table: {User.table}')
    await asyncio.sleep(t)
    print(f'[{time.strftime("%X")}] Client: {client} finish reading table: {User.table}')


async def sequential():
    await read(client='A', table_name='Users_A', t=4)
    await read(client='B', table_name='Users_B', t=3),
    await read(client='C', table_name='Users_C', t=2),
    await read(client='D', table_name='Users_D', t=1)


async def concurrent():
    # with context sharing (e.g. all coroutines naively modify global User.table variable)
    task_1 = asyncio.create_task(read(client='A', table_name='Users_A', t=4))
    task_2 = asyncio.create_task(read(client='B', table_name='Users_B', t=3))
    task_3 = asyncio.create_task(read(client='C', table_name='Users_C', t=2))
    task_4 = asyncio.create_task(read(client='D', table_name='Users_D', t=1))

    await task_1
    await task_2
    await task_3
    await task_4


class ThreadSafeUser:
    """
    Tread Safe `User` Model (Like in ORM), with a contextvar
    """
    table = contextvars.ContextVar('table', default=None)


async def context_read(client=None, table_name=None, t=0):
    ThreadSafeUser.table.set(table_name)
    print(f'[{time.strftime("%X")}] Client: {client} start reading table: {ThreadSafeUser.table.get()}')
    await asyncio.sleep(t)
    print(f'[{time.strftime("%X")}] Client: {client} finish reading table: {ThreadSafeUser.table.get()}')
    
    await asyncio.sleep(t)
    
    print(f'[{time.strftime("%X")}] Client: {client} start reading table: {ThreadSafeUser.table.get()}')
    await asyncio.sleep(t)
    print(f'[{time.strftime("%X")}] Client: {client} finish reading table: {ThreadSafeUser.table.get()}')


async def concurrent_with_context():
    # no context sharing (e.g. all coroutines modify own copy of User.table variable)
    task_1 = asyncio.create_task(context_read(client='A', table_name='Users_A', t=4))
    task_2 = asyncio.create_task(context_read(client='B', table_name='Users_B', t=3))
    task_3 = asyncio.create_task(context_read(client='C', table_name='Users_C', t=2))
    task_4 = asyncio.create_task(context_read(client='D', table_name='Users_D', t=1))

    await task_1
    await task_2
    await task_3
    await task_4


if __name__ == '__main__':
    # TODO: https://stackoverflow.com/a/52209668 | run in executor topic

    print('sequential:')
    asyncio.run(sequential())
    # sequential:
    # [22:39:45] Client: A start reading table: Users_A
    # [22:39:49] Client: A finish reading table: Users_A
    # [22:39:53] Client: A start reading table: Users_A
    # [22:39:57] Client: A finish reading table: Users_A
    # [22:39:57] Client: B start reading table: Users_B
    # [22:40:00] Client: B finish reading table: Users_B
    # [22:40:03] Client: B start reading table: Users_B
    # [22:40:06] Client: B finish reading table: Users_B
    # [22:40:06] Client: C start reading table: Users_C
    # [22:40:08] Client: C finish reading table: Users_C
    # [22:40:10] Client: C start reading table: Users_C
    # [22:40:12] Client: C finish reading table: Users_C
    # [22:40:12] Client: D start reading table: Users_D
    # [22:40:13] Client: D finish reading table: Users_D
    # [22:40:14] Client: D start reading table: Users_D
    # [22:40:15] Client: D finish reading table: Users_D

    print('concurrent (naive, modifing global variable):')
    asyncio.run(concurrent())
    # concurrent (naive, modifing global variable):
    # [22:40:15] Client: A start reading table: Users_A
    # [22:40:15] Client: B start reading table: Users_B
    # [22:40:15] Client: C start reading table: Users_C
    # [22:40:15] Client: D start reading table: Users_D
    # [22:40:16] Client: D finish reading table: Users_D
    # [22:40:17] Client: C finish reading table: Users_D
    # [22:40:17] Client: D start reading table: Users_D
    # [22:40:18] Client: B finish reading table: Users_D
    # [22:40:18] Client: D finish reading table: Users_D
    # [22:40:19] Client: A finish reading table: Users_D
    # [22:40:19] Client: C start reading table: Users_D
    # [22:40:21] Client: B start reading table: Users_D
    # [22:40:21] Client: C finish reading table: Users_D
    # [22:40:23] Client: A start reading table: Users_D
    # [22:40:24] Client: B finish reading table: Users_D
    # [22:40:27] Client: A finish reading table: Users_D

    print('concurrent (modifing ContextVar instead modifing global variable):')
    asyncio.run(concurrent_with_context())
    # concurrent (modifing ContextVar instead modifing global variable):
    # [22:40:27] Client: A start reading table: Users_A
    # [22:40:27] Client: B start reading table: Users_B
    # [22:40:27] Client: C start reading table: Users_C
    # [22:40:27] Client: D start reading table: Users_D
    # [22:40:28] Client: D finish reading table: Users_D
    # [22:40:29] Client: C finish reading table: Users_C
    # [22:40:29] Client: D start reading table: Users_D
    # [22:40:30] Client: B finish reading table: Users_B
    # [22:40:30] Client: D finish reading table: Users_D
    # [22:40:31] Client: A finish reading table: Users_A
    # [22:40:31] Client: C start reading table: Users_C
    # [22:40:33] Client: B start reading table: Users_B
    # [22:40:33] Client: C finish reading table: Users_C
    # [22:40:35] Client: A start reading table: Users_A
    # [22:40:36] Client: B finish reading table: Users_B
    # [22:40:39] Client: A finish reading table: Users_A

```

## Reference
[Link](https://superfastpython.com/thread-context-variables-in-python/)
