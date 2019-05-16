(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{186:function(t,n,s){"use strict";s.r(n);var e=s(0),a=Object(e.a)({},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("[Vue.nextTick( "),s("a",{attrs:{href:"https://cn.vuejs.org/v2/api/#Vue-nextTick",target:"_blank",rel:"noopener noreferrer"}},[t._v("callback, context] )"),s("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/post/5a6fdb846fb9a01cc0268618",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.im/post/5a6fdb846fb9a01cc0268618"),s("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])},[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"vue-nexttick-方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue-nexttick-方法","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue nextTick 方法")])},function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ul",[s("li",[s("p",[s("strong",[t._v("参数")]),t._v("：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("{Function} [callback]")])]),t._v(" "),s("li",[s("code",[t._v("{Object} [context]")])])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("用法")]),t._v("：")]),t._v(" "),s("p",[t._v("在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改数据")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOM 还没有更新")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOM 更新了")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 作为一个 Promise 使用 (2.1.0 起新增，详见接下来的提示)")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOM 更新了")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("在Vue生命周期的"),n("code",[this._v("created()")]),this._v("钩子函数进行的DOM操作一定要放在"),n("code",[this._v("Vue.nextTick()")]),this._v("的回调函数中")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进"),n("code",[this._v("Vue.nextTick()")]),this._v("的回调函数中。")])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("应用场景")]),this._v("：需要在视图更新之后，基于新的视图进行操作。")])}],!1,null,null,null);a.options.__file="Vue nextTick 方法.md";n.default=a.exports}}]);