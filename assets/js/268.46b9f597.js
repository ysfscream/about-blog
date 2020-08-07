(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{305:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"ts-迁移策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ts-迁移策略","aria-hidden":"true"}},[t._v("#")]),t._v(" TS 迁移策略")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://juejin.im/post/5d591d8a6fb9a06aee362f29",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://juejin.im/post/5d591d8a6fb9a06aee362f29"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"混合使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#混合使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 混合使用")]),t._v(" "),e("p",[t._v("配置选项中（allowJS）允许 JS 和 TS 文件共存，可以在迁移的时候保证页面没有被破坏，我们不需要暂停开发而去迁移整个项目，我们可以一步步来，我们可以挨个迁移文件。我们会重复这个过程，直到整个项目被迁移。")]),t._v(" "),e("h2",{attrs:{id:"迁移技巧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#迁移技巧","aria-hidden":"true"}},[t._v("#")]),t._v(" 迁移技巧")]),t._v(" "),e("ul",[e("li",[t._v("any 大法")])]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("$TSFixed")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("greet")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" $TSFixed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("第一个是 $TSFix，我们通过 TypeScript 的 any 类型添加了一个全局类型别名，这意味着它可以为任何类型。\n我们将它称之为 $TSFixed，表明在代码向 TypeScript 迁移完成后，再来将类型修正。\n平时最佳实践是避免使用 any，因为它会造成类型安全丢失，但它在迁移过程中会很有帮助。")]),t._v(" "),e("ul",[e("li",[t._v("@ts-ignore 注释")])]),t._v(" "),e("p",[t._v("使用 @ts-ignore 注解可以做到忽略下一行错误。\n正确地输入一个文件可能涉及一些深层依赖链解析 — 类似于复杂对象。\n我们可以尝试通过首先转换子文件来避免这种情况，但有时这是不可避免的。\n因此，$TSFixed 和 @ts-ignore 注释能够帮助拆分这些内容，同时则会增加这些检查工作。\n这些都是暂时的，我们计划添加类型覆盖工具，在我们后面做类型改进时提供帮助。")]),t._v(" "),e("h2",{attrs:{id:"all-in-ts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#all-in-ts","aria-hidden":"true"}},[t._v("#")]),t._v(" All in TS")]),t._v(" "),e("p",[t._v("通过类型逐步改进（以上方法全改），比通过文件逐步改进更为简单（两种策略的对比）。")]),t._v(" "),e("p",[t._v("如果你正在开发一个新功能，你只需要关注新添加的类型，然后简单的修复这个它即可。而不是先转换整个文件来修复所有错误，然后再添加你所需要类型。")]),t._v(" "),e("p",[t._v("对于大规模代码修改而言，Codemods 是一种十分强大的工具。或使用 AST 抽象语法树")]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("在将 JavaScript 代码迁移到 TypeScript 时，有这几种模式。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("对于 React 组件，我们一次次的将静态类属性移动到 class body里面。创建一个 PropsType 表示 React 生命周期方法。")])]),t._v(" "),e("li",[e("p",[t._v("我们将它们编码为Codemod，以便我们可以在更多代码上重复运行它们。\n我们通过使用一个叫作 TS Migrate 的工具来将它们进行打包，这个工具的功能是传入一个 JS 项目，然后得到一个编译好的 TS 项目。\n随着时间的推移，你仍然需要慢慢找到类型，但它为你提供了一个工作前提。")])]),t._v(" "),e("li",[e("p",[t._v("我们有内部的类型定义库（DefinitelyTyped），但是因为 React 公共组件库的快速发展，所以做到与时俱进地更新太难了")])])]),t._v(" "),e("p",[t._v("与其怨天尤人不如接受现状，只有通过行动才能发生积极的改变。")]),t._v(" "),e("p",[t._v("所以我鼓励你去追求那些可以让你对组织充满激情的事情，让你和你周围的人的生活变得更好。")])])},[],!1,null,null,null);a.default=r.exports}}]);