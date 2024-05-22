# 📄 The Singularity Workflow
The definition file is the outcome of the Sandbox workflow. It is helpful for
testing commands and making notes, with the testing taking place in the sandbox
environment.

To begin, let’s choose a base operating system image and create a sandbox.


```bash
sudo singularity build --sandbox sandbox/ docker://ubuntu:22.04
```

The previous command creates a directory called “sandbox” where all changes to
the base image will eventually be saved in a SIF file.

```bash
sudo singularity shell --writable sandbox/
```

Now you can test your commands, install packages, fine tune configuration and
make notes in your definition file.

## Components of a definition file

A definition file is similar to the following, although some of the header and
sections are optional.

```bash
Bootstrap: library
From: ubuntu:22.04

%files
    /file1
    /file1 /opt

%environment
    export LISTEN_PORT=12345
    export LC_ALL=C

%post
    apt-get update && apt-get install -y netcat
    NOW=`date`
    echo "export NOW=\"${NOW}\"" >> $SINGULARITY_ENVIRONMENT

%runscript
    echo "Container was created $NOW"
    echo "Arguments received: $*"
    exec echo "$@"

%startscript
    nc -lp $LISTEN_PORT

%test
    grep -q NAME=\"Ubuntu\" /etc/os-release
    if [ $? -eq 0 ]; then
        echo "Container base is Ubuntu as expected."
    else
        echo "Container base is not Ubuntu."
        exit 1
    fi

%labels
    Author d@sylabs.io
    Version v0.0.1

%help
    This is a demo container used to illustrate a def file that uses all
    supported sections.
```

The `Bootstrap` serves as a source, protocol, or format of the base image. You
have  many options to choose from, including the Singularity Container Library
(library), Docker Hub, OCI Registry as Storage (ORAS), yum, localimage,
debootstrap, Open Container Initiative (OCI), BusyBox, and others.

The `From` keyword depends on the bootstrap value, in this case, when using the
library, the From keyword becomes valid and is used to specify the name and tag
of the base OS.

The `%files` section enables you to copy files into the container. This is
useful when a program is compiled and you want to move around the recently built
program to a second stage container.

The `%environment` section enables you to define environment variables that will
be set at runtime. These variables are not available during build time.

The `%post` section is where you can download files from the internet with tools
like `git` and `wget`, install new software, write configuration files, create
directories inside the container.

The `%runscript` section contains commands that are written to a file inside the
container that is executed when the container image is run with
`singularity run`.

The `%startscript` is similar to `%runscript` section, with the difference being
that the commands in `%startscript` are executed when the command
`singularity instance start` is issued.

The `%test` section contains commands that are issued at the end of the build
process. It usually contains validation commands of your choice, it is also
executed when using the `singularity test` command.

The `%labels` section is used to add metadata to the file
`/.singularity.d/labels.json`, the labels are defined by key-value pairs and can
be displayed while executing the `singularity inspect` command.

The text in the `%help` section is transferred to a metadata file inside the
container. It can be displayed using the `singularity run-help` command.

For more information, please see our official
[definition file](https://docs.sylabs.io/guides/latest/user-guide/definition_files.html)
documentation.