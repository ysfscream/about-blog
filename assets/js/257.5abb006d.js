(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{245:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("blockquote",[a("p",[t._v("参考 —>  "),a("a",{attrs:{href:"https://cn.vuejs.org/v2/style-guide/#Prop-%E5%AE%9A%E4%B9%89-%E5%BF%85%E8%A6%81",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue.js 官方指南"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("只是为了方便自己在项目应用时查阅 详细看官方文档")])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._m(39)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"vue-风格指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-风格指南","aria-hidden":"true"}},[this._v("#")]),this._v(" Vue 风格指南")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"必要的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#必要的","aria-hidden":"true"}},[this._v("#")]),this._v(" 必要的")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("组件名为多个单词 根组件"),a("code",[t._v("App")]),t._v("除外")])]),t._v(" "),a("li",[a("p",[t._v("组件数据")]),t._v(" "),a("p",[t._v("组件 "),a("code",[t._v("data")]),t._v(" 必须是一个函数，当在组件中使用 "),a("code",[t._v("data")]),t._v(" 属性的时候 (除了 "),a("code",[t._v("new Vue")]),t._v(" 外的任何地方)，它的值必须是返回一个对象的函数。"),a("strong",[t._v("当 "),a("code",[t._v("data")]),t._v(" 的值是一个对象时，它会在这个组件的所有实例之间共享，修改一个值 影响其他组件")])])]),t._v(" "),a("li",[a("p",[t._v("Prop 定义 （组件传值）尽量详细")]),t._v(" "),a("p",[t._v("至少指定传值的类型")])]),t._v(" "),a("li",[a("p",[t._v("v-for 设置键值 key")])]),t._v(" "),a("li",[a("p",[t._v("避免 v-if 和 v-for 一起使用")])]),t._v(" "),a("li",[a("p",[t._v("为组件样式设置作用域（scoped, css Modules, BEM）")])]),t._v(" "),a("li",[a("p",[t._v("私有属性名")]),t._v(" "),a("p",[a("strong",[t._v("在插件、混入等扩展中始终为自定义的私有属性使用 $_ 前缀。并附带一个命名空间以回避和其它作者的冲突 (比如 $"),a("em",[t._v("yourPluginName")]),t._v(")。")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"强烈推荐的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#强烈推荐的","aria-hidden":"true"}},[this._v("#")]),this._v(" 强烈推荐的")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("只要有能够拼接文件的构建系统，就把每个组件单独分成文件。")])]),t._v(" "),a("li",[a("p",[t._v("单文件组件文件的大小写。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("MyComponent.vue\nmy-component.vue\n")])])])]),t._v(" "),a("li",[a("p",[t._v("应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("components"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" BaseButton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" BaseTable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" BaseIcon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n\ncomponents"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" AppButton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" AppTable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" AppIcon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n\ncomponents"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" VButton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" VTable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" VIcon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n")])])])]),t._v(" "),a("li",[a("p",[t._v("只应该拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性。")]),t._v(" "),a("p",[t._v("这不意味着组件只可用于一个单页面，而是"),a("em",[t._v("每个页面")]),t._v("只使用一次。这些组件永远不接受任何 prop，因为它们是为你的应用定制的，而不是它们在你的应用中的上下文。如果你发现有必要添加 prop，那就表明这实际上是一个可复用的组件，"),a("em",[t._v("只是目前")]),t._v("在每个页面里只使用一次。")])]),t._v(" "),a("li",[a("p",[t._v("和父组件紧密耦合的子组件应该以父组件名作为前缀命名。")]),t._v(" "),a("p",[t._v("​")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("components"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" TodoList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" TodoListItem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" TodoListItemButton"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n\ncomponents"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" SearchSidebar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" SearchSidebarNavigation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n")])])])]),t._v(" "),a("li",[a("p",[t._v("组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。")]),t._v(" "),a("p",[t._v("​")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("components"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" SearchButtonClear"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" SearchButtonRun"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" SearchInputQuery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" SearchInputExcludeGlob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" SettingsCheckboxTerms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" SettingsCheckboxLaunchOnStartup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vue\n")])])])]),t._v(" "),a("li",[a("p",[t._v("模板中的组件名大小写")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("<")]),this._v("my-component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("</")]),this._v("my-component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(">")])]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("JS 和 JSX 中的组件名大小写")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" MyComponents "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./MyComponents'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MyComponents'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("组件名应该倾向于完整单词而不是缩写。")]),this._v(" "),s("li",[this._v("Prop 名大小写")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("my-component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":greeting-text")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\nprops: {\n\tgreetingText: String,\n}\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("多个特性的元素分行撰写，当单行太长时，每个特性一行")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MyComponent")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bar")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("baz")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("模板中的表达式应该简单，太复杂的应该写在重构为计算属性或者方法")]),this._v(" "),s("li",[this._v("复杂的计算属性分割为尽可能多的更简单的属性")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("computed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  basePrice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("manufactureCost "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("profitMargin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  discount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("basePrice "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("discountPercent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  finalPrice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("basePrice "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("discount\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v(":")]),this._v(" ---\x3e "),s("code",[this._v("v-bind")]),this._v(" "),s("code",[this._v("@")]),this._v(" —> "),s("code",[this._v("v-on")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"一般推荐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一般推荐","aria-hidden":"true"}},[this._v("#")]),this._v(" 一般推荐")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"元素特性顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#元素特性顺序","aria-hidden":"true"}},[this._v("#")]),this._v(" 元素特性顺序")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("定义")]),this._v(" (提供组件的选项)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("is")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("列表渲染")]),this._v(" (创建多个变化的相同元素)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("v-for")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("条件渲染")]),this._v(" (元素是否渲染/显示)")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("code",[t._v("v-if")])]),t._v(" "),a("li",[a("code",[t._v("v-else-if")])]),t._v(" "),a("li",[a("code",[t._v("v-else")])]),t._v(" "),a("li",[a("code",[t._v("v-show")])]),t._v(" "),a("li",[a("code",[t._v("v-cloak")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("渲染方式")]),this._v(" (改变元素的渲染方式)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("v-pre")])]),this._v(" "),s("li",[s("code",[this._v("v-once")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("全局感知")]),this._v(" (需要超越组件的知识)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("id")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("唯一的特性")]),this._v(" (需要唯一值的特性)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("ref")])]),this._v(" "),s("li",[s("code",[this._v("key")])]),this._v(" "),s("li",[s("code",[this._v("slot")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("双向绑定")]),this._v(" (把绑定和事件结合起来)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("v-model")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("其它特性")]),this._v(" (所有普通的绑定或未绑定的特性)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("事件")]),this._v(" (组件事件监听器)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("v-on")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("内容")]),this._v(" (复写元素的内容)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("v-html")])]),this._v(" "),s("li",[s("code",[this._v("v-text")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"谨慎使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#谨慎使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 谨慎使用")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("元素选择器应该避免在 scoped 中出现。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[t._v("// 不好的 可以在 Button 里加入 class 设置其样式\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("X"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scoped")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style language-css"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("应该优先通过 Vuex 管理全局状态，而不是通过 this.$root 或一个全局事件总线。")])]),this._v(" "),s("li",[s("p",[this._v("分解组件的为逻辑块")]),this._v(" "),s("ul",[s("li",[s("p",[this._v("如果你的数据 /HTML 在模板的一个部分中不断变化，那么整个模板都需要检查和更新。但是，如果将相同的 HTML 放入它自己的组件中，并使用 props 传递数据，那么当它的 props 发生更改时，只有那个组件才会更新。")])]),this._v(" "),s("li",[s("p",[this._v("另一种从逻辑上分解组件的方法是重用。如果你的 HTML、图形或功能在整个应用程序中始终如一地使用，比如按钮、复选框、徽标动画、操作调用或文本简单变化的图形，那么它们就是可以隔离到一个可重用的新组件中的很好的候选项。可重用组件具有易于维护的潜在好处，因为你可以更改一个组件，而不必在代码库中查找替换和更改多个地方。")])])])])])}],!1,null,null,null);n.options.__file="Vue 风格指南.md";s.default=n.exports}}]);