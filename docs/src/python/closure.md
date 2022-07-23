# Closure

## Summary
* `inner` function has an access to the variable (called `free variable`) defined in `outer` function
* Use `nonlocal` statement inside `inner` function to modify `free variable` for both `inner` and `outer` scopes (mutable `free variable` does not need `nonlocal` statement to be modified for both scopes)
* To access `free variable` outside `inner` and `outer` scopes use `inner.__code__.co_freevars` for the name & `inner.__closure__[0].cell_contents` for the value

## Example
```py
# - built-in namespace (built-in types, accessible everywhere)
# -- module namespace (global, accessible within a file)
global_variable = -1


def outer_func():
    # --- func namespace (local, for outer_func)
    free_variable = 1  # (accessible within outer_func and inner_func scope)
    free_variable_mutable = ['outer']
    print(locals())  # {'free_variable': 1, 'free_variable_mutable': ['outer']}

    def inner_func():
        # ---- inner_func namespace
        nonlocal free_variable
        free_variable += 1
        free_variable_mutable.append('inner')
        print(locals())  # {'free_variable': 2, 'free_variable_mutable': ['outer', 'inner']}
        # ---- inner_func namespace

    print(inner_func.__code__.co_varnames)  # ()
    print(inner_func.__code__.co_freevars)  # ('free_variable', 'free_variable_mutable')
    print(inner_func.__closure__[0].cell_contents)  # 1
    print(inner_func.__closure__[1].cell_contents)  # ['outer']

    inner_func()
    print(locals())
    # {
    #   'free_variable': 2, 'free_variable_mutable': ['outer', 'inner'],
    #   'inner_func': <function outer_func.<locals>.inner_func at 0x7f9b6728f820>
    # }
    # --- outer_func namespace
    return inner_func


# print(globals())
# {
#   '__name__': '__main__', '__doc__': None, '__package__': None,
#   '__loader__': <_frozen_importlib_external.SourceFileLoader object at 0x7f96785b5f10>,
#   '__spec__': None, '__annotations__': {}, '__builtins__': <module 'builtins' (built-in)>,
#   '__file__': '/tmp/closure.py', '__cached__': None,
#   'global_variable': -1, 'outer_func': <function outer_func at 0x7f967a28f700>
# }


# try:
#     print(free_variable)  # noqa
# except NameError as e:
#     print(e)  # name 'free_variable' is not defined
#
# print(outer_func.__code__.co_varnames)  # ('inner_func',)
# print(outer_func.__code__.co_freevars)  # ()

f = outer_func()
del outer_func
f()  # {'free_variable': 3, 'free_variable_mutable': ['outer', 'inner', 'inner']}
f()  # {'free_variable': 4, 'free_variable_mutable': ['outer', 'inner', 'inner', 'inner']}

```

## Reference
[Link]()
