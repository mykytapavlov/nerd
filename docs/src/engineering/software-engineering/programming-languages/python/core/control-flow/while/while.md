# While

## Summary
* while

## Example
```py
stack = [1, 2, 3, 4]

while stack:
    x = stack.pop()
    print(x)
# 4
# 3
# 2
# 1
```

### Infinite while
```py
while True:
    print('Infinity')


i = 0
while True:
    print(i)
    if i == 4:
        break
    i += 1
# 0
# 1
# 2
# 3
# 4


i = 0
while True:
    print(i)
    if i == 4:
        i += 2
        continue
    elif i > 5:
        break
    i += 1
# 0
# 1
# 2
# 3
# 4
# 6
```

### While over list
```py
i = 0
sequence = [1, 2, 3, 4]

while i < len(sequence):
    print(f'index: {i}, element: {sequence[i]}')
    i += 1

# index: 0, element: 1
# index: 1, element: 2
# index: 2, element: 3
# index: 3, element: 4
```

## Reference
[Link](https://docs.python.org/3/reference/compound_stmts.html#while)
