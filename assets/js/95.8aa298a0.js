(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{297:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001472780997905c8f293615c5a42eab058b6dc29936a5c000")]),t._v(" "),s("p",[t._v("http://www.ruanyifeng.com/blog/2017/05/websocket.html")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("WebSocket并不是全新的协议，而是利用了HTTP协议来建立连接。我们来看看WebSocket连接是如何创建的。")]),t._v(" "),s("p",[t._v("首先，WebSocket连接必须由浏览器发起，因为请求协议是一个标准的HTTP请求，格式如下：")]),t._v(" "),t._m(2),s("p",[t._v("WebSocket是HTML5新增的协议，它的目的是在浏览器和服务器之间建立一个不受限的双向通信的通道，比如说，服务器可以在任意时刻发送消息给浏览器。")]),t._v(" "),s("p",[t._v("为什么传统的HTTP协议不能做到WebSocket实现的功能？这是因为HTTP协议是一个请求－响应协议，请求必须先由浏览器发给服务器，服务器才能响应这个请求，再把数据发送给浏览器。换句话说，浏览器不主动请求，服务器是没法主动发数据给浏览器的。")]),t._v(" "),s("p",[t._v("这样一来，要在浏览器中搞一个实时聊天，在线炒股（不鼓励），或者在线多人游戏的话就没法实现了，只能借助Flash这些插件。")]),t._v(" "),s("p",[t._v("也有人说，HTTP协议其实也能实现啊，比如用轮询或者Comet。轮询是指浏览器通过JavaScript启动一个定时器，然后以固定的间隔给服务器发请求，询问服务器有没有新消息。这个机制的缺点一是实时性不够，二是频繁的请求会给服务器带来极大的压力。")]),t._v(" "),s("p",[t._v("Comet本质上也是轮询，但是在没有消息的情况下，服务器先拖一段时间，等到有消息了再回复。这个机制暂时地解决了实时性问题，但是它带来了新的问题：以多线程模式运行的服务器会让大部分线程大部分时间都处于挂起状态，极大地浪费服务器资源。另外，一个HTTP连接在长时间没有数据传输的情况下，链路上的任何一个网关都可能关闭这个连接，而网关是我们不可控的，这就要求Comet连接必须定期发一些ping数据表示连接“正常工作”。")]),t._v(" "),s("p",[t._v("以上两种机制都治标不治本，所以，HTML5推出了WebSocket标准，让浏览器和服务器之间可以建立无限制的全双工通信，任何一方都可以主动发消息给对方。")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("WebSocket并不是全新的协议，而是利用了HTTP协议来建立连接。我们来看看WebSocket连接是如何创建的。")]),t._v(" "),s("p",[t._v("首先，WebSocket连接必须由浏览器发起，因为请求协议是一个标准的HTTP请求，格式如下：")]),t._v(" "),t._m(4),s("p",[t._v("该请求和普通的HTTP请求有几点不同：")]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("随后，服务器如果接受该请求，就会返回如下响应：")]),t._v(" "),t._m(6),t._m(7),t._v(" "),s("p",[t._v("版本号和子协议规定了双方能理解的数据格式，以及是否支持压缩等等。如果仅使用WebSocket的API，就不需要关心这些。")]),t._v(" "),s("p",[t._v("现在，一个WebSocket连接就建立成功，浏览器和服务器就可以随时主动发送消息给对方。消息有两种，一种是文本，一种是二进制数据。通常，我们可以发送JSON格式的文本，这样，在浏览器处理起来就十分容易。")]),t._v(" "),s("p",[t._v("为什么WebSocket连接可以实现全双工通信而HTTP连接不行呢？实际上HTTP协议是建立在TCP协议之上的，TCP协议本身就实现了全双工通信，但是HTTP协议的请求－应答机制限制了全双工通信。WebSocket连接建立以后，其实只是简单规定了一下：接下来，咱们通信就不使用HTTP协议了，直接互相发数据吧。")]),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("其他特点包括：")]),t._v(" "),s("p",[t._v("（1）建立在 TCP 协议之上，服务器端的实现比较容易。")]),t._v(" "),s("p",[t._v("（2）与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。")]),t._v(" "),s("p",[t._v("（3）数据格式比较轻量，性能开销小，通信高效。")]),t._v(" "),s("p",[t._v("（4）可以发送文本，也可以发送二进制数据。")]),t._v(" "),s("p",[t._v("（5）没有同源限制，客户端可以与任意服务器通信。")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("WebSocket 对象作为一个构造函数，用于新建 WebSocket 实例。")]),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("执行上面语句之后，客户端就会与服务器进行连接。")]),t._v(" "),s("p",[t._v("https://developer.mozilla.org/en-US/docs/Web/API/WebSocket")]),t._v(" "),s("p",[t._v("简单的例子：")]),t._v(" "),t._m(13),t._m(14),t._v(" "),s("p",[t._v("WebSocket 服务器的实现，可以查看维基百科的"),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Comparison_of_WebSocket_implementations",target:"_blank",rel:"noopener noreferrer"}},[t._v("列表"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("常用的 Node 实现有以下三种。")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/uWebSockets/uWebSockets",target:"_blank",rel:"noopener noreferrer"}},[t._v("µWebSockets"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://socket.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Socket.IO"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/theturtle32/WebSocket-Node",target:"_blank",rel:"noopener noreferrer"}},[t._v("WebSocket-Node"),s("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"http-websocket-协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-websocket-协议","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP WebSocket 协议")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("WebSocket是HTML5新增的协议，它的目的是在浏览器和服务器之间建立一个不受限的双向通信的通道，比如说，服务器可以在任意时刻发送消息给浏览器。")]),this._v(" "),e("p",[this._v("为什么传统的HTTP协议不能做到WebSocket实现的功能？这是因为HTTP协议是一个请求－响应协议，请求必须先由浏览器发给服务器，服务器才能响应这个请求，再把数据发送给浏览器。换句话说，浏览器不主动请求，服务器是没法主动发数据给浏览器的。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("GET ws"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("//localhost"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v("/ws/chat HTTP/"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.1")]),t._v("\nHost"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" localhost\nUpgrade"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" websocket\nConnection"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Upgrade\nOrigin"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("//localhost"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v("\nSec-WebSocket-Key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" client-random-string\nSec-WebSocket-Version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"websocket协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#websocket协议","aria-hidden":"true"}},[this._v("#")]),this._v(" WebSocket协议")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("GET ws://localhost:3000/ws/chat HTTP/1.1\nHost: localhost\nUpgrade: websocket\nConnection: Upgrade\nOrigin: http://localhost:3000\nSec-WebSocket-Key: client-random-string\nSec-WebSocket-Version: 13\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("GET请求的地址不是类似"),s("code",[t._v("/path/")]),t._v("，而是以"),s("code",[t._v("ws://")]),t._v("开头的地址；")]),t._v(" "),s("li",[t._v("请求头"),s("code",[t._v("Upgrade: websocket")]),t._v("和"),s("code",[t._v("Connection: Upgrade")]),t._v("表示这个连接将要被转换为WebSocket连接；")]),t._v(" "),s("li",[s("code",[t._v("Sec-WebSocket-Key")]),t._v("是用于标识这个连接，并非用于加密数据；")]),t._v(" "),s("li",[s("code",[t._v("Sec-WebSocket-Version")]),t._v("指定了WebSocket的协议版本。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("HTTP/1.1 101 Switching Protocols\nUpgrade: websocket\nConnection: Upgrade\nSec-WebSocket-Accept: server-random-string\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("该响应代码"),e("code",[this._v("101")]),this._v("表示本次连接的HTTP协议即将被更改，更改后的协议就是"),e("code",[this._v("Upgrade: websocket")]),this._v("指定的WebSocket协议。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("安全的WebSocket连接机制和HTTPS类似。首先，浏览器用"),e("code",[this._v("wss://xxx")]),this._v("创建WebSocket连接时，会先通过HTTPS创建安全的连接，然后，该HTTPS连接升级为WebSocket连接，底层通信走的仍然是安全的SSL/TLS协议。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("（6）协议标识符是"),e("code",[this._v("ws")]),this._v("（如果加密，则为"),e("code",[this._v("wss")]),this._v("），服务器网址就是 URL。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2017/bg2017051503.jpg",alt:"img"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"客户端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端","aria-hidden":"true"}},[this._v("#")]),this._v(" 客户端")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("blockquote",[s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ws "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebSocket")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ws://localhost:8080'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ws "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebSocket")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wss://echo.websocket.org"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nws"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onopen")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("evt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Connection open ..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  ws"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello WebSockets!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nws"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onmessage")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("evt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Received Message: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" evt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  ws"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nws"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclose")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("evt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Connection closed."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      \n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"服务端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#服务端","aria-hidden":"true"}},[this._v("#")]),this._v(" 服务端")])}],!1,null,null,null);n.options.__file="HTTP WebSocket 协议.md";e.default=n.exports}}]);