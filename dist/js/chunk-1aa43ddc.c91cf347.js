(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1aa43ddc"],{"915e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"forwardContractBox"},[1==t.pageState?a("span",{staticClass:"content"},[a("van-list",{attrs:{finished:t.finished,offset:0,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[a("div",{staticClass:"list-item"},t._l(t.list,function(e){return a("van-cell",{key:e.id,attrs:{title:e.number,label:e.create_date,value:t._f("stateFilter")(e.state),"is-link":""},on:{click:function(a){return t.goDetail(e)}}})}),1)])],1):t._e(),3==t.pageState?a("span",{staticClass:"box"},[a("Error",{attrs:{text:"数据请求异常",img:"fail"}})],1):t._e(),2==t.pageState?a("span",{staticClass:"box"},[a("Empty",{attrs:{text:"暂无往期合同",img:"empty"}})],1):t._e()])},i=[],s=a("1926"),o=a("71a5"),r={components:{Error:s["a"],Empty:s["a"]},data:function(){return{pageState:1,list:[],count:0,loading:!1,finished:!1,isLoading:!1,page:1,page_size:30,empty:!1,ktvID:""}},filters:{stateFilter:function(t){var e="";switch(parseInt(t)){case 1:e="合同中";break;case 2:e="已过期";break;case 3:e="已终止";break}return e}},methods:{onClickLeft:function(){this.$router.go(-1)},onLoad:function(){var t=this,e={ktv:this.ktvID,page:this.page,page_size:this.page_size};Object(o["q"])(e).then(function(e){var a=t.list.concat(e.data.results),n={};t.list=a.reduce(function(t,e){return!n[e.id]&&(n[e.id]=t.push(e)),t},[]),t.count=e.data.count,t.page++,t.loading=!1,t.list.length>=t.count&&(t.finished=!0),0==t.count&&(t.pageState=2)}).catch(function(e){t.pageState=3})},onRefresh:function(){var t=this;setTimeout(function(){t.finished=!1,t.isLoading=!1,t.list=[],t.onLoad()},500)},createBtn:function(){},goDetail:function(t){this.$router.push({name:"contractInformation",query:{type:"forwardContract",ktvID:this.$route.query.ktvID,number:t.number}})}},mounted:function(){document.title="往期合同",this.ktvID=this.$route.query.ktvID}},c=r,u=(a("966b"),a("2877")),l=Object(u["a"])(c,n,i,!1,null,"2de5b88f",null);e["default"]=l.exports},"966b":function(t,e,a){"use strict";var n=a("a979"),i=a.n(n);i.a},a979:function(t,e,a){}}]);
//# sourceMappingURL=chunk-1aa43ddc.c91cf347.js.map