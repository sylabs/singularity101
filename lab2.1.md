# 📓 Lab 2.1: Running Containers

Let’s run your first Singularity container:

```bash
$ singularity run library://josue-sylabs/demo/wttr:latest
```

Next, let’s build a very simple image. We will create a file and name it
lab2.def.  Simply add the following text.

````{note}
This tutorial assumes that you are familiar with the vi editor. However,
this is not a mandatory requisite, feel free to substitute your preferred editor
instead.
`````

```bash
$ vi lab2.def
...
```

Then enter the following content:

```bash
bootstrap: docker
from: almalinux:9
%post
cat /etc/os-release
```

Finally type `:wq!` to exit the editor and save changes and proceed to build the
image. The compiled image will be named `lab2.sif`:

```bash
$ sudo singularity build lab2.sif lab2.def
...
```

Now, let’s suppose we want to create a more realistic image. Lets copy some
files and install some software:

Here we create a very simple text file, backup the `lab2.def` file into a file
named `lab2-v2.def` and modify the contents.

```bash
$ echo "This is a test file." > testfile

$ vi lab2-v2.def

```

Add the following lines (feel free to copy and paste):

```bash
bootstrap: docker
from: almalinux:9

%files
    testfile

%post
    dnf install -y epel-release
    dnf install -y figlet

%runscript
    figlet < testfile
```

Type `:wq!` to exit the editor and save changes. At this point, the SIF image
of this new container includes a new file and a new software, with AlmaLinux 9
serving as the base operating system.

Give it a try, build it and then run it:

```bash
$ sudo singularity build lab2-v2.sif lab2-v2.def
INFO:    Starting build...
Getting image source signatures
Copying blob 7a76c6018191 done  
Copying config 55b00d9a17 done  
Writing manifest to image destination
Storing signatures
2023/03/29 17:28:05  info unpack layer: sha256:7a76c6018191c790...fc01370169c
INFO:    Copying testfile to 
INFO:    Running post scriptlet
+ dnf install -y epel-release
AlmaLinux 9 - AppStream                              1.5 MB/s | 8.9 MB     00:05    
AlmaLinux 9 - BaseOS                                 2.3 MB/s | 4.4 MB     00:01    
AlmaLinux 9 - Extras                                  23 kB/s |  17 kB     00:00    
Dependencies resolved.
=================================
 Package         Architecture     Version    Repository       Size
=================================
Installing:
 epel-release    noarch           9-2.el9    extras           17 k

Transaction Summary
=================================
Install  1 Package

Total download size: 17 k
Installed size: 23 k
Downloading Packages:
epel-release-9-2.el9.noarch.rpm                      146 kB/s |  17 kB     00:00    
----------------------------------                    31 kB/s |  17 kB     00:00     
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Preparing        :                                             1/1 
  Installing       : epel-release-9-2.el9.noarch                 1/1 
  Running scriptlet: epel-release-9-2.el9.noarch                 1/1 
  Verifying        : epel-release-9-2.el9.noarch                 1/1 

Installed:
  epel-release-9-2.el9.noarch                                                                                                                                                            

Complete!
+ dnf install -y figlet
Extra Packages for Enterprise Linux 9 - x86_64       5.0 MB/s |  15 MB     00:02    
Last metadata expiration check: 0:00:01 ago on Wed Mar 29 23:28:21 2023.
Dependencies resolved.
=================================
 Package         Architecture      Version    Repository    Size
=================================
Installing:
 figlet          x86_64            2.2.5      epel          124 k

Transaction Summary
=================================
Install  1 Package

Total download size: 124 k
Installed size: 665 k
Downloading Packages:
figlet-2.2.5-23.20151018gita565ae1.el9.x86_64.rpm    262 kB/s | 124 kB     00:00    
---------------------------------
Total                                                147 kB/s | 124 kB     00:00     
Extra Packages for Enterprise Linux 9 - x86_64       1.6 MB/s | 1.6 kB     00:00    
Importing GPG key 0x3228467C:
 Userid     : "Fedora (epel9) <epel@fedoraproject.org>"
 Fingerprint: FF8A D134 4597 106E CE81 3B91 8A38 72BF 3228 467C
 From       : /etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-9
Key imported successfully
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Preparing        :                                            1/1 
  Installing       : figlet-2.2.5                               1/1 
  Running scriptlet: figlet-2.2.5                               1/1 
  Verifying        : figlet-2.2.5                               1/1 

Installed:
  figlet-2.2.5-23.20151018gita565ae1.el9.x86_64                                                                                                                                          

Complete!
INFO:    Adding runscript
INFO:    Creating SIF file...
INFO:    Build complete: lab2-v2.sif
```

```
$ singularity run lab2-v2.sif
 _____ _     _       _               _            _      __ _ _        
|_   _| |__ (_)___  (_)___    __ _  | |_ ___  ___| |_   / _(_) | ___   
  | | | '_ \| / __| | / __|  / _` | | __/ _ \/ __| __| | |_| | |/ _ \  
  | | | | | | \__ \ | \__ \ | (_| | | ||  __/\__ \ |_  |  _| | |  __/_ 
  |_| |_| |_|_|___/ |_|___/  \__,_|  \__\___||___/\__| |_| |_|_|\___(_)
```

Go ahead and experiment with different file contents, or even different sofware,
try installing lolcat:

```bash
$ vi lab2-v3.def
```

Add the following lines (feel free to copy and paste):

```bash
bootstrap: docker
from: almalinux:9

%files
    testfile

%post
    dnf install -y epel-release
    dnf install -y figlet ruby wget unzip
    wget https://github.com/busyloop/lolcat/archive/master.zip
    unzip master.zip && cd lolcat-master/bin && gem install lolcat

%runscript
    figlet testfile | lolcat
```

Type `:wq!` to exit and save the changes, build, and run:

```bash
$ sudo singularity build lab2-v3.sif lab2-v3.def
INFO:    Starting build...
2023/03/29 17:37:08  info unpack layer: sha256:7a76c6018...eadfbba0bfc01370169c
INFO:    Copying testfile to 
INFO:    Running post scriptlet
+ dnf install -y epel-release
AlmaLinux 9 - AppStream                           1.5 MB/s | 8.9 MB     00:05    
AlmaLinux 9 - BaseOS                              4.2 MB/s | 4.4 MB     00:01    
AlmaLinux 9 - Extras                               30 kB/s |  17 kB     00:00    
Last metadata expiration check: 0:00:01 ago on Wed Mar 29 23:37:18 2023.
Dependencies resolved.
================================================================================
 Package              Architecture     Version           Repository        Size
================================================================================
Installing:
 epel-release          noarch           9-2.el9           extras            17 k

Transaction Summary
================================================================================
Install  1 Package

Total download size: 17 k
Installed size: 23 k
Downloading Packages:
epel-release-9-2.el9.noarch.rpm                   150 kB/s |  17 kB     00:00    
---------------------------------------------------------------------------------
Total                                              35 kB/s |  17 kB     00:00     
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Preparing        :                                                         1/1 
  Installing       : epel-release-9-2.el9.noarch                             1/1 
  Running scriptlet: epel-release-9-2.el9.noarch                             1/1 
  Verifying        : epel-release-9-2.el9.noarch                             1/1 

Installed:
  epel-release-9-2.el9.noarch                                                     

Complete!
+ dnf install -y figlet ruby wget unzip
Extra Packages for Enterprise Linux 9 - x86_64    719 kB/s |  15 MB     00:21    
Last metadata expiration check: 0:00:02 ago on Wed Mar 29 23:37:26 2023.
Dependencies resolved.
================================================================================
 Package                 Arch   Version                          Repo       Size
================================================================================
Installing:
 figlet                  x86_64 2.2.5-23.20151018gita565ae1.el9  epel      124 k
 ruby                    x86_64 3.0.4-160.el9_0                  appstream  41 k
 unzip                   x86_64 6.0-56.el9                       baseos    180 k
 wget                    x86_64 1.21.1-7.el9                     appstream 772 k
Installing dependencies:
 libpsl                  x86_64 0.21.1-5.el9                     baseos     63 k
 publicsuffix-list-dafsa noarch 20210518-3.el9                   baseos     57 k
 ruby-libs               x86_64 3.0.4-160.el9_0                  appstream 3.2 M
 rubygem-io-console      x86_64 0.5.7-160.el9_0                  appstream  25 k
 rubygem-json            x86_64 2.5.1-160.el9_0                  appstream  54 k
 rubygem-psych           x86_64 3.3.2-160.el9_0                  appstream  51 k
Installing weak dependencies:
 ruby-default-gems       noarch 3.0.4-160.el9_0                  appstream  32 k
 rubygem-bigdecimal      x86_64 3.0.0-160.el9_0                  appstream  54 k
 rubygem-bundler         noarch 2.2.33-160.el9_0                 appstream 372 k
 rubygem-rdoc            noarch 6.3.3-160.el9_0                  appstream 401 k
 rubygems                noarch 3.2.33-160.el9_0                 appstream 256 k

Transaction Summary
================================================================================
Install  15 Packages

Total download size: 5.6 M
Installed size: 20 M
Downloading Packages:
(1/15): ruby-default-gems-3.0.4-160.el9_0.noarch. 256 kB/s |  32 kB     00:00    
(2/15): ruby-3.0.4-160.el9_0.x86_64.rpm           237 kB/s |  41 kB     00:00    
(3/15): rubygem-bigdecimal-3.0.0-160.el9_0.x86_64 766 kB/s |  54 kB     00:00    
(4/15): rubygem-io-console-0.5.7-160.el9_0.x86_64 686 kB/s |  25 kB     00:00    
(5/15): rubygem-json-2.5.1-160.el9_0.x86_64.rpm   1.2 MB/s |  54 kB     00:00    
(6/15): rubygem-psych-3.3.2-160.el9_0.x86_64.rpm  1.1 MB/s |  51 kB     00:00    
(7/15): ruby-libs-3.0.4-160.el9_0.x86_64.rpm      5.4 MB/s | 3.2 MB     00:00    
(8/15): rubygem-rdoc-6.3.3-160.el9_0.noarch.rpm   1.4 MB/s | 401 kB     00:00    
(9/15): rubygems-3.2.33-160.el9_0.noarch.rpm      4.2 MB/s | 256 kB     00:00    
(10/15): libpsl-0.21.1-5.el9.x86_64.rpm           1.2 MB/s |  63 kB     00:00    
(11/15): publicsuffix-list-dafsa-20210518-3.el9.n 1.2 MB/s |  57 kB     00:00    
(12/15): unzip-6.0-56.el9.x86_64.rpm              2.9 MB/s | 180 kB     00:00    
(13/15): wget-1.21.1-7.el9.x86_64.rpm             3.5 MB/s | 772 kB     00:00    
(14/15): rubygem-bundler-2.2.33-160.el9_0.noarch. 481 kB/s | 372 kB     00:00    
(15/15): figlet-2.2.5-23.20151018gita565ae1.el9.x 317 kB/s | 124 kB     00:00    
--------------------------------------------------------------------------------
Total                                             324 kB/s | 5.6 MB     00:17     
Extra Packages for Enterprise Linux 9 - x86_64    1.6 MB/s | 1.6 kB     00:00    
Importing GPG key 0x3228467C:
 Userid     : "Fedora (epel9) <epel@fedoraproject.org>"
 Fingerprint: FF8A D134 4597 106E CE81 3B91 8A38 72BF 3228 467C
 From       : /etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-9
Key imported successfully
Running transaction check
Transaction check succeeded.
Running transaction test
Transaction test succeeded.
Running transaction
  Preparing        :                                                         1/1 
  Installing       : ruby-libs-3.0.4-160.el9_0.x86_64                       1/15 
  Installing       : rubygem-bigdecimal-3.0.0-160.el9_0.x86_64              2/15 
  Installing       : ruby-default-gems-3.0.4-160.el9_0.noarch               3/15 
  Installing       : rubygem-bundler-2.2.33-160.el9_0.noarch                4/15 
  Installing       : rubygem-io-console-0.5.7-160.el9_0.x86_64              5/15 
  Installing       : rubygem-json-2.5.1-160.el9_0.x86_64                    6/15 
  Installing       : rubygem-psych-3.3.2-160.el9_0.x86_64                   7/15 
  Installing       : rubygem-rdoc-6.3.3-160.el9_0.noarch                    8/15 
  Installing       : rubygems-3.2.33-160.el9_0.noarch                       9/15 
  Installing       : ruby-3.0.4-160.el9_0.x86_64                           10/15 
  Installing       : publicsuffix-list-dafsa-20210518-3.el9.noarch         11/15 
  Installing       : libpsl-0.21.1-5.el9.x86_64                            12/15 
  Installing       : wget-1.21.1-7.el9.x86_64                              13/15 
  Installing       : figlet-2.2.5-23.20151018gita565ae1.el9.x86_64         14/15 
  Installing       : unzip-6.0-56.el9.x86_64                               15/15 
  Running scriptlet: unzip-6.0-56.el9.x86_64                               15/15 
  Verifying        : ruby-3.0.4-160.el9_0.x86_64                            1/15 
  Verifying        : ruby-default-gems-3.0.4-160.el9_0.noarch               2/15 
  Verifying        : ruby-libs-3.0.4-160.el9_0.x86_64                       3/15 
  Verifying        : rubygem-bigdecimal-3.0.0-160.el9_0.x86_64              4/15 
  Verifying        : rubygem-bundler-2.2.33-160.el9_0.noarch                5/15 
  Verifying        : rubygem-io-console-0.5.7-160.el9_0.x86_64              6/15 
  Verifying        : rubygem-json-2.5.1-160.el9_0.x86_64                    7/15 
  Verifying        : rubygem-psych-3.3.2-160.el9_0.x86_64                   8/15 
  Verifying        : rubygem-rdoc-6.3.3-160.el9_0.noarch                    9/15 
  Verifying        : rubygems-3.2.33-160.el9_0.noarch                      10/15 
  Verifying        : wget-1.21.1-7.el9.x86_64                              11/15 
  Verifying        : libpsl-0.21.1-5.el9.x86_64                            12/15 
  Verifying        : publicsuffix-list-dafsa-20210518-3.el9.noarch         13/15 
  Verifying        : unzip-6.0-56.el9.x86_64                               14/15 
  Verifying        : figlet-2.2.5-23.20151018gita565ae1.el9.x86_64         15/15 

Installed:
  figlet-2.2.5-23.20151018gita565ae1.el9.x86_64                                   
  libpsl-0.21.1-5.el9.x86_64                                                      
  publicsuffix-list-dafsa-20210518-3.el9.noarch                                   
  ruby-3.0.4-160.el9_0.x86_64                                                     
  ruby-default-gems-3.0.4-160.el9_0.noarch                                        
  ruby-libs-3.0.4-160.el9_0.x86_64                                                
  rubygem-bigdecimal-3.0.0-160.el9_0.x86_64                                       
  rubygem-bundler-2.2.33-160.el9_0.noarch                                         
  rubygem-io-console-0.5.7-160.el9_0.x86_64                                       
  rubygem-json-2.5.1-160.el9_0.x86_64                                             
  rubygem-psych-3.3.2-160.el9_0.x86_64                                            
  rubygem-rdoc-6.3.3-160.el9_0.noarch                                             
  rubygems-3.2.33-160.el9_0.noarch                                                
  unzip-6.0-56.el9.x86_64                                                         
  wget-1.21.1-7.el9.x86_64                                                        

Complete!
+ wget https://github.com/busyloop/lolcat/archive/master.zip
--2023-03-29 23:38:03--  https://github.com/busyloop/lolcat/archive/master.zip
Resolving github.com (github.com)... 140.82.114.4
Connecting to github.com (github.com)|140.82.114.4|:443... connected.
HTTP request sent, awaiting response... 302 Found
Location: https://codeload.github.com/busyloop/lolcat/zip/refs/heads/master [following]
--2023-03-29 23:38:03--  https://codeload.github.com/busyloop/lolcat/zip/refs/heads/master
Resolving codeload.github.com (codeload.github.com)... 140.82.112.9
Connecting to codeload.github.com (codeload.github.com)|140.82.112.9|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: unspecified [application/zip]
Saving to: 'master.zip'

master.zip               [ <=>                 ] 118.31K   614KB/s    in 0.2s    

2023-03-29 23:38:04 (614 KB/s) - 'master.zip' saved [121154]

+ unzip master.zip
Archive:  master.zip
f4cca5601ea57df2b5b3c98feea8ad05f4421039
   creating: lolcat-master/
 extracting: lolcat-master/.gitignore  
  inflating: lolcat-master/Gemfile   
  inflating: lolcat-master/LICENSE   
  inflating: lolcat-master/README.md  
 extracting: lolcat-master/Rakefile  
   creating: lolcat-master/ass/
  inflating: lolcat-master/ass/nom.jpg  
  inflating: lolcat-master/ass/screenshot.png  
   creating: lolcat-master/bin/
  inflating: lolcat-master/bin/lolcat  
   creating: lolcat-master/lib/
  inflating: lolcat-master/lib/lolcat.rb  
   creating: lolcat-master/lib/lolcat/
  inflating: lolcat-master/lib/lolcat/cat.rb  
  inflating: lolcat-master/lib/lolcat/lol.rb  
 extracting: lolcat-master/lib/lolcat/version.rb  
  inflating: lolcat-master/lolcat.gemspec  
   creating: lolcat-master/man/
  inflating: lolcat-master/man/lolcat.6  
+ cd lolcat-master/bin
+ gem install lolcat
Fetching paint-2.3.0.gem
Successfully installed paint-2.3.0
Fetching optimist-3.0.1.gem
Successfully installed optimist-3.0.1
Fetching manpages-0.6.1.gem
Successfully installed manpages-0.6.1
Fetching lolcat-100.0.1.gem
Successfully installed lolcat-100.0.1
Parsing documentation for paint-2.3.0
Installing ri documentation for paint-2.3.0
Parsing documentation for optimist-3.0.1
Installing ri documentation for optimist-3.0.1
Parsing documentation for manpages-0.6.1
Installing ri documentation for manpages-0.6.1
Parsing documentation for lolcat-100.0.1
Installing ri documentation for lolcat-100.0.1
Done installing documentation for paint, optimist, manpages, lolcat after 0 seconds
4 gems installed
INFO:    Adding runscript
INFO:    Creating SIF file...
INFO:    Build complete: lab2-v3.sif
```

```
$ singularity run lab2-v3.sif

 _____ _     _       _               _            _      __ _ _        
|_   _| |__ (_)___  (_)___    __ _  | |_ ___  ___| |_   / _(_) | ___   
  | | | '_ \| / __| | / __|  / _` | | __/ _ \/ __| __| | |_| | |/ _ \  
  | | | | | | \__ \ | \__ \ | (_| | | ||  __/\__ \ |_  |  _| | |  __/_ 
  |_| |_| |_|_|___/ |_|___/  \__,_|  \__\___||___/\__| |_| |_|_|\___(_)
```

Change the contents of testfile:

```
$ echo “Hello World” > testfile
$ singularity run lab2-v3.sif
 _   _      _ _        __        __         _     _ 
| | | | ___| | | ___   \ \      / /__  _ __| | __| |
| |_| |/ _ \ | |/ _ \   \ \ /\ / / _ \| '__| |/ _` |
|  _  |  __/ | | (_) |   \ V  V / (_) | |  | | (_| |
|_| |_|\___|_|_|\___/     \_/\_/ \___/|_|  |_|\__,_|
```

Nice and colored. This is just an example and, to be honest, we wrote the
lab2.def file many times until it worked.
