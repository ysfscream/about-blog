(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{272:function(s,t,a){"use strict";a.r(t);var e=a(0),o=Object(e.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[s._m(0),s._v(" "),s._m(1),s._v(" "),a("p",[s._v("本脚本适用环境\n系统支持：CentOS 6+，Debian 7+，Ubuntu 12+\n内存要求：≥128M\n日期　　：2018 年 02 月 07 日\n关于本脚本")]),s._v(" "),a("p",[s._v("1、一键安装 Shadowsocks-Python， ShadowsocksR， Shadowsocks-Go， Shadowsocks-libev 版（四选一）服务端；\n2、各版本的启动脚本及配置文件名不再重合；\n3、每次运行可安装一种版本；\n4、支持以多次运行来安装多个版本，且各个版本可以共存（注意端口号需设成不同）；\n5、若已安装多个版本，则卸载时也需多次运行（每次卸载一种）；\n6、Shadowsocks-Python 和 ShadowsocksR 安装后不可同时启动（因为本质上都属 Python 版）。")]),s._v(" "),a("p",[s._v("友情提示：如果你有问题，请先阅读这篇《Shadowsocks Troubleshooting》之后再询问。")]),s._v(" "),a("p",[s._v("默认配置\n服务器端口：自己设定（如不设定，默认从 9000-19999 之间随机生成）\n密码：自己设定（如不设定，默认为 teddysun.com）\n加密方式：自己设定（如不设定，Python 和 libev 版默认为 aes-256-gcm，R 和 Go 版默认为 aes-256-cfb）\n协议（protocol）：自己设定（如不设定，默认为 origin）（仅限 ShadowsocksR 版）\n混淆（obfs）：自己设定（如不设定，默认为 plain）（仅限 ShadowsocksR 版）\n备注：脚本默认创建单用户配置文件，如需配置多用户，请手动修改相应的配置文件后重启即可。\n客户端下载\n常规版 Windows 客户端\n"),a("a",{attrs:{href:"https://github.com/shadowsocks/shadowsocks-windows/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/shadowsocks/shadowsocks-windows/releases"),a("OutboundLink")],1),s._v("\nShadowsocksR 版 Windows 客户端\n"),a("a",{attrs:{href:"https://github.com/shadowsocksrr/shadowsocksr-csharp/releases",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/shadowsocksrr/shadowsocksr-csharp/releases"),a("OutboundLink")],1),s._v("\n使用方法")]),s._v(" "),a("p",[s._v("使用root用户登录，运行以下命令：")]),s._v(" "),s._m(2),a("p",[s._v("安装完成后，脚本提示如下")]),s._v(" "),s._m(3),s._m(4),s._v(" "),a("blockquote",[a("p",[s._v("已删除 404，"),a("a",{attrs:{href:"http://kaixinaba.blogspot.com/2018/03/shadowsocks.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://kaixinaba.blogspot.com/2018/03/shadowsocks.html"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("卸载方法\n若已安装多个版本，则卸载时也需多次运行（每次卸载一种）\n使用root用户登录，运行以下命令：")]),s._v(" "),s._m(5),a("p",[s._v("启动脚本\n启动脚本后面的参数含义，从左至右依次为：启动，停止，重启，查看状态。")]),s._v(" "),s._m(6),a("p",[s._v("各版本默认配置文件")]),s._v(" "),s._m(7),s._m(8),s._v(" "),s._m(9),a("p",[s._v("选择填写的内容大致如下图：")]),s._v(" "),s._m(10)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"ss-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ss-安装","aria-hidden":"true"}},[this._v("#")]),this._v(" SS 安装")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"ss"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ss","aria-hidden":"true"}},[this._v("#")]),this._v(" SS")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" --no-check-certificate -O shadowsocks-all.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-all.sh\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x shadowsocks-all.sh\n./shadowsocks-all.sh 2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" shadowsocks-all.log\n")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("Congratulations, your_shadowsocks_version "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" completed"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nYour Server IP        :your_server_ip\nYour Server Port      :your_server_port\nYour Password         :your_password\nYour Encryption Method:your_encryption_method\n\nYour QR Code: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("For Shadowsocks Windows, OSX, Android and iOS clients"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n ss://your_encryption_method:your_password@your_server_ip:your_server_port\nYour QR Code has been saved as a PNG "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" path:\n your_path.png\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("Welcome to visit:"),t("code",[this._v("https://teddysun.com/486.html")]),this._v("\nEnjoy it!")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[this._v("./shadowsocks-all.sh uninstall\n")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("Shadowsocks-Python 版：\n/etc/init.d/shadowsocks-python start "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" stop "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" restart "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" status\nShadowsocksR 版：\n/etc/init.d/shadowsocks-r start "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" stop "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" restart "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" status\nShadowsocks-Go 版：\n/etc/init.d/shadowsocks-go start "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" stop "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" restart "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" status\nShadowsocks-libev 版：\n/etc/init.d/shadowsocks-libev start "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" stop "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" restart "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" status\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[this._v("Shadowsocks-Python 版：\n/etc/shadowsocks-python/config.json\nShadowsocksR 版：\n/etc/shadowsocks-r/config.json\nShadowsocks-Go 版：\n/etc/shadowsocks-go/config.json\nShadowsocks-libev 版：\n/etc/shadowsocks-libev/config.json\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"ssr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssr","aria-hidden":"true"}},[this._v("#")]),this._v(" SSR")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" clone https://github.com/suniceman/ss-fly.git\n\nss-fly/ss-fly.sh -ssr\n")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("Congratulations, ShadowsocksR server "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" completed"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nYour Server IP        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v("  23.105.203.126\nYour Server Port      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v("  12802\nYour Password         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v("  ysfscream\nYour Protocol         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v("  auth_sha1_v4\nYour obfs             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),s._v("  tls1.2_ticket_auth\nYour Encryption Method:  chacha20\n\nWelcome to visit:https://shadowsocks.be/9.html\nEnjoy it"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n")])])])}],!1,null,null,null);o.options.__file="SS 安装.md";t.default=o.exports}}]);