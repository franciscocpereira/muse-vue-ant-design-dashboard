(window.webpackJsonp=window.webpackJsonp||[]).push([[36,2,3],{1179:function(t,e,r){"use strict";r.r(e);r(106),r(640);var n={props:["anchors"],data:function(){return{url:""}},beforeMount:function(){this.url=window.location.href.split("#")[0]}},o=r(81),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-anchor"},[r("a-anchor",{attrs:{targetOffset:80,offsetTop:85}},t._l(t.anchors,(function(title,e){return r("a-anchor-link",{key:e,attrs:{href:t.url+"#"+e,title:title}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports},1180:function(t,e,r){"use strict";r.r(e);var n={inheritAttrs:!0,props:["code","lang"],data:function(){return{}},methods:{onCopy:function(t){this.$message.success({content:"Copied!"})}}},o=r(81),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"highlight-section"},[r("a-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code.trim(),expression:"code.trim()",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],staticClass:"btn-copy",attrs:{type:"primary",icon:"copy",size:"small"}},[t._v("Copy")]),t._v(" "),r("highlight-code",{staticStyle:{"max-height":"500px"},attrs:{lang:t.lang?t.lang:"html"}},[t._v("\n\t\t"+t._s(t.code)+"\n\t")])],1)}),[],!1,null,null,null);e.default=component.exports},1182:function(t,e,r){var content=r(1196);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(135).default)("081395f0",content,!0,{sourceMap:!1})},1195:function(t,e,r){"use strict";r(1182)},1196:function(t,e,r){var n=r(134)(!1);n.push([t.i,"table[data-v-63657ef8]{width:100%}table td[data-v-63657ef8],table th[data-v-63657ef8]{padding:10px 20px}table th[data-v-63657ef8]{background-color:#eee;border-bottom:2px solid #ddd}table th img[data-v-63657ef8]{margin-right:5px;vertical-align:-5px;width:20px;height:20px}table td[data-v-63657ef8]{border-bottom:2px solid #ddd}",""]),t.exports=n},1217:function(t,e,r){"use strict";r.r(e);var n={head:function(){return{title:"Ant Design of Vue | Muse Dashboard Ant Design Vue @ Creative Tim",meta:[{hid:"description",name:"description",content:"Following the Ant Design specification, we developed a Vue UI library antd that contains a set of high quality components and demos for building rich, interactive user interfaces."}]}},data:function(){return{anchors:{Introduction:"Introduction",Features:"Features","Environment-Support":"Environment Support",Version:"Version",Installation:"Installation"},npmInstall:"\nnpm install ant-design-vue --save",yarnInstall:"\nyarn add ant-design-vue"}}},o=(r(1195),r(81)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"page-row"},[r("div",{staticClass:"page-content"},[t._m(0),t._v(" "),r("a-divider"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),r("section",{staticClass:"mb-24",attrs:{id:"Installation"}},[r("h2",[t._v("Installation")]),t._v(" "),r("h3",[t._v("Using npm or yarn")]),t._v(" "),r("p",[t._v("We recommend using npm or yarn to install，it not only makes development easier，but also allow you to take advantage of the rich ecosystem of Javascript packages and tooling.")]),t._v(" "),r("muse-snippet",{attrs:{code:t.npmInstall,lang:"bash"}}),t._v(" "),r("muse-snippet",{staticClass:"mb-24",attrs:{code:t.yarnInstall,lang:"bash"}}),t._v(" "),t._m(5)],1),t._v(" "),r("a-divider"),t._v(" "),t._m(6)],1),t._v(" "),r("muse-anchor",{attrs:{anchors:t.anchors}})],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"mb-24",attrs:{id:"Introduction"}},[r("h1",[t._v("Ant Design of Vue")]),t._v(" "),r("p",{staticClass:"text-dark"},[t._v("\n\t\t\t\t\t\tFollowing the Ant Design specification, we developed a Vue UI library "),r("code",[t._v("antd")]),t._v(" that contains a set of high quality components and demos for building rich, interactive user interfaces.\n\t\t\t\t\t")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"mb-24",attrs:{id:"Features"}},[r("h2",[t._v("Features")]),t._v(" "),r("ul",{staticClass:"font-semibold credits"},[r("li",[t._v("An enterprise-class UI design language for web applications.")]),t._v(" "),r("li",[t._v("A set of high-quality Vue components out of the box.")]),t._v(" "),r("li",[t._v("Shared Ant Design of React design resources.")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"mb-24",attrs:{id:"Environment-Support"}},[r("h2",[t._v("Environment Support")]),t._v(" "),r("ul",{staticClass:"font-semibold credits"},[r("li",[t._v("Modern browsers and Internet Explorer 9+ (with "),r("a",{attrs:{href:"https://www.antdv.com/docs/vue/getting-started/#Compatibility"}},[t._v("polyfills")]),t._v(")")]),t._v(" "),r("li",[t._v("Server-side Rendering")]),t._v(" "),r("li",[r("a",{attrs:{href:"https://electronjs.org/"}},[t._v("Electron")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"mb-24"},[r("table",[r("thead",[r("tr",[r("th",[r("a",{attrs:{href:"http://godban.github.io/browsers-support-badges/"}},[r("img",{attrs:{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png",alt:"IE / Edge",width:"24px",height:"24px"}})]),t._v("IE / Edge")]),t._v(" "),r("th",[r("a",{attrs:{href:"http://godban.github.io/browsers-support-badges/"}},[r("img",{attrs:{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png",alt:"Firefox",width:"24px",height:"24px"}})]),t._v("Firefox")]),t._v(" "),r("th",[r("a",{attrs:{href:"http://godban.github.io/browsers-support-badges/"}},[r("img",{attrs:{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png",alt:"Chrome",width:"24px",height:"24px"}})]),t._v("Chrome")]),t._v(" "),r("th",[r("a",{attrs:{href:"http://godban.github.io/browsers-support-badges/"}},[r("img",{attrs:{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png",alt:"Safari",width:"24px",height:"24px"}})]),t._v("Safari")]),t._v(" "),r("th",[r("a",{attrs:{href:"http://godban.github.io/browsers-support-badges/"}},[r("img",{attrs:{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png",alt:"Opera",width:"24px",height:"24px"}})]),t._v("Opera")]),t._v(" "),r("th",[r("a",{attrs:{href:"http://godban.github.io/browsers-support-badges/"}},[r("img",{attrs:{src:"https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png",alt:"Electron",width:"24px",height:"24px"}})]),t._v("Electron")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("IE9, IE10, IE11, Edge")]),t._v(" "),r("td",[t._v("last 2 versions")]),t._v(" "),r("td",[t._v("last 2 versions")]),t._v(" "),r("td",[t._v("last 2 versions")]),t._v(" "),r("td",[t._v("last 2 versions")]),t._v(" "),r("td",[t._v("last 2 versions")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"mb-24",attrs:{id:"Version"}},[r("h2",[t._v("Version")]),t._v(" "),r("ul",{staticClass:"font-semibold credits"},[r("li",[t._v("Stable: "),r("a",{attrs:{href:"https://www.npmjs.org/package/ant-design-vue"}},[r("img",{attrs:{src:"https://img.shields.io/npm/v/ant-design-vue.svg?style=flat-square",alt:"npm package"}})])])]),t._v(" "),r("p",[t._v("You can subscribe to this feed for new version notifications: https://github.com/vueComponent/ant-design-vue/releases.atom")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("If you are in a bad network environment，you can try other registries and tools like "),r("a",{attrs:{href:"https://github.com/cnpm/cnpm"}},[t._v("cnpm")]),t._v(".")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"text-right font-semibold mb-24"},[t._v("\n\t\t\t\t\tLooking for more Ant Design Documentation on Ant Design of Vue? Please check the\n\t\t\t\t\t"),r("a",{attrs:{target:"_blank",href:"https://antdv.com/docs/vue/introduce/"}},[t._v("official docs")]),t._v(".\n\t\t\t\t")])}],!1,null,"63657ef8",null);e.default=component.exports;installComponents(component,{MuseSnippet:r(1180).default,MuseAnchor:r(1179).default})}}]);