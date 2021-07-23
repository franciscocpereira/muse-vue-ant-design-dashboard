(window.webpackJsonp=window.webpackJsonp||[]).push([[32,2,3],{1179:function(t,e,n){"use strict";n.r(e);n(106),n(640);var o={props:["anchors"],data:function(){return{url:""}},beforeMount:function(){this.url=window.location.href.split("#")[0]}},r=n(81),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-anchor"},[n("a-anchor",{attrs:{targetOffset:80,offsetTop:85}},t._l(t.anchors,(function(title,e){return n("a-anchor-link",{key:e,attrs:{href:t.url+"#"+e,title:title}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports},1180:function(t,e,n){"use strict";n.r(e);var o={inheritAttrs:!0,props:["code","lang"],data:function(){return{}},methods:{onCopy:function(t){this.$message.success({content:"Copied!"})}}},r=n(81),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"highlight-section"},[n("a-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code.trim(),expression:"code.trim()",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],staticClass:"btn-copy",attrs:{type:"primary",icon:"copy",size:"small"}},[t._v("Copy")]),t._v(" "),n("highlight-code",{staticStyle:{"max-height":"500px"},attrs:{lang:t.lang?t.lang:"html"}},[t._v("\n\t\t"+t._s(t.code)+"\n\t")])],1)}),[],!1,null,null,null);e.default=component.exports},1245:function(t,e,n){"use strict";n.r(e);var o={head:function(){return{title:"Menu | Muse Dashboard Ant Design Vue @ Creative Tim",meta:[{hid:"description",name:"description",content:"A versatile menu for navigation."}]}},data:function(){return{anchors:{"When-To-Use":"When To Use",Basic:"Basic"},current:["mail"],codeSample:'\n<template>\n  <div>\n    <a-menu v-model="current" mode="horizontal">\n      <a-menu-item key="mail"> <a-icon type="mail" />Navigation One </a-menu-item>\n      <a-menu-item key="app" disabled> <a-icon type="appstore" />Navigation Two </a-menu-item>\n      <a-sub-menu>\n        <span slot="title" class="submenu-title-wrapper"\n          ><a-icon type="setting" />Navigation Three - Submenu</span\n        >\n        <a-menu-item-group title="Item 1">\n          <a-menu-item key="setting:1">\n            Option 1\n          </a-menu-item>\n          <a-menu-item key="setting:2">\n            Option 2\n          </a-menu-item>\n        </a-menu-item-group>\n        <a-menu-item-group title="Item 2">\n          <a-menu-item key="setting:3">\n            Option 3\n          </a-menu-item>\n          <a-menu-item key="setting:4">\n            Option 4\n          </a-menu-item>\n        </a-menu-item-group>\n      </a-sub-menu>\n      <a-menu-item key="alipay">\n        <a href="https://antdv.com" target="_blank" rel="noopener noreferrer"\n          >Navigation Four - Link</a\n        >\n      </a-menu-item>\n    </a-menu>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      current: [\'mail\'],\n    };\n  },\n};\n<\/script>\n'}},methods:{}},r=n(81),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"page-row"},[n("div",{staticClass:"page-content"},[t._m(0),t._v(" "),n("a-divider"),t._v(" "),t._m(1),t._v(" "),n("h2",[t._v("Examples")]),t._v(" "),n("section",{staticClass:"mb-24",attrs:{id:"Basic"}},[n("a-divider",{attrs:{orientation:"left"}},[t._v("Basic")]),t._v(" "),n("p",[t._v("\n\t\t\t\t\t\tHorizontal top navigation menu.\n\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"showcase"},[n("a-menu",{attrs:{mode:"horizontal"},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}},[n("a-menu-item",{key:"mail"},[n("a-icon",{attrs:{type:"mail"}}),t._v("Navigation One ")],1),t._v(" "),n("a-menu-item",{key:"app",attrs:{disabled:""}},[n("a-icon",{attrs:{type:"appstore"}}),t._v("Navigation Two ")],1),t._v(" "),n("a-sub-menu",[n("span",{staticClass:"submenu-title-wrapper",attrs:{slot:"title"},slot:"title"},[n("a-icon",{attrs:{type:"setting"}}),t._v("Navigation Three - Submenu")],1),t._v(" "),n("a-menu-item-group",{attrs:{title:"Item 1"}},[n("a-menu-item",{key:"setting:1"},[t._v("\n\t\t\t\t\t\t\t\t\tOption 1\n\t\t\t\t\t\t\t\t")]),t._v(" "),n("a-menu-item",{key:"setting:2"},[t._v("\n\t\t\t\t\t\t\t\t\tOption 2\n\t\t\t\t\t\t\t\t")])],1),t._v(" "),n("a-menu-item-group",{attrs:{title:"Item 2"}},[n("a-menu-item",{key:"setting:3"},[t._v("\n\t\t\t\t\t\t\t\t\tOption 3\n\t\t\t\t\t\t\t\t")]),t._v(" "),n("a-menu-item",{key:"setting:4"},[t._v("\n\t\t\t\t\t\t\t\t\tOption 4\n\t\t\t\t\t\t\t\t")])],1)],1),t._v(" "),n("a-menu-item",{key:"alipay"},[n("a",{attrs:{href:"https://antdv.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Navigation Four - Link")])])],1)],1),t._v(" "),n("muse-snippet",{attrs:{code:t.codeSample}})],1),t._v(" "),t._m(2)],1),t._v(" "),n("muse-anchor",{attrs:{anchors:t.anchors}})],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"mb-24"},[n("h1",[t._v("Menu")]),t._v(" "),n("p",{staticClass:"text-dark"},[t._v("\n\t\t\t\t\t\tA versatile menu for navigation.\n\t\t\t\t\t")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"mb-24",attrs:{id:"When-To-Use"}},[n("h2",[t._v("When To Use")]),t._v(" "),n("p",[t._v("\n\t\t\t\t\t\tNavigation is an important part of any website, as a good navigation setup allows\n\t\t\t\t\t\tusers to move around the site quickly and efficiently. Ant Design offers top and\n\t\t\t\t\t\tside navigation options. Top navigation provides all the categories and functions\n\t\t\t\t\t\tof the website. Side navigation provides the multi-level structure of the website.\n\t\t\t\t\t")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-right font-semibold mb-24"},[t._v("\n\t\t\t\t\tLooking for more Ant Design Vue Menu? Please check the\n\t\t\t\t\t"),n("a",{attrs:{target:"_blank",href:"https://antdv.com/components/menu/"}},[t._v("official docs")]),t._v(".\n\t\t\t\t")])}],!1,null,"61cc0560",null);e.default=component.exports;installComponents(component,{MuseSnippet:n(1180).default,MuseAnchor:n(1179).default})}}]);