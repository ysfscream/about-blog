(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{356:function(s,n,t){"use strict";t.r(n);var p=t(0),e=Object(p.a)({},function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"快速生成-mac-app-icns-图标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速生成-mac-app-icns-图标","aria-hidden":"true"}},[s._v("#")]),s._v(" 快速生成 Mac App icns 图标")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.jianshu.com/p/e74047f7cc91",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.jianshu.com/p/e74047f7cc91"),t("OutboundLink")],1)]),s._v(" "),t("ol",[t("li",[s._v("准备一个 1024 * 1024 的png图片，假设名字为 pic.png")]),s._v(" "),t("li",[s._v("命令行 $ mkdir tmp.iconset，创建一个临时目录存放不同大小的图片")]),s._v(" "),t("li",[s._v("把原图片转为不同大小的图片，并放入上面的临时目录")])]),s._v(" "),t("p",[s._v("全部拷贝到命令行回车执行，执行结束之后去tmp.iconset查看十张图片是否生成好")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("sips -z "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("     pic.png --out tmp.iconset/icon_16x16.png\nsips -z "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v("     pic.png --out tmp.iconset/icon_16x16@2x.png\nsips -z "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v("     pic.png --out tmp.iconset/icon_32x32.png\nsips -z "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v("     pic.png --out tmp.iconset/icon_32x32@2x.png\nsips -z "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v("   pic.png --out tmp.iconset/icon_128x128.png\nsips -z "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v("   pic.png --out tmp.iconset/icon_128x128@2x.png\nsips -z "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v("   pic.png --out tmp.iconset/icon_256x256.png\nsips -z "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v("   pic.png --out tmp.iconset/icon_256x256@2x.png\nsips -z "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v("   pic.png --out tmp.iconset/icon_512x512.png\nsips -z "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),s._v("   pic.png --out tmp.iconset/icon_512x512@2x.png\n")])])]),t("p",[s._v("4 通过iconutil生成icns文件")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("iconutil -c icns tmp.iconset -o Icon.icns\n")])])])])},[],!1,null,null,null);n.default=e.exports}}]);