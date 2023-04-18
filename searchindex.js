Search.setIndex({"docnames": ["build-noroot", "building", "inspecting", "intro", "introduction", "lab1", "lab2.1", "lab2.2", "lab3", "lab4", "lab5", "lab6", "lab7", "quickstart", "runcontainer", "signing", "workflow"], "filenames": ["build-noroot.md", "building.md", "inspecting.md", "intro.md", "introduction.md", "lab1.md", "lab2.1.md", "lab2.2.md", "lab3.md", "lab4.md", "lab5.md", "lab6.md", "lab7.md", "quickstart.md", "runcontainer.md", "signing.md", "workflow.md"], "titles": ["\ud83d\udcc4 Building without root access", "\ud83d\udcc4 Building images", "\ud83d\udcc4 Inspecting SIF Files", "Welcome to Singularity Tutorial", "\ud83d\udcc4 Introduction to Singularity CE", "\ud83d\udcd3 Lab 1: Convert docker images to SIF", "\ud83d\udcd3 Lab 2.1: Running Containers", "\ud83d\udcd3 Lab 2.2: Running Containers as Instances", "\ud83d\udcd3 Lab 3: Multi-Stage Build", "\ud83d\udcd3 Lab 4: Using Singularity Container Services", "\ud83d\udcd3 Lab 5:  Signing containers with PGP", "\ud83d\udcd3 Lab 6:  Signing with x509 Key Materials", "\ud83d\udcd3 Lab 7: SIF file &amp; Host Filesystem", "\ud83d\udcc4 Quickstart", "\ud83d\udcc4 Running containers", "\ud83d\udcc4 Signing and verifying images", "\ud83d\udcc4 The Singularity Workflow"], "terms": {"It": [0, 16], "ar": [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 14, 16], "consum": 4, "contain": [0, 1, 2, 3, 4, 8, 11, 12, 13, 15, 16], "while": [4, 8, 16], "supercomput": 4, "schedul": [3, 4], "normal": [2, 4, 7, 11, 14], "extrem": [], "when": [0, 4, 7, 9, 12, 16], "test": [0, 1, 2, 4, 6, 12, 15, 16], "code": [3, 4, 12], "workstat": 7, "avoid": 15, "exces": [], "ram": [], "make": [2, 4, 16], "unstabl": [], "even": [2, 6], "unus": [], "For": [2, 7, 11, 14, 16], "you": [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16], "can": [0, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "flag": [0, 7, 9, 12], "minimum": [], "0": [0, 2, 6, 7, 8, 9, 10, 12, 14, 16], "01": [6, 7], "maximum": 9, "number": [], "core": 1, "system": [0, 1, 2, 4, 6, 7, 12, 13, 14, 16], "singular": [0, 1, 2, 5, 6, 7, 8, 10, 11, 12, 13, 14], "run": [0, 1, 3, 4, 8, 12, 13, 16], "2": [0, 1, 2, 3, 4, 8, 10, 11, 12], "1": [0, 1, 2, 3, 7, 8, 10, 11, 12, 16], "demo": [1, 6, 10, 12, 14, 16], "sif": [0, 1, 3, 6, 7, 8, 9, 10, 11, 14, 15, 16], "set": [1, 2, 4, 7, 9, 11, 12, 16], "ammount": [], "byte": 9, "prefer": 9, "suffix": [], "like": [0, 1, 2, 3, 5, 7, 10, 11, 13, 14, 16], "m": 6, "megabyt": [], "g": [10, 12], "gigabyt": [], "note": [0, 1, 2, 6, 7, 8, 9, 14, 16], "tri": 14, "more": [1, 4, 6, 14, 16], "than": [4, 14], "its": [0, 3, 4, 12, 14, 15], "kill": [], "1g": [], "anoth": [4, 12, 14], "reserv": [], "which": [1, 2, 4, 6, 7, 11, 12, 14], "soft": [], "lower": [], "10g": [], "8g": [], "requir": [0, 7], "cfq": [], "bfq": [], "configur": [0, 7, 14, 16], "your": [0, 1, 2, 4, 6, 9, 10, 11, 13, 16], "disk": 7, "The": [0, 1, 3, 4, 7, 8, 9, 12, 14, 15], "blkio": [], "weight": [], "rel": [], "perform": [0, 4, 7, 8, 9], "read": 4, "write": [0, 6, 7, 10, 11, 16], "from": [0, 1, 2, 4, 6, 7, 8, 9, 11, 12, 14, 16], "thi": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16], "valu": [14, 16], "between": 4, "10": [0, 4, 6, 7, 8, 12, 14], "1000": [], "control": [], "access": [3, 4], "receiv": [0, 8, 16], "content": [1, 6, 8, 14, 15], "other": [2, 4, 7, 9, 14, 16], "100": [0, 1, 6, 8, 12], "second": [2, 6, 16], "have": [0, 2, 4, 5, 9, 10, 12, 13, 14, 15], "ten": [], "time": [4, 6, 9, 14, 16], "less": [], "block": [], "prioriti": [], "could": [1, 4], "also": [0, 2, 4, 9, 12, 15, 16], "specif": [2, 3, 4], "devic": [], "dev": 2, "sda": [], "veri": [1, 4, 6, 9, 12], "import": [0, 4, 6, 14], "host": [3, 7], "ha": [0, 6, 14, 15], "driver": [], "librari": [0, 1, 2, 5, 6, 9, 10, 12, 13, 14, 16], "instal": [0, 1, 3, 4, 5, 6, 7, 8, 12, 13, 14, 16], "nvidia": [], "cuda": [], "amd": [], "rocm": [], "first": [0, 2, 5, 6, 10, 11, 14, 16], "creat": [0, 1, 2, 4, 6, 7, 8, 10, 11, 12, 14, 15, 16], "work": [0, 2, 6, 7, 14], "directori": [0, 2, 9, 10, 16], "download": [1, 2, 5, 6, 9, 12, 14, 16], "cento": [2, 13], "8": [4, 6, 12], "imag": [0, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 14, 16], "convert": [3, 7, 10, 11, 14], "format": [5, 7, 10, 11, 14, 16], "mkdir": [], "cd": [0, 6, 8, 12], "pull": [5, 7, 9, 10, 11, 12, 14], "centos8": [], "docker": [0, 3, 4, 6, 7, 8, 10, 11, 12, 14, 16], "info": [0, 1, 2, 6, 7, 8, 9, 10, 11, 12, 14], "oci": [0, 7, 10, 11, 16], "blob": [0, 6, 7, 10, 11], "start": [0, 1, 6, 7, 8, 9, 10, 11, 12, 14, 16], "build": [3, 4, 6, 7, 10, 11, 16], "get": [0, 1, 6, 7, 8, 10, 11, 12, 14, 16], "sourc": [0, 4, 6, 7, 8, 10, 11, 16], "signatur": [0, 6, 7, 10, 11, 12, 15], "copi": [0, 1, 6, 7, 8, 9, 10, 11, 16], "a1d0c7532777": [], "done": [0, 6, 7, 8, 10, 11], "config": [0, 6, 7, 10, 11], "8c1402b22a": [], "manifest": [0, 6, 7, 10, 11], "destin": [0, 6, 7, 9, 10, 11], "store": [0, 2, 6, 7, 9, 10, 11, 14], "2022": 10, "09": [10, 12], "21": [0, 6, 7, 8], "16": [0, 8], "04": [1, 2, 4, 5, 6, 10, 11, 16], "47": [], "unpack": [0, 6, 7, 8, 10, 11], "layer": [0, 5, 6, 7, 8, 10, 11], "sha256": [0, 1, 6, 7, 8, 9, 10, 11], "a1d0c75327776413fa0db9ed3adcdbadedc95a662eb1d360dad82bb913f8a1d1": [], "warn": 9, "rootless": [], "usr": 12, "bin": [0, 6, 8, 12], "newgidmap": [], "ignor": [], "usual": 16, "harmless": [], "eperm": [], "setxattr": [], "secur": [4, 9], "capabl": 3, "newuidmap": [], "ping": 0, "49": [], "sbin": 12, "arp": [], "clockdiff": [], "file": [0, 1, 3, 6, 7, 8, 9, 10, 11, 14, 15], "confirm": [], "ls": 2, "lh": [], "rwxrwxr": [], "x": [6, 15], "josu": [1, 6, 9, 12, 14], "76m": [], "sep": [], "05": [6, 8], "todo": [], "finish": [], "A": [0, 1, 12, 14, 15, 16], "realist": [1, 6], "exampl": [0, 1, 2, 3, 4, 6, 7, 8, 10, 12, 13, 14], "setup": [0, 1, 7], "real": [1, 4, 7, 9], "instanc": [0, 1, 3, 16], "befor": [1, 3, 4, 12], "let": [0, 1, 2, 6, 7, 8, 9, 10, 11, 12, 14, 16], "demonstr": [1, 2, 7, 9, 14], "us": [1, 2, 3, 4, 7, 8, 11, 12, 14, 15, 16], "definit": [0, 1, 2, 8, 12], "instruct": [1, 9], "command": [0, 1, 2, 4, 7, 9, 12, 13, 14, 16], "goal": 1, "prepar": [1, 6], "final": [1, 8], "user": [0, 1, 2, 4, 10, 14, 15], "includ": [1, 2], "up": [1, 8], "environ": [1, 2, 4, 8, 9, 12, 14, 16], "variabl": [1, 12, 14, 16], "softwar": [1, 4, 6, 12, 14, 16], "workflow": [1, 3], "develop": [1, 4, 8, 10], "cycl": 1, "similar": [0, 1, 16], "below": [0, 1, 6, 12, 14], "step": [1, 9], "sandbox": [1, 6, 16], "writabl": [1, 7, 16], "option": [0, 1, 2, 7, 9, 10, 16], "do": [0, 1, 2, 6, 8, 9, 14], "whatev": 1, "need": [0, 1, 4, 7, 9, 10, 11, 14, 15], "take": [0, 1, 3, 5, 6, 9, 12, 16], "them": [1, 2, 3, 4, 9, 12, 14], "someth": 1, "goe": 1, "wrong": [1, 8], "go": [0, 1, 2, 6, 8, 9, 10, 14, 16], "def": [0, 1, 6, 8, 9, 10, 11, 12, 16], "short": 1, "divid": 1, "part": [1, 14], "header": [1, 8, 12, 16], "section": [0, 1, 2, 6, 8, 12, 16], "describ": [1, 6, 8], "oper": [0, 1, 2, 4, 6, 7, 9, 13, 14, 16], "within": [1, 4], "These": [1, 16], "group": [0, 1, 10, 11, 12], "particular": 1, "action": 1, "mani": [1, 4, 6, 9, 16], "basic": 1, "serv": [1, 9, 16], "tutori": [0, 1, 6, 7], "bootstrap": [0, 1, 2, 6, 8, 9, 12, 16], "ubuntu": [1, 2, 4, 5, 14, 16], "22": [0, 1, 2, 5, 7, 8, 16], "And": [1, 12], "look": [1, 12], "localhost": [1, 7], "sudo": [0, 1, 5, 6, 7, 8, 9, 13, 16], "28": [1, 6, 7], "4mib": 1, "3": [0, 1, 3, 4, 6, 9, 10, 11, 12, 15], "4": [0, 1, 3, 4, 6, 7, 8, 11, 12], "mib": [0, 1, 8, 12], "s": [0, 1, 2, 6, 7, 8, 9, 11, 12, 14, 15, 16], "0s": [1, 12], "verifi": [1, 3, 6, 7, 9, 10, 11], "root": [1, 3, 4, 7, 8, 9], "cach": [1, 2, 7, 9, 14], "7a63c": 1, "98b": 1, "complet": [0, 1, 6, 8, 9], "result": [1, 8, 9], "name": [1, 2, 6, 7, 8, 9, 10, 14, 16], "There": [0, 4, 5], "ocass": [], "where": [0, 5, 8, 14, 16], "an": [0, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15], "avail": [0, 2, 5, 7, 9, 10, 13, 16], "one": [0, 4, 5, 6, 8, 9, 10], "nativ": 5, "most": 5, "easi": [5, 14], "all": [0, 4, 5, 16], "compil": [5, 6, 8, 16], "method": [0, 7], "advantag": [3, 4], "agent": [], "so": [0, 4, 7, 9, 11, 14, 15], "post": [0, 1, 6, 8, 9, 12, 16], "runscript": [2, 6, 12, 14, 16], "some": [0, 2, 4, 6, 7, 9, 16], "home": [2, 9, 10, 14], "tmp": [2, 9], "proc": 2, "sy": 2, "possibl": [2, 4], "modifi": [2, 4, 6, 15], "specifi": [2, 9, 10, 16], "bind": [0, 2], "we": [2, 6, 7, 9, 10, 11, 12, 14], "want": [2, 4, 6, 12, 16], "sai": [], "opt": 16, "data": 4, "add": [0, 6, 8, 12, 16], "p": 7, "chown": [], "echo": [1, 6, 12, 16], "date": 16, "txt": [], "exec": [0, 2, 7, 8, 16], "cat": [2, 6, 12, 14], "fail": [0, 2], "succe": [], "In": [2, 3, 4, 7, 9, 10], "order": [2, 7, 8, 9, 10, 14], "mount": [2, 4], "sever": [2, 4], "provid": [2, 4, 9], "comma": 2, "separ": 2, "list": [2, 6, 7, 10, 12], "dir1": 2, "dir2": 2, "dir3": 2, "l": [2, 10, 12], "insid": [0, 2, 4, 7, 16], "differ": [2, 4, 6, 14, 16], "directory_on": 2, "directory_two": 2, "metadata": [2, 6, 15, 16], "see": [0, 2, 4, 7, 10, 12, 14, 16], "origin": [2, 15], "deffil": [2, 9, 12], "similarli": 2, "show": [2, 14], "r": [2, 9, 12], "startscript": [2, 16], "t": [0, 2, 3, 9, 10, 14], "script": [0, 2, 12], "e": [2, 10, 12], "ve": [3, 7, 14], "heard": [3, 14], "about": [2, 3, 4, 14], "don": [3, 9, 10], "realli": [3, 14], "know": [3, 4, 6, 9], "much": 3, "what": [3, 4, 7], "exactli": 3, "thei": [2, 3, 4, 8, 9, 12, 14, 15], "new": [3, 6, 7, 16], "type": [3, 6, 9, 10, 11, 12], "design": 3, "hpc": [3, 4, 14], "applic": [3, 4, 6, 14], "easili": [3, 14], "exist": [0, 3, 4, 8], "tool": [3, 16], "batch": [3, 4], "job": [3, 14], "manag": [3, 14], "mpi": 3, "cours": [3, 14], "learn": [3, 14], "how": [2, 3, 4, 14], "featur": [0, 3], "excerpt": 3, "written": [3, 6, 16], "compat": 3, "version": [0, 2, 3, 4, 6, 14, 16], "11": [0, 3, 6, 7, 10, 15], "singularityc": [0, 3, 4, 7, 13, 14, 15], "singularitypro": 3, "quickstart": 3, "introduct": 3, "ce": [3, 5, 13], "lab": [0, 2, 3, 14], "multi": 3, "stage": [3, 16], "servic": [0, 3, 7, 14], "sign": [3, 12], "inspect": [3, 12, 14, 16], "filesystem": [3, 4], "advanc": [], "topic": [], "5": [0, 3, 6, 8, 12], "limit": [0, 4, 14], "resourc": [4, 9], "technolog": 4, "effect": 4, "wai": [4, 12, 14], "packag": [0, 4, 6, 8, 16], "pre": [0, 4], "requisit": 6, "os": [2, 4, 5, 6, 7, 14, 16], "linux": [0, 2, 4, 5, 6, 7, 13, 14], "offer": [4, 9], "distribut": [4, 11, 15], "concept": [], "focus": 4, "cover": 4, "high": 4, "market": 4, "big": 4, "allow": [4, 8, 9, 14, 16], "privileg": [0, 4, 7], "issu": [4, 13, 16], "wether": [], "commerci": [4, 7], "world": [4, 6], "lot": [4, 14], "interest": [4, 12, 14], "comput": 4, "document": [4, 6, 7, 15, 16], "site": 4, "wish": [4, 9], "case": [0, 4, 9, 16], "expect": [4, 16], "updat": [4, 13, 16], "major": 4, "true": 4, "kernel": [0, 4], "sinc": [4, 9, 15], "19": 4, "been": [4, 15], "andded": [], "bug": [2, 4, 14], "fix": 4, "until": [4, 6], "said": 4, "recommend": 4, "deb": 4, "base": [0, 4, 6, 13, 16], "debian": [2, 4, 13, 14], "later": [4, 14, 16], "20": [4, 6, 7, 8], "rpm": [4, 6], "redhat": [4, 5], "fedora": [2, 4, 6], "32": [4, 6, 7], "opensus": 4, "leap": 4, "12": [4, 6, 7], "x86_64": [0, 4, 6, 7, 8], "arm64": 4, "support": [0, 4, 7, 14, 15, 16], "git": [0, 4, 8, 16], "curl": [4, 7], "line": [4, 6], "experi": [4, 6], "bash": [4, 14], "virtual": 4, "machin": 4, "isol": 4, "enviro": [], "benefit": 4, "over": [4, 9, 15], "tradit": 4, "vm": 4, "better": [], "faster": 4, "deploy": 4, "deploi": [4, 14], "without": [3, 4, 8, 9, 14], "worri": [0, 4, 14], "underli": 4, "infrastructur": [4, 15], "detail": 4, "One": [4, 11, 14], "prebuilt": [], "depend": [4, 6, 16], "lighter": 4, "portabl": 4, "size": [4, 6], "mb": [4, 6], "few": 4, "gb": 4, "bigger": 4, "fast": 4, "iter": 4, "public": [4, 10, 11, 14, 15], "repositori": [4, 6], "premad": 4, "posibl": [], "publish": 4, "own": [0, 4, 10, 11, 12], "who": [4, 9], "addit": [4, 7], "increas": 4, "reduc": 4, "consumpt": 4, "common": [4, 12, 14], "architectur": [4, 6], "implement": [4, 11], "scenario": 4, "bare": 4, "metal": 4, "container": 4, "runtim": [4, 16], "out": [0, 4, 7, 11], "wide": 4, "scientist": 4, "research": 4, "mean": [4, 7, 15], "wa": [4, 6, 14, 16], "did": 4, "meet": 4, "simplic": 4, "repeat": 4, "address": [4, 9, 10], "gap": 4, "easier": 4, "hardwar": 4, "node": 4, "partit": 4, "program": [4, 16], "process": [4, 7, 15, 16], "word": [0, 4], "grant": 4, "awar": 4, "necessari": [0, 4, 7], "chang": [2, 4, 6, 16], "independ": 4, "id": [2, 4, 10, 11, 12, 14], "network": [0, 4, 7], "interfac": [4, 7], "each": [4, 8], "privat": [4, 11, 12, 15], "ip": [4, 7], "rout": 4, "tabl": 4, "firewal": [4, 7], "commun": [0, 4, 8, 9], "extern": [4, 9], "determin": [0, 4], "ut": 4, "identifi": 4, "multipl": [4, 15], "mai": [0, 2, 4, 12, 15], "assum": [5, 9, 10, 13], "dnf": [5, 6, 12, 13], "y": [5, 6, 10, 12, 16], "epel": [5, 6, 12, 13], "releas": [2, 5, 6, 12, 13, 14, 16], "onc": [9, 13], "sylab": [6, 9, 10, 12, 14, 16], "wttr": [6, 13, 14], "latest": [6, 10, 11, 12, 13, 14], "secondli": 6, "simpl": [6, 11], "lab1": [], "text": [6, 16], "asum": 6, "vi": [6, 8], "editor": 6, "mandatori": 6, "feel": [6, 9], "free": [6, 9], "substitut": 6, "favorit": 6, "Then": [6, 7, 11, 12], "almalinux": [2, 6, 12, 13], "9": [0, 2, 6, 8, 12], "wq": 6, "exit": [6, 14, 16], "save": [6, 9, 16], "proce": 6, "now": [6, 9, 10, 11, 12, 14, 16], "suppos": 6, "here": [6, 9, 13], "backup": 6, "v2": 6, "testfil": [6, 12], "cp": [], "past": [6, 8, 9], "bootsrap": [], "figlet": [6, 12], "point": 6, "give": 6, "try": [6, 8], "ahead": 6, "sofwar": 6, "lolcat": [6, 12], "v3": [0, 6, 8], "rubi": [6, 12], "wget": [6, 12, 16], "unzip": [6, 12], "http": [0, 2, 6, 7, 8, 9, 12, 14], "github": [0, 6, 8, 12], "com": [0, 2, 6, 7, 8, 10, 12], "busyloop": [6, 12], "archiv": [6, 12], "master": [6, 12], "zip": [6, 12], "gem": [6, 12], "nice": 6, "color": [6, 7], "being": 16, "honest": 6, "approach": 6, "writ": [], "alwai": [2, 6], "best": 6, "practic": 6, "might": [0, 6], "worfklow": 6, "next": [0, 6, 7], "binari": 8, "light": [7, 8], "slimmer": 8, "ani": [0, 1, 8, 9, 14], "stack": 8, "adjust": 8, "ad": [4, 6, 8, 9, 15], "keyword": [7, 8, 16], "golang": [0, 8], "clone": [0, 8], "o": 2, "alpin": [0, 7, 8, 10, 11], "execut": [0, 2, 8, 12, 14, 15, 16], "same": [0, 8, 9, 14], "re": 8, "arrang": 8, "abov": [0, 7, 8, 13], "cannot": [0, 8, 9], "becaus": [0, 2, 7, 8], "red": 13, "hat": 13, "oracl": 13, "rocki": [5, 13], "quickli": 13, "If": [0, 7, 9, 10, 12, 13, 14], "pleas": [7, 9, 13, 16], "follow": [0, 2, 6, 9, 12, 13], "guid": 13, "tutorial101": [12, 13], "output": [0, 7, 12, 13, 14], "ever": 14, "haven": 14, "becom": [14, 16], "increasingli": 14, "todai": 14, "server": [7, 14], "easiest": 14, "current": [2, 7, 12], "That": 14, "anyth": 14, "engin": 14, "just": 14, "right": [0, 9, 14], "shell": [0, 12, 14, 16], "_": [6, 12, 14], "print": 14, "etc": [2, 6, 14, 16], "pretty_nam": [2, 14], "gnu": 14, "buster": 14, "version_id": [2, 14], "version_codenam": [2, 14], "home_url": [2, 14], "www": [2, 14], "org": [0, 2, 6, 7, 8, 14], "support_url": [2, 14], "bug_report_url": [2, 14], "lsmem": [], "memori": 7, "perspect": [], "rang": [], "state": [], "remov": 12, "0x0000000000000000": [], "0x000000006fffffff": [], "onlin": 7, "ye": [], "13": 6, "0x0000000100000000": [], "0x0000000487ffffff": [], "14": [6, 7], "144": [], "128m": [], "total": [0, 6, 8], "15": [0, 6, 8, 10], "9g": [], "offlin": [], "0b": [], "readi": 14, "creator": 14, "defin": [2, 9, 14, 16], "default": [6, 14, 15], "call": [0, 14, 16], "subcommand": [12, 14], "given": [0, 9, 14], "launch": 14, "weather": 14, "inform": [2, 14, 16], "fact": 14, "directli": [12, 14, 15], "explicit": 14, "hub": [7, 14, 16], "whoami": 14, "ps": 14, "pid": [7, 14], "tty": 14, "cmd": 14, "157430": 14, "pt": 14, "00": [0, 6, 7, 8, 14], "158145": 14, "starter": 14, "suid": 14, "158164": 14, "158187": 14, "after": [6, 9, 14], "accept": 14, "background": [7, 14], "coupl": [], "probabl": 7, "wonder": 7, "doe": [7, 10], "context": 7, "automat": [0, 7, 9], "come": [0, 7], "instance1": [], "instance2": [], "instance3": [], "99098": [], "bc41": [], "9730fc2ad": [], "99166": [], "99215": [], "To": [7, 9, 10, 11], "stop": 7, "dockerhub": 14, "skip": [0, 9, 14], "login": [9, 14], "password": [9, 14], "remot": [0, 8, 14], "usernam": [9, 10, 14], "io": [6, 9, 10, 12, 14, 16], "token": 14, "yaml": [9, 14], "sc": [10, 12, 14], "those": [9, 12], "share": 9, "preffer": [], "kei": [3, 6, 9, 10, 12, 15, 16], "author": [0, 9, 15, 16], "At": 9, "upper": 9, "corner": 9, "clic": [], "select": [9, 16], "green": 9, "button": 9, "safe": 9, "place": [9, 16], "gener": [2, 9, 10, 11, 12], "cloud": 9, "auth": 9, "enter": [9, 10, 12], "hidden": 9, "abil": [0, 9], "built": [4, 7, 9, 16], "submit": 9, "anymor": 9, "drop": 9, "account": [9, 10], "durat": 9, "1h0m0": 9, "29816581": 9, "475505819": 9, "7a63c14842a5c9b9c0567c1530af87afbb82187444ea45fd7473726ca31a598b": [], "2540378504": 9, "calcul": 9, "checksum": 9, "upload": 9, "verif": 9, "29806592": 9, "successfulli": [6, 7, 9], "messag": [1, 9], "stream": 9, "termin": [7, 8, 9], "local": [7, 9, 10, 12], "discard": 9, "leav": 9, "form": [9, 10], "tag": [9, 10, 16], "trust": [], "ensur": [], "bit": [11, 15], "reproduct": 15, "intend": 15, "newpair": 10, "john": 10, "firstnam": 10, "lastnam": 10, "email": 10, "last": [6, 7, 10], "comment": 10, "passphras": [10, 12], "retyp": 10, "would": 10, "push": 10, "keystor": 10, "n": [6, 10], "entiti": 10, "openpgp": 10, "pair": [10, 11, 16], "anonym": 10, "sypgp": 10, "pgp": [3, 12, 15], "u": [10, 12], "david": 10, "trudgian": 10, "c": [10, 12, 16], "54": [6, 10], "0600": [7, 10, 12], "cst": [10, 12], "creation": 10, "timestamp": 10, "f": [10, 12], "e5f780b2c22f59df748524b435c3844412ee233b": 10, "fingerprint": [6, 10], "4096": [10, 12], "length": [6, 10], "crate": [], "appli": [0, 10, 11, 12], "65833f473098c6215e750b3bdfd69e5cee85d448": [], "object": [0, 8, 10, 11], "link": [10, 11, 12], "none": [10, 11, 12], "json": [6, 10, 11, 12, 16], "fs": [8, 10, 11, 12], "outcom": 16, "annot": 16, "gonna": [], "touch": [], "file1": 16, "singularity_rootf": [], "file2": [], "export": [12, 16], "listen_port": 16, "12345": 16, "lc_all": 16, "apt": 16, "netcat": 16, "singularity_environ": 16, "argument": 16, "nc": 16, "lp": 16, "grep": 16, "q": 16, "eq": 16, "els": 16, "fi": 16, "label": 16, "d": [12, 16], "v0": 16, "help": [2, 16], "illustr": 16, "protocol": 16, "ora": [0, 16], "yum": [0, 16], "localimag": [0, 16], "debootstrap": [0, 16], "busybox": [0, 8, 16], "offici": [7, 16], "valid": [15, 16], "dure": [1, 16], "outsid": 0, "move": 16, "around": 16, "recent": 16, "internet": 16, "end": [12, 15, 16], "choic": [9, 16], "displai": [1, 16], "transfer": 16, "prerequisit": 4, "whether": 4, "reproduc": 4, "popular": 4, "typic": 14, "web": [7, 9, 14], "often": [12, 14], "detach": 14, "daemon": 14, "mode": 14, "distinguish": 14, "foreground": 14, "explor": 14, "alma": 5, "occas": 5, "lab2": 6, "7a76c6018191": 6, "55b00d9a17": 6, "2023": [0, 6, 7, 8, 10, 11, 12], "03": [0, 6, 7, 8, 12], "29": [0, 6, 7, 8, 10, 11], "17": [0, 6, 8, 12], "7a76c6018191c79083d136ece0e14591fa547d39614feadfbba0bfc01370169c": 6, "scriptlet": [0, 6, 8], "appstream": 6, "baseo": [2, 6], "extra": [6, 15], "23": [6, 7], "kb": 6, "resolv": [0, 6, 8], "noarch": 6, "el9": [2, 6], "k": 6, "transact": 6, "summari": 6, "146": 6, "31": [6, 7], "check": [6, 12], "succeed": 6, "enterpris": 6, "02": 6, "expir": 6, "ago": 6, "wed": 6, "mar": [6, 7], "124": 6, "665": 6, "20151018gita565ae1": 6, "262": 6, "147": 6, "6": [0, 3, 6, 7, 8], "gpg": 6, "0x3228467c": 6, "userid": 6, "epel9": 6, "fedoraproject": 6, "ff8a": 6, "d134": 6, "4597": 6, "106e": 6, "ce81": 6, "3b91": 6, "8a38": 6, "72bf": 6, "3228": 6, "467c": 6, "pki": 6, "_____": 6, "__": [6, 12], "___": [6, 12], "37": 6, "08": [6, 7, 8, 10, 11], "30": [6, 7, 12], "18": [0, 6, 10, 11], "150": 6, "35": [0, 6, 8], "719": 6, "26": [6, 7], "arch": [0, 6], "repo": 6, "160": 6, "el9_0": 6, "41": 6, "56": [6, 10, 11], "180": 6, "7": [0, 2, 3, 6, 7, 8], "772": 6, "libpsl": 6, "63": 6, "publicsuffix": 6, "dafsa": 6, "20210518": 6, "57": [6, 7], "lib": [0, 6, 8], "rubygem": 6, "consol": 6, "25": [0, 6, 7, 8], "psych": 6, "51": [0, 6, 8], "weak": 6, "bigdecim": 6, "bundler": 6, "33": [6, 12], "372": 6, "rdoc": 6, "401": 6, "256": [6, 12], "237": 6, "766": 6, "686": 6, "481": 6, "317": 6, "324": 6, "38": [0, 6, 8], "140": 6, "82": 6, "114": 6, "connect": 6, "443": 6, "request": [0, 6], "sent": [6, 12], "await": 6, "respons": 6, "302": 6, "found": [6, 8], "locat": [6, 7], "codeload": 6, "ref": 6, "head": [6, 7], "112": 6, "200": [6, 7], "ok": [0, 6, 8], "unspecifi": 6, "118": 6, "31k": 6, "614kb": 6, "2s": 6, "614": 6, "121154": 6, "f4cca5601ea57df2b5b3c98feea8ad05f4421039": 6, "extract": [6, 11, 12], "gitignor": 6, "inflat": 6, "gemfil": 6, "licens": 6, "readm": 6, "md": 6, "rakefil": 6, "ass": 6, "nom": 6, "jpg": 6, "screenshot": 6, "png": 6, "rb": 6, "lol": 6, "gemspec": 6, "man": 6, "fetch": [0, 6, 8], "paint": 6, "optimist": 6, "manpag": 6, "pars": 6, "ri": 6, "hello": [0, 6, 8, 12], "v": 6, "7a76c6018191c790": 6, "fc01370169c": 6, "tmpf": 7, "net": [0, 2, 7], "arg": 7, "portmap": 7, "8080": 7, "80": 7, "tcp": 7, "nginx": 7, "webserv": 7, "f56be85fc22": [0, 7, 8, 10, 11], "1f21f983520d": 7, "59b9d2200e63": 7, "3e1e579c95f": 7, "547a97583f72": 7, "2ce963c369bc": 7, "c23b4f8cf279": 7, "3f8c932fa7": 7, "f56be85fc22e46face30e2c3de3f7fe7c15f8fd7c4e5add29d7f64b87abdaa09": [], "2ce963c369bc5690378d31c51dc575c7035f6adfcc1e286051b5a5d9a7b0cc5c": [], "59b9d2200e632e457f800814693b3a01adf09a244c38ebe8d3beef5c476c4c55": [], "3e1e579c95fece6bbe0cb9c8c2949512a3f8caaf9dbe6219dc6495abb9902040": [], "547a97583f72a32903ca1357d48fa302e91e8f83ffa18e0c40fd87adb5c06025": [], "1f21f983520d9a440d410ea62eb0bda61a2b50dd79878071181b56b82efa9ef3": [], "c23b4f8cf279507bb1dd3d6eb2d15ca84fac9eac215ab5b529aa8b5a060294c8": [], "alloc": 7, "space": 7, "map": 7, "port": [0, 7], "fakeroot": [7, 9], "proot": [7, 9], "administr": [0, 7], "manipul": 7, "intern": 7, "iptabl": 7, "bridg": 7, "our": [7, 10, 12], "232106": 7, "023": 7, "06": [7, 8], "50": 7, "notic": 7, "epol": 7, "event": 7, "gcc": 7, "20220924": 7, "1_git20220924": 7, "r4": 7, "fc37": 7, "getrlimit": 7, "rlimit_nofil": 7, "524288": 7, "worker": 7, "24": 7, "27": 7, "open": [7, 9], "browser": [7, 9], "load": 7, "doctyp": 7, "html": 7, "titl": 7, "welcom": 7, "style": 7, "scheme": 7, "dark": 7, "bodi": 7, "width": 7, "35em": 7, "margin": 7, "auto": 7, "font": 7, "famili": 7, "tahoma": 7, "verdana": 7, "arial": 7, "san": 7, "serif": 7, "615": 7, "85": 7, "h1": 7, "page": 7, "further": 7, "refer": 7, "href": 7, "br": 7, "em": 7, "thank": 7, "against": [0, 7], "standard": [7, 11, 12], "collect": 7, "error": [7, 8], "log": [7, 9], "view": 7, "263932": 7, "err": 7, "actual": 7, "a5538d0158f": 7, "f56be85fc22e46face30e2c3d": [], "d7c4e5add29d7f64b87abdaa09": 7, "2ce963c369bc5690378d31c51": [], "dfcc1e286051b5a5d9a7b0cc5c": 7, "59b9d2200e632e457f8008146": [], "244c38ebe8d3beef5c476c4c55": 7, "3e1e579c95fece6bbe0cb9c8c": [], "af9dbe6219dc6495abb9902040": 7, "547a97583f72a32903ca1357d": [], "83ffa18e0c40fd87adb5c06025": 7, "1f21f983520d9a440d410ea62": [], "dd79878071181b56b82efa9ef3": 7, "c23b4f8cf279507bb1dd3d6eb": [], "ac215ab5b529aa8b5a060294c8": 7, "f56be85fc223d": 7, "2ce963c369b51": 7, "59b9d2200e646": 7, "3e1e579c95f8c": 7, "547a97583f77d": 7, "1f21f98352062": 7, "c23b4f8cf27eb": 7, "previou": [0, 16], "fine": 16, "tune": 16, "lab3": [0, 8, 9], "85791d961cd3578144eb3d64a9716fa35c198c4ae9202b07eb0f2de9127a7907": [], "d694b5ae8c79da8739894be5ea71fd779bf5929e4da8073a7a7c117c8545cbc6": [], "9f32a84ed3dadb94b3eeaee01e7e194337180096d4a934370f3e9311a7ddf893": [], "apk": [0, 8], "dl": [0, 8], "cdn": [0, 8], "alpinelinux": [0, 8], "main": [0, 8], "apkindex": [0, 8], "tar": [0, 8], "gz": [0, 8], "brotli": [0, 8], "r9": [0, 8], "nghttp2": [0, 8], "r0": [0, 8], "libcurl": [0, 8], "88": [0, 8], "r1": [0, 8], "libexpat": [0, 8], "pcre2": [0, 8], "42": [0, 8], "r29": [0, 8], "trigger": [0, 8], "enumer": [0, 8], "204": [0, 8], "count": [0, 8], "40": [0, 8], "compress": [0, 8], "delta": [0, 8], "reus": [0, 8], "pack": [0, 8], "164": [0, 8], "109": [0, 8], "kib": [0, 8], "689": 8, "93": [0, 8], "fatal": 8, "unabl": 8, "match": 8, "9d7f64b87abdaa09": 8, "85791d961cd3": [0, 8], "eb0f2de9127a7907": 8, "d694b5ae8c79": [0, 8], "7a7c117c8545cbc6": 8, "9f32a84ed3da": [0, 8], "0f3e9311a7ddf893": 8, "f56be85f5add": 8, "29d7f6487abdaa09": 8, "b87abdaa09": 8, "situat": 0, "howev": [0, 2, 9], "choos": 0, "fake": 0, "almost": 0, "onli": 0, "namespac": 0, "consid": [0, 9], "65536": 0, "uid": 0, "131072": 0, "thing": 0, "gid": 0, "restrict": 0, "won": 0, "abl": 0, "1024": 0, "4fa22900b5": 0, "36": 0, "792": 0, "alreadi": 0, "4798f93a2c": [0, 10, 11], "46": 0, "As": [0, 15], "reli": 0, "consider": 0, "newer": 0, "older": 0, "introduc": 0, "unprivileg": 0, "non": 0, "pass": 0, "scope": 0, "remark": 0, "emul": 0, "evalu": 0, "worth": 0, "zypper": 0, "subject": 0, "impos": 0, "conf": 0, "incur": 0, "penalti": 0, "due": 0, "ptrace": 0, "intercept": 0, "syscal": 0, "lolcow": 0, "Not": 0, "f56be85fc22e46fac": 0, "bdaa09": 0, "85791d961cd3578144": 0, "7a7907": 0, "d694b5ae8c79da8739": 0, "45cbc6": 0, "9f32a84ed3dadb94b3": 0, "ddf893": 0, "7f64b87abdaa09": 0, "properli": 9, "click": 9, "joe": [9, 10], "afterward": 9, "bar": 9, "singl": 9, "On": 9, "must": 9, "approv": [9, 15], "mechan": 9, "expos": [2, 9], "disclos": 9, "credenti": 9, "futur": 9, "loos": 9, "forget": [9, 12], "delet": 9, "advic": 9, "again": 9, "subsequ": 15, "confid": 15, "obtain": 15, "carri": 15, "certif": 15, "By": 15, "509": 15, "materi": [3, 12, 15], "well": 15, "indic": 15, "undergon": 15, "review": 15, "progress": 15, "through": 15, "65833f473098c62d69e5cee85d448": 10, "honor": 2, "permiss": 2, "vendor": 2, "anybodi": 2, "lt": 2, "jammi": 2, "jellyfish": 2, "id_lik": 2, "launchpad": 2, "privacy_policy_url": 2, "legal": 2, "term": 2, "polici": 2, "privaci": 2, "ubuntu_codenam": 2, "lime": 2, "lynx": 2, "rhel": 2, "platform_id": 2, "platform": 2, "ansi_color": 2, "34": 2, "logo": 2, "icon": 2, "cpe_nam": 2, "cpe": 2, "documentation_url": 2, "wiki": 2, "almalinux_mantisbt_project": 2, "almalinux_mantisbt_project_vers": 2, "redhat_support_product": 2, "redhat_support_product_vers": 2, "x509": 3, "7mib": [], "b": [], "yet": 10, "unsign": [10, 11], "container_lab5": 10, "f56be8": [10, 11], "d7f64b87abdaa09": [10, 11], "dead": 11, "envelop": 11, "dsse": 11, "purpos": 11, "2048": 11, "openssl": 11, "genrsa": 11, "pem": 11, "rsa": 11, "outform": 11, "pubout": 11, "container_lab6": 11, "techniqu": 12, "recov": 12, "container_lab7": 12, "62": 12, "6mib": 12, "fiction": 2, "____": 12, "unlik": 12, "were": 12, "filenam": 12, "sh": 12, "debug": 12, "why": 12, "certain": 12, "piec": 12, "ones": 12, "env": 12, "docker2singular": 12, "path": 12, "90": 12, "custom": 12, "should": 12, "entir": 12, "posit": 12, "32176": 12, "32522": 12, "33644": 12, "33741": 12, "36864": 12, "127049728": 12, "squashf": 12, "amd64": 12, "127051525": 12, "sha": 12, "dump": 12, "redirect": 12, "instead": 12, "charact": 12, "back": 12, "del": 12, "balbuena": 12, "670a2299cda030d0": 12}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"advanc": [], "topic": [], "limit": [], "resourc": [], "cpu": [], "memori": [], "i": [], "o": [], "us": [0, 9], "gpu": [], "mpi": [], "applic": [], "build": [0, 1, 8, 9], "imag": [1, 5, 15], "convert": 5, "docker": 5, "sif": [2, 5, 12], "access": [0, 2, 9], "host": [2, 12], "file": [2, 12, 16], "inspect": 2, "welcom": 3, "singular": [3, 4, 9, 16], "tutori": 3, "introduct": 4, "ce": 4, "cours": 4, "featur": 4, "tool": 4, "namespac": 4, "lab": [5, 6, 7, 8, 9, 10, 11, 12], "1": [5, 6], "run": [6, 7, 14], "contain": [6, 7, 9, 10, 14], "2": [6, 7], "workflow": 16, "3": 8, "servic": 9, "4": 9, "filesystem": 12, "5": 10, "multi": 8, "stage": 8, "quickstart": 13, "instanc": [7, 14], "remot": 9, "sign": [9, 10, 11, 15], "verifi": 15, "The": 16, "compon": 16, "definit": 16, "without": 0, "administr": [], "root": 0, "fakeroot": 0, "proot": 0, "up": 9, "sc": 9, "creat": 9, "token": 9, "your": [], "own": [], "pgp": 10, "6": 11, "x509": 11, "certif": [], "7": 12, "kei": 11, "materi": 11}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})