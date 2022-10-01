# List

## Summary
* Literal: []
* Constructor: list()
* Mutable, Non-hashable data type

## Example

### Create list
```py
my_list = []  # list literal
my_list = [1, 2, 3]

my_list = list()  # list constructor
my_list = list([1, 2, 3])
```

### Common operations on list
```py
my_list = [1] * 3  # [1, 1, 1]
my_list.append(2)  # [1, 1, 1, 2]
my_list_length = len(seq)  # 4, operation complexity O(1) (fast, cheap)
last_element_of_my_list = my_list.pop()  # 2
print(my_list)  # [1, 1, 1]

# list may contain links to any type, even to itself
my_list.insert(1, 'a')  # [1, 'a', 1, 1], operation complexity O(n) (slow, expensive)
my_list.insert(2, [1, 2])  # [1, 'a', [1, 2], 1, 1]
my_list.(2, my_list)  # [1, 'a', [...], [1, 2], 1, 1], can store links on itself
print(my_list[2][1])  # 'a'
my_list.extend(['text', 'more text'])  # [1, 'a', [...], [1, 2], 1, 1, 'text', 'more text']

# list element access
print(my_list[0])  # 1, O(1)
print(my_list[-1])  # 'more text', O(1)

# list slice (creates new list)
sub_sequence = my_list[-2:] # ['text', 'more text']
my_list[-1] = 'new text'  # [1, 'a', [...], [1, 2], 1, 1, 'text', 'new text'], O(1)
print(sub_sequence)  # ['text', 'more text']

# delete element
sub_sequence.remove('more text')  # ['text']
del(sub_sequence[0])  # []
```

### List Mutability
```py
x = [1, 2, 3]
y = x

x.append(4)
print(x)  # [1, 2, 3, 4]
print(y)  # [1, 2, 3, 4]
print(x is y)  # True

x = [1, 2, 3]
y = x[:]  # creates shallow copy
x.append(4)
print(x)  # [1, 2, 3, 4]
print(y)  # [1, 2, 3]
print(x is y)  # False


x = [1, 2, 3, [4, 5]]
y = x[:]  # same as y = x.copy()

x[-1].append(6)
print(x)  # 1, 2, 3, [4, 5, 6]]
print(x is y)  # False
print(y)  # [1, 2, 3, [4, 5, 6]]
print(x == y)  # True
x[0] = 0
print(x)  # [0, 2, 3, [4, 5, 6]]
print(y)  # [1, 2, 3, [4, 5, 6]]

from copy import deepcopy
x_deep_copy = deepcopy(x)
print(x_deep_copy)  # [-1, 2, 3, [4, 5, 6]]
x[-1].append(7)
print(x)  # [-1, 2, 3, [4, 5, 6, 7]]
print(x_deep_copy)  # [-1, 2, 3, [4, 5, 6]]
```

### List Sorting
```py
# sorting applied to itself
x = [2, 4, 1, 3]
x.sort()
print(x)  # [1, 2, 3, 4]

# creates new list
x = [2, 4, 1, 3]
y = sorted(x)
print(x)  # [2, 4, 1, 3]
print(y)  # [1, 2, 3, 4]
```

### List Comprehension
```py
x = [1, 2, 3, 4]
y = [item for item in x if item > 2]  # [3, 4]
```

## Reference
[Link](https://docs.python.org/3/library/stdtypes.html#lists)
