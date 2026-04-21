# Python - Day 3: Regular Expressions (Regex)




## Day 3 Learning Goals

- Understand how Regex works (core concept)
- Learn character classes, quantifiers, and anchors
- Master groups, alternation, and lookaheads
- Apply Regex in real-world scenarios (validation)

---

## 1. How Regex Works (Core Idea)

A regex pattern tries to match a string from start to end based on rules.

**Example:** `^[a-z]+$`

| Symbol | Meaning |
|--------|---------|
| `^` | Start of string |
| `[a-z]+` | One or more lowercase letters |
| `$` | End of string |

- ✔ Matches: `hello`
- ❌ Not match: `hello123`

---

## 2. Character Classes (Very Important)

### Basic Classes

| Pattern | Meaning |
|---------|---------|
| `[abc]` | a or b or c |
| `[a-z]` | lowercase letters |
| `[A-Z]` | uppercase letters |
| `[0-9]` | digits |

### Predefined Classes

| Pattern | Meaning |
|---------|---------|
| `\d` | digit (0–9) |
| `\D` | NOT digit |
| `\w` | word (a-z, A-Z, 0-9, _) |
| `\W` | NOT word |
| `\s` | whitespace |
| `\S` | NOT whitespace |

---

## 3. Quantifiers (How many times?)

| Pattern | Meaning |
|---------|---------|
| `*` | 0 or more |
| `+` | 1 or more |
| `?` | 0 or 1 |
| `{3}` | exactly 3 |
| `{2,5}` | between 2 and 5 |

**Example:** `\d{10}` ✔ Matches: `1234567890`

---

## 4. Anchors (Position control)

| Pattern | Meaning |
|---------|---------|
| `^` | start |
| `$` | end |

**Example:** `^\d+$` ✔ Only digits allowed (full string)

---

## 5. Groups & Alternation

### Grouping
- `(ab)+` ✔ Matches: `ab`, `abab`

### OR condition
- `cat|dog` ✔ Matches: `cat` or `dog`

---

## 6. Lookaheads (Advanced & Powerful)

### Positive Lookahead
- `(?=.*[A-Z])` ✔ Ensures at least one uppercase letter

### Example: Strong Password
```
^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$
```
✔ Must contain:
- lowercase
- uppercase
- number
- special char
- min 8 length

---

## 7. Escaping Special Characters

Special characters: `. ^ $ * + ? ( ) [ ] { } | \`

To match them literally: `\. \$ \*`

---

## 8. Real-World Useful Patterns

### Username (only letters + numbers, 3–15 chars)
```
^[a-zA-Z0-9]{3,15}$
```

### Email (practical version)
```
^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$
```

### URL
```
^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-]*)*$
```

### Date (DD-MM-YYYY)
```
^\d{2}-\d{2}-\d{4}$
```

### Remove Extra Spaces
```
\s{2,}
```

---

## 9. Greedy vs Lazy

### Greedy (default)
- `<.*>` Matches: `<div>hello</div>`

### Lazy
- `<.*?>` Matches: `<div>`

---

## 10. Python re Module Usage

### Test (match)
```python
import re
pattern = r'^[a-z]+$'
result = re.match(pattern, "hello")
print(bool(result))  # True
```

### Search
```python
text = "My number is 9876543210"
result = re.search(r'\d+', text)
print(result.group())  # 9876543210
```

### Find All
```python
text = "123 abc 456 def"
result = re.findall(r'\d+', text)
print(result)  # ['123', '456']
```

### Replace
```python
text = "Hello   World"
result = re.sub(r'\s+', " ", text)
print(result)  # Hello World
```

### Split
```python
text = "apple,banana,cherry"
result = re.split(r',', text)
print(result)  # ['apple', 'banana', 'cherry']
```

---

## 11. Common Mistakes

| Mistake | Problem |
|---------|---------|
| Missing `^` and `$` | Partial match happens |
| Forget escaping `\` in strings | Use `\\d` inside Python strings |
| Overcomplicated regex | Keep it simple if possible |

---

## 12. Pro Tips

- Use tools like **regex101.com** to test
- Start simple → then add conditions
- Don't try to memorize everything
- Focus on patterns you actually use

---

## Practice Exercises

1. Write a regex to validate a 10-digit phone number (Indian format starting with 6-9)
2. Create a pattern to validate email addresses
3. Build a strong password validator (min 8 chars, uppercase, lowercase, digit, special char)
4. Write a pattern to match URLs (http/https optional)
5. Use Python `re` module to extract all numbers from a text string
6. Replace multiple spaces with a single space in a string
7. Validate a date format (DD-MM-YYYY)

---

## Additional Resources

- **regex101.com** - Online regex tester
- **Python re module docs** - Official documentation
- **Angular Validators** - Use `Validators.pattern()` for form validation