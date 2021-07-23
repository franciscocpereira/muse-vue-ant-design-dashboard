(window.webpackJsonp=window.webpackJsonp||[]).push([[20,2,3],{1179:function(t,n,e){"use strict";e.r(n);e(106),e(640);var o={props:["anchors"],data:function(){return{url:""}},beforeMount:function(){this.url=window.location.href.split("#")[0]}},r=e(81),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"page-anchor"},[e("a-anchor",{attrs:{targetOffset:80,offsetTop:85}},t._l(t.anchors,(function(title,n){return e("a-anchor-link",{key:n,attrs:{href:t.url+"#"+n,title:title}})})),1)],1)}),[],!1,null,null,null);n.default=component.exports},1180:function(t,n,e){"use strict";e.r(n);var o={inheritAttrs:!0,props:["code","lang"],data:function(){return{}},methods:{onCopy:function(t){this.$message.success({content:"Copied!"})}}},r=e(81),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"highlight-section"},[e("a-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code.trim(),expression:"code.trim()",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],staticClass:"btn-copy",attrs:{type:"primary",icon:"copy",size:"small"}},[t._v("Copy")]),t._v(" "),e("highlight-code",{staticStyle:{"max-height":"500px"},attrs:{lang:t.lang?t.lang:"html"}},[t._v("\n\t\t"+t._s(t.code)+"\n\t")])],1)}),[],!1,null,null,null);n.default=component.exports},1234:function(t,n,e){"use strict";e.r(n);var o={head:function(){return{title:"Radio | Muse Dashboard Ant Design Vue @ Creative Tim",meta:[{hid:"description",name:"description",content:"Radio"}]}},data:function(){return{anchors:{"When-To-Use":"When To Use",Basic:"Basic","Solid-radio-button":"Solid radio button"},codeSample:"\n<template>\n  <a-radio>Radio</a-radio>\n</template>\n",solidRadioBtn:'\n<template>\n  <div>\n    <div>\n      <a-radio-group default-value="a" button-style="solid">\n        <a-radio-button value="a">\n          Hangzhou\n        </a-radio-button>\n        <a-radio-button value="b">\n          Shanghai\n        </a-radio-button>\n        <a-radio-button value="c">\n          Beijing\n        </a-radio-button>\n        <a-radio-button value="d">\n          Chengdu\n        </a-radio-button>\n      </a-radio-group>\n    </div>\n    <div :style="{ marginTop: \'16px\' }">\n      <a-radio-group default-value="c" button-style="solid">\n        <a-radio-button value="a">\n          Hangzhou\n        </a-radio-button>\n        <a-radio-button value="b" disabled>\n          Shanghai\n        </a-radio-button>\n        <a-radio-button value="c">\n          Beijing\n        </a-radio-button>\n        <a-radio-button value="d">\n          Chengdu\n        </a-radio-button>\n      </a-radio-group>\n    </div>\n  </div>\n</template>'}},methods:{}},r=e(81),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"page-row"},[e("div",{staticClass:"page-content"},[t._m(0),t._v(" "),e("a-divider"),t._v(" "),t._m(1),t._v(" "),e("h2",[t._v("Examples")]),t._v(" "),e("section",{staticClass:"mb-24",attrs:{id:"Basic"}},[e("a-divider",{attrs:{orientation:"left"}},[t._v("Basic")]),t._v(" "),e("p",[t._v("\n\t\t\t\t\t\tThe simplest use.\n\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"showcase"},[e("a-radio",[t._v("Radio")])],1),t._v(" "),e("muse-snippet",{attrs:{code:t.codeSample}})],1),t._v(" "),e("section",{staticClass:"mb-24",attrs:{id:"Solid-radio-button"}},[e("a-divider",{attrs:{orientation:"left"}},[t._v("Solid radio button")]),t._v(" "),e("p",[t._v("\n\t\t\t\t\t\tSolid radio button style.\n\t\t\t\t\t")]),t._v(" "),e("div",{staticClass:"showcase"},[e("div",[e("a-radio-group",{attrs:{"default-value":"a","button-style":"solid"}},[e("a-radio-button",{attrs:{value:"a"}},[t._v("\n\t\t\t\t\t\t\t\tHangzhou\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("a-radio-button",{attrs:{value:"b"}},[t._v("\n\t\t\t\t\t\t\t\tShanghai\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("a-radio-button",{attrs:{value:"c"}},[t._v("\n\t\t\t\t\t\t\t\tBeijing\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("a-radio-button",{attrs:{value:"d"}},[t._v("\n\t\t\t\t\t\t\t\tChengdu\n\t\t\t\t\t\t\t\t")])],1)],1),t._v(" "),e("div",{style:{marginTop:"16px"}},[e("a-radio-group",{attrs:{"default-value":"c","button-style":"solid"}},[e("a-radio-button",{attrs:{value:"a"}},[t._v("\n\t\t\t\t\t\t\t\tHangzhou\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("a-radio-button",{attrs:{value:"b",disabled:""}},[t._v("\n\t\t\t\t\t\t\t\tShanghai\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("a-radio-button",{attrs:{value:"c"}},[t._v("\n\t\t\t\t\t\t\t\tBeijing\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("a-radio-button",{attrs:{value:"d"}},[t._v("\n\t\t\t\t\t\t\t\tChengdu\n\t\t\t\t\t\t\t\t")])],1)],1)]),t._v(" "),e("muse-snippet",{attrs:{code:t.solidRadioBtn}})],1),t._v(" "),t._m(2)],1),t._v(" "),e("muse-anchor",{attrs:{anchors:t.anchors}})],1)])}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"mb-24"},[e("h1",[t._v("Radio")]),t._v(" "),e("p",{staticClass:"text-dark"},[t._v("\n\t\t\t\t\t\tRadio.\n\t\t\t\t\t")])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"mb-24",attrs:{id:"When-To-Use"}},[e("h2",[t._v("When To Use")]),t._v(" "),e("ul",[e("li",[t._v("Used to select a single state from multiple options.")]),t._v(" "),e("li",[t._v("\n\t\t\t\t\t\t\tThe difference from Select is that Radio is visible to the user \n\t\t\t\t\t\t\tand can facilitate the comparison of choice, which means there \n\t\t\t\t\t\t\tshouldn’t be too many of them.\n\t\t\t\t\t\t")])])])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("p",{staticClass:"text-right font-semibold mb-24"},[t._v("\n\t\t\t\t\tLooking for more Ant Design Vue Radio? Please check the\n\t\t\t\t\t"),e("a",{attrs:{target:"_blank",href:"https://antdv.com/components/radio/"}},[t._v("official docs")]),t._v(".\n\t\t\t\t")])}],!1,null,"69ba110e",null);n.default=component.exports;installComponents(component,{MuseSnippet:e(1180).default,MuseAnchor:e(1179).default})}}]);