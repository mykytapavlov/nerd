# Boolean

## Summary
* True
* False
* None
* Immutable, hashable data type


## Example

### Conditional operations
```py
print(x)  # NameError: name 'x' is not defined

# First condition (3 < 1) evaluated only, because it's already False
print(3 < 1 < x)  # False

print(3 > 1 < x)  # NameError: name 'x' is not defined

print(1 or x)  # 1
```

### Object identity
* `is` checks if it is the same object in memory (same id(obj))
* Common usage to check if something is None

```py
y = None
print(y is None)  # True
print(id(y))  # 4304342832
print(id(None))  # 4304342832
```

### Example of python internals memory optimization
```py
x = 1
print(id(x))  # 140573982988592
y = 1
print(id(y))  # 140573982988592

print(x is 1)  # True, but it's not pythonic
print(x == 1)  # True, pythonic

print(x is y)  # True, optimization to create single memory cell for comonly used small number.
# Same optimization applied for True, False & None, small strings

x = 1000
print(id(x))  # 140573985899760
y = 1000
print(id(y))  # 140573985899920
print(x is y)  # False


x = 'a' * 1000
print(id(x))  # 140573986198528
y = 'a' * 1000
print(id(y))  # 140573986198528
print(x is y)  # True

x = 'a' * 100000
print(id(x))  # 140574003187712
y = 'a' * 100000
print(id(y))  # 140574003290112
print(x is y)  # False
```

### Gotchas
```py

class A:
    pass

print(bool(A))  # True

a = A()
print(bool(a))  # True
```

## Table

| True       | False      |
|------------|------------|
| True       | False      |
| object     | None       |
| 1          | 0          |
| .1         | .0         |
| '   '      | ''         |
| 1 < 2      | 1 > 2      |
| not False  | not True   |
| 1 is 1     | 1 is not 1 |

## Reference
[Link](https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not)
