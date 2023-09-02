# Set

## Summary
* Constructor: set()
* Contains only hashable objects
* Mutable, non-hashable data type

## Example
### Create set
```py
s = set()
s = set([1, 2, 3, 3, 3])  # {1, 2, 3}
s = set((1, 2, 3))
s = set('123')  # {'1', '3', '2'}
s = set(123)  # TypeError: 'int' object is not iterable

s = {1, 2, 3}  # set literal, works for non-empty.
print(type(s))  # <class 'set'>

s = {}  # dict
print(type(s))  # <class 'dict'>
```

### Update set
```py
s = {1, 2, 3}
s.add(4)
s.add(4)
print(s)  # {1, 2, 3, 4}
s.add((4, 5))  # {1, 2, 3, 4, (4, 5)}
s.add([6, 7])  # TypeError: unhashable type: 'list'
```

### Copy set
```py
s1 = {1, 2, 3}
s2 = s1
s1.add(4)
s1.add(4)
print(s1)  # {1, 2, 3, 4}
print(s2)  # {1, 2, 3, 4}

s3 = s1.copy()
s3.add(5)
print(s1)  # {1, 2, 3, 4}
print(s3)  # {1, 2, 3, 4, 5}
```

### Union sets
```py
s1 = {1, 2, 3}
s2 = {3, 4, 5}
s1.difference(s2)  # {1, 2}
s2.difference(s1)  # {4, 5}
s1.intersection(s2)  # {3}
s1.union(s2)  # {1, 2, 3, 4, 5}
```

### Check if something in set
```py
s = {1, 2, 3}
is_contain_one = 1 in s  # True, fast operation
```

## Reference
[Link](https://docs.python.org/3/library/stdtypes.html#set)
