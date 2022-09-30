# Boolean

## Summary
* True
* False
* None


## Example
```py
# Conditional operations
# >>> x
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# NameError: name 'x' is not defined

# >>> 3 < 1 < x
# False

# >>> 3 > 1 < x
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# NameError: name 'x' is not defined

# >>> 1 or x
# 1

# Object identity
# >>> 1 is 1
# <stdin>:1: SyntaxWarning: "is" with a literal. Did you mean "=="?
# True

# >>> x = 1
# >>> x is x
# True

# >>> y = 1
# >>> x is y
# True

# >>> a = 2
# >>> x is a
# False

# Gotchas
# >>> class A:
# ...     pass
# ... 
# >>> bool(A)
# True
# >>> a = A()
# >>> bool(a)
# True
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