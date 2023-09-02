# Frozenset

## Summary
* Constructor: frozenset()
* Contains only hashable objects
* Immutable, hashable data type (unlike `set`)

## Example
### Create frozenset
```py
frozen_s = frozenset([1, 2, 3])
frozen_s.add(4)  # AttributeError: 'frozenset' object has no attribute 'add'

s = set()
s.add(frozen_s)
s.add(frozen_s)  # {frozenset({1, 2, 3})}
```

## Reference
[Link](https://docs.python.org/3/library/stdtypes.html#frozenset)
