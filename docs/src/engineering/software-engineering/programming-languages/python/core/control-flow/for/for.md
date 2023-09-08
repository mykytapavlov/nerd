# For

## Summary
* For

## Example

### Loop over symbols in string
```py
# For Statement
for letter in 'word':
    print(letter)
# w
# o
# r
# d

for idx, letter in enumerate('word'):
    print(f'idx: {idx}, letter: {letter}')
# idx: 0, letter: w
# idx: 1, letter: o
# idx: 2, letter: r
# idx: 3, letter: d
```

### Iterate in range()
```py
for i in range(4):
    print(i)
# 0
# 1
# 2
# 3

for i in range(0, 4, 2):
    print(i)
# 0
# 2
```

### Loop over list elemnts
```py
for i in [0, 1, 2, 3]:
    print(i)
# 0
# 1
# 2
# 3
```

### Loop over list elemnts in reversed order
```py
for i in reversed([0, 1, 2, 3]):
    print(i)
# 3
# 2
# 1
# 0
```

## Reference
[Link](https://docs.python.org/3/tutorial/controlflow.html#for-statements)
