(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-519bd2ac"],{4088:function(t,e,a){"use strict";var s=a("e5b8"),n=a.n(s);n.a},cd17:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ImplementationBox"},[a("span",{staticClass:"nav"},[t._v("\n\t  \t企业信息\n\t")]),a("Item1",{attrs:{label:"vod品牌",value:"xxxx"}}),a("Item1",{attrs:{label:"系统版本号",value:"v2.0.0"}}),a("Item1",{attrs:{label:"vod场所ID",value:"2223323"}}),a("Item1",{attrs:{label:"实施包厢数",value:"56"}}),a("span",{staticClass:"box3"},[a("span",{staticClass:"item"},[a("span",{staticClass:"icon",on:{click:function(e){return t.clickBtn(1)}}},[a("van-icon",{attrs:{name:"browsing-history",size:"3.6em"}})],1),a("span",{staticClass:"text"},[t._v("升级系统")])]),a("span",{staticClass:"item"},[a("span",{staticClass:"icon",on:{click:function(e){return t.clickBtn(2)}}},[a("van-icon",{attrs:{name:"browsing-history",size:"3.6em"}})],1),a("span",{staticClass:"text"},[t._v("升级记录")])]),a("span",{staticClass:"item"},[a("span",{staticClass:"icon",on:{click:function(e){return t.clickBtn(3)}}},[a("van-icon",{attrs:{name:"browsing-history",size:"3.6em"}})],1),a("span",{staticClass:"text"},[t._v("编辑")])]),a("span",{staticClass:"item"},[a("span",{staticClass:"icon",on:{click:function(e){return t.clickBtn(4)}}},[a("van-icon",{attrs:{name:"browsing-history",size:"3.6em"}})],1),a("span",{staticClass:"text"},[t._v("新增实施")])]),a("span",{staticClass:"item"},[a("span",{staticClass:"icon",on:{click:function(e){return t.clickBtn(5)}}},[a("van-icon",{attrs:{name:"browsing-history",size:"3.6em"}})],1),a("span",{staticClass:"text"},[t._v("实施记录")])])]),a("van-dialog",{attrs:{title:"升级系统","show-cancel-button":""},model:{value:t.UpgradeSystemFlage,callback:function(e){t.UpgradeSystemFlage=e},expression:"UpgradeSystemFlage"}},[a("span",{staticClass:"dialogFlage"},[a("span",{staticClass:"title"},[t._v("当前版本：V2.3.0 ")]),a("span",{staticClass:"input"},[a("van-field",{staticStyle:{background:"#f5f5f9","border-radius":"6px"},attrs:{placeholder:"请输入升级版本号"},on:{focus:t.onFocus},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)])]),a("van-number-keyboard",{attrs:{show:t.keyboardshow,theme:"custom","extra-key":".","close-button-text":"完成","z-index":1e4},on:{blur:function(e){t.keyboardshow=!1},input:t.onInput,delete:t.onDelete}})],1)},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"van-cell van-field"},[a("div",{staticClass:"van-cell__title van-field__label"},[t._v(t._s(t.label))]),a("div",{staticClass:"van-cell__value",staticStyle:{display:"flex","align-items":"center","justify-content":"flex-start","margin-left":"0.8rem"}},[a("span",[t._v(" "+t._s(t.value)+" ")])])])},l=[],c={props:{label:{type:String,default:"企业注册名称"},value:{type:String,default:"杭州银乐迪西溪银泰店"}},data:function(){return{}}},o=c,r=a("17cc"),u=Object(r["a"])(o,i,l,!1,null,null,null),p=u.exports,v=(a("71fd"),{components:{Item1:p},data:function(){return{UpgradeSystemFlage:!1,value:"",keyboardshow:!1}},methods:{onClickLeft:function(){this.$router.go(-1)},clickBtn:function(t){switch(t){case 1:this.UpgradeSystemBtn();break;case 2:this.$router.push({name:"UpgradeRecord"});break;case 3:this.$router.push({name:"edit"});break;case 4:this.$router.push({name:"edit"});break;case 5:this.$router.push({name:"ImplementationRecord"});break}},UpgradeSystemBtn:function(){this.UpgradeSystemFlage=!0},onFocus:function(){this.keyboardshow=!0,document.activeElement.blur()},onInput:function(t){this.value+=t,console.log(t)},onDelete:function(){this.value.length>0&&(this.value=this.value.substr(0,this.value.length-1))}},mounted:function(){document.title="实施信息"}}),d=v,m=(a("4088"),Object(r["a"])(d,s,n,!1,null,"0c458a9b",null));e["default"]=m.exports},e5b8:function(t,e,a){}}]);
//# sourceMappingURL=chunk-519bd2ac.fff744eb.js.map