# 📄 Introduction to SingularityCE

SingularityCE is a container platform focused on the user needs of the HPC, big
data, and supercomputing markets. It allows you to create and run containers
that package up pieces of software in a way that is portable and reproducible.
You can build a container using SingularityCE on your laptop, and then run it on
many of the largest HPC clusters in the world, local university or company
clusters, a single server, in the cloud, or on a workstation down the hall.
Your container is a single file, and you don’t have to worry about how to
install all the software you need on each different operating system.
SingularityCE is also rootless, reducing the risk of privilege escalation and
unauthorized access in supercomputing and commercial environments.  


SingularityCE container technology is an effective way to package applications
and easily distribute runtime environments on any Linux OS. It  is focused on
the user needs of the HPCmarket, big data, and supercomputing. Unlike other
container technologies that allow containers to run with root privileges,
SingularityCE is rootless, reducing the risk of privilege escalation and
unauthorized access in supercomputing and commercial environments. 

[Read more](https://docs.sylabs.io/guides/3.11/user-guide/introduction.html)
about why containers are needed and SingularityCE containers and their
use cases on our documentation site. 

## What is the difference between containers with virtual machines?

Containers are a technology that runs applications inside isolated environments.
They provide several benefits over traditional virtual machines (VMs), such as
faster deployment times and reproducibility. Containers also allow developers to
build and deploy software without worrying about underlying infrastructure or
operating system details.

* Although it’s possible to install a pre-built virtual machine with all its
dependencies, containers are lighter and more portable; containers are typically
somewhere between 10 MB and a few GB, while a virtual machine image size is
bigger.
* Users can quickly modify and iterate containers.
* SingularityCE users have access to a public repository of premade containers
along with the option to publish new images for other developers and consumers.


Developers can use SingularityCE to build and test their code before deploying
it to a supercomputer. Singularity containers also offer several advantages over
traditional VMs, reduced resource consumption, and faster deployment times.

```{figure} /images/introduction-image1.png
---
name: introduction-image1
---
Common architectures implemented in real world scenarios, including bare metal,
virtualized, containerized, and containerized on virtual machines.
```

## What is the difference between SingularityCE with Docker containers?

Many container runtimes exist, with Docker being a popular choice. However,
Docker didn’t quite fit the needs of scientists and researchers in HPC who
wanted to use it with batch schedulers. And while containerizing applications
was important, Docker did not meet HPC requirements for simplicity, security,
and repeatability. Singularity was developed to fill gaps in container
technology while also providing easier access to the underlying hardware on a
compute node.

[Read more](https://sylabs.io/2022/09/who-is-sylabs/) about the origins of SingularityCE and Sylabs. 

## The role of namespaces in container isolation and management

Partitioning of the Linux kernel resources allows for distinct sets of programs or processes to access separate resource pools, effectively granting isolation between them. This isolation capability is a fundamental feature of the Linux kernel.

```{figure} /images/introduction-image2.png
---
name: introduction-image2
---
Namespace resource partition and isolation.
```

Namespaces restrict resources in a manner that is transparent to the process,
program, or application is not aware of this limitation. When an application
runs, it remains unaware of its presence within a container, eliminating the
need for any modification of the source code.

Examples of resources that can be isolated include:

* Processes.
Namespaces provide each container with a unique set of IDs that are independent
from those in other namespaces.
* Network interfaces.
Each namespace can have its own private IP addresses, routing tables, and
firewall, enabling containers to communicate with the external world.
* Filesystem mounts.
Namespaces determine which filesystems are isolated from other containers,
ensuring data isolation.
* UTS Namespace.
Isolates kernel and version identifiers, allowing multiple containers to run
simultaneously, even if they are using different kernel versions.
