# 📄 Building without root access

There are situations where root access is not given, however, do not worry,
there are 3 options to choose from:

* Use `--fakeroot`.
* Use proot.
* Use Singularity Container Services.

## Using fakeroot

A *fake root* user has almost the same administrative rights as root but only
inside the container and the requested namespaces.

All files or directories created by the *fake root* user are owned by root:root
inside the container, and user:group outside of the container. Let’s consider
the following example, in this case “user” is authorized to use the fakeroot
feature and can use 65536 UIDs starting at 131072 (same thing for GIDs).

Restrictions are also applied to networking, if singularity is executed without
the `--net` flag, the *fake root* user won’t be able to use ping or bind a
container service to a port below 1024.

The `--fakeroot` option is only available with the following commands:

* `shell`
* `exec`
* `run`
* `instance start`
* `build`

Let's build the SIF image from the previous Lab 3:

```bash
$ singularity build --fakeroot lab3-fakeroot.sif lab3.def
INFO:    Starting build...
Getting image source signatures
Copying blob d694b5ae8c79 done  
Copying blob 9f32a84ed3da done  
Copying blob f56be85fc22e done  
Copying blob 85791d961cd3 done  
Copying config 4fa22900b5 done  
Writing manifest to image destination
Storing signatures
2023/03/29 21:51:35  info unpack layer: sha256:f56be85fc22e46face[...]bdaa09
2023/03/29 21:51:36  info unpack layer: sha256:85791d961cd3578144[...]7a7907
2023/03/29 21:51:36  info unpack layer: sha256:d694b5ae8c79da8739[...]45cbc6
2023/03/29 21:51:38  info unpack layer: sha256:9f32a84ed3dadb94b3[...]ddf893
INFO:    Running post scriptlet
+ apk add git
fetch https://dl-cdn.alpinelinux.org/alpine/v3.17/main/x86_64/APKINDEX.tar.gz
fetch https://dl-cdn.alpinelinux.org/alpine/v3.17/community/x86_64/APKINDEX.tar.gz
(1/6) Installing brotli-libs (1.0.9-r9)
(2/6) Installing nghttp2-libs (1.51.0-r0)
(3/6) Installing libcurl (7.88.1-r1)
(4/6) Installing libexpat (2.5.0-r0)
(5/6) Installing pcre2 (10.42-r0)
(6/6) Installing git (2.38.4-r1)
Executing busybox-1.35.0-r29.trigger
OK: 16 MiB in 22 packages
+ git clone https://github.com/golang/example
Cloning into 'example'...
remote: Enumerating objects: 204, done.
remote: Counting objects: 100% (40/40), done.
remote: Compressing objects: 100% (25/25), done.
remote: Total 204 (delta 22), reused 15 (delta 15), pack-reused 164
Receiving objects: 100% (204/204), 109.16 KiB | 792.00 KiB/s, done.
Resolving deltas: 100% (93/93), done.
+ cd example/hello
+ go build
Getting image source signatures
Copying blob f56be85fc22e skipped: already exists  
Copying config 4798f93a2c done  
Writing manifest to image destination
Storing signatures
2023/03/29 21:51:46  info unpack layer: sha256:f56be85fc22[...]7f64b87abdaa09
INFO:    Copying /example/hello/hello to /bin/hello
INFO:    Creating SIF file...
INFO:    Build complete: lab3-fakeroot.sif
```

As you can see, the build is completed without having to rely on root or
administrative access. However take into consideration this feature is only
available for operating systems with linux kernel version 3.18 and newer, if
your kernel is older, then your next option is to use proot.

## Using proot

SingularityCE 3.11 introduces the ability to run some definition file builds
without `--fakeroot` or sudo. This is useful on systems where you cannot sudo, and
the administrator cannot perform the configurations necessary for `--fakeroot`
support.

Unprivileged proot builds are automatically performed when proot is available on
the system and singularity build is run by a non-root user against a definition
file, so no flags need to be passed on to the singularity command.

Installing proot is out of the scope of this tutorial. It is important to remark
that this method comes with its limitations because administrative user (root)
emulation is not complete, so let’s evaluate the definition file first and
determine if it is worth using this method.

* Do not support arch / debootstrap / yum / zypper bootstraps. Use localimage,
library, oras, or one of the docker/oci sources.
* Do not support `%pre` and `%setup` sections of definition files.
* Run the `%post` sections of a build in the container as an emulated root user.
* Run the `%test` section of a build as the non-root user, like singularity
test.
* Are subject to any restrictions imposed in singularity.conf.
* Incur a performance penalty due to the `ptrace`-based interception of
syscalls used by proot.
* May fail if the `%post` script requires privileged operations that proot
cannot emulate.

If your system have proot installed, you might get an output similar to this:

```bash
$ singularity build lolcow.sif lolcow.def
INFO:    Using proot to build unprivileged. Not all builds are supported.
If build fails, use --remote or --fakeroot.
INFO:    Starting build...
```

````{note}
SingularityCE automatically calls proot for you and performs the build. To know
if `proot` is installed, it is typically installed in a directory listed in the
$PATH environment variable, issuing `which proot` command will let you know if
it is installed.
````
