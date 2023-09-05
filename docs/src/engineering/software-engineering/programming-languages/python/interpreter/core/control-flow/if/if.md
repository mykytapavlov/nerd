# If

## Summary
* if
* elif
* else

## Example
```py

x = 1

# If Statement
if x > 0:
    print(f'{x} > 0')
elif x == 0:
    print(f'{x} = 0')
else:
    print(f'{x} < 0')

# Conditional (Ternary) Expression
y = x if x > 0 else -1  # 1

# Gotchas
# Use 4 spaces, not tabulation. 
# (Modern IDEs are replacing tabs with the spaces automatically)
```

## Table

| Expression   |        Example        |
|--------------|:---------------------:|
| Conditional  | x if condition else y |

## Reference
[Link](https://docs.python.org/3/tutorial/controlflow.html#if-statements)
