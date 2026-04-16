# Linux Commands - Second Day

This guide continues from Day 1 and introduces useful Linux commands for daily work.

## Day 2 Learning Goals

- Understand file permissions
- Learn command piping and redirection
- Work with archives (`zip`, `tar`)
- Monitor and manage processes

## Permissions Basics

- `ls -l` - Show file permissions in long format
- `chmod 644 file.txt` - Change file permission
- `chmod +x script.sh` - Make script executable
- `chown user:group file.txt` - Change owner and group

Example:

```bash
ls -l
chmod +x run.sh
./run.sh
```

## Redirection and Pipes

- `echo "hello" > file.txt` - Write text to file (overwrite)
- `echo "next line" >> file.txt` - Add text to file (append)
- `cat file.txt | wc -l` - Count lines in file
- `ls | sort` - Sort listed files
- `history | tail` - Show recent commands

## Archive and Compress

- `zip -r files.zip my_folder` - Create zip archive
- `unzip files.zip` - Extract zip file
- `tar -cvf backup.tar my_folder` - Create tar file
- `tar -xvf backup.tar` - Extract tar file
- `tar -czvf backup.tar.gz my_folder` - Create compressed tar.gz

## Process Management

- `ps` - Show current shell processes
- `ps aux` - Show all running processes
- `top` - Live process monitor
- `kill PID` - Stop process by ID
- `kill -9 PID` - Force stop process (careful)

## Networking Basics

- `ip a` - Show network interfaces
- `ping google.com` - Check network connectivity
- `curl https://example.com` - Fetch webpage content
- `wget URL` - Download file from URL

## Common Mistakes (Day 2)

- Using `chmod 777` everywhere (unsafe)
- Force killing wrong process ID
- Overwriting files by mistake with `>`

## Practice Tasks (Day 2)

1. Create `day2_linux` folder
2. Create `notes.txt` and append 3 lines
3. Count lines using `wc -l`
4. Create `backup.tar.gz` of folder
5. List running processes with `ps aux`
6. Remove the practice folder after testing
