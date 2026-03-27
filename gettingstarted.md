# 📄 Getting Started

## Tutorial Requirements and Tools

For this tutorial, you will need an up-to-date major Linux distribution with
namespaces. Recommended versions include:

* Debian (DEB) based:
    * Debian 10 or later
    * Ubuntu 20.04 or later
* Red Hat Package Manager (RPM) based:
    * Redhat 8 or later
    * Fedora 32 or later
* openSUSE Leap 12 or later
* x86_64 or ARM64 
* git
* curl or wget


To complete the tutorial you will also need to have some command line experience in bash.

If you are already running a Red Hat based operating system, such as AlmaLinux, CentOS, Oracle Linux, or Rocky Linux, you can access SingularityCE through EPEL.  Use the following commands to quickly install it:

```bash
$ sudo dnf install epel-release
$ sudo dnf update
$ sudo dnf install singularity-ce
```

If your operating system is Debian based, please follow the [SingularityCE installation guide](https://docs.sylabs.io/guides/latest/admin-guide/installation.html#install-from-provided-rpm-deb-packages).

Once you’ve installed SingularityCE, you can issue the following command to run
a container:

```bash
$ singularity run library://library/tutorial101/wttr:latest
```

Here is an example output for the above command.

```{figure} /images/quickstart-image1.png
---
name: quickstart-image1
---
Example of singularity run.
```
