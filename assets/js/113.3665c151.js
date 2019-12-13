(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{328:function(a,t,s){"use strict";s.r(t);var n=s(0),e=Object(n.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"go-记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#go-记录","aria-hidden":"true"}},[a._v("#")]),a._v(" Go 记录")]),a._v(" "),s("h2",{attrs:{id:"import"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import","aria-hidden":"true"}},[a._v("#")]),a._v(" import")]),a._v(" "),s("ul",[s("li",[a._v("点操作 我们有时候会看到如下的方式导入包")])]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"fmt"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("这个点操作的含义就是这个包导入之后在你调用这个包的函数时，你可以省略前缀的包名，也就是前面你调")]),a._v(" "),s("p",[a._v("用的 "),s("code",[a._v('fmt.Println("hello world")')]),a._v(" 可以省略的写成 "),s("code",[a._v('Println("hello world")')])]),a._v(" "),s("ul",[s("li",[a._v("别名操作 别名操作顾名思义我们可以把包命名成另一个我们用起来容易记忆的名字")])]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n  f "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"fmt"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("别名操作的话调用包函数时前缀变成了我们的前缀，即"),s("code",[a._v('f.Println("hello world")')])]),a._v(" "),s("ul",[s("li",[s("code",[a._v("_")]),a._v("操作 这个操作经常是让很多人费解的一个操作符，请看下面这个import")])]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"database/sql"')]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("_")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"github.com/ziutek/mymysql/godrv"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("_操作其实是引入该包，而不直接使用包里面的函数，而是调用了该包里面的init函数")]),a._v(" "),s("h2",{attrs:{id:"cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli","aria-hidden":"true"}},[a._v("#")]),a._v(" CLI")]),a._v(" "),s("p",[a._v("多个命令源码文件虽然可以分开单独 go run 运行起来，但是无法通过 go build 和 go install")]),a._v(" "),s("p",[a._v("同理，如果命令源码文件和库源码文件也会出现这样的问题，库源码文件不能通过 go build 和 go install 这种常规的方法编译和安装")]),a._v(" "),s("p",[a._v("所以命令源码文件应该是被单独放在一个代码包中。")]),a._v(" "),s("h3",{attrs:{id:"命令源码文件和库源码文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令源码文件和库源码文件","aria-hidden":"true"}},[a._v("#")]),a._v(" 命令源码文件和库源码文件")]),a._v(" "),s("p",[a._v("命令源码文件是可以单独运行的。可以使用 go run 命令直接运行，也可以通过 go build 或 go install 命令得到相应的可执行文件。所以命令源码文件是可以在机器的任何目录下运行的。")]),a._v(" "),s("p",[a._v("比如平时我们在 LeetCode 上刷算法题，这时候写的就是一个程序，这就是命令源码文件，可以在电脑的任意一个文件夹新建一个 go 文件就可以开始刷题了，写完就可以运行，对比执行结果，答案对了就可以提交代码。")]),a._v(" "),s("p",[a._v("但是公司项目里面的代码就不能这样了，只能存放在 GOPATH 目录下。因为公司项目不可能只有命令源码文件的，肯定是包含库源码文件，甚至包含测试源码文件的。")]),a._v(" "),s("h3",{attrs:{id:"fmt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fmt","aria-hidden":"true"}},[a._v("#")]),a._v(" fmt")]),a._v(" "),s("p",[a._v("使用go fmt命令，更多时候是用gofmt，而且需要参数-w，否则格式化结果不会写入文件。gofmt -w src，可以格式化整个项目。")]),a._v(" "),s("h2",{attrs:{id:"语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[a._v("#")]),a._v(" 语法")]),a._v(" "),s("h3",{attrs:{id:"变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量","aria-hidden":"true"}},[a._v("#")]),a._v(" 变量")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[a._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" value\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\nc "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\n")])])]),s("blockquote",[s("p",[a._v("这种方式它只能被用在函数体内，而不可以用于全局变量的声明与赋值")])]),a._v(" "),s("p",[a._v("第一种，以逗号分隔，声明与赋值分开，若不赋值，存在默认值")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" name1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" name2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" name3 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("type")]),a._v("\nname1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" name2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" name3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" v1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" v2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" v3\n")])])]),s("p",[a._v("第二种，直接赋值，下面的变量类型可以是不同的类型")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" name1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" name2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" name3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" v1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" v2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" v3\n")])])]),s("p",[a._v("第三种，集合类型")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    name1 type1\n    name2 type2\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("简短定义方式，不能定义全局变量。\n变量的零值。也叫默认值。\n变量定义了就要使用，否则无法通过编译。")]),a._v(" "),s("h3",{attrs:{id:"常量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常量","aria-hidden":"true"}},[a._v("#")]),a._v(" 常量")]),a._v(" "),s("p",[a._v("常量可以作为枚举，常量组")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    Unknown "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n    Female "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n    Male "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h3",{attrs:{id:"iota"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iota","aria-hidden":"true"}},[a._v("#")]),a._v(" iota")]),a._v(" "),s("p",[a._v("iota，特殊常量，可以认为是一个可以被编译器修改的常量")]),a._v(" "),s("p",[a._v("iota 可以被用作枚举值：")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("iota")]),a._v("\n    b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("iota")]),a._v("\n    c "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("iota")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("第一个 iota 等于 0，每当 iota 在新的一行被使用时，它的值都会自动加 1；所以 a=0, b=1, c=2 可以简写为如下形式：")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n    a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("iota")]),a._v("\n    b\n    c\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("如果中断iota自增，则必须显式恢复。且后续自增值按行序递增")]),a._v(" "),s("p",[a._v("自增默认是int类型，可以自行进行显示指定类型")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"fmt"')]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("func")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n        a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("iota")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//0")]),a._v("\n        b          "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//1")]),a._v("\n        c          "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//2")]),a._v("\n        d "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ha"')]),a._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//独立值，iota += 1")]),a._v("\n        e          "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v('//"ha"   iota += 1')]),a._v("\n        f "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),a._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//iota +=1")]),a._v("\n        g          "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//100  iota +=1")]),a._v("\n        h "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("iota")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//7,恢复计数")]),a._v("\n        i          "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//8")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("g"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("结果：")]),a._v(" "),s("p",[s("code",[a._v("0 1 2 ha ha 100 100 7 8")])]),a._v(" "),s("h3",{attrs:{id:"数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组","aria-hidden":"true"}},[a._v("#")]),a._v(" 数组")]),a._v(" "),s("p",[a._v("声明和初始化数组，需要指明数组的大小和存储的数据类型，数组一旦定义后，大小不能更改。")]),a._v(" "),s("p",[a._v("数组是值类型 Go中的数组是值类型，而不是引用类型。这意味着当它们被分配给一个新变量时，将把原始数组的副本分配给新变量。如果对新变量进行了更改，则不会在原始数组中反映。")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" variable_name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("SIZE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" variable_type\nvariable_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("variable_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("values"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" balance "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("float32")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" balance "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("float32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("7.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("50.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("初始化数组中 {} 中的元素个数不能大于 [] 中的数字。 如果忽略 [] 中的数字不设置数组大小，Go 语言会根据元素的个数来设置数组的大小")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" balance "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("float32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("7.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("50.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"切片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切片","aria-hidden":"true"}},[a._v("#")]),a._v(" 切片")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[a._v("s "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("int")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[a._v("s "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("startIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("endIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("p",[a._v("将arr中从下标startIndex到endIndex-1 下的元素创建为一个新的切片（前闭后开），长度为endIndex-startIndex")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[a._v("s "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("startIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("p",[a._v("缺省endIndex时将表示一直到arr的最后一个元素")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[a._v("s "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("endIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("p",[a._v("缺省startIndex时将表示从arr的第一个元素开始")]),a._v(" "),s("p",[s("strong",[a._v("修改切片后的数据，原数组数据也将被更改")]),a._v("。")]),a._v(" "),s("p",[a._v("但是 "),s("code",[a._v("copy")]),a._v(" 方法是不会建立两个切片的联系的。")]),a._v(" "),s("p",[a._v("len() 方法获取长度 切片提供了计算容量的方法 cap() 可以测量切片最长可以达到多少")]),a._v(" "),s("h3",{attrs:{id:"map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#map","aria-hidden":"true"}},[a._v("#")]),a._v(" Map")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[a._v("rating "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("float32")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"C"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Go"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Python"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"C++"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" countryCapitalMap "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("string")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* 创建集合 */")]),a._v("\ncountryCapitalMap "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\ncountryCapitalMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"China"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Beijing"')]),a._v("\n")])])]),s("p",[a._v("delete(map, key) 函数用于删除集合的元素")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("delete")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("countryCapitalMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Japan"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("我们可以通过key获取map中对应的value值。但是当key如果不存在的时候，我们会得到该value值类型的默认值，比如string类型得到空字符串，int类型得到0。但是程序不会报错。")]),a._v(" "),s("p",[a._v("使用ok-idiom获取值，可知道key/value是否存在")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[a._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" ok "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" ok "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" countryCapitalMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"India"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\ntwo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" ok "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":=")]),a._v(" countryCapitalMap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Japan"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// New Delhi true")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// '' false")]),a._v("\n")])])]),s("p",[a._v("map是引用类型的\n与切片相似，映射是引用类型。当将映射分配给一个新变量时，它们都指向相同的内部数据结构。因此，一个的变化会反映另一个。")]),a._v(" "),s("h2",{attrs:{id:"数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类型","aria-hidden":"true"}},[a._v("#")]),a._v(" 数据类型")]),a._v(" "),s("h3",{attrs:{id:"基本数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本数据类型","aria-hidden":"true"}},[a._v("#")]),a._v(" 基本数据类型")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("bool")])]),a._v(" "),s("li",[s("p",[a._v("Numeric Types")]),a._v(" "),s("ul",[s("li",[a._v("int8, int16, int32, int64, int")]),a._v(" "),s("li",[a._v("uint8, uint16, uint32, uint64, uint")]),a._v(" "),s("li",[a._v("float32, float64")]),a._v(" "),s("li",[a._v("complex64, complex128")]),a._v(" "),s("li",[a._v("byte")]),a._v(" "),s("li",[a._v("rune")])])]),a._v(" "),s("li",[s("p",[a._v("string")])])]),a._v(" "),s("h3",{attrs:{id:"复合类型-派生类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复合类型-派生类型","aria-hidden":"true"}},[a._v("#")]),a._v(" 复合类型(派生类型)")]),a._v(" "),s("p",[a._v("1、指针类型（Pointer） 2、数组类型 3、结构化类型(struct) 4、Channel 类型 5、函数类型 6、切片类型 7、接口类型（interface） 8、Map 类型")]),a._v(" "),s("h2",{attrs:{id:"package"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package","aria-hidden":"true"}},[a._v("#")]),a._v(" Package")]),a._v(" "),s("blockquote",[s("p",[a._v("在同一个包下面的文件属于同一个工程文件，不用import包，可以直接使用")])]),a._v(" "),s("p",[a._v("包中，通过标识符首字母是否大写，来确定是否可以被导出。首字母大写才可以被导出，视为 public 公共的资源。")]),a._v(" "),s("h2",{attrs:{id:"make-new"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#make-new","aria-hidden":"true"}},[a._v("#")]),a._v(" make new")]),a._v(" "),s("p",[a._v("有一点非常重要：new返回指针")])])},[],!1,null,null,null);t.default=e.exports}}]);