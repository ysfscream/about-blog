(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{203:function(t,n,a){"use strict";a.r(n);var s=a(0),e=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"react-生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-生命周期","aria-hidden":"true"}},[t._v("#")]),t._v(" React 生命周期")]),t._v(" "),a("blockquote",[a("p",[t._v("React.js 将组件渲染，并且构造 DOM 元素然后塞入页面的过程称为组件的挂载")])]),t._v(" "),a("h2",{attrs:{id:"具体流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#具体流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 具体流程")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Com")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentWillMount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 然后构造 DOM 元素插入页面")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidMount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 即将从页面中删除")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentWillUnmount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("componentWillMount 和 componentDidMount 都是可以像 render 方法一样自定义在组件的内部。挂载的时候，React.js 会在组件的 render 之前调用")]),t._v(" "),a("ul",[a("li",[t._v("componentWillMount：组件挂载开始之前，也就是在组件调用 render 方法之前调用。")]),t._v(" "),a("li",[t._v("componentDidMount：组件挂载完成以后，也就是 DOM 元素已经插入页面后调用。")]),t._v(" "),a("li",[t._v("componentWillUnmount：组件对应的 DOM 元素从页面中删除之前调用。")])]),t._v(" "),a("h3",{attrs:{id:"关于更新阶段的组件生命周期："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于更新阶段的组件生命周期：","aria-hidden":"true"}},[t._v("#")]),t._v(" 关于更新阶段的组件生命周期：")]),t._v(" "),a("ul",[a("li",[t._v("shouldComponentUpdate(nextProps, nextState)：你可以通过这个方法控制组件是否重新渲染。如果返回 false 组件就不会重新渲染。这个生命周期在 React.js 性能优化上非常有用。")]),t._v(" "),a("li",[t._v("componentWillReceiveProps(nextProps)：组件从父组件接收到新的 props 之前调用。")]),t._v(" "),a("li",[t._v("componentWillUpdate()：组件开始重新渲染之前调用。")]),t._v(" "),a("li",[t._v("componentDidUpdate()：组件重新渲染并且把更改变更到真实的 DOM 以后调用。")])]),t._v(" "),a("h2",{attrs:{id:"作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用","aria-hidden":"true"}},[t._v("#")]),t._v(" 作用")]),t._v(" "),a("ul",[a("li",[t._v("一些组件启动的动作，包括像 Ajax 数据的拉取操作、一些定时器的启动等，就可以放在 componentWillMount 里面进行")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentWillMount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ajax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/v1/test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("一些组件销毁时，比如清除定时器等 可以在 componentWillUnmount 里面进行")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentWillUnmount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("我们一般会把组件的 state 的初始化工作放在 constructor 里面去做；在 componentWillMount 进行组件的启动工作，例如 Ajax 数据拉取、定时器的启动；组件从页面上销毁的时候，有时候需要一些数据的清理，例如定时器的清理，就会放在 componentWillUnmount 里面去做。")]),t._v(" "),a("h2",{attrs:{id:"生命周期的不同阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期的不同阶段","aria-hidden":"true"}},[t._v("#")]),t._v(" 生命周期的不同阶段")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Initialization：在这个阶段，组件准备设置初始化状态和默认属性。")])]),t._v(" "),a("li",[a("p",[t._v("Mounting：react 组件已经准备装载到 DOM 上。这个阶段包含 getDerivedStateFromProps 和 componentDidMount 生命周期方法。")])]),t._v(" "),a("li",[a("p",[t._v("Updating：在这个阶段，组件通过两种方式进行更新，发送新的属性和更新状态。这个阶段包含 getDerivedStateFromProps，shouldComponentUpdate，getSnapshotBeforeUpdate 和 componentDidUpdate 生命周期方法。")])]),t._v(" "),a("li",[a("p",[t._v("Unmounting：在这个阶段，组件已经不再被需要了，他从浏览器 DOM 中卸载下来。这个阶段包含 componentWillUnmount 生命周期方法。")])]),t._v(" "),a("li",[a("p",[t._v("Error Handling：在这个阶段，不论在渲染的过程中，还是在生命周期方法中或是在任何子组件的构造函数中发生错误，该组件都会被调用。这个阶段包含了 componentDidCatch 生命周期方法。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"/about-notes/media/React-1.jpg",alt:"react"}})])])}],!1,null,null,null);e.options.__file="React 生命周期.md";n.default=e.exports}}]);