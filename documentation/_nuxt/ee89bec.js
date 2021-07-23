(window.webpackJsonp=window.webpackJsonp||[]).push([[23,2,3],{1179:function(t,e,n){"use strict";n.r(e);n(106),n(640);var o={props:["anchors"],data:function(){return{url:""}},beforeMount:function(){this.url=window.location.href.split("#")[0]}},l=n(81),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-anchor"},[n("a-anchor",{attrs:{targetOffset:80,offsetTop:85}},t._l(t.anchors,(function(title,e){return n("a-anchor-link",{key:e,attrs:{href:t.url+"#"+e,title:title}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports},1180:function(t,e,n){"use strict";n.r(e);var o={inheritAttrs:!0,props:["code","lang"],data:function(){return{}},methods:{onCopy:function(t){this.$message.success({content:"Copied!"})}}},l=n(81),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"highlight-section"},[n("a-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code.trim(),expression:"code.trim()",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],staticClass:"btn-copy",attrs:{type:"primary",icon:"copy",size:"small"}},[t._v("Copy")]),t._v(" "),n("highlight-code",{staticStyle:{"max-height":"500px"},attrs:{lang:t.lang?t.lang:"html"}},[t._v("\n\t\t"+t._s(t.code)+"\n\t")])],1)}),[],!1,null,null,null);e.default=component.exports},1237:function(t,e,n){"use strict";n.r(e);n(82);var o={head:function(){return{title:"Upload | Muse Dashboard Ant Design Vue @ Creative Tim",meta:[{hid:"description",name:"description",content:"Upload file by selecting or dragging."}]}},data:function(){return{anchors:{"When-To-Use":"When To Use","Upload-by-clicking":"Upload by clicking","Drag-and-Drop":"Drag and Drop"},headers:{authorization:"authorization-text"},codeSample:'\n<template>\n  <a-upload\n    name="file"\n    :multiple="true"\n    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"\n    :headers="headers"\n    @change="handleChange"\n  >\n    <a-button> <a-icon type="upload" /> Click to Upload </a-button>\n  </a-upload>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      headers: {\n        authorization: \'authorization-text\',\n      },\n    };\n  },\n  methods: {\n    handleChange(info) {\n      if (info.file.status !== \'uploading\') {\n        console.log(info.file, info.fileList);\n      }\n      if (info.file.status === \'done\') {\n        this.$message.success(`${info.file.name} file uploaded successfully`);\n      } else if (info.file.status === \'error\') {\n        this.$message.error(`${info.file.name} file upload failed.`);\n      }\n    },\n  },\n};\n<\/script>\n',dragAndDropCode:'\n<template>\n  <a-upload-dragger\n    name="file"\n    :multiple="true"\n    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"\n    @change="handleChange"\n  >\n    <p class="ant-upload-drag-icon">\n      <a-icon type="inbox" />\n    </p>\n    <p class="ant-upload-text">\n      Click or drag file to this area to upload\n    </p>\n    <p class="ant-upload-hint">\n      Support for a single or bulk upload. Strictly prohibit from uploading company data or other\n      band files\n    </p>\n  </a-upload-dragger>\n</template>\n<script>\nexport default {\n  data() {\n    return {};\n  },\n  methods: {\n    handleChange(info) {\n      const status = info.file.status;\n      if (status !== \'uploading\') {\n        console.log(info.file, info.fileList);\n      }\n      if (status === \'done\') {\n        this.$message.success(`${info.file.name} file uploaded successfully.`);\n      } else if (status === \'error\') {\n        this.$message.error(`${info.file.name} file upload failed.`);\n      }\n    },\n  },\n};\n<\/script>\n'}},methods:{handleChange:function(t){"uploading"!==t.file.status&&console.log(t.file,t.fileList),"done"===t.file.status?this.$message.success("".concat(t.file.name," file uploaded successfully")):"error"===t.file.status&&this.$message.error("".concat(t.file.name," file upload failed."))}}},l=n(81),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"page-row"},[n("div",{staticClass:"page-content"},[t._m(0),t._v(" "),n("a-divider"),t._v(" "),t._m(1),t._v(" "),n("h2",[t._v("Examples")]),t._v(" "),n("section",{staticClass:"mb-24",attrs:{id:"Upload-by-clicking"}},[n("a-divider",{attrs:{orientation:"left"}},[t._v("Upload by clicking")]),t._v(" "),n("p",[t._v("\n\t\t\t\t\t\tClassic mode. File selection dialog pops up when upload button is clicked.\n\t\t\t\t\t")]),t._v(" "),n("div",{staticClass:"showcase"},[n("a-upload",{attrs:{name:"file",multiple:!0,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:t.headers},on:{change:t.handleChange}},[n("a-button",[n("a-icon",{attrs:{type:"upload"}}),t._v(" Click to Upload ")],1)],1)],1),t._v(" "),n("muse-snippet",{attrs:{code:t.codeSample}})],1),t._v(" "),n("section",{staticClass:"mb-24",attrs:{id:"Drag-and-Drop"}},[n("a-divider",{attrs:{orientation:"left"}},[t._v("Drag and Drop")]),t._v(" "),n("div",{staticClass:"showcase"},[n("a-upload-dragger",{attrs:{name:"file",multiple:!0,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76"},on:{change:t.handleChange}},[n("p",{staticClass:"ant-upload-drag-icon"},[n("a-icon",{attrs:{type:"inbox"}})],1),t._v(" "),n("p",{staticClass:"ant-upload-text"},[t._v("\n\t\t\t\t\t\t\tClick or drag file to this area to upload\n\t\t\t\t\t\t\t")]),t._v(" "),n("p",{staticClass:"ant-upload-hint"},[t._v("\n\t\t\t\t\t\t\tSupport for a single or bulk upload. Strictly prohibit from uploading company data or other\n\t\t\t\t\t\t\tband files\n\t\t\t\t\t\t\t")])])],1),t._v(" "),n("muse-snippet",{attrs:{code:t.dragAndDropCode}})],1),t._v(" "),t._m(2)],1),t._v(" "),n("muse-anchor",{attrs:{anchors:t.anchors}})],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"mb-24"},[n("h1",[t._v("Upload")]),t._v(" "),n("p",{staticClass:"text-dark"},[t._v("\n\t\t\t\t\t\tUpload file by selecting or dragging.\n\t\t\t\t\t")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"mb-24",attrs:{id:"When-To-Use"}},[n("h2",[t._v("When To Use")]),t._v(" "),n("p",[t._v("\n\t\t\t\t\t\tUploading is the process of publishing information (web pages, text,\n\t\t\t\t\t\tpictures, video, etc.) to a remote server via a web page or upload tool.\n\t\t\t\t\t")]),t._v(" "),n("ul",[n("li",[t._v("When you need to upload one or more files.")]),t._v(" "),n("li",[t._v("When you need to show the process of uploading.")]),t._v(" "),n("li",[t._v("When you need to upload files by dragging and dropping.")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"text-right font-semibold mb-24"},[t._v("\n\t\t\t\t\tLooking for more Ant Design Vue Upload? Please check the\n\t\t\t\t\t"),n("a",{attrs:{target:"_blank",href:"https://antdv.com/components/upload/"}},[t._v("official docs")]),t._v(".\n\t\t\t\t")])}],!1,null,"745026d2",null);e.default=component.exports;installComponents(component,{MuseSnippet:n(1180).default,MuseAnchor:n(1179).default})}}]);