# Numeric

## Summary
* Integer
* Float
* Complex
* Underscore

## Example
```py
a = 0  # int, implemented as "long" integer
a = int()  # 0
a = int(1)  # 1
a = int("1")  # 1
a = int(1.0)  # 1
a = int(1.1)  # 1
a = int("1.0")  # ValueError: invalid literal for int() with base 10: '1.0'

b = 0.0  # float
b = float()  # 0.0
b = float("1.0")  # 1.0
b = float("inf")  # inf, but type is float
b = float("-inf")  # -inf

c = 0j  # complex
c = complex()  # 0j

d = 100_000_000  # underscore

# Gotchas
e = 2 + 2.0  # 4.0
f = 2 / 2  # 1.0

g = 2 ** 200  # 1606938044258990275541962092341162602522202993782792835301376
h = 2.0 ** 2  # 4.0
i = 2.0 ** 2.0  # 4.0
j = 2 ** 2.0  # 4.0
k = 2 ** 2  # 4
l = 2.0 ** 200  # 1.6069380442589903e+60, float
m = 2.0 ** 2000  # OverflowError: (34, 'Result too large')
n = 2 ** 2000 # 114813069527425452423283320117768198402231770208869520047764...

o = 0.1 + 0.2  # 0.30000000000000004
o = .1 + .2  # 0.30000000000000004

# from decimal import Decimal 
# p = Decimal(0.1) + Decimal(0.2)  # Decimal('0.3000000000000000166533453694')
```

## Table

| Operation |    Example    |   Result|
|-----------|:-------------:|--------:|
| +         |     2 + 2     |       4 |
| -         |     2 - 2     |       0 |
| ==        |     2 == 2    |    True |
| !=        |     2 != 2    |   False |
| >=        |     2 >= 2    |    True |
| <         |     2 < 2     |   False |
| /         |     2 / 2     |     1.0 |
| *         |     2 * 2     |       4 |
| **        |     2 ** 2    |       4 |
| //        |     2 // 2    |       1 |
| %         |     2 % 2     |       0 |


## Reference
[Numeric Types](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex)
