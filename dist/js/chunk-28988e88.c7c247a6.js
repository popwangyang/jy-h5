(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28988e88"],{"281d":function(t,s,a){},2905:function(t,s,a){"use strict";a.r(s);var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"ktvDetailBox"},[a("span",{staticClass:"content"},[a("span",{staticClass:"box1"},[a("span",{staticClass:"title"},[a("span",{staticClass:"text"},[t._v(t._s(t.data.name))]),a("span",[a("van-button",{attrs:{type:"info",size:"small"},on:{click:t.editeBtn}},[t._v("编辑")])],1)]),a("span",{staticClass:"type"},[1==t.data.type?a("span",[t._v("量贩式")]):a("span",[t._v("夜店式")]),a("span",[t._v("商户A")])]),a("span",{staticClass:"detail"},[a("span",{staticClass:"item"},[a("van-icon",{attrs:{name:"manager"}}),a("span",[t._v(t._s(t.data.contact))])],1),a("span",{staticClass:"item"},[a("van-icon",{attrs:{name:"phone"}}),a("span",[t._v(t._s(t.data.phone_number))])],1)]),a("span",{staticClass:"address"},[a("span",{staticClass:"address_left"},[a("van-icon",{attrs:{name:"location"}})],1),a("span",{staticClass:"address_right"},[t._v("\n\t\t\t\t\t"+t._s(t.address)+"\n\t\t\t\t")])])]),a("span",{staticClass:"box2"},[a("span",{staticClass:"title"},[t._v("营业信息")]),a("span",{staticClass:"time"},[a("span",{staticClass:"time_title"},[t._v("\n\t\t\t\t\t开业时间\n\t\t\t\t")]),a("span",{staticClass:"time_content"},[t._v("\n\t\t\t\t\t"+t._s(t.data.opening_hours)+"\n\t\t\t\t")])]),a("span",{staticClass:"time"},[a("span",{staticClass:"time_title"},[t._v("\n\t\t\t\t\t营业时间\n\t\t\t\t")]),a("span",{staticClass:"time_content"},[t._v("\n\t\t\t\t\t"+t._s(t.Ytime)+"\n\t\t\t\t")])])]),a("span",{staticClass:"box3"},[a("span",{staticClass:"item"},[a("span",{staticClass:"icon",on:{click:function(s){return t.goPage(1)}}},[a("van-icon",{attrs:{name:"browsing-history",size:"3.6em"}})],1),a("span",{staticClass:"text"},[t._v("企业信息")])]),a("span",{staticClass:"item"},[a("span",{staticClass:"icon",on:{click:function(s){return t.goPage(2)}}},[a("van-icon",{attrs:{name:"browsing-history",size:"3.6em"}})],1),a("span",{staticClass:"text"},[t._v("实施信息")])]),a("span",{staticClass:"item"},[a("span",{staticClass:"icon",on:{click:function(s){return t.goPage(3)}}},[a("van-icon",{attrs:{name:"browsing-history",size:"3.6em"}})],1),a("span",{staticClass:"text"},[t._v("签约信息")])]),a("span",{staticClass:"item"},[a("span",{staticClass:"icon",on:{click:function(s){return t.goPage(4)}}},[a("van-icon",{attrs:{name:"browsing-history",size:"3.6em"}})],1),a("span",{staticClass:"text"},[t._v("账号信息")])]),a("span",{staticClass:"item"},[a("span",{staticClass:"icon",on:{click:function(s){return t.goPage(5)}}},[a("van-icon",{attrs:{name:"browsing-history",size:"3.6em"}})],1),a("span",{staticClass:"text"},[t._v("线下充值")])])])])])},e=[],i=a("7454"),c=i["a"],o=(a("3eb9"),a("17cc")),r=Object(o["a"])(c,n,e,!1,null,"0fa0195a",null);s["default"]=r.exports},"3eb9":function(t,s,a){"use strict";var n=a("281d"),e=a.n(n);e.a},7454:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__["a"]={data:function(){return{data:""}},computed:{address:function(){var t=this.data.province+","+this.data.city+","+this.data.county+","+this.data.address;return t},Ytime:function Ytime(){var obj=eval("("+this.data.business_hours+")");if(console.log(obj),obj){if(0==obj.flag)return"全部时间段";var str=obj.start+"-"+obj.end+"  ";return obj.days.map(function(t){switch(t){case 1:str+="星期一,";break;case 2:str+="星期二,";break;case 3:str+="星期三,";break;case 4:str+="星期四,";break;case 5:str+="星期五,";break;case 6:str+="星期六,";break;case 7:str+="星期日,";break}}),str.substr(0,str.length-1)}}},methods:{onClickLeft:function(){this.$router.go(-1)},editeBtn:function(){this.$router.push({name:"ktvEdite",params:{type:"edite"}})},goPage:function(t){switch(t){case 1:this.$router.push({name:"CImessage"});break;case 2:this.$router.push({name:"Implementation"});break;case 3:this.$router.push({name:"contractInformation"});break;case 4:this.$router.push({name:"Implementation"});break;case 5:this.$router.push({name:"Implementation"});break}}},mounted:function(){document.title="场所详情",this.data=JSON.parse(this.$route.query.item),console.log(this.data)}}}}]);
//# sourceMappingURL=chunk-28988e88.c7c247a6.js.map