---
layout: post
title: Bytecode
---

# Bytecode

## Summary
* Code object: Contains everything that Python needs to execute a function (object.__code__)
* Bytes object: Bytes representation of an object (object.__code__.co_code)
* Bytecode .pyc file (stored in __pycache__ folder as *.pyc files), can be executed directly by python command (already compiled)

## Example
```py
# 1. Code object
def foo():
    return 'bar'
# >>> foo.__code__
# <code object foo at 0x106475d40, file "<stdin>", line 1>

def foo(bar='bar'):
    local_bar = 'local_bar'
    return bar + local_bar
# >>> foo.__code__.co_varnames
# ('bar', 'local_bar')

# 2. Bytes object
def foo():
    return 'bar'
# >>> foo.__code__.co_code
# b'd\x01S\x00'
# >>> ord('d')  # gets byte character value
# 100

# >>> import dis
# >>> dis.opname[100]  # readable instruction
# 'LOAD_CONST'
# >>> dis.dis(foo)
# 1           0 LOAD_CONST               1 ('bar')
#             2 RETURN_VALUE
# where 1 represents a line numer in foo

# 3. Bytecode
import py_compile
py_compile.compile('file.py')

# .pyc file can be used similar to .py
# >>> python file.pyc

# (to uncompile, use uncompyle6 from pip)
```

## Reference
[Link](https://towardsdatascience.com/understanding-python-bytecode-e7edaae8734d)
