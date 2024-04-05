FROM ubuntu:latest
LABEL authors="clash"

ENTRYPOINT ["top", "-b"]