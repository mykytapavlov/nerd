# Entropy

## Summary
* `Entropy` mesures how data (or sub-group) is clean, so should be low for the clean one.
* `Information Gain (IG)` mesures how column is infomative (correlates with target column) in data, so should be hight for informative one.
* `IG` highlights columns in data to be kept / dropped.
* Sub-groups can be created with different range. `IG` can help to determine better range to use.

## Example

## Table

i  | Age          | Salary        |     Credit    |
---|--------------|---------------|:-------------:|
1  | 23           | 1000          |      yes      |
2  | 26           | 1200          |      yes      |
3  | 31           | 1500          |      yes      |
4  | 34           | 1500          |      yes      |
5  | 36           | 2000          |      yes      |
6  | 37           | 4000          |      no       |
7  | 42           | 1500          |      no       |
8  | 43           | 2500          |      yes      |
9  | 45           | 3800          |      yes      |
10 | 53           | 2000          |      no       |
11 | 55           | 1000          |      no       |
12 | 56           | 3000          |      no       |
13 | 58           | 2400          |      no       |
14 | 59           | 800           |      no       |
15 | 60           | 1000          |      no       |

```py
total = 15
yes = 7
no = 8

# p - probability
p1 = round(yes / total, 3)
p2 = round(no / total, 3)

BASE = 2  # constant
entropy = round(- (p1 * log(p1, BASE) + p2 * log(p2, BASE)), 3)  # initial

# p1: 0.467 | p2: 0.533 | entropy: 0.997
```

### [Case 1] Feature: Age (split by)

#### Group 1: `Age[20-39]`

i  | Age          | Salary        |     Credit    |
---|--------------|---------------|:-------------:|
1  | 23           | 1000          |      yes      |
2  | 26           | 1200          |      yes      |
3  | 31           | 1500          |      yes      |
4  | 34           | 1500          |      yes      |
5  | 36           | 2000          |      yes      |
6  | 37           | 4000          |      no       |

```py
total = 6
yes = 5
no = 1

# p - probability
p1 = round(yes / total, 3)
p2 = round(no / total, 3)

BASE = 2  # constant
entropy1 = round(- (p1 * log(p1, BASE) + p2 * log(p2, BASE)), 3)  # group 1

# p1: 0.833 | p2: 0.167 | entropy1: 0.651
```

#### Group 2: `Age[40-60]`

i  | Age          | Salary        |     Credit    |
---|--------------|---------------|:-------------:|
7  | 42           | 1500          |      no       |
8  | 43           | 2500          |      yes      |
9  | 45           | 3800          |      yes      |
10 | 53           | 2000          |      no       |
11 | 55           | 1000          |      no       |
12 | 56           | 3000          |      no       |
13 | 58           | 2400          |      no       |
14 | 59           | 800           |      no       |
15 | 60           | 1000          |      no       |

```py
total = 9
yes = 2
no = 7

p1 = round(yes / total, 3)
p2 = round(no / total, 3)

BASE = 2  # constant
entropy2 = round(- (p1 * log(p1, BASE) + p2 * log(p2, BASE)), 3)  # group 2

# p1: 0.222 | p2: 0.778 | entropy2: 0.764
```

#### IG (Information Gain): Age (split by)

```py
# IG = entropy(initial) - (p1(group 1) * entropy(group 1) + p2(group 2) * entropy(group 2) + ...)
p1 = round(6 / 15, 3) = 0.4  # total in group 1 / total initial
p2 = round(9 / 15, 3) = 0.6  # total in group 2 / total initial

IG =  entropy - (p1 * entropy1 + p2 * entropy2) = 0.997 - (0.4 * 0.651 + 0.6 * 0.764) = 0.2782
```

### [Case 2] Feature: Salary (split by)

#### Group 1: `Salary[0, 1499]`

i  | Age          | Salary        |     Credit    |
---|--------------|---------------|:-------------:|
1  | 23           | 1000          |      yes      |
2  | 26           | 1200          |      yes      |
11 | 55           | 1000          |      no       |
14 | 59           | 800           |      no       |
15 | 60           | 1000          |      no       |

```py
total = 5
yes = 2
no = 3

# p - probability
p1 = round(yes / total, 3)
p2 = round(no / total, 3)

BASE = 2  # constant
entropy1 = round(- (p1 * log(p1, BASE) + p2 * log(p2, BASE)), 3)  # group 1

# p1: 0.4 | p2: 0.6 | entropy1: 0.971
```

#### Group 2: `Salary[1500, 2499]`

i  | Age          | Salary        |     Credit    |
---|--------------|---------------|:-------------:|
3  | 31           | 1500          |      yes      |
4  | 34           | 1500          |      yes      |
5  | 36           | 2000          |      yes      |
7  | 42           | 1500          |      no       |
10 | 53           | 2000          |      no       |
13 | 58           | 2400          |      no       |

```py
total = 6
yes = 3
no = 3

# p - probability
p1 = round(yes / total, 3)
p2 = round(no / total, 3)

BASE = 2  # constant
entropy2 = round(- (p1 * log(p1, BASE) + p2 * log(p2, BASE)), 3)  # group 2

# p1: 0.5 | p2: 0.5 | entropy2: 1.0
```

#### Group 3: `Salary[2500-inf]`

i  | Age          | Salary        |     Credit    |
---|--------------|---------------|:-------------:|
6  | 37           | 4000          |      no       |
8  | 43           | 2500          |      yes      |
9  | 45           | 3800          |      yes      |
12 | 56           | 3000          |      no       |

```py
total = 4
yes = 2
no = 2

# p - probability
p1 = round(yes / total, 3)
p2 = round(no / total, 3)

BASE = 2  # constant
entropy3 = round(- (p1 * log(p1, BASE) + p2 * log(p2, BASE)), 3)  # group 3

# p1: 0.5 | p2: 0.5 | entropy3: 1.0
```

#### IG (Information Gain): Salary (split by)

```py
# IG = entropy(initial) - (p1(group 1) * entropy(group 1) + p2(group 2) * entropy(group 2) + ...)
p1 = round(5 / 15, 3) = 0.4  # total in group 1 / total initial
p2 = round(6 / 15, 3) = 0.6  # total in group 2 / total initial
p3 = round(4 / 15, 3) = 0.6  # total in group 3 / total initial

IG =  entropy - (p1 * entropy1 + p2 * entropy2 + p3 * entropy3) = 0.997 - (0.333 * 0.971 + 0.4 * 1.0 + 0.267 * 1.0) = 0.007
```

## Reference
[Link]()
