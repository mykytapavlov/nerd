# Metaclass

## Summary
Metaclass is a class whose instances are classes. 
<class 'type'> is a metaclass.
Class itself is an object.

You want to control creation of the classes in entire program, you have an options:
1. redefine __new__ in parent class
2. create custom metaclass
3. define __init_subclass__ (>= python 3.6, PEP 487) in a parent class
4. create an abstract class
5. override __build_class__ in entry point (invokes at "class definition time" for all classes)

When instance is created:
1. __call__() method of instance's parent class is called (invoked) (by default parent class is type)
2. __call__() invokes __new__() and __init__()

Note: type.\__new__ = custom_function will raise an error:
TypeError: can't set attributes of built-in/extension type 'type'

## Example
```python
# >>> object.__mro__
# (<class 'object'>,)
# >>> type.__mro__
# (<class 'type'>, <class 'object'>)
# type(int).__mro__
# (<class 'type'>, <class 'object'>)

# note that instance of a class is an object, but not a class object itself:
# >>> type(1).__mro__
# (<class 'int'>, <class 'object'>)

# >>> type(type)
# <class 'type'>

# >>> type(object)
# <class 'type'>

# >>> type(int)
# <class 'type'>

# >>> type(1)
# <class 'int'>

# Option 1. Redefining __new__:
class A:
    def __new__(cls, *args, **kwargs):
        # instance = object.__new__(cls) will work (since the same in this case), but:
        # instance = type.__new__(cls) won't work (TypeError: type.__new__(A): A is not a subtype of type)
        instance = super().__new__(cls)  # object.__new__() takes exactly one argument (the type to instantiate)
        instance.x = kwargs.get('y')
        print(f"__new__ of {id(instance)} is called")
        # instance will be passed to __init__ as self
        # if returns None, __init__ wan't be invoked at all
        return instance
    
    def __init__(self, y):
        print(f"__init__ of {id(self)} is called")
        self.y = y

# every instance of an A will have x=1 field
# Note: __new__ is called only once instance creation is called
a = A(y=1)
# __new__ of 140507785380384 is called
# __init__ of 140507785380384 is called
print(a.x)  # 1
print(a.y)  # 1


class B:
    def __new__(cls):
        pass
    
    def __init__(self, y):
        print(y)

b = B()
print(b)  # None


# Option 2. Metaclass example:
class Meta(type):
    def __new__(cls, name, bases, attrs):
        # __new__ of a metaclass is called at "class definition time", not at "instance creation time"
        # e.g. class A(metaclass=Meta): ...
        # __bases__ contains a list of all the base classes that the given class inherits
        instance = super().__new__(cls, name, bases, attrs)  # type.__new__() takes exactly 3 arguments
        print(f"__new__ of {id(instance)} is called")
        print(f"name: {name}")
        print(f"bases: {bases}")
        print(f"attrs: {attrs}")
        return instance


class A(metaclass=Meta):  # "class definition time"
    def __init__(self, y):
        print(f"__init__ of {id(self)} is called")
        self.y = y

# Since __new__ of a metaclass is called at "class definition time", not at "instance creation time"
# you'll see it right away:
# >>> __new__ of 140507757045152 is called
# >>> name: A
# >>> bases: ()
# >>> attrs: {'__module__': '__main__', '__qualname__': 'A', '__init__': <function A.__init__ at 0x7fca84a3f3a0>}

# "instance creation time"
a = A(y=2)  # __init__ of 140507785444704 is called
a.__class__  # <class '__main__.A'>
a.__class__.__bases__  # (<class 'object'>,)


# Option 3. Another option (and maybe better, PEP 487) is to use __init_subclass__
# which is called at "class definition time" as well

class A:
    def __init_subclass__(cls, x, *args, **kwargs):
        super().__init_subclass__(**kwargs)
        cls.x = x
        print(f"Called __init_subclass__ of ({cls}, {cls.x})")


class B(A, x=1):
    pass

# >>> Called __init_subclass__ of (<class '__main__.B'>, 1)
b = B()
print(b.x)  #  1


# Option 4. Create an abstact class and force subclasse to implement an interface of an abstact class
from abc import ABC, abstractmethod


class Localization(ABC):
    @abstractmethod
    def localize(self, s: str):
        pass


# Option 5. Override __build_class__ in entry point (bad idea, but may work if you can't change classes)
base_build_class = __build_class__  # invokes on each class build
def customized_build_class(fun, name, base=None,  **kwargs):  # so every class build can be castomized
    # you can do checks on "base" (some class) 
    if base is not None:
        return base_build_class(fun, name, base, **kwargs)
    return base_build_class(fun, name, **kwargs)

import builtins
builtins.__build_class__ = customized_build_class

```

## Reference
[Link](https://youtu.be/cKPlPJyQrt4?t=1272)
