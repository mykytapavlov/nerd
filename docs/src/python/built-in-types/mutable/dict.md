# Dict

## Summary
* Literal: {}
* Constructor: dict()
* Mutable, non-hashable data type
* Keys must be hashable (immutable)

## Example
### Create dict
```py
my_dict = {}  # dict literal
my_dict = {'one': 1, 'two': 2, 'three': 3}

my_dict = dict()  # dict constructor
my_dict = dict(one=1, two=2, three=3)
same_dict = my_dict
new_dict = dict(my_dict)
my_dict_copy = my_dict.copy()  # shallow copy
print(id(my_dict))  # 140574003089152
print(id(same_dict))  # 140574003089152
print(id(new_dict))  # 140574003015808
print(id(my_dict_copy))  # 140573985238016

from copy import deepcopy
x = {1: 1, 2: 2, 3: [1, 2, 3]}
y = x.copy()
y[3].append(4)
print(x)  # {1: 1, 2: 2, 3: [1, 2, 3, 4]}
print(y)  # {1: 1, 2: 2, 3: [1, 2, 3, 4]}
x_deep_copy = deepcopy(x)
x_deep_copy[3].append(5)
print(x_deep_copy)  # {1: 1, 2: 2, 3: [1, 2, 3, 4, 5]}
print(x)  # {1: 1, 2: 2, 3: [1, 2, 3, 4]}
print(y)  # {1: 1, 2: 2, 3: [1, 2, 3, 4]}
```

### Extend dict by another dict
```py
my_dict_1 = {'one': 1, 'two': 2, 'three': 3}
my_dict_2 = {'four': 4, 'five': 6, 'six': 6}
my_dict_1.update(my_dict_2)
print(my_dict_1)  # {'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 6, 'six': 6}

my_dict_1 = {'x': 1, 'y': 2, 'z': 3}
my_dict_2 = {'x': 2, 'y': 4, 'z': 6}
my_dict_1.update(my_dict_2)
print(my_dict_1)  # {'x': 2, 'y': 4, 'z': 6}
```

### Access by key
```py
my_dict = {'one': 1, 'two': 2, 'three': 3}
my_dict['four'] = 4  # O(1), fast access, cheap
print(my_dict)  # {'one': 1, 'two': 2, 'three': 3, 'four': 4}
print(my_dict['five'])  # KeyError: 'five'
my_dict[('five',)] = 5  # {'one': 1, 'two': 2, 'three': 3, 'four': 4, ('five',): 5}
my_dict[6] = 6  # {'one': 1, 'two': 2, 'three': 3, 'four': 4, ('five',): 5, 6: 6}
my_dict[['seven']] = 7  # TypeError: unhashable type: 'list'
```

### Check if something in dict
```py
d = {1: 'test'}
is_contain_one = 1 in d  # True, fast operation
one = d.get(1, 'Not found')  # 'test'
two = d.get(2, 'Not found')  # 'Not found'
two = d.get(2)  # None
```

### Dict Comprehension
```py
sequence = [("one", 1), ("two", 2), ("three", 3)]
my_dict = {key: value for (key, value) in sequence if value > 2}  # {'three': 3}
```

## Reference
[Link](https://docs.python.org/3/library/stdtypes.html#dict)
