(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{356:function(n,t,p){"use strict";p.r(t);var s=p(0),i=Object(s.a)({},function(){var n=this,t=n.$createElement,p=n._self._c||t;return p("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[p("h1",{attrs:{id:"快速生成-mac-app-icns-图标"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#快速生成-mac-app-icns-图标","aria-hidden":"true"}},[n._v("#")]),n._v(" 快速生成 Mac App icns 图标")]),n._v(" "),p("p",[p("a",{attrs:{href:"https://www.jianshu.com/p/e74047f7cc91",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://www.jianshu.com/p/e74047f7cc91"),p("OutboundLink")],1)]),n._v(" "),p("ol",[p("li",[n._v("准备一个 1024 * 1024 的png图片，假设名字为 pic.png")]),n._v(" "),p("li",[n._v("命令行 $ mkdir tmp.iconset，创建一个临时目录存放不同大小的图片")]),n._v(" "),p("li",[n._v("把原图片转为不同大小的图片，并放入上面的临时目录")])]),n._v(" "),p("p",[n._v("全部拷贝到命令行回车执行，执行结束之后去tmp.iconset查看十张图片是否生成好")]),n._v(" "),p("div",{staticClass:"language-shell extra-class"},[p("pre",{pre:!0,attrs:{class:"language-text"}},[p("code",[n._v("sips -z 16 16     pic.png --out tmp.iconset/icon_16x16.png\nsips -z 32 32     pic.png --out tmp.iconset/icon_16x16@2x.png\nsips -z 32 32     pic.png --out tmp.iconset/icon_32x32.png\nsips -z 64 64     pic.png --out tmp.iconset/icon_32x32@2x.png\nsips -z 128 128   pic.png --out tmp.iconset/icon_128x128.png\nsips -z 256 256   pic.png --out tmp.iconset/icon_128x128@2x.png\nsips -z 256 256   pic.png --out tmp.iconset/icon_256x256.png\nsips -z 512 512   pic.png --out tmp.iconset/icon_256x256@2x.png\nsips -z 512 512   pic.png --out tmp.iconset/icon_512x512.png\nsips -z 1024 1024   pic.png --out tmp.iconset/icon_512x512@2x.png\n")])])]),p("p",[n._v("4 通过iconutil生成icns文件")]),n._v(" "),p("div",{staticClass:"language-shell extra-class"},[p("pre",{pre:!0,attrs:{class:"language-text"}},[p("code",[n._v("iconutil -c icns tmp.iconset -o Icon.icns\n")])])])])},[],!1,null,null,null);t.default=i.exports}}]);