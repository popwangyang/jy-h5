(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c2dbd78"],{"54cf":function(n,t,i){"use strict";i.r(t);var e=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"ImplementationRecordBox"},[i("span",{staticClass:"content"},[i("van-pull-refresh",{on:{refresh:n.onRefresh},model:{value:n.isLoading,callback:function(t){n.isLoading=t},expression:"isLoading"}},[i("van-list",{attrs:{finished:n.finished,offset:10,"finished-text":"没有更多了"},on:{load:n.onLoad},model:{value:n.loading,callback:function(t){n.loading=t},expression:"loading"}},[i("div",{staticClass:"list-item"},n._l(n.list,function(n){return i("van-cell",{key:n,attrs:{title:"vod品牌",label:"2019-6-3 11:23:32","is-link":""}})}),1)])],1)],1)])},o=[],s={data:function(){return{list:[],loading:!1,finished:!1,isLoading:!1}},methods:{onClickLeft:function(){this.$router.go(-1)},onLoad:function(){var n=this;setTimeout(function(){for(var t=0;t<15;t++)n.list.push(n.list.length+1);n.loading=!1,n.list.length>=60&&(n.finished=!0)},500)},onRefresh:function(){var n=this;setTimeout(function(){n.finished=!1,n.isLoading=!1,n.list=[],n.onLoad()},500)},createBtn:function(){}},mounted:function(){document.title="实施记录"}},a=s,l=(i("98aa"),i("17cc")),c=Object(l["a"])(a,e,o,!1,null,"68667271",null);t["default"]=c.exports},"98aa":function(n,t,i){"use strict";var e=i("f23c"),o=i.n(e);o.a},f23c:function(n,t,i){}}]);
//# sourceMappingURL=chunk-4c2dbd78.b21d8f31.js.map