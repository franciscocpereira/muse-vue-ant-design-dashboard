(window.webpackJsonp=window.webpackJsonp||[]).push([[27,2,3],{1179:function(t,n,o){"use strict";o.r(n);o(106),o(640);var e={props:["anchors"],data:function(){return{url:""}},beforeMount:function(){this.url=window.location.href.split("#")[0]}},c=o(81),component=Object(c.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"page-anchor"},[o("a-anchor",{attrs:{targetOffset:80,offsetTop:85}},t._l(t.anchors,(function(title,n){return o("a-anchor-link",{key:n,attrs:{href:t.url+"#"+n,title:title}})})),1)],1)}),[],!1,null,null,null);n.default=component.exports},1180:function(t,n,o){"use strict";o.r(n);var e={inheritAttrs:!0,props:["code","lang"],data:function(){return{}},methods:{onCopy:function(t){this.$message.success({content:"Copied!"})}}},c=o(81),component=Object(c.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("section",{staticClass:"highlight-section"},[o("a-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code.trim(),expression:"code.trim()",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],staticClass:"btn-copy",attrs:{type:"primary",icon:"copy",size:"small"}},[t._v("Copy")]),t._v(" "),o("highlight-code",{staticStyle:{"max-height":"500px"},attrs:{lang:t.lang?t.lang:"html"}},[t._v("\n\t\t"+t._s(t.code)+"\n\t")])],1)}),[],!1,null,null,null);n.default=component.exports},1189:function(t,n,o){var content=o(1211);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(135).default)("9bc78bfa",content,!0,{sourceMap:!1})},1210:function(t,n,o){"use strict";o(1189)},1211:function(t,n,o){var e=o(134)(!1);e.push([t.i,".grid-demo .ant-row>div[data-v-02d2a045]{padding:15px 0;text-align:center;border-radius:0;min-height:30px;margin-top:8px;margin-bottom:8px;color:#fff}.grid-demo .ant-row>div[data-v-02d2a045]:nth-child(odd){background:rgba(0,160,233,.7)}.grid-demo .ant-row>div[data-v-02d2a045]:nth-child(2n){background:#00a0e9}",""]),t.exports=e},1241:function(t,n,o){"use strict";o.r(n);var e={head:function(){return{title:"Grid | Muse Dashboard Ant Design Vue @ Creative Tim",meta:[{hid:"description",name:"description",content:"24 Grids System"}]}},data:function(){return{anchors:{"Basic-Grid":"Basic Grid"},codeSample:'\n<template>\n  <div>\n    <a-row>\n      <a-col :span="12">\n        col-12\n      </a-col>\n      <a-col :span="12">\n        col-12\n      </a-col>\n    </a-row>\n    <a-row>\n      <a-col :span="8">\n        col-8\n      </a-col>\n      <a-col :span="8">\n        col-8\n      </a-col>\n      <a-col :span="8">\n        col-8\n      </a-col>\n    </a-row>\n    <a-row>\n      <a-col :span="6">\n        col-6\n      </a-col>\n      <a-col :span="6">\n        col-6\n      </a-col>\n      <a-col :span="6">\n        col-6\n      </a-col>\n      <a-col :span="6">\n        col-6\n      </a-col>\n    </a-row>\n  </div>\n</template>\n'}},methods:{}},c=(o(1210),o(81)),component=Object(c.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("div",{staticClass:"page-row"},[o("div",{staticClass:"page-content"},[t._m(0),t._v(" "),o("a-divider"),t._v(" "),o("h2",[t._v("Examples")]),t._v(" "),o("section",{staticClass:"mb-24",attrs:{id:"Basic-Grid"}},[o("a-divider",{attrs:{orientation:"left"}},[t._v("Basic Grid")]),t._v(" "),o("p",[t._v("\n\t\t\t\t\t\tFrom the stack to the horizontal arrangement.\n\t\t\t\t\t\tYou can create a basic grid system by using a single set of Row and Col grid assembly, all of the columns (Col) must be placed in Row.\n\t\t\t\t\t")]),t._v(" "),o("div",{staticClass:"showcase"},[o("div",{staticClass:"grid-demo"},[o("a-row",[o("a-col",{attrs:{span:12}},[t._v("\n\t\t\t\t\t\t\t\t\tcol-12\n\t\t\t\t\t\t\t\t")]),t._v(" "),o("a-col",{attrs:{span:12}},[t._v("\n\t\t\t\t\t\t\t\t\tcol-12\n\t\t\t\t\t\t\t\t")])],1),t._v(" "),o("a-row",[o("a-col",{attrs:{span:8}},[t._v("\n\t\t\t\t\t\t\t\t\tcol-8\n\t\t\t\t\t\t\t\t")]),t._v(" "),o("a-col",{attrs:{span:8}},[t._v("\n\t\t\t\t\t\t\t\t\tcol-8\n\t\t\t\t\t\t\t\t")]),t._v(" "),o("a-col",{attrs:{span:8}},[t._v("\n\t\t\t\t\t\t\t\t\tcol-8\n\t\t\t\t\t\t\t\t")])],1),t._v(" "),o("a-row",[o("a-col",{attrs:{span:6}},[t._v("\n\t\t\t\t\t\t\t\t\tcol-6\n\t\t\t\t\t\t\t\t")]),t._v(" "),o("a-col",{attrs:{span:6}},[t._v("\n\t\t\t\t\t\t\t\t\tcol-6\n\t\t\t\t\t\t\t\t")]),t._v(" "),o("a-col",{attrs:{span:6}},[t._v("\n\t\t\t\t\t\t\t\t\tcol-6\n\t\t\t\t\t\t\t\t")]),t._v(" "),o("a-col",{attrs:{span:6}},[t._v("\n\t\t\t\t\t\t\t\t\tcol-6\n\t\t\t\t\t\t\t\t")])],1)],1)]),t._v(" "),o("muse-snippet",{attrs:{code:t.codeSample}})],1),t._v(" "),t._m(1)],1),t._v(" "),o("muse-anchor",{attrs:{anchors:t.anchors}})],1)])}),[function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("section",{staticClass:"mb-24"},[o("h1",[t._v("Grid")]),t._v(" "),o("p",{staticClass:"text-dark"},[t._v("\n\t\t\t\t\t\t24 Grids System\n\t\t\t\t\t")])])},function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("p",{staticClass:"text-right font-semibold mb-24"},[t._v("\n\t\t\t\t\tLooking for more Ant Design Vue Grid? Please check the\n\t\t\t\t\t"),o("a",{attrs:{target:"_blank",href:"https://antdv.com/components/grid/"}},[t._v("official docs")]),t._v(".\n\t\t\t\t")])}],!1,null,"02d2a045",null);n.default=component.exports;installComponents(component,{MuseSnippet:o(1180).default,MuseAnchor:o(1179).default})}}]);