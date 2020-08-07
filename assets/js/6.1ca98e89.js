(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{246:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux-基础操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-基础操作","aria-hidden":"true"}},[s._v("#")]),s._v(" Linux 基础操作")]),s._v(" "),t("h2",{attrs:{id:"日常维护命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#日常维护命令","aria-hidden":"true"}},[s._v("#")]),s._v(" 日常维护命令")]),s._v(" "),t("h3",{attrs:{id:"查看操作系统信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看操作系统信息","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看操作系统信息")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ubuntu@actorcloud:~$ lsb_release -a\nNo LSB modules are available.\nDistributor ID: Ubuntu\nDescription: Ubuntu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.04")]),s._v(".3 LTS\nRelease: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.04")]),s._v("\nCodename: xenial\n")])])]),t("h3",{attrs:{id:"查看系统已经开机了多久"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看系统已经开机了多久","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看系统已经开机了多久")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ubuntu@actorcloud:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uptime")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("15")]),s._v(":01:02 up "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27")]),s._v(" days,  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(":24,  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" users,  load average: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v("\n")])])]),t("h3",{attrs:{id:"修改主机名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改主机名","aria-hidden":"true"}},[s._v("#")]),s._v(" 修改主机名")]),s._v(" "),t("ul",[t("li",[s._v("修改 "),t("code",[s._v("/etc/hostname")]),s._v(" 里的主机名")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ubuntu@actorcloud:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/hostname\nactorcloud\n")])])]),t("ul",[t("li",[s._v("修改 "),t("code",[s._v("/etc/hosts")]),s._v(" 文件，在 "),t("code",[s._v("localhost")]),s._v(" 后添加新的主机名")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ubuntu@actorcloud:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/hosts\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 localhost actorcloud\n::1     localhost actorcloud ip6-localhost ip6-loopback\n")])])]),t("ul",[t("li",[s._v("使主机名立即生效")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ubuntu@actorcloud:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v(" actorcloud\n")])])]),t("h3",{attrs:{id:"查看某个进程是否已经启动，并且正在监听端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看某个进程是否已经启动，并且正在监听端口","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看某个进程是否已经启动，并且正在监听端口")]),s._v(" "),t("blockquote",[t("p",[t("code",[s._v("sudo netstat -tunlp")]),s._v(" 则可以列出系统当前所有正在监听的端口。")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ubuntu@actorcloud:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -tunlp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5432")]),s._v("\ntcp6       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" :::5432      :::*          LISTEN      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1366")]),s._v("/docker-proxy\n")])])]),t("h3",{attrs:{id:"测试某个端口是否能被正常访问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试某个端口是否能被正常访问","aria-hidden":"true"}},[s._v("#")]),s._v(" 测试某个端口是否能被正常访问")]),s._v(" "),t("blockquote",[t("p",[s._v("如果端口监听正常，但是不能访问，说明可能是防火墙问题")])]),s._v(" "),t("p",[s._v("如果能，则返回如下：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ubuntu@actorcloud:~$ telnet "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5432")]),s._v("\nTrying "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nConnected to "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1.\nEscape character is "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^]'")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])])]),t("h3",{attrs:{id:"查看内存使用情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看内存使用情况","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看内存使用情况")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ubuntu@actorcloud:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" -m\n              total        used        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v("      shared  buff/cache   available\nMem:           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7983")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2150")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3194")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("330")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2638")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5166")]),s._v("\nSwap:          "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4095")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4095")]),s._v("\n")])])]),t("h3",{attrs:{id:"查看当前目录下所有文件-文件夹的大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看当前目录下所有文件-文件夹的大小","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看当前目录下所有文件/文件夹的大小")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ubuntu@actorcloud:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" -sh *\n527M    rocksdb-5.17.2\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(".0M    v5.17.2.tar.gz\n")])])]),t("h3",{attrs:{id:"查看本机已挂载的分区信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看本机已挂载的分区信息","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看本机已挂载的分区信息")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ubuntu@actorcloud:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" -lh\nFilesystem      Size  Used Avail Use% Mounted on\nudev            "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /dev\ntmpfs           799M   84M  715M  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("% /run\n/dev/vda1        20G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(".3G   12G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v("% /\ntmpfs           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G  424K  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("% /dev/shm\ntmpfs           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(".0M     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(".0M   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /run/lock\ntmpfs           "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /sys/fs/cgroup\n/dev/vdc1       118G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".2G  109G   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("% /opt\ntmpfs           799M     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  799M   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /run/user/1000\n")])])]),t("h3",{attrs:{id:"强制杀死某个进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强制杀死某个进程","aria-hidden":"true"}},[s._v("#")]),s._v(" 强制杀死某个进程")]),s._v(" "),t("blockquote",[t("p",[s._v("先用 ps 查到 进程 pid，再用 kill -9 pid 强行杀死")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ubuntu@actorcloud:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v("\nramesh    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7243")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7222")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(":43 pts/2    00:00:00 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v("\n ubuntu@actorcloud:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7243")]),s._v("\n")])])]),t("h3",{attrs:{id:"查看某个监听端口的-pid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看某个监听端口的-pid","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看某个监听端口的 pid")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ubuntu@actorcloud:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("lsof")]),s._v(" -i:18083\nCOMMAND   PID   "),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v("   FD   TYPE DEVICE SIZE/OFF NODE NAME\nbeam.smp "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5301")]),s._v(" ubuntu   26u  IPv4  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("24481")]),s._v("      0t0  TCP *:18083 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("LISTEN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h3",{attrs:{id:"改变某个目录-文件的所属用户及所属群组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#改变某个目录-文件的所属用户及所属群组","aria-hidden":"true"}},[s._v("#")]),s._v(" 改变某个目录/文件的所属用户及所属群组")]),s._v(" "),t("p",[s._v("将某个文件改为ubuntu用户和ubuntu组所有")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ubuntu@actorcloud:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" ubuntu:ubuntu some_file\n")])])]),t("p",[s._v("递归修改某个目录及目录下的所有文件(或目录)")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ubuntu@actorcloud:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R ubuntu:ubuntu /opt/some_path\n")])])]),t("h3",{attrs:{id:"实时查看日志文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实时查看日志文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 实时查看日志文件")]),s._v(" "),t("blockquote",[t("p",[s._v("这个命令执行后会等待，如果有新行添加到文件尾部，它会继续输出新的行，可以通过 CTRL-C 终止命令的执行")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ubuntu@actorcloud:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -f log-file\n")])])]),t("h3",{attrs:{id:"返回到上一次目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#返回到上一次目录","aria-hidden":"true"}},[s._v("#")]),s._v(" 返回到上一次目录")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ubuntu@actorcloud:~$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n/home/ubuntu\nubuntu@actorcloud:~$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /opt/\nubuntu@actorcloud:/opt$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" -\n/home/ubuntu\nubuntu@actorcloud:~$\n")])])]),t("h2",{attrs:{id:"磁盘分区、格式化、挂载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#磁盘分区、格式化、挂载","aria-hidden":"true"}},[s._v("#")]),s._v(" 磁盘分区、格式化、挂载")]),s._v(" "),t("h3",{attrs:{id:"_1-查看机器挂载硬盘信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看机器挂载硬盘信息","aria-hidden":"true"}},[s._v("#")]),s._v(" 1. 查看机器挂载硬盘信息")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ubuntu@actorcloud:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fdisk")]),s._v(" -l\nDisk /dev/vda: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" GiB, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("21474836480")]),s._v(" bytes, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41943040")]),s._v(" sectors\nUnits: sectors of "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" * "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nSector size "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("logical/physical"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes / "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nI/O size "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("minimum/optimal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes / "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nDisklabel type: dos\nDisk identifier: 0xd46abfdc\n Device     Boot Start      End  Sectors Size Id Type\n/dev/vda1  *     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41940991")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41938944")]),s._v("  20G "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("83")]),s._v(" Linux\n Disk /dev/vdb: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" GiB, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4294967296")]),s._v(" bytes, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8388608")]),s._v(" sectors\nUnits: sectors of "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" * "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nSector size "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("logical/physical"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes / "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\nI/O size "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("minimum/optimal"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes / "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" bytes\n")])])]),t("h3",{attrs:{id:"_2-对有需要的硬盘执行分区操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-对有需要的硬盘执行分区操作","aria-hidden":"true"}},[s._v("#")]),s._v(" 2. 对有需要的硬盘执行分区操作")]),s._v(" "),t("blockquote",[t("p",[s._v("对 /dev/vda 分区，执行如下命令后，可以一直回车默认。最后一步输入 "),t("code",[s._v("w")]),s._v(" 字符并回车保存本次分区配置；\n一般会将整块硬盘都分成一个区。")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ubuntu@actorcloud:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fdisk")]),s._v(" /dev/vda\n")])])]),t("h3",{attrs:{id:"_3-对某个分区进行格式化操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-对某个分区进行格式化操作","aria-hidden":"true"}},[s._v("#")]),s._v(" 3. 对某个分区进行格式化操作")]),s._v(" "),t("blockquote",[t("p",[s._v("将分区格式化为 ext4 格式")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ubuntu@actorcloud:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" mkfs.ext4 /dev/vdc1\n")])])]),t("h3",{attrs:{id:"_4-将格式化后的分区挂载到相应目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-将格式化后的分区挂载到相应目录","aria-hidden":"true"}},[s._v("#")]),s._v(" 4. 将格式化后的分区挂载到相应目录")]),s._v(" "),t("blockquote",[t("p",[s._v("该目录必须是已经存在的目录，如果不存在需要先创建")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ubuntu@actorcloud:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" /dev/vdc1 /opt\n")])])]),t("h3",{attrs:{id:"_5-设置开机自动挂载该分区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-设置开机自动挂载该分区","aria-hidden":"true"}},[s._v("#")]),s._v(" 5. 设置开机自动挂载该分区")]),s._v(" "),t("blockquote",[t("p",[s._v("用 vim 编辑 "),t("code",[s._v("/etc/fstab")]),s._v(" 文件，格式如下\n最后一行就是自动挂载 "),t("code",[s._v("/dev/vdc1")]),s._v(" 到 "),t("code",[s._v("/opt")]),s._v(" 目录")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ubuntu@actorcloud:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/fstab\n "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# <file system> <mount point>   <type>  <options>       <dump>  <pass>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# / was on /dev/vda1 during installation")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("UUID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0d09c6dd-e982-4abb-9401-b29458e12bc6 /               ext4    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("errors")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("remount-ro "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n/dev/vdc1                                 /opt            ext4    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("errors")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("remount-ro "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("       "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);