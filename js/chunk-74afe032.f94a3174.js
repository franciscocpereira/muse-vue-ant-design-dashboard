(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74afe032"],{"8840d":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("a-row",{attrs:{gutter:24,type:"flex"}},[e("a-col",{staticClass:"mb-24",attrs:{span:24}},[e("CardAuthorTable",{attrs:{data:t.table1Data,columns:t.table1Columns}})],1)],1),e("a-row",{attrs:{gutter:24,type:"flex"}},[e("a-col",{staticClass:"mb-24",attrs:{span:24}},[e("CardProjectTable2",{attrs:{data:t.table2Data,columns:t.table2Columns}})],1)],1)],1)},o=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-card",{staticClass:"header-solid h-full",attrs:{bordered:!1,bodyStyle:{padding:0}},scopedSlots:t._u([{key:"title",fn:function(){return[e("a-row",{attrs:{type:"flex",align:"middle"}},[e("a-col",{attrs:{span:24,md:12}},[e("h5",{staticClass:"font-semibold m-0"},[t._v("Authors Table")])]),e("a-col",{staticStyle:{display:"flex","align-items":"center","justify-content":"flex-end"},attrs:{span:24,md:12}},[e("a-radio-group",{attrs:{size:"small"},model:{value:t.authorsHeaderBtns,callback:function(a){t.authorsHeaderBtns=a},expression:"authorsHeaderBtns"}},[e("a-radio-button",{attrs:{value:"all"}},[t._v("ALL")]),e("a-radio-button",{attrs:{value:"online"}},[t._v("ONLINE")])],1)],1)],1)]},proxy:!0}])},[e("a-table",{attrs:{columns:t.columns,"data-source":t.data,pagination:!1},scopedSlots:t._u([{key:"author",fn:function(a){return[e("div",{staticClass:"table-avatar-info"},[e("a-avatar",{attrs:{shape:"square",src:a.avatar}}),e("div",{staticClass:"avatar-info"},[e("h6",[t._v(t._s(a.name))]),e("p",[t._v(t._s(a.email))])])],1)]}},{key:"func",fn:function(a){return[e("div",{staticClass:"author-info"},[e("h6",{staticClass:"m-0"},[t._v(t._s(a.job))]),e("p",{staticClass:"m-0 font-regular text-muted"},[t._v(t._s(a.department))])])]}},{key:"status",fn:function(a){return[e("a-tag",{staticClass:"tag-status",class:a?"ant-tag-primary":"ant-tag-muted"},[t._v(" "+t._s(a?"ONLINE":"OFFLINE")+" ")])]}},{key:"editBtn",fn:function(a){return[e("a-button",{staticClass:"btn-edit",attrs:{type:"link","data-id":a.key}},[t._v(" Edit ")])]}}])})],1)},l=[],r={props:{data:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[]}}},data:function(){return{authorsHeaderBtns:"all"}}},i=r,u=e("2877"),c=Object(u["a"])(i,n,l,!1,null,null,null),d=c.exports,m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-card",{staticClass:"header-solid h-full",attrs:{bordered:!1,bodyStyle:{padding:0}},scopedSlots:t._u([{key:"title",fn:function(){return[e("a-row",{attrs:{type:"flex",align:"middle"}},[e("a-col",{attrs:{span:24,md:12}},[e("h5",{staticClass:"font-semibold m-0"},[t._v("Projects Table")])]),e("a-col",{staticStyle:{display:"flex","align-items":"center","justify-content":"flex-end"},attrs:{span:24,md:12}},[e("a-radio-group",{attrs:{size:"small"},model:{value:t.projectHeaderBtns,callback:function(a){t.projectHeaderBtns=a},expression:"projectHeaderBtns"}},[e("a-radio-button",{attrs:{value:"all"}},[t._v("ALL")]),e("a-radio-button",{attrs:{value:"online"}},[t._v("ONLINE")]),e("a-radio-button",{attrs:{value:"stores"}},[t._v("STORES")])],1)],1)],1)]},proxy:!0}])},[e("a-table",{attrs:{columns:t.columns,"data-source":t.data,pagination:!1},scopedSlots:t._u([{key:"name",fn:function(a){return[e("a",[t._v(t._s(a))])]}},{key:"members",fn:function(a){return e("a-space",{staticClass:"avatar-chips",attrs:{size:-12}},[t._l(a,(function(t){return[e("a-avatar",{key:t,attrs:{size:"small",src:t}})]}))],2)}},{key:"company",fn:function(a){return[e("h6",{staticClass:"m-0"},[e("img",{staticStyle:{"margin-right":"10px"},attrs:{src:a.logo,width:"25"}}),t._v(" "+t._s(a.name)+" ")])]}},{key:"completion",fn:function(a){return[e("div",{staticClass:"progress-right"},[e("div",{staticClass:"text-right text-sm font-semibold text-muted pr-15"},[t._v(t._s(a.value||0==a.value?a.value:a)+"%")]),e("a-progress",{staticClass:"m-0",attrs:{percent:a.value||0==a.value?a.value:a,"show-info":!1,size:"small",status:a.status?a.status:"normal"}})],1)]}},{key:"editBtn",fn:function(t){return[e("a-button",{attrs:{type:"link","data-id":t.key}},[e("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{staticClass:"fill-gray-7",attrs:{d:"M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"}}),e("path",{staticClass:"fill-gray-7",attrs:{d:"M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"}})])])]}}])}),e("div",{staticClass:"table-upload-btn"},[e("a-button",{attrs:{type:"dashed",block:""}},[e("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17ZM6.29289 6.70711C5.90237 6.31658 5.90237 5.68342 6.29289 5.29289L9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2C10.2652 2 10.5196 2.10536 10.7071 2.29289L13.7071 5.29289C14.0976 5.68342 14.0976 6.31658 13.7071 6.70711C13.3166 7.09763 12.6834 7.09763 12.2929 6.70711L11 5.41421L11 13C11 13.5523 10.5523 14 10 14C9.44771 14 9 13.5523 9 13L9 5.41421L7.70711 6.70711C7.31658 7.09763 6.68342 7.09763 6.29289 6.70711Z",fill:"#111827"}})]),t._v(" Upload New Project ")])],1)],1)},p=[],g={props:{data:{type:Array,default:function(){return[]}},columns:{type:Array,default:function(){return[]}}},data:function(){return{projectHeaderBtns:"all"}}},f=g,v=Object(u["a"])(f,m,p,!1,null,null,null),y=v.exports,b=[{title:"AUTHOR",dataIndex:"author",scopedSlots:{customRender:"author"}},{title:"FUNCTION",dataIndex:"func",scopedSlots:{customRender:"func"}},{title:"STATUS",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"EMPLOYED",dataIndex:"employed",class:"text-muted"},{title:"",scopedSlots:{customRender:"editBtn"},width:50}],h=[{key:"1",author:{avatar:"/images/face-2.jpg",name:"Michael John",email:"michael@mail.com"},func:{job:"Manager",department:"Organization"},status:1,employed:"23/04/18"},{key:"2",author:{avatar:"/images/face-3.jpg",name:"Alexa Liras",email:"alexa@mail.com"},func:{job:"Programator",department:"Developer"},status:0,employed:"23/12/20"},{key:"3",author:{avatar:"/images/face-1.jpg",name:"Laure Perrier",email:"laure@mail.com"},func:{job:"Executive",department:"Projects"},status:1,employed:"13/04/19"},{key:"4",author:{avatar:"/images/face-4.jpg",name:"Miriam Eric",email:"miriam@mail.com"},func:{job:"Marketing",department:"Organization"},status:1,employed:"03/04/21"},{key:"5",author:{avatar:"/images/face-5.jpeg",name:"Richard Gran",email:"richard@mail.com"},func:{job:"Manager",department:"Organization"},status:0,employed:"23/03/20"},{key:"6",author:{avatar:"/images/face-6.jpeg",name:"John Levi",email:"john@mail.com"},func:{job:"Tester",department:"Developer"},status:0,employed:"14/04/17"}],C=[{title:"COMPANIES",dataIndex:"company",scopedSlots:{customRender:"company"},width:300},{title:"BUDGET",dataIndex:"budget",class:"font-semibold text-muted"},{title:"STATUS",dataIndex:"status",class:"font-semibold text-muted text-sm"},{title:"COMPLETION",scopedSlots:{customRender:"completion"},dataIndex:"completion"},{title:"",scopedSlots:{customRender:"editBtn"},width:50}],x=[{key:"1",company:{name:"Spotify Version",logo:"/images/logos/logo-spotify.svg"},status:"working",budget:"$14,000",completion:60},{key:"2",company:{name:"Progress Track",logo:"/images/logos/logo-atlassian.svg"},status:"working",budget:"$3,000",completion:10},{key:"3",company:{name:"Jira Platform Errors",logo:"/images/logos/logo-slack.svg"},status:"done",budget:"Not Set",completion:{status:"success",value:100}},{key:"4",company:{name:"Launch new Mobile App",logo:"/images/logos/logo-spotify.svg"},status:"canceled",budget:"$20,600",completion:{status:"exception",value:50}},{key:"5",company:{name:"Web Dev",logo:"/images/logos/logo-webdev.svg"},status:"working",budget:"$4,000",completion:80},{key:"6",company:{name:"Redesign Online Store",logo:"/images/logos/logo-invision.svg"},status:"canceled",budget:"$2,000",completion:{status:"exception",value:0}}],k={components:{CardAuthorTable:d,CardProjectTable2:y},data:function(){return{table1Data:h,table1Columns:b,table2Data:x,table2Columns:C}}},_=k,w=Object(u["a"])(_,s,o,!1,null,null,null);a["default"]=w.exports}}]);
//# sourceMappingURL=chunk-74afe032.f94a3174.js.map