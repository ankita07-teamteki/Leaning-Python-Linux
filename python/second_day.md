# Python Commands - Second Day

This guide continues from Day 1 and introduces important Python concepts and commands.

## Day 2 Learning Goals

- Work with input and output
- Understand lists, dictionaries, and loops
- Learn basic error handling
- Use Python modules and package commands

## Run Python in Different Ways

- `python script.py` - Run a Python file
- `python -i script.py` - Run file and stay in interactive mode
- `python -m http.server 8000` - Start simple local server
- `python -m pip list` - Run pip through Python

## Input and Output Example

```python
name = input("Enter your name: ")
print("Welcome,", name)
```

## Useful Data Structures

```python
# List
numbers = [10, 20, 30]
print(numbers[0])

# Dictionary
student = {"name": "Ankita", "age": 21}
print(student["name"])
```

## Loops and Conditions

```python
for i in range(1, 6):
    if i % 2 == 0:
        print(i, "is even")
    else:
        print(i, "is odd")
```

## Functions and Errors

```python
def divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Cannot divide by zero"

print(divide(10, 2))
print(divide(10, 0))
```

## Module and Package Commands

- `pip install package_name` - Install package
- `pip uninstall package_name` - Remove package
- `pip show package_name` - Show package details
- `pip freeze > requirements.txt` - Save current dependencies
- `python -m pip install -r requirements.txt` - Install from requirements file

## Common Errors and Fixes (Day 2)

- `IndentationError` -> Check spaces/tabs alignment
- `ModuleNotFoundError` -> Install missing package with pip
- `NameError` -> Variable not defined before use
- `SyntaxError` -> Check missing `:` or brackets

## Practice Tasks (Day 2)

1. Create `day2.py`
2. Ask user name using `input()`
3. Print even numbers from 1 to 10
4. Create one dictionary and print one value
5. Write one function with `try/except`
6. Run script using `python day2.py`
