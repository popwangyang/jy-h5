(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-247f27c0"],{"1fa6":function(t,e,a){},"518b":function(t,e,a){"use strict";var n=a("1fa6"),i=a.n(n);i.a},"5a42":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"van-cell van-field"},[a("div",{staticClass:"van-cell__title van-field__label"},[t._v(t._s(t.label))]),a("div",{staticClass:"van-cell__value",staticStyle:{display:"flex","align-items":"center","justify-content":"flex-end","margin-left":"0.8rem"}},[a("span",{style:{color:t.color}},[t._v(" "+t._s(t.value)+" ")])])])},i=[],l={props:{label:{type:String,default:"企业注册名称"},value:{type:String,default:"杭州银乐迪西溪银泰店"},color:{type:String,default:"#999999"}},data:function(){return{}}},s=l,r=a("17cc"),c=Object(r["a"])(s,n,i,!1,null,null,null);e["a"]=c.exports},6319:function(t,e,a){},"668c":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list2Box"},[a("div",{staticClass:"van-cell van-field"},[a("div",{staticClass:"van-cell__title van-field__label"},[t._v(t._s(t.label))]),a("div",{staticClass:"van-cell__value",staticStyle:{display:"flex","align-items":"center","justify-content":"flex-start","margin-left":"0.8rem"}})]),a("div",{staticClass:"imgbox"},[a("van-image",{attrs:{width:"3.2rem",fit:"contain",src:t.src},on:{click:t.ImagePreviewBtn},scopedSlots:t._u([{key:"loading",fn:function(){return[a("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0},{key:"error",fn:function(){return[t._v("加载失败")]},proxy:!0}])}),a("span",[t._v("\n\t\t\t"+t._s(t.name)+"\n\t\t")])],1)])},i=[],l=a("71fd"),s={props:{label:{type:String,default:"企业注册名称"},src:{type:String,default:"https://img.yzcdn.cn/vant/cat.jpeg"},name:{type:String,default:""}},data:function(){return{imageList:[{url:a("cf05"),title:"你看我叼吗1",id:1}]}},methods:{ImagePreviewBtn:function(){Object(l["b"])([this.src])}}},r=s,c=(a("518b"),a("17cc")),o=Object(c["a"])(r,n,i,!1,null,"5262fee6",null);e["a"]=o.exports},cca7:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ICmessageBox"},[1==t.pageState?a("span",[a("span",{staticClass:"nav"},[t._v("\n\t\t\t\t企业信息\n\t\t")]),a("Item1",{attrs:{label:"企业注册名称",value:t.company_name}}),a("Item1",{attrs:{label:"营业执照编号",value:t.license_number}}),a("Item2",{attrs:{label:"营业执照照片",src:t.license_photo.download_url,name:t.license_photo.name}}),a("span",{staticClass:"nav"},[t._v("\n\t\t\t\t法人信息\n\t\t")]),a("Item1",{attrs:{label:"法人姓名",value:t.legal_representative}}),a("Item1",{attrs:{label:"身份证号",value:t.legal_representative_card}}),a("Item2",{attrs:{label:"身份证照片",src:t.identity_card_photo.download_url,name:t.identity_card_photo.name}}),a("span",{staticClass:"footer"},[a("van-button",{attrs:{plain:"",hairline:"",round:"",type:"default",size:"small"},on:{click:function(e){return t.goPage("edite")}}},[t._v("编辑")])],1)],1):t._e(),0==t.pageState?a("span",{staticClass:"box"},[a("van-loading",{attrs:{type:"spinner",vertical:!0}},[t._v("加载中...")])],1):t._e(),2==t.pageState?a("span",{staticClass:"box"},[a("EmptyComponent",{attrs:{text:"暂无企业信息",title:"创建企业信息"},on:{eventBtn:function(e){return t.goPage("create")}}})],1):t._e()])},i=[],l=a("71a5"),s=a("885b"),r=a("5a42"),c=a("668c"),o={components:{Item1:r["a"],Item2:c["a"],EmptyComponent:s["a"]},data:function(){return{data:"",pageState:0,company_name:"",identity_card_photo:"",legal_representative:"",legal_representative_card:"",license_number:"",license_photo:""}},methods:{onClickLeft:function(){this.$router.go(-1)},goPage:function(t){this.$router.push({name:"CIedite",query:{type:t,id:this.$route.query.id,data:"edite"==t?JSON.stringify(this.data):null}})},init:function(t){this.company_name=t.company_name,this.identity_card_photo=t.identity_card_photo,this.legal_representative=t.legal_representative,this.legal_representative_card=t.legal_representative_card,this.license_number=t.license_number,this.license_photo=t.license_photo,console.log(t)},getData:function(t){var e=this;this.pageState=0,Object(l["g"])(t).then(function(t){0==t.data.results.length?e.pageState=2:(e.pageState=1,e.data=t.data.results[0],e.init(t.data.results[0]))})}},mounted:function(){document.title="企业信息",this.getData(this.$route.query.id)}},u=o,d=(a("ce97"),a("17cc")),p=Object(d["a"])(u,n,i,!1,null,"70bda5d6",null);e["default"]=p.exports},ce97:function(t,e,a){"use strict";var n=a("6319"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-247f27c0.562171d8.js.map