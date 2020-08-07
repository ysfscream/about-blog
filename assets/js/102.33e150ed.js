(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{214:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"jwt-json-web-token-和-一些安全问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt-json-web-token-和-一些安全问题","aria-hidden":"true"}},[t._v("#")]),t._v(" JWT-> JSON WEB TOKEN 和 一些安全问题")]),t._v(" "),s("blockquote",[s("p",[t._v("Json web token (JWT), 是为了在网络应用环境间传递声明而执行的一种基于JSON的开放标准（"),s("a",{attrs:{href:"https://link.jianshu.com?t=https://tools.ietf.org/html/rfc7519",target:"_blank",rel:"noopener noreferrer"}},[t._v("(RFC 7519"),s("OutboundLink")],1),t._v(").该token被设计为紧凑且安全的，特别适用于分布式站点的单点登录（SSO）场景。JWT的声明一般被用来在身份提供者和服务提供者间传递被认证的用户身份信息，以便于从资源服务器获取资源，也可以增加一些额外的其它业务逻辑所必须的声明信息，该token也可直接被用于认证，也可被加密。")])]),t._v(" "),s("h2",{attrs:{id:"基于session认证所显露的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于session认证所显露的问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 基于session认证所显露的问题")]),t._v(" "),s("p",[s("strong",[t._v("Session")]),t._v(": 每个用户经过我们的应用认证之后，我们的应用都要在服务端做一次记录，以方便用户下次请求的鉴别，通常而言session都是保存在内存中，而随着认证用户的增多，服务端的开销会明显增大。")]),t._v(" "),s("div",{staticClass:"language-md extra-class"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v("1、用户向服务器发送用户名和密码。\n\n2、服务器验证通过后，在当前对话（session）里面保存相关数据，比如用户角色、登录时间等等。\n\n3、服务器向用户返回一个 session_id，写入用户的 Cookie。\n\n4、用户随后的每一次请求，都会通过 Cookie，将 session_id 传回服务器。\n\n5、服务器收到 session_id，找到前期保存的数据，由此得知用户的身份。\n")])])]),s("p",[s("strong",[t._v("扩展性")]),t._v(": 用户认证之后，服务端做认证记录，如果认证的记录被保存在内存中的话，这意味着用户下次请求还必须要请求在这台服务器上,这样才能拿到授权的资源，这样在分布式的应用上，相应的限制了负载均衡器的能力。这也意味着限制了应用的扩展能力。")]),t._v(" "),s("p",[s("strong",[t._v("XSS(Cross Site Scripting)")]),t._v(": 是跨站脚本攻击，为了区分CSS，所以缩写为XSS。XSS攻击方式是往Web页面插入恶意的 JavaScript 代码，当用户浏览网页的时候，插入的代码就是被执行，从而达到攻击的目的。")]),t._v(" "),s("p",[t._v("其中应用比较多的一个就是，在网页一些公用的交互区域。比如搜索的文本框，除了可以输入一些关键字，还可以输入一些 JavaScript 代码，一旦代码点击搜索，代码就会被执行，达到攻击的目的。如下例子")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("在文本框中输入以上代码，然后点击提交，就会把用户的cookie弹出来。")]),t._v(" "),s("p",[s("strong",[t._v("CSRF")]),t._v(": 因为是基于cookie来进行用户识别的, cookie如果被截获，用户就会很容易受到跨站请求伪造的攻击。")]),t._v(" "),s("h2",{attrs:{id:"基于token的鉴权机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基于token的鉴权机制","aria-hidden":"true"}},[t._v("#")]),t._v(" 基于token的鉴权机制")]),t._v(" "),s("p",[t._v("基于token的鉴权机制类似于http协议也是无状态的，它不需要在服务端去保留用户的认证信息或者会话信息。这就意味着基于token认证机制的应用不需要去考虑用户在哪一台服务器登录了，这就为应用的扩展提供了便利。")]),t._v(" "),s("p",[t._v("流程上是这样的：")]),t._v(" "),s("ul",[s("li",[t._v("用户使用用户名密码来请求服务器")]),t._v(" "),s("li",[t._v("服务器进行验证用户的信息")]),t._v(" "),s("li",[t._v("服务器通过验证发送给用户一个token")]),t._v(" "),s("li",[t._v("客户端存储token，并在每次请求时附送上这个token值")]),t._v(" "),s("li",[t._v('在header中加入token ("Authorization: Bearer + token")')]),t._v(" "),s("li",[t._v("服务端验证token值，并返回数据")])]),t._v(" "),s("p",[t._v("这个token必须要在每次请求时传递给服务端，它应该保存在请求头里， 另外，服务端要支持"),s("code",[t._v("CORS(跨来源资源共享)")]),t._v("策略，一般我们在服务端这么做就可以了"),s("code",[t._v("Access-Control-Allow-Origin: *")]),t._v("。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/about-notes/media/jwt.png",alt:"jwt"}})]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Token 应该被保存起来,放到 local / session stograge 或者 cookies.")])]),t._v(" "),s("li",[s("p",[t._v("Tokens像 cookie 一样有有效期，你可以有更多的操作方法")])]),t._v(" "),s("li",[s("p",[t._v("XSS 比 XSRF 要更容易防范")])])]),t._v(" "),s("blockquote",[s("p",[t._v("XSS 攻击的原理是，攻击者插入一段可执行的 JavaScripts 脚本，该脚本会读出用户浏览器的 cookies 并将它传输给攻击者，攻击者得到用户的 Cookies 后，即可冒充用户。")])]),t._v(" "),s("p",[t._v("但是要防范 XSS 也很简单，在写入 cookies 时，将 HttpOnly 设置为 true，客户端 JavaScripts 就无法读取该 cookies 的值，就可以有效防范 XSS 攻击。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("在客户端，可以使用 textContent 来代替 innerHTML 以阻止浏览器运行通过 HTML 解析器执行内部脚本得到的字符串。")])]),t._v(" "),s("li",[s("p",[t._v("在服务器端，转义 HTML 标签可以阻止浏览器将用户的输入解析为真实的 HTML，这样也不会执行脚本。但如果你想真实的展现用户的输入，那就只能对会被注入的标签、标签属性进行过滤。")])])]),t._v(" "),s("p",[t._v("因为 Tokens 也是储存在本地的 session storage 或者是客户端的 cookies 中，也是会受到 XSS 攻击。所以在使用 tokens 的时候，必须要考虑过期机制，不然攻击者就可以永久持有受害用户帐号。")]),t._v(" "),s("ul",[s("li",[t._v("因为json的通用性，所以JWT是可以进行跨语言支持的，像JAVA,JavaScript,NodeJS,PHP等很多语言都可以使用。")]),t._v(" "),s("li",[t._v("因为有了payload部分，所以JWT可以在自身存储一些其他业务逻辑所必要的非敏感信息。")]),t._v(" "),s("li",[t._v("便于传输，jwt的构成非常简单，字节占用很小，所以它是非常便于传输的。")]),t._v(" "),s("li",[t._v("它不需要在服务端保存会话信息, 所以它易于应用的扩展")])]),t._v(" "),s("h2",{attrs:{id:"jwt-三部分组成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jwt-三部分组成","aria-hidden":"true"}},[t._v("#")]),t._v(" JWT 三部分组成")]),t._v(" "),s("p",[t._v("第一部分我们称它为头部（header),第二部分我们称其为载荷（payload, 类似于飞机上承载的物品)，第三部分是签证，并有签证的到期时间（signature).")]),t._v(" "),s("h3",{attrs:{id:"header"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#header","aria-hidden":"true"}},[t._v("#")]),t._v(" header")]),t._v(" "),s("p",[t._v("jwt的头部承载两部分信息：")]),t._v(" "),s("ul",[s("li",[t._v("声明类型，这里是jwt")]),t._v(" "),s("li",[t._v("声明加密的算法 通常直接使用 HMAC SHA256")])]),t._v(" "),s("p",[t._v("完整的头部就像下面这样的JSON：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  'typ'"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'JWT'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  'alg'"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 'HS256'\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("然后将头部进行base64加密（该加密是可以对称解密的),构成了第一部分.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9\n")])])]),s("h3",{attrs:{id:"playload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#playload","aria-hidden":"true"}},[t._v("#")]),t._v(" playload")]),t._v(" "),s("p",[t._v("载荷就是存放有效信息的地方。这个名字像是特指飞机上承载的货品，这些有效信息包含三个部分")]),t._v(" "),s("ul",[s("li",[t._v("标准中注册的声明")]),t._v(" "),s("li",[t._v("公共的声明")]),t._v(" "),s("li",[t._v("私有的声明")])]),t._v(" "),s("p",[s("strong",[t._v("标准中注册的声明")]),t._v(" (建议但不强制使用) ：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("iss")]),t._v(": jwt签发者")]),t._v(" "),s("li",[s("strong",[t._v("sub")]),t._v(": jwt所面向的用户")]),t._v(" "),s("li",[s("strong",[t._v("aud")]),t._v(": 接收jwt的一方")]),t._v(" "),s("li",[s("strong",[t._v("exp")]),t._v(": jwt的过期时间，这个过期时间必须要大于签发时间")]),t._v(" "),s("li",[s("strong",[t._v("nbf")]),t._v(": 定义在什么时间之前，该jwt都是不可用的.")]),t._v(" "),s("li",[s("strong",[t._v("iat")]),t._v(": jwt的签发时间")]),t._v(" "),s("li",[s("strong",[t._v("jti")]),t._v(": jwt的唯一身份标识，主要用来作为一次性token,从而回避重放攻击。")])]),t._v(" "),s("p",[s("strong",[t._v("公共的声明")]),t._v(" ：\n公共的声明可以添加任何的信息，一般添加用户的相关信息或其他业务需要的必要信息.但不建议添加敏感信息，因为该部分在客户端可解密.")]),t._v(" "),s("p",[s("strong",[t._v("私有的声明")]),t._v(" ：\n私有声明是提供者和消费者所共同定义的声明，一般不建议存放敏感信息，因为base64是对称解密的，意味着该部分信息可以归类为明文信息。")]),t._v(" "),s("p",[t._v("定义一个payload:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sub"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234567890"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John Doe"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"admin"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("然后将其进行base64加密，得到Jwt的第二部分。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9\n")])])]),s("h3",{attrs:{id:"signature"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#signature","aria-hidden":"true"}},[t._v("#")]),t._v(" signature")]),t._v(" "),s("p",[t._v("jwt的第三部分是一个签证信息，这个签证信息由三部分组成：")]),t._v(" "),s("ul",[s("li",[t._v("header (base64后的)")]),t._v(" "),s("li",[t._v("payload (base64后的)")]),t._v(" "),s("li",[t._v("secret")])]),t._v(" "),s("p",[t._v("这个部分需要base64加密后的header和base64加密后的payload使用"),s("code",[t._v(".")]),t._v("连接组成的字符串，然后通过header中声明的加密方式进行校验"),s("code",[t._v("secret")]),t._v("组合加密，然后就构成了jwt的第三部分。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// javascript")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" encodedString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("base64UrlEncode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("header"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("base64UrlEncode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("payload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" signature "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HMACSHA256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encodedString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'secret'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ")]),t._v("\n")])])]),s("p",[t._v("将这三部分用"),s("code",[t._v(".")]),t._v("连接成一个完整的字符串,构成了最终的jwt:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ\n")])])]),s("p",[s("strong",[t._v("注意")]),t._v("：secret是保存在服务器端的，jwt的签发生成也是在服务器端的，secret就是用来进行jwt的签发和jwt的验证，所以，它就是你服务端的私钥，在任何场景都不应该流露出去。一旦客户端得知这个secret, 那就意味着客户端是可以自我签发jwt了。")]),t._v(" "),s("h3",{attrs:{id:"如何应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何应用","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何应用")]),t._v(" "),s("p",[t._v("一般是在请求头里加入"),s("code",[t._v("Authorization")]),t._v("，并加上"),s("code",[t._v("Bearer")]),t._v("标注：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'api/user/1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  headers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Bearer '")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" token\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("koa 中使用 koa-jwt jwt自动校验 使用后不用在每个路由下手写校验方法")]),t._v(" "),s("p",[t._v("koa 中使用 jsonwebtoken jwt实现 生成 jwt token")])]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考1"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/post/58da720b570c350058ecd40f",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考2"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.jianshu.com/p/576dbf44b2ae",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考3"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html")])])},[],!1,null,null,null);a.default=n.exports}}]);