(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{340:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/02/npx.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("LINK to Ruanyifeng"),s("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("npx 想要解决的主要问题，就是调用项目内部安装的模块")]),t._v(" "),t._m(2),s("p",[t._v("npx 的原理很简单，就是运行的时候，会到node_modules/.bin路径和环境变量$PATH里面，检查命令是否存在。")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("除了调用项目内部模块，npx 还能避免全局安装的模块。比如，create-react-app这个模块是全局安装，npx 可以运行它，而且不进行全局安装。")]),t._v(" "),t._m(4),t._m(5),t._v(" "),s("p",[t._v("利用 npx 可以下载模块这个特点，可以指定某个版本的 Node 运行脚本。它的窍门就是使用 npm 的 node 模块。")]),t._v(" "),t._m(6),s("p",[t._v("上面命令会使用 0.12.8 版本的 Node 执行脚本。原理是从 npm 下载这个版本的 node，使用后再删掉。")]),t._v(" "),s("p",[t._v("某些场景下，这个方法用来切换 Node 版本，要比 nvm 那样的版本管理器方便一些。")]),t._v(" "),s("p",[t._v("-p参数用于指定 npx 所要安装的模块，所以可以写成下面这样。")]),t._v(" "),t._m(7),t._m(8),t._v(" "),s("p",[t._v("npx 还可以执行 GitHub 上面的模块源码。")]),t._v(" "),t._m(9),s("p",[t._v("注意，远程代码必须是一个模块，即必须包含package.json和入口脚本。")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"npx-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npx-介绍","aria-hidden":"true"}},[this._v("#")]),this._v(" npx 介绍")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"调用项目安装的模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调用项目安装的模块","aria-hidden":"true"}},[this._v("#")]),this._v(" 调用项目安装的模块")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ node-modules/.bin/mocha --version\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# npx 就是想解决这个问题，让项目内部安装的模块用起来更方便")]),this._v("\n$ npx mocha --version\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 由于 npx 会检查环境变量$PATH，所以系统命令也可以调用 等同于 ls")]),this._v("\n$ npx "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("ls")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"避免全局安装模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#避免全局安装模块","aria-hidden":"true"}},[this._v("#")]),this._v(" 避免全局安装模块")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 下面代码运行时，npx 将create-react-app下载到一个临时目录，使用以后再删除。所以，以后再次执行上面的命令，会重新下载create-react-app。")]),this._v("\n$ npx create-react-app my-react-app\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 下载全局模块时，npx 允许指定版本。")]),this._v("\n$ npx uglify-js@3.1.0 main.js -o ./dist/main.js\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"使用不同版本的-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用不同版本的-node","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用不同版本的 node")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ npx node@0.12.8 -v\nv0.12.8\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("$ npx -p node@0.12.8 node -v \nv0.12.8\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"执行-github-源码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行-github-源码","aria-hidden":"true"}},[this._v("#")]),this._v(" 执行 GitHub 源码")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 执行 Gist 代码")]),this._v("\n$ npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 执行仓库代码")]),this._v("\n$ npx github:piuccio/cowsay hello\n")])])])}],!1,null,null,null);n.options.__file="npx 介绍.md";e.default=n.exports}}]);