#!/bin/bash

dockerfile_content="FROM python:3
RUN pip install numpy scipy pandas
CMD [\"python\", \"./main.py\"]"

echo "$dockerfile_content" > Dockerfile

hash_output=$(sha1sum Dockerfile | awk '{print $1}')
echo "$hash_output Dockerfile"