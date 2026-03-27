# 📄 Building images

Now that we’ve seen some examples, we’re almost ready to set up a real instance.
Before doing so, however, we’ll quickly explore  definition files and how they
are used. A definition file consists of  a series  of instructions or commands
aimed at configuring the image for end users. This process includes setting up
environment variables and installing software.

The Singularity Workflow (development process) can be summarized in the
following steps:


1. Create a `sandbox` container.
2. Enter the container using the `--writable` option.
3. Perform necessary actions to get your software running including executing
commands, setting environment variables, and documenting them in a definition
file.
4. Build the container from the definition file and do a test-run. If any issues
arise, return to step 1.

The definition file (`def` for short) is divided into 2 parts, a **header** and **sections**.

* **Header**: Describes the core operating system to build within the container.
* **Sections**: These are group of commands to describe particular actions in
the final image. They can include setup, copy files, set environment variables,
download files, testing, and many more.

The following  is a simple definition file that will serve as a demo for this
tutorial. These are the contents of the `demo.def` file:

```bash
Bootstrap: library
From: ubuntu:22.04

%post
echo “Display any message during build!”
```

And here is the build command:

```bash
[josue@localhost ~]$ sudo singularity build demo.sif demo.def
INFO:    Starting build...
INFO:    Downloading library image
28.4MiB / 28.4MiB [=====================================] 100 % 3.4 MiB/s 0s
INFO:    Verifying bootstrap image /root/.singularity/cache/library/sha256.7a63c...98b
INFO:    Running post scriptlet
+ echo “Display any message during build!”
“Display any message during build!”
INFO:    Creating SIF file...
INFO:    Build complete: demo.sif
```

The resulting container image is named `demo.sif`.
