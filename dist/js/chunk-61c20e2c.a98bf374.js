(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61c20e2c"],{"2dd6":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contractBox"},[a("Item1",{attrs:{label:"合同编号",value:"xxx"}}),a("Item1",{attrs:{label:"套餐名称",value:"xxx"}}),a("Item1",{attrs:{label:"包厢数量",value:"100"}}),a("Item1",{attrs:{label:"合同起始日期",value:"2018-10-1"}}),a("Item1",{attrs:{label:"结算起始时间",value:"2018-10-1"}}),a("Item1",{attrs:{label:"合同状态",value:"合约中"}}),a("Item1",{attrs:{label:"到账状态",value:"已到账"}}),a("Item2",{attrs:{label:"合同文件",label1:"2018-10-1 11:23",value:"已到账"}}),a("Item2",{attrs:{label:"补充合同",label1:"2018-10-1 11:23",value:"已到账"}}),t.showFooter?a("span",{staticClass:"footer"},[a("van-button",{staticStyle:{"margin-left":"0.26rem"},attrs:{plain:"",hairline:"",round:"",type:"default",size:"small"},on:{click:t.moreBtn}},[t._v("更多")]),a("van-button",{staticStyle:{"margin-left":"0.26rem"},attrs:{plain:"",hairline:"",round:"",type:"default",size:"small"},on:{click:t.goPage}},[t._v("补充")]),a("van-button",{staticStyle:{"margin-left":"0.26rem"},attrs:{plain:"",hairline:"",round:"",type:"default",size:"small"},on:{click:t.goPage}},[t._v("编辑")])],1):t._e(),a("van-popup",{attrs:{position:"bottom"},model:{value:t.moreFlage,callback:function(e){t.moreFlage=e},expression:"moreFlage"}},[a("span",{staticClass:"moreBox"},[a("span",{staticClass:"moreBoxItem",on:{click:t.addBtn}},[t._v("\n\t\t\t\t新增合同\n\t\t\t")]),a("span",{staticClass:"moreBoxItem",on:{click:t.checkBtn}},[t._v("\n\t\t\t\t查看往期\n\t\t\t")]),a("span",{staticClass:"moreBoxItem",on:{click:t.stopBtn}},[t._v("\n\t\t\t\t终止合同\n\t\t\t")]),a("div",{staticStyle:{height:"0.26rem",background:"gainsboro"}}),a("span",{staticClass:"moreBoxItem",staticStyle:{border:"none"},on:{click:function(e){t.moreFlage=!1}}},[t._v("\n\t\t\t\t取消\n\t\t\t")])])])],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"van-cell van-field"},[a("div",{staticClass:"van-cell__title van-field__label"},[t._v(t._s(t.label))]),a("div",{staticClass:"van-cell__value",staticStyle:{display:"flex","align-items":"center","justify-content":"flex-start","margin-left":"0.8rem"}},[a("span",[t._v(" "+t._s(t.value)+" ")])])])},i=[],o={props:{label:{type:String,default:"企业注册名称"},value:{type:String,default:"杭州银乐迪西溪银泰店"}},data:function(){return{}}},r=o,c=a("17cc"),u=Object(c["a"])(r,s,i,!1,null,null,null),m=u.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list2Box"},[a("div",{staticClass:"van-cell van-field"},[a("div",{staticClass:"van-cell__title van-field__label"},[t._v(t._s(t.label))]),a("div",{staticClass:"van-cell__value",staticStyle:{display:"flex","align-items":"center","justify-content":"flex-end","margin-left":"0.8rem"}},[t._v("\n              "+t._s(t.label1)+"\n\t\t\t")])]),a("div",{staticClass:"imgbox"},[a("van-icon",{attrs:{name:"goods-collect-o",size:"2em"}}),a("span",[t._v("\n\t\t\t\t文件名.jpg\n\t\t\t")])],1)])},v=[],f={props:{label:{type:String,default:"企业注册名称"},label1:{type:String,default:"企业注册名称"},value:{type:String,default:"杭州银乐迪西溪银泰店"}},data:function(){return{imageList:[{url:a("cf05"),title:"你看我叼吗1",id:1}]}}},p=f,b=(a("d925"),Object(c["a"])(p,d,v,!1,null,"7f50c9ba",null)),g=b.exports,_={components:{Item1:m,Item2:g},data:function(){return{moreFlage:!1,showFooter:!0}},methods:{onClickLeft:function(){this.$router.go(-1)},moreBtn:function(){this.moreFlage=!0},goPage:function(){},addBtn:function(){this.$router.push({name:"addContract"})},checkBtn:function(){this.$router.push({name:"forwardContract"})},stopBtn:function(){}},mounted:function(){document.title="合同信息",this.$route.query.type&&"forwardContract"==this.$route.query.type&&(this.showFooter=!1)}},h=_,x=(a("cd70"),Object(c["a"])(h,l,n,!1,null,"1b54621e",null));e["default"]=x.exports},"71d1":function(t,e,a){},b6f4:function(t,e,a){},cd70:function(t,e,a){"use strict";var l=a("71d1"),n=a.n(l);n.a},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},d925:function(t,e,a){"use strict";var l=a("b6f4"),n=a.n(l);n.a}}]);
//# sourceMappingURL=chunk-61c20e2c.a98bf374.js.map