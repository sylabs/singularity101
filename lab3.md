# 📓 Lab 3: Multi-Stage Build

Multi-Stage builds are useful when one stage is used for compilation and the
resulting binary is then copied to a lightweight, final environment. This
approach allows for a more streamlined image that doesn’t include any of the
development stack components.

To achieve this,  modify the definition file by adding the `Stage` keyword to
the header section, let’s create a lab3.def file as shown below:

```bash
$ vi lab3.def
```

Copy and paste the contents of this file into the terminal:

```bash
Bootstrap: docker
From: golang:1.20.2-alpine
Stage: compiler

%post
  apk add git
  git clone https://github.com/golang/example
  cd example/hello
  go build

Bootstrap: docker
From: alpine:3.17
Stage: final

%files from compiler
  example/hello/hello /bin/hello
```

```bash
$ sudo singularity build lab3.sif lab3.def

INFO:    Starting build...
2023/03/29 21:05:06  info unpack layer: sha256:f56be85fc22e[...]9d7f64b87abdaa09
2023/03/29 21:05:06  info unpack layer: sha256:85791d961cd3[...]eb0f2de9127a7907
2023/03/29 21:05:06  info unpack layer: sha256:d694b5ae8c79[...]7a7c117c8545cbc6
2023/03/29 21:05:08  info unpack layer: sha256:9f32a84ed3da[...]0f3e9311a7ddf893
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
Receiving objects: 100% (204/204), 109.16 KiB | 689.00 KiB/s, done.
Resolving deltas: 100% (93/93), done.
+ cd example/hello
+ go build
2023/03/29 21:05:16  info unpack layer: sha256:f56be85f5add[...]29d7f6487abdaa09
INFO:    Copying /example/hello/hello to /bin/hello
INFO:    Creating SIF file...
INFO:    Build complete: lab3.sif
```

```bash
$ singularity exec lab3.sif hello
Hello, world!
```

The names of the stages are up to you, and each of the sections will be executed
in the defined order. Note how in the following example if you rearrange the
order of the above stages, the “final” stage cannot get the files from the
“compiler” stage because they do not exist.

Let’s create a file named lab3-wrong.def and then build it as shown below:

```bash
$ vi lab3-wrong.def
```

```
Bootstrap: docker
From: alpine:3.17
Stage: final

%files from compiler
  /root/hello /bin/hello

Bootstrap: docker
From: golang:1.20.2-alpine
Stage: compiler

%post
  git clone https://github.com/golang/example
  cd example/hello
  go build
```

```bash
$ sudo singularity build lab3-wrong.sif lab3-wrong.def 

INFO:    Starting build...
2023/03/29 21:38:40  info unpack layer: sha256:f56be85fc22[...]b87abdaa09
INFO:    Copying /root/hello to /bin/hello
FATAL:   While performing build: unable to copy files from stage to container fs: no source files found matching: /root/hello
```

The “final” stage does not find the compiled program from the “compiler” stage
because it doesn’t exist yet.
