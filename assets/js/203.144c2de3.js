(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{417:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"nodejs-通过-nvm-和-n-管理和切换-node-的版本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-通过-nvm-和-n-管理和切换-node-的版本","aria-hidden":"true"}},[s._v("#")]),s._v(" NodeJs 通过 NVM 和 n 管理和切换 node 的版本")]),s._v(" "),n("h2",{attrs:{id:"nvm"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nvm","aria-hidden":"true"}},[s._v("#")]),s._v(" NVM")]),s._v(" "),n("p",[s._v("https://segmentfault.com/a/1190000004404505")]),s._v(" "),n("p",[s._v("https://github.com/creationix/nvm")]),s._v(" "),n("p",[s._v("使用"),n("code",[s._v("curl")]),s._v("方式来安装：")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])])]),n("p",[s._v("完成后nvm就被安装在了"),n("code",[s._v("~/.nvm")]),s._v("下啦，接下来就需要配一下环境变量了，如果你也使用了"),n("code",[s._v("zsh")]),s._v("的话，就需要在"),n("code",[s._v("~/.zshrc")]),s._v("这个配置文件中配置，否则就找找看"),n("code",[s._v("~/.bash_profile")]),s._v("或者"),n("code",[s._v("~/.profile")]),s._v("吧。")]),s._v(" "),n("p",[s._v("打开"),n("code",[s._v("~/.zshrc")]),s._v("，在最后一行加上：")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("export")]),s._v(" NVM_DIR"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HOME")]),s._v('/.nvm"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -s "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NVM_DIR")]),s._v('/nvm.sh"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(".")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NVM_DIR")]),s._v('/nvm.sh"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This loads nvm")]),s._v("\n")])])]),n("p",[s._v("这一步的作用是每次新打开一个bash，nvm都会被自动添加到环境变量中了。 完成后输入"),n("code",[s._v("source ~/.zshrc")]),s._v("重新启动一下配置。")]),s._v(" "),n("p",[s._v("可以使用"),n("code",[s._v("nvm ls-remote")]),s._v("看一下node有哪些版本可以安装")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("nvm "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" 版本号\nnvm use v4.1.0\nNow using node v4.1.0 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("npm v2.14.3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nnode -v\nv4.1.0\nnvm use v5.5.0\nNow using node v5.5.0 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("npm v3.3.12"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nnode -v\nv5.5.0\n")])])]),n("p",[s._v("不过问题来了，这时如果你新打开一个bash，输入"),n("code",[s._v("nvm current")]),s._v("会发现显示为"),n("code",[s._v("null")]),s._v("，这是因为使用"),n("code",[s._v("nvm use")]),s._v("命令只会在当前bash里生效，重新打开一个bash你会发现"),n("code",[s._v("$PATH")]),s._v("的值已经不包含刚才的node目录了，要解决这个问题也很简单，使用"),n("code",[s._v("nvm alias default <version>")]),s._v("命令来指定一个默认的node版本就ok了，这里我使用了"),n("code",[s._v("v4.1.0")]),s._v("作为默认版本：")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("nvm "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("alias")]),s._v(" default v4.1.0\ndefault -"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" v4.1.0\n")])])]),n("p",[s._v("此时再打开一个bash输入"),n("code",[s._v("nvm current")]),s._v("就会显示为"),n("code",[s._v("v4.1.0")]),s._v("了。")]),s._v(" "),n("h2",{attrs:{id:"n"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#n","aria-hidden":"true"}},[s._v("#")]),s._v(" n")]),s._v(" "),n("p",[s._v("直接查看官方文档：https://github.com/tj/n")]),s._v(" "),n("p",[s._v("参考：https://75team.com/post/manage_node_with_n.html")]),s._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 Node 版本")]),s._v("\n$ n 版本号\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 选择你想使用的版本")]),s._v("\n$ n \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Use or install the latest official release:")]),s._v("\n$ n latest\nUse or "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" the stable official release:\n\n$ n stable\nUse or "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" the latest LTS official release:\n\n$ n lts\n\nRemove some versions:\n\n$ n "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" 0.9.4 v0.10.0\nAlternatively, you can use - "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" lieu of rm:\n\n$ n - 0.9.4\nRemoving all versions except the current version:\n\n$ n prune \n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);