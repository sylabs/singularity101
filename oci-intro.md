# 📄 OCI Mode and Interoperability

The Open Containers Initiative (OCI), is a project aimed at creating
open industry standards around container formats and runtime. The main
goal of OCI is to ensure that containers are portable across different
platforms and compatible with other container runtimes.

In SingularityCE 4.0, OCI mode was introduced to support these interoperability
standards, and in SingularityCE 4.1 it is now also possible to build images from Dockerfiles.

Here is how it works. When issuing run, shell, exec or pull commands, with 
the `--oci` flag, SingularityCE internals will switch to a low-level OCI
runtime, depending on the operating system host, SingularityCE will
automatically choose either `crun` or `runc`. This means that the native 
runtime will not be used to ensure compatibility.

## OCI-SIF

An OCI image is a standard and platform independent representation of a
containerized application. It is supported by many container runtimes, such as
Docker, containerd, podman and now SingularityCE 4.0.

An OCI image, internally, typically contains:
 * A root filesystem containing an application and its dependencies.
 * Metadata describing details like the container entry point, environment
   variables, network configuration and other parameters.

When a container is pulled from a registry in OCI mode `--oci`, the resulting
image is encapsulated in a OCI-SIF file. This image format supports the same features
as the well known SIF format.

To see, the difference between OCI-SIF and SIF Format, take a look at the
following example:

Run the following command, and ensure you have SingularityCE 4.1 or greater. 

```bash
[josue@localhost ~]$ singularity version 4.1.2-1.el9
singularity-ce version 4.1.2-1.el9
```

Next, pull an image from Docker hub registry, for example, Ubuntu.

```bash
[josue@localhost ~]$ singularity pull docker://ubuntu
INFO:    Converting OCI blobs to SIF format
INFO:    Starting build...
INFO:    Fetching OCI image...
28.2MiB / 28.2MiB [=======================================] 100 % 5.7 MiB/s 0s
INFO:    Extracting OCI image...
INFO:    Inserting Singularity configuration...
INFO:    Creating SIF file...
[josue@localhost ~]$ singularity sif list ubuntu_latest.sif 
------------------------------------------------------------------------------
ID   |GROUP   |LINK    |SIF POSITION (start-end)  |TYPE
------------------------------------------------------------------------------
1    |1       |NONE    |32176-32208               |Def.FILE
2    |1       |NONE    |32208-35176               |JSON.Generic
3    |1       |NONE    |35176-35454               |JSON.Generic
4    |1       |NONE    |36864-29814784            |FS (Squashfs/*System/amd64)

```

As expected, the original SIF structure includes a definition file and some metadata.

Then, pull the same image in OCI mode.

```bash
[josue@localhost ~]$ singularity pull --oci docker://ubuntu
28.2MiB / 28.2MiB [=======================================] 100 % 6.1 MiB/s 0s
INFO:    Converting OCI image to OCI-SIF format
INFO:    Squashing image to single layer
INFO:    Writing OCI-SIF image
INFO:    Cleaning up.
[josue@localhost ~]$ singularity sif list ubuntu_latest.oci.sif 
------------------------------------------------------------------------------
ID   |GROUP   |LINK    |SIF POSITION (start-end)  |TYPE
------------------------------------------------------------------------------
1    |1       |NONE    |32176-29797808            |OCI.Blob
2    |1       |NONE    |29797808-29798616         |OCI.Blob
3    |1       |NONE    |29798616-29799025         |OCI.Blob
4    |1       |NONE    |29799025-29799265         |OCI.RootIndex
```

The OCI-SIF format contains 3 Blob entries:
 * The container root filesystem.
 * The image configuration.
 * The image manifest.

The RootIndex is not meant for the enduser, it indexes the content of the image.

## Running OCI Containers

To `run` or `exec` an OCI container, add the `--oci` flag to a `run` or `exec` command.

```bash
[josue@localhost ~]$ singularity run --oci ubuntu_latest.oci.sif 
josue@localhost:~$ cat /etc/lsb-release 
DISTRIB_ID=Ubuntu
DISTRIB_RELEASE=22.04
DISTRIB_CODENAME=jammy
DISTRIB_DESCRIPTION="Ubuntu 22.04.4 LTS"
josue@localhost:~$ exit
```

Or even better, run the following command, and specify an URI directly.

```bash
[josue@localhost ~]$ singularity exec --oci docker://ubuntu cat /etc/lsb-release
28.2MiB / 28.2MiB [=======================================] 100 % 6.1 MiB/s 0s
INFO:    Converting OCI image to OCI-SIF format
INFO:    Squashing image to single layer
INFO:    Writing OCI-SIF image
INFO:    Cleaning up.
DISTRIB_ID=Ubuntu
DISTRIB_RELEASE=22.04
DISTRIB_CODENAME=jammy
DISTRIB_DESCRIPTION="Ubuntu 22.04.4 LTS"
```

````{note}
When running OCI containers, Singularity honors the Dockerfile `USER` config.
````

## Authentication with OCI registries

Sometimes, the registry from where the images are pulled, might require an user
and a password, or a token. To authenticate with a `$USER`, issue the
following command:

```bash
[josue@localhost ~]$ singularity registry login --username $USER docker://docker.com
Password / Token:
INFO:    Token stored in /home/myuser/.singularity/docker-config.json
```

Confirm your credentials are saved:
```bash
[josue@localhost ~]$ singularity registry list
URI                  SECURE?
docker://docker.com  ✓
```

Further Singularity commands will attempt to use the login credentials stored in
the `docker-config.json` file.

## Buliding from Dockerfiles

With SingularityCE 4.1, an OCI-SIF image can be built from a Dockerfile and can be run
using singularity OCI mode.

Let's create a Dockerfile with a similar functionality from Lab 2.1, at this point you
should know how to create a file in linux, add the following content to a file named
`Dockerfile`

```
FROM almalinux:9
RUN dnf install -y epel-release
RUN dnf install -y figlet
ENTRYPOINT ["/usr/bin/figlet"]
```

Then build the Dockerfile using the build command.
```bash
[josue@localhost ~]$ singularity build --oci ./lab2-v2.oci.sif ./Dockerfile
INFO:    Did not find usable system buildkitd daemon. Starting built-in singularity-buildkitd.
INFO:    singularity-buildkitd: running server on /run/user/1000/singularity-buildkitd/singularity-buildkitd-86060.sock
[+] Building 35.9s (6/7)                                                                                 
[+] Building 36.0s (7/7) FINISHED                                                                                                 
 => [internal] load build definition from Dockerfile                                                                         0.0s
 => => transferring dockerfile: 202B                                                                                         0.0s
 => [internal] load metadata for docker.io/library/almalinux:9                                                               1.1s
 => [internal] load .dockerignore                                                                                            0.0s
 => => transferring context: 2B                                                                                              0.0s
 => [1/3] FROM docker.io/library/almalinux:9@sha256:3f0cc7f99b0739908a8d6e4adec3790fec747                                    7.1s
 => => resolve docker.io/library/almalinux:9@sha256:3f0cc7f99b0739908a8d6e4adec3790fec747                                    0.0s
 => => sha256:3a148d62534a64a4eb34966ff90ee4f5c097d2da3e3560059875fca9d7e9916a 68.20MB / 68.20MB                             5.9s
 => => extracting sha256:3a148d62534a64a4eb34966ff90ee4f5c097d2da3e3560059875fca9d7e9916a                                    1.2s
 => [2/3] RUN dnf install -y epel-release                                                                                    7.8s 
 => [3/3] RUN dnf install -y figlet                                                                                         17.1s 
 => exporting to docker image format                                                                                         2.7s 
 => => exporting layers                                                                                                      2.2s 
 => => exporting manifest sha256:359767739435b9fae17755983f0e9d6bac094270be0eed185237dc2fdde37c9e                            0.0s 
 => => exporting config sha256:221561c07d7dc92443b6e4f69c77bb9ec46bb228bef54ad920dddce57ea25a87                              0.0s 
 => => sending tarball                                                                                                       0.5s 
INFO:    Converting OCI image to OCI-SIF format
INFO:    Squashing image to single layer
INFO:    Writing OCI-SIF image
INFO:    Cleaning up.
INFO:    Terminating singularity-buildkitd (PID 86092)
INFO:    Build complete: ./lab2-v2.oci.sif
```

Try running the resulting container with OCI mode.

```bash
[josue@localhost ~]$ singularity run --oci ./lab2-v2.oci.sif "This is SingularityCE"
 _____ _     _       _     
|_   _| |__ (_)___  (_)___ 
  | | | '_ \| / __| | / __|
  | | | | | | \__ \ | \__ \
  |_| |_| |_|_|___/ |_|___/
                           
 ____  _                   _            _ _          ____ _____ 
/ ___|(_)_ __   __ _ _   _| | __ _ _ __(_) |_ _   _ / ___| ____|
\___ \| | '_ \ / _` | | | | |/ _` | '__| | __| | | | |   |  _|  
 ___) | | | | | (_| | |_| | | (_| | |  | | |_| |_| | |___| |___ 
|____/|_|_| |_|\__, |\__,_|_|\__,_|_|  |_|\__|\__, |\____|_____|
               |___/                          |___/             
```
