# Python Commands for Beginners

This file is a simple guide to the most useful Python commands.

## Start Here (Quick Steps)

1. Check Python is installed:
   - `python --version`
2. Create a project environment:
   - `python -m venv venv`
3. Activate the environment:
   - Windows: `venv\Scripts\activate`
   - Linux/macOS: `source venv/bin/activate`
4. Install packages:
   - `pip install package_name`
5. Run your Python file:
   - `python script.py`
6. Exit environment after work:
   - `deactivate`

## Day 1 Learning Goals

- Run Python in terminal
- Create and run your first `.py` file
- Understand how to install packages
- Use virtual environment for project safety

## Python Runtime Commands

- `python --version` - Shows installed Python version
- `python` - Opens interactive Python shell (REPL)
- `python script.py` - Runs a Python file
- `python -m module_name` - Runs a module as a script
- `python -c "print('Hello')"` - Runs one line of Python code
- `exit()` - Exits the Python interactive shell

## pip Commands (Package Manager)

- `pip --version` - Shows pip version
- `pip install package_name` - Installs a package
- `pip uninstall package_name` - Uninstalls a package
- `pip list` - Shows installed packages
- `pip freeze > requirements.txt` - Saves package versions
- `pip install -r requirements.txt` - Installs from `requirements.txt`
- `pip show package_name` - Shows details of one installed package

## Virtual Environment Commands

- `python -m venv venv` - Creates a virtual environment folder named `venv`
- `venv\Scripts\activate` - Activates virtual environment on Windows
- `source venv/bin/activate` - Activates virtual environment on Linux/macOS
- `deactivate` - Exits virtual environment

## Simple Python Example

```python
print("Hello, Python!")

name = "Ankita"
age = 21

if age >= 18:
    print(name, "is an adult")
else:
    print(name, "is a minor")
```

## Create and Run Your First File

1. Create a file named `hello.py`
2. Add:

```python
print("Hello from my first Python file")
```

3. Run:

```bash
python hello.py
```

## Helpful Notes

- On some systems, use `python3` instead of `python`.
- On some systems, use `pip3` instead of `pip`.
- Always use a virtual environment for each project.
- Keep your project files and virtual environment in same folder.

## Common Errors and Fixes

- `python is not recognized` -> Install Python and re-open terminal.
- `pip is not recognized` -> Try `python -m pip --version`.
- Wrong package installed globally -> Activate virtual environment first.

## Practice Tasks (Day 1)

1. Check Python version
2. Create a virtual environment
3. Activate it
4. Install `requests` package
5. Run `pip list` to confirm install
6. Deactivate environment
