(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa4f482e"],{"8f15":function(e,a,t){"use strict";var n=t("b372"),l=t.n(n);l.a},"8ff2":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"editBox"},[t("SelectComponent",{attrs:{label:"vod品牌",placeholder:"请选择",type:"default",columns:e.columns},model:{value:e.data.vodPingpai,callback:function(a){e.$set(e.data,"vodPingpai",a)},expression:"data.vodPingpai"}}),t("van-field",{attrs:{clearable:"",label:"系统版本号",placeholder:"请输入","input-align":"right"},model:{value:e.data.SystemVersionNumber,callback:function(a){e.$set(e.data,"SystemVersionNumber",a)},expression:"data.SystemVersionNumber"}}),t("van-field",{attrs:{clearable:"",label:"vod场所ID",placeholder:"请输入","input-align":"right"},model:{value:e.data.VodPlacID,callback:function(a){e.$set(e.data,"VodPlacID",a)},expression:"data.VodPlacID"}}),t("van-field",{attrs:{clearable:"",label:"实施包厢数",placeholder:"请输入","input-align":"right"},model:{value:e.data.ImplementingNumberBoxes,callback:function(a){e.$set(e.data,"ImplementingNumberBoxes",a)},expression:"data.ImplementingNumberBoxes"}}),t("span",{staticClass:"footer"},[t("van-button",{attrs:{type:"primary",size:"large",loading:e.loading,"loading-type":"spinner","loading-text":"加载中..."},on:{click:e.saveBtn}},[e._v("保存")])],1)],1)},l=[],o=t("71fd"),i=t("3724"),s={components:{SelectComponent:i["a"]},data:function(){return{columns:["品牌1","品牌2","品牌3","品牌4","品牌5","品牌6"],loading:!1,data:{vodPingpai:"",SystemVersionNumber:"",VodPlacID:"",ImplementingNumberBoxes:""}}},methods:{onClickLeft:function(){this.$router.go(-1)},saveBtn:function(){var e=this;this.loading=!0,setTimeout(function(){e.loading=!1,o["b"].success("保存成功")},2e3)}},mounted:function(){document.title="实施信息"}},c=s,d=(t("8f15"),t("17cc")),r=Object(d["a"])(c,n,l,!1,null,"7cd9eb22",null);a["default"]=r.exports},b372:function(e,a,t){}}]);
//# sourceMappingURL=chunk-fa4f482e.9d6bc6a8.js.map