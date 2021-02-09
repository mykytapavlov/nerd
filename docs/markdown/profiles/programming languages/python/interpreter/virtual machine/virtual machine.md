---
layout: post
title: Closure
---

# Virtual Machine

## Summary
Reads bytecode (stored in __pycache__ as *.pyc) line by line and uses Support Library (CPython)

CPython has a stack-oriented virtual machine.
* Each function called pushes a new entry - a frame - onto a call stack.
* When a function returns, its frame is popped off the stack.

## Reference
[Link](https://leanpub.com/insidethepythonvirtualmachine/read)
