# Linux Basic Commands

This guide contains beginner-friendly Linux commands with examples.
Use it as your Day 1 Linux practice sheet.

## Day 1 Learning Goals

- Understand how to move between folders
- Create, rename, copy, and delete files
- Read file content in terminal
- Check basic system information

## Navigation

- `pwd` - Show current directory path
- `ls` - List files and folders
- `ls -la` - List all files (including hidden) with details
- `cd folder_name` - Enter a folder
- `cd ..` - Move to parent folder
- `cd ~` - Go to home directory
- `clear` - Clear terminal screen

Example:

```bash
pwd
ls -la
cd Documents
cd ..
```

## File and Directory Operations

- `mkdir my_folder` - Create a directory
- `touch notes.txt` - Create an empty file
- `cp file1.txt file2.txt` - Copy file
- `mv old.txt new.txt` - Move or rename file
- `rm file.txt` - Delete file
- `rm -r my_folder` - Delete folder recursively
- `rmdir empty_folder` - Delete empty folder

## Viewing and Searching

- `cat file.txt` - Show file content
- `less file.txt` - Read file page by page
- `head file.txt` - Show first 10 lines
- `tail file.txt` - Show last 10 lines
- `find . -name "*.txt"` - Find text files
- `grep "word" file.txt` - Search word inside file

## System Info

- `whoami` - Show current user
- `uname -a` - Show system information
- `df -h` - Show disk usage
- `free -h` - Show memory usage
- `top` - Show running processes

## Help

- `man command_name` - Open manual
- `command_name --help` - Quick help

## Common Mistakes (Beginners)

- Using `rm -r` without checking folder name first
- Forgetting spaces in commands (example: `cd..` is wrong, `cd ..` is correct)
- Running commands in wrong folder (always check with `pwd`)

## Practice Tasks (Day 1)

Try these in order:

1. Create a folder `practice_linux`
2. Enter it and create `day1.txt`
3. Write text using: `echo "Linux Day 1" > day1.txt`
4. View file content with `cat day1.txt`
5. Copy it to `backup.txt`
6. List files with `ls -la`

When done, delete practice folder:

```bash
cd ..
rm -r practice_linux
```
