(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c21a9800"],{"5ed4c":function(t,e,n){"use strict";var a=n("ab9f"),i=n.n(a);i.a},9742:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"forwardContractBox"},[n("span",{staticClass:"content"},[t.empty?t._e():n("van-list",{attrs:{finished:t.finished,offset:0,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[n("div",{staticClass:"list-item"},t._l(t.list,function(e){return n("van-cell",{key:e,attrs:{title:"合同编号",label:"2019-6-3",value:"已终止","is-link":""},on:{click:t.goDetail}})}),1)]),t.empty?n("span",{staticClass:"empty"},[n("EmptyImageComponent",{attrs:{text:t.text,img:"empty"}})],1):t._e()],1)])},i=[],o=n("71a5"),s=n("1926"),c={components:{EmptyImageComponent:s["a"]},data:function(){return{text:"暂无充值记录",list:[],count:0,loading:!1,finished:!1,isLoading:!1,page:1,page_size:30,empty:!1}},methods:{onLoad:function(){var t=this,e={page:this.page,page_size:this.page_size,platform:3,place_id:this.$route.query.ktvID,order:"create_date"};Object(o["s"])(e).then(function(e){var n=t.list.concat(e.data.results),a={};t.list=n.reduce(function(t,e){return!a[e.id]&&(a[e.id]=t.push(e)),t},[]),t.count=e.data.count,t.page++,t.loading=!1,t.isLoading=!1,t.list.length>=t.count&&(t.finished=!0),0==t.count&&(t.empty=!0)})},goDetail:function(){}},mounted:function(){document.title="充值记录"}},l=c,u=(n("5ed4c"),n("2877")),d=Object(u["a"])(l,a,i,!1,null,"cef478a2",null);e["default"]=d.exports},ab9f:function(t,e,n){}}]);
//# sourceMappingURL=chunk-c21a9800.b62d65b3.js.map