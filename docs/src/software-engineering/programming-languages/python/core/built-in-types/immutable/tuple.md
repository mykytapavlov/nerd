# Tuple

## Summary
* Literal: ()
* Constructor: tuple()
* Immutable, hashable data type

## Example
### Create tuple
```py
my_tuple = ()  # tuple literal
my_tuple = (1, 2, 3)
my_tuple = 1, 2, 3

my_tuple = tuple()  # tuple constructor
my_tuple = tuple([1, 2, 3])  # (1, 2, 3)
```

### Access by index
```py
coordinate = (1, 2, 3)
print(coordinate[0])  # 1
x, y, z = coordinate
print(f'x: {x}, y: {y}, z: {z}')  # x: 1, y: 2, z: 3
```

### Mutable objects inside tuple
```py
x = ([1, 2, 3], 4, 5)  # ([1, 2, 3], 4, 5)
x[0].append(['a'])  # ([1, 2, 3, ['a']], 4, 5)
x[1] = 'something'  # TypeError: 'tuple' object does not support item assignment
```

## Gotchas
```py
x = (1)  # 1
print(type(x))  # <class 'int'>
x = (1,)  # (1,)
print(type(x))  # <class 'tuple'>
```

## Reference
[Link](https://docs.python.org/3/library/stdtypes.html#tuple)
