(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{301:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"flutter-widget"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flutter-widget","aria-hidden":"true"}},[t._v("#")]),t._v(" Flutter widget")]),t._v(" "),s("h2",{attrs:{id:"cliprrect-widget"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cliprrect-widget","aria-hidden":"true"}},[t._v("#")]),t._v(" ClipRRect Widget")]),t._v(" "),s("blockquote",[s("p",[t._v("如果想让矩形的 Widget 变圆角，可以使用该 widget")])]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ClipRRect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n borderRadius"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   BorderRadius"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("circular")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyDishPicWidget")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("如果想切圆形可以使用ClipOval，切路径可以使用ClipPath;")]),t._v(" "),s("h2",{attrs:{id:"align"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#align","aria-hidden":"true"}},[t._v("#")]),t._v(" Align")]),t._v(" "),s("blockquote",[s("p",[t._v("Align一般都是当做一个控件的属性，设置child的对齐方式，例如居中、居左居右等，并根据child尺寸调节自身尺寸。")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("当widthFactor和heightFactor为null的时候，当其有限制条件的时候，Align会根据限制条件尽量的扩展自己的尺寸，当没有限制条件的时候，会调整到child的尺寸；")])]),t._v(" "),s("li",[s("p",[t._v("当widthFactor或者heightFactor不为null的时候，Aligin会根据factor属性，扩展自己的尺寸，例如设置widthFactor为2.0的时候，那么，Align的宽度将会是child的两倍。")])]),t._v(" "),s("li",[s("p",[t._v("alignment 对齐方式，一般会使用系统默认提供的9种方式，但是并不是说只有这9种，系统提供的9种方式只是预先定义好的。")])])]),t._v(" "),s("p",[s("code",[t._v("top center bottom")])]),t._v(" "),s("p",[s("code",[t._v("left center right")])]),t._v(" "),s("p",[t._v("也可以自定义："),s("code",[t._v("Aligment(1.0, 1.0)")])]),t._v(" "),s("p",[t._v("Alignment实际上是包含了两个属性的，其中第一个参数，-1.0是左边对齐，1.0是右边对齐，第二个参数，-1.0是顶部对齐，1.0是底部对齐。根据这个规则，也可以自定义对齐方式.")]),t._v(" "),s("h2",{attrs:{id:"padding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#padding","aria-hidden":"true"}},[t._v("#")]),t._v(" Padding")]),t._v(" "),s("ul",[s("li",[t._v("EdgeInsets.symmetric(vertical: 20, horizontal: 10) ，可以指定垂直和水平方向的边距，也可以单独指定垂直或者水平方向的边距")])]),t._v(" "),s("h2",{attrs:{id:"transiton"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transiton","aria-hidden":"true"}},[t._v("#")]),t._v(" transiton")]),t._v(" "),s("ul",[s("li",[t._v("包含的 widget 有 FadeTransiton, ScaleTransiton, RotationTransition")])]),t._v(" "),s("h2",{attrs:{id:"layoutbuilder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#layoutbuilder","aria-hidden":"true"}},[t._v("#")]),t._v(" Layoutbuilder")]),t._v(" "),s("ul",[s("li",[t._v("如要获得某一 Widget 的尺寸范围，只需给它包裹一层 LayoutBuilder 的 Widget; 在构建前如果需要确定小部件有多大则可以使用LayoutBuilder;")])]),t._v(" "),s("h2",{attrs:{id:"mediaquery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mediaquery","aria-hidden":"true"}},[t._v("#")]),t._v(" MediaQuery")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以获取到屏幕的转向")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Orientation orientation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" MediaQuery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("of")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("orientation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 竖屏方向")]),t._v("\norientation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Orientation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("portrait\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 横屏方向")]),t._v("\norientation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" Orientation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("landscape\n")])])]),s("h2",{attrs:{id:"safearea"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#safearea","aria-hidden":"true"}},[t._v("#")]),t._v(" SafeArea")]),t._v(" "),s("p",[t._v("在刘海屏幕中，显示位置不是我们期待的。大部分刘海区域不是我们所触发按钮的区域。直接写会出现内容占到刘海屏的情况，这时我们可以使用SafeArea Widget来很好的解决这个问题。")]),t._v(" "),s("div",{staticClass:"language-dart extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dart"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FlutterAlign")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StatelessWidget")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token metadata symbol"}},[t._v("@override")]),t._v("\n  Widget "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BuildContext context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SafeArea")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Align")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        alignment"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Alignment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Container")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n          child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Text")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这个Widget也能很好的处理iPhone X类似的底部bottom的区域。")])])},[],!1,null,null,null);a.default=e.exports}}]);