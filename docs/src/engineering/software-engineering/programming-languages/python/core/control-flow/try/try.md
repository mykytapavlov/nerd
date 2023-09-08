# Try

## Summary
* try
* except

## Example
```py
def sum_two(x, y):
    result = 'Default'
    try:
        result = x + y
    except TypeError:
        print('Wrong data type proveided as an argument')
    
    return result

result = sum_two(2, 2)  # 4

result = sum_two(2, '2')  # 'Default'
# Wrong data type proveided as an argument
```

### By default function returns `None`
```py
def sum_two(x, y):
    try:
        result = x + y
        return result
    except TypeError:
        print('Wrong data type proveided as an argument')


result = sum_two(2, '2')  # None
# Wrong data type proveided as an argument
```

## Reference
[Link]()
