# Docker Install Python

## Instructions

In the Bash script, write a program that creates a file named Dockerfile. The contents of the Dockerfile should have the following commands:

First, the base image should install python3 via the FROM command. Then the rest of the Dockerfile should look like the following:
```
RUN pip install {{MODULES}}
CMD ["python", {{FILENAME}}]
```

{{MODULES}} should be replaced with the modules: numpy, scipy, and pandas all on one line. 

{{FILENAME}} should be replaced with ./main.py

Then your bash script should print the SHA1 hash of the contents of Dockerfile so that the output looks something like: 

HASH_OUTPUT Dockerfile

