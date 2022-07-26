# Decision tree

## Summary
* Find subgroups in data with the lowest [Entropy](/entropy)

## Table

* Target: Children

i  | Flat         | Car           |     Wife      |   Children    |
---|--------------|---------------|---------------|:-------------:|
1  | rent         | no            |      yes      |      no       |
2  | own          | yes           |      yes      |      yes      |
3  | own          | yes           |      no       |      no       |
4  | rent         | yes           |      no       |      no       |
5  | rent         | no            |      yes      |      no       |
6  | own          | no            |      yes      |      yes      |
7  | own          | yes           |      yes      |      yes      |
8  | own          | no            |      yes      |      yes      |
9  | rent         | yes           |      no       |      no       |
10 | rent         | yes           |      yes      |      no       |

### [Step 1] Feature: Flat (split by)

#### Group 1

i  | Flat         | Car           |     Wife      |   Children    |
---|--------------|---------------|---------------|:-------------:|
1  | rent         | no            |      yes      |      no       |
4  | rent         | yes           |      no       |      no       |
5  | rent         | no            |      yes      |      no       |
9  | rent         | yes           |      no       |      no       |
10 | rent         | yes           |      yes      |      yes      |

* Evaluate [Entropy](/entropy)

```py
from math import log

total = 5
p1 = round(1 / total, 3)  # children - yes
p2 = round(4 / total, 3)  # children - no
BASE = 2  # constant
entropy = round(- (p1 * log(p1, BASE) + p2 * log(p2, BASE)), 3)
# p1: 0.2, p2: 0.8, entropy: 0.722
```

#### Group 2

i  | Flat         | Car           |     Wife      |   Children    |
---|--------------|---------------|---------------|:-------------:|
2  | own          | yes           |      yes      |      yes      |
3  | own          | yes           |      no       |      no       |
6  | own          | no            |      yes      |      yes      |
7  | own          | yes           |      yes      |      yes      |
8  | own          | no            |      yes      |      yes      |

* Evaluate [Entropy](/entropy)

```py
from math import log

total = 5
p1 = round(4 / total, 3)  # children - yes
p2 = round(1 / total, 3)  # children - no
BASE = 2  # constant
entropy = round(- (p1 * log(p1, BASE) + p2 * log(p2, BASE)), 3)
# p1: 0.8, p2: 0.2, entropy: 0.722
```

* If [Entropy](/entropy) is low, repeat for each sub-group

### [Step 2] Feature: Car (split by) (For Group 1)

#### Group 1.1

i  | Flat         | Car           |     Wife      |   Children    |
---|--------------|---------------|---------------|:-------------:|
4  | rent         | yes           |      no       |      no       |
9  | rent         | yes           |      no       |      no       |
10 | rent         | yes           |      yes      |      yes      |

```py
# Evaluate probability of class
# target column: children
# target value: no
# p - probability
# n - no (2)
# m - yes (1)
# p = n / (n + m)

p = 2 / (2 + 1) = 2/3

# Laplace correction probability
# p_smoothed = (n + 1) / (n + m + 2)
p_smoothed = (2 + 1) / (2 + 1 + 2) = 3/5
```

#### Group 1.2

i  | Flat         | Car           |     Wife      |   Children    |
---|--------------|---------------|---------------|:-------------:|
1  | rent         | no            |      yes      |      no       |
5  | rent         | no            |      yes      |      no       |

```py
# Evaluate probability of class
# target column: children
# target value: no
# p - probability
# n - no (2)
# m - yes (0)
# p = n / (n + m)

p = 2 / (2 + 0) = 2/2

# Laplace correction probability
# p_smoothed = (n + 1) / (n + m + 2)
p_smoothed = 2 + 1 / 2 + 0 + 2 = 3/4
```

### [Step 3] Feature: Wife (split by) (For Group 2)

#### Group 2.1

i  | Flat         | Car           |     Wife      |   Children    |
---|--------------|---------------|---------------|:-------------:|
2  | own          | yes           |      yes      |      yes      |
6  | own          | no            |      yes      |      yes      |
8  | own          | no            |      yes      |      yes      |
7  | own          | yes           |      yes      |      yes      |

```py
# Evaluate probability of class
# target column: children
# target value: yes
# p - probability
# n - yes (4)
# m - no (0)
# p = n / (n + m)

p = 4 / (4 + 0) = 4/4

# Laplace correction probability
# p_smoothed = (n + 1) / (n + m + 2)
p_smoothed = 4 + 1 / 4 + 0 + 2 = 5/6
```

#### Group 2.2

i  | Flat         | Car           |     Wife      |   Children    |
---|--------------|---------------|---------------|:-------------:|
3  | own          | yes           |      no       |      no       |

```py
# Evaluate probability of class
# target column: children
# target value: no
# p - probability
# n - no (1)
# m - yes (0)
# p = n / (n + m)

p = 1 / (1 + 0) = 1/1

# Laplace correction probability
# p_smoothed = (n + 1) / (n + m + 2)
p_smoothed = 1 + 1 / 1 + 0 + 2 = 2/3
```

#### Decision Tree

```txt
Disision Tree:
                          *
            /                            \
      flat:rent                          flat:own
    /           \                       /         \
car:yes        car:no            wife:yes          wife:no   
   |              |                 |                 |
children:no(3/5) children:no(3/4)  children:yes(5/6) children:no(2/3)
```

## Reference
[Link]()
