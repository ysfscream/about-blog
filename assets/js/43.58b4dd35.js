(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{368:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"css-响应式图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-响应式图片","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS 响应式图片")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./test.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("img")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("width: 1200px; 规定了图片的宽度。这里我们只规定了宽度而没有规定高度是因为，对于 img 标签而言，如果我们只规定高度和宽度中的一个的话，没有规定的那一个会根据图片本身的比例进行自适应，也就是说可以保证图片的比例不变。")]),t._v(" "),a("p",[t._v("max-width: 100% 才是实现响应式的关键。这句代码的意思是，图片的最大宽度不能超过 100% 。这个 100% 是相对于其父元素来说的。在本例中， img 标签的父元素是 body 标签，所以它的意思其实是 img 的宽度不能超过 body 的宽度，而body 的宽度实际上就是浏览器窗口可见区域的宽度啦。这个时候我们可以分两种情况来讨论：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("当浏览器的宽度大于或等于1200px 时，因为图片的宽度为 1200px ，满足“图片的宽度不能大于其父元素的宽度”这一限制条件，所以图片保持宽度 1200px 不变。")])]),t._v(" "),a("li",[a("p",[t._v("当浏览器的宽度小于 1200px 时，此时不满足“图片的宽度不能大于其父元素的宽度”这一限制条件，所以图片会缩小到满足条件为止，最后的结果就是图片的宽度会等于浏览器的宽度。这就是为什么图片会随着窗口的变窄而变小了。")])])])])}],!1,null,null,null);e.options.__file="CSS 响应式图片.md";s.default=e.exports}}]);