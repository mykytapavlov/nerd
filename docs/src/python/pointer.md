# Pointer

## Summary
* In Python `variable` defines a `named pointer` that `references` to some other `memory block` containing the `object` which has a `value` and other `methods` or `attributes`. Then `dir` can be used to see all of the `attributes` of that `object`.
* In Python `reference value` can be changed `dynamically` during `run time`. So it's called `dynamically-typed`.
* In C Variable defines a `named memory block`. `Reference` is `static` and evaluated `at compile time`. So it's called `static-typed`.

## Example
```c
int main() {
    int x = 1;
    printf("The memory address of a `x=%i` is: %p\n", x, (void*) &x); // The memory address of a `x=1` is: 0x7ffee20969c8
    x = 2.2;
    printf("Changing the value to `x=2.2`, but is still int `x=%i`\n", x); // Changing the value to `x=2.2`, but is still int `x=2`
    printf("The memory address of a `x=%i` is still: %p\n", x, (void*) &x); // The memory address of a `x=2` is still: 0x7ffee20969c8
    return 0;
}
```

```py
x = 1.1
print(id(x))  # 140320845714128
print(x.is_integer())  # False
print(isinstance(x, float))  # True
print(isinstance(x, int))  # False
print(x.__float__())  # 1.1
print(x.__int__())  # 1
print(x)  # 1.1
print(dir(x))  # ['__abs__', '__add__', '__bool__', '__class__', '__delattr__', '__dir__', '__divmod__' ...]

x = 1
print(id(x))  # 4448324240
print(isinstance(x, int))  # True
print(x.__int__())  # 1
print(x.__float__())  # 1.0
print(x)  # 1

try:
    x.is_integer()
except AttributeError as e:
    print(e)  # 'int' object has no attribute 'is_integer'
```

## Reference
[Link](https://jakevdp.github.io/WhirlwindTourOfPython/03-semantics-variables.html)
