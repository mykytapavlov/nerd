# Closure

## Summary
A function that uses a free variable (a variable used in a code block but not defined there) is called a closure.

## Example
```python
def f1(x):
    def closure_function():
        print(x)  # x is a free variable
    # closure_function object stores the reference to x
    return closure_function


def f2(x):
    def not_closure_function(x=x):
        print(x)  # x is an argument
    return not_closure_function

```

## Reference
[Link](http://mathamy.com/python-closures-and-free-variables.html)
