(window.webpackJsonp=window.webpackJsonp||[]).push([[35,2,3],{1179:function(t,e,n){"use strict";n.r(e);n(106),n(640);var o={props:["anchors"],data:function(){return{url:""}},beforeMount:function(){this.url=window.location.href.split("#")[0]}},r=n(81),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-anchor"},[n("a-anchor",{attrs:{targetOffset:80,offsetTop:85}},t._l(t.anchors,(function(title,e){return n("a-anchor-link",{key:e,attrs:{href:t.url+"#"+e,title:title}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports},1180:function(t,e,n){"use strict";n.r(e);var o={inheritAttrs:!0,props:["code","lang"],data:function(){return{}},methods:{onCopy:function(t){this.$message.success({content:"Copied!"})}}},r=n(81),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"highlight-section"},[n("a-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code.trim(),expression:"code.trim()",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],staticClass:"btn-copy",attrs:{type:"primary",icon:"copy",size:"small"}},[t._v("Copy")]),t._v(" "),n("highlight-code",{staticStyle:{"max-height":"500px"},attrs:{lang:t.lang?t.lang:"html"}},[t._v("\n\t\t"+t._s(t.code)+"\n\t")])],1)}),[],!1,null,null,null);e.default=component.exports},1216:function(t,e,n){"use strict";n.r(e);var o=n(67),r={head:function(){return{title:"Quick Start | Muse Dashboard Ant Design Vue @ Creative Tim",meta:[{hid:"description",name:"description",content:"Ant Design Vue is dedicated to providing a good development experience for programmers."}]}},data:function(){return{anchors:Object(o.a)({"Quick-Project-Installation":"Quick Project Installation","Direct-Download":"Direct Download","Import-ant-design-vue":"Import ant-design-vue",Compatibility:"Compatibility"},"Compatibility","Compatibility"),quickInstallation:"\nnpm install muse-ant-vue",directDownload:"\nnpm install\n# OR\nyarn",installation:"\nnpm install -g @vue/cli\n# OR\nyarn global add @vue/cli",vueCreate:"\nvue create antd-demo",installAntD:"\nnpm i --save ant-design-vue",importAntD:"\nimport Vue from 'vue';\nimport Antd from 'ant-design-vue';\nimport App from './App';\nimport 'ant-design-vue/dist/antd.css';\nVue.config.productionTip = false;\n\nVue.use(Antd);\n\n/* eslint-disable no-new */\nnew Vue({\n  el: '#app',\n  components: { App },\n  template: '<App/>',\n});",importSome:"\nimport Vue from 'vue';\nimport { Button, message } from 'ant-design-vue';\nimport App from './App';\n\nVue.config.productionTip = false;\n\n/* v1.1.2 */\nVue.component(Button.name, Button);\nVue.component(Button.Group.name, Button.Group);\n\n/* v1.1.3+ Automatically register components under Button, such as Button.Group */\nVue.use(Button);\n\nVue.prototype.$message = message;\n\n/* eslint-disable no-new */\nnew Vue({\n  el: '#app',\n  components: { App },\n  template: '<App/>',\n});"}}},l=n(81),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"page-row"},[n("div",{staticClass:"page-content"},[t._m(0),t._v(" "),n("a-divider"),t._v(" "),n("section",{staticClass:"mb-24",attrs:{id:"Quick-Project-Installation"}},[n("h2",[t._v("Quick Project Installation")]),t._v(" "),n("p",[t._v("\n\t\t\t\t\t\tTo install the Muse Dashboard Template, you only have run this command in your npm project :\n\t\t\t\t\t")]),t._v(" "),n("muse-snippet",{attrs:{code:t.quickInstallation,lang:"bash"}})],1),t._v(" "),n("section",{staticClass:"mb-24",attrs:{id:"Direct-Download"}},[n("h2",[t._v("Direct Download")]),t._v(" "),n("p",[t._v("\n\t\t\t\t\t\tYou can also download and unzip or clone the project, and then run one of the installation commands below :\n\t\t\t\t\t")]),t._v(" "),n("muse-snippet",{attrs:{code:t.directDownload,lang:"bash"}})],1),t._v(" "),t._m(1),t._v(" "),n("section",{staticClass:"mb-24"},[n("a-divider",{attrs:{orientation:"left"}},[t._v("1. Installation")]),t._v(" "),t._m(2),t._v(" "),n("muse-snippet",{attrs:{code:t.installation,lang:"bash"}})],1),t._v(" "),n("section",{staticClass:"mb-24"},[n("a-divider",{attrs:{orientation:"left"}},[t._v("2. Create a New Project")]),t._v(" "),n("p",[t._v("A new project can be created using CLI tools.")]),t._v(" "),n("muse-snippet",{attrs:{code:t.vueCreate,lang:"bash"}}),t._v(" "),n("p",[t._v("And, setup your vue project configuration.")])],1),t._v(" "),n("section",{staticClass:"mb-24"},[n("a-divider",{attrs:{orientation:"left"}},[t._v("3. Use antd's Components")]),t._v(" "),n("p",[t._v("A new project can be created using CLI tools.")]),t._v(" "),n("muse-snippet",{attrs:{code:t.installAntD,lang:"bash"}}),t._v(" "),n("p",[t._v("Fully import")]),t._v(" "),n("muse-snippet",{attrs:{code:t.importAntD,lang:"javascript"}}),t._v(" "),n("p",[t._v("The above imports Antd entirely. Note that CSS file needs to be imported separately.")]),t._v(" "),n("h6",[t._v("Only import the components you need")]),t._v(" "),n("muse-snippet",{attrs:{code:t.importSome,lang:"javascript"}})],1),t._v(" "),t._m(3),t._v(" "),n("a-divider"),t._v(" "),t._m(4)],1),t._v(" "),n("muse-anchor",{attrs:{anchors:t.anchors}})],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"mb-24",attrs:{id:"Quick-Start"}},[n("h1",[t._v("Quick Start")]),t._v(" "),n("p",{staticClass:"text-dark"},[t._v("\n\t\t\t\t\t\tAnt Design Vue is dedicated to providing a good development experience for programmers. Make sure that you had installed "),n("a",{attrs:{href:"https://nodejs.org/"}},[t._v("Node.js")]),t._v(" (> v8.9) correctly.\n\t\t\t\t\t")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"mb-24",attrs:{id:"Import-ant-design-vue"}},[n("h2",[t._v("Import ant-design-vue")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli"}},[t._v("vue-cli")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"mb-24",attrs:{id:"Compatibility"}},[n("h2",[t._v("Compatibility")]),t._v(" "),n("p",[t._v("Ant Design Vue supports all the modern browsers and IE9+.")]),t._v(" "),n("p",[t._v("You need to provide "),n("a",{attrs:{href:"https://github.com/es-shims/es5-shim"}},[t._v("es5-shim")]),t._v(" and "),n("a",{attrs:{href:"https://github.com/paulmillr/es6-shim"}},[t._v("es6-shim")]),t._v(" and other polyfills for IE browsers.")]),t._v(" "),n("p",[t._v("If you are using babel, we strongly recommend using "),n("a",{attrs:{href:"https://babeljs.io/docs/usage/polyfill/"}},[t._v("babel-polyfill")]),t._v(" and "),n("a",{attrs:{href:"https://babeljs.io/docs/plugins/transform-runtime/"}},[t._v("babel-plugin-transform-runtime")]),t._v(" instead of those two shims.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-right font-semibold mb-24"},[t._v("\n\t\t\t\t\tLooking for more Ant Design Documentation on getting started? Please check the\n\t\t\t\t\t"),n("a",{attrs:{target:"_blank",href:"https://antdv.com/docs/vue/getting-started/"}},[t._v("official docs")]),t._v(".\n\t\t\t\t")])}],!1,null,"0a19b756",null);e.default=component.exports;installComponents(component,{MuseSnippet:n(1180).default,MuseAnchor:n(1179).default})}}]);