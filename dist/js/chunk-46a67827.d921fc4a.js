(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46a67827"],{ca3c:function(n,t,i){"use strict";i.r(t);var e=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"UpgradeRecordBox"},[i("span",{staticClass:"content"},[i("van-pull-refresh",{on:{refresh:n.onRefresh},model:{value:n.isLoading,callback:function(t){n.isLoading=t},expression:"isLoading"}},[i("van-list",{attrs:{finished:n.finished,offset:10,"finished-text":"没有更多了"},on:{load:n.onLoad},model:{value:n.loading,callback:function(t){n.loading=t},expression:"loading"}},[i("div",{staticClass:"list-item"},n._l(n.list,function(n){return i("van-cell",{key:n,attrs:{title:"v2.3.0",value:"2019-6-3 11:23:32"}})}),1)])],1)],1)])},o=[],s={data:function(){return{list:[],loading:!1,finished:!1,isLoading:!1}},methods:{onClickLeft:function(){this.$router.go(-1)},onLoad:function(){var n=this;setTimeout(function(){for(var t=0;t<15;t++)n.list.push(n.list.length+1);n.loading=!1,n.list.length>=60&&(n.finished=!0)},500)},onRefresh:function(){var n=this;setTimeout(function(){n.finished=!1,n.isLoading=!1,n.list=[],n.onLoad()},500)},createBtn:function(){}},mounted:function(){document.title="升级记录"}},a=s,l=(i("e379"),i("17cc")),c=Object(l["a"])(a,e,o,!1,null,"e09592a6",null);t["default"]=c.exports},cdfa:function(n,t,i){},e379:function(n,t,i){"use strict";var e=i("cdfa"),o=i.n(e);o.a}}]);
//# sourceMappingURL=chunk-46a67827.d921fc4a.js.map