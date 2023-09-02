# Class

## Summary
* `class`

## Example
### Create class
```py
class Person:
    pass

```

### Create instance
```py
class Person:
    pass

p = Person()  # instance of the class `Person`
print(type(p))  # <class '__main__.Person'>

p.age = 30
print(p.age)  # 30

```

### Method `__init__`
```py
class Person:
    def __init__(self, age):
        self.age = age


p = Person()  # TypeError: __init__() missing 1 required positional argument: 'age'

p = Person(age=30)
print(p.age)  # 30

print(p.name)  # AttributeError: 'Person' object has no attribute 'name'

```

### Instance method
```py
class Person:
    def __init__(self, age, name):
        self.age = age
        self.name = name
    
    def say(self, word):  # instance method
        print(f'{self.name}: {word}')


p = Person(30, 'Nick')
p.say('Hi!')
# Nick: Hi!

```

### Inheritance
```py
class Person:
    def __init__(self, age, name):
        self.age = age
        self.name = name
    
    def say(self, word):
        print(f'{self.name}: {word}')


class Ukrainian(Person):
    def __init__(self, age, name):
        super().__init__(age, name)
        self.home = 'Ukraine'
    
    def say(self, word):
        print(f'{self.name} (from {self.home}): {word}')


nick = Person(30, 'Nick')
nick.say('Hi!')
# Nick: Hi!
print(nick.home)  # AttributeError: 'Person' object has no attribute 'home'

vasyl = Ukrainian(25, 'Vasyl')
vasyl.say('Dobriy vechir, everybody!')
# Vasyl (from Ukraine): Dobriy vechir, everybody!
print(vasyl.home)  # Ukraine

```

### `@property`
```py
class Person:
    def __init__(self):
        self._age = None
        self._name = None

    def say(self, word):
        print(f'{self.name}: {word}')

    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, age):
        if isinstance(age, int):
            self._age = age
        else:
            raise ValueError(f'Incorrect type for age: {age}. Expected: <class \'int\'>, got: {type(age)}')

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, name):
        self._name = name.capitalize()


kyle = Person()
kyle.age = 31
kyle.name = 'kyle'
print(f'{kyle.name}: {kyle.age} year(s) old')  # Kyle: 31 year(s) old

mike = Person()
mike.age = '25'  # ValueError: Incorrect type for age: 25. Expected: <class 'int'>, got: <class 'str'>

```

## Reference
[Link](https://docs.python.org/3/tutorial/classes.html)
