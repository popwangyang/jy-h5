(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fa1c6aa"],{"2dd6":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contractBox"},[1==t.pageState?a("span",{staticClass:"content"},[a("span",{staticClass:"body"},[a("Item1",{attrs:{label:"合同编号",value:t.data.number}}),a("Item1",{attrs:{label:"套餐名称",value:t.data.package_name}}),a("Item1",{attrs:{label:"包厢数量",value:t.data.box_count.toString()}}),a("span",{staticClass:"line"}),a("Item1",{attrs:{label:"合同起始日期",value:t.data.begin_date}}),2==t.$store.state.ktv.ktvData.account_status?a("Item1",{attrs:{label:"结算起始日期",value:t.$store.state.ktv.ktvData.chargeable_time}}):t._e(),a("span",{staticClass:"line"}),a("Item1",{attrs:{label:"合同状态",value:t._f("stateFilter")(t.data.state),color:"#01CCA3"}}),a("Item1",{attrs:{label:"到账状态",value:t._f("charge_manageStateFilter")(t.data.charge_manage.state)}}),a("span",{staticClass:"line"}),a("Upload",{attrs:{isShow:!0,title:"合同文件"},model:{value:t.data.annex,callback:function(e){t.$set(t.data,"annex",e)},expression:"data.annex"}}),t._l(t.data.accessory_contract,function(e,n){return a("Upload",{key:e.id,attrs:{isShow:!0,title:"补充合同"},model:{value:e.annex,callback:function(a){t.$set(e,"annex",a)},expression:"item.annex"}},[0!=n||t.editDisabled?t._e():a("van-button",{staticClass:"button-small",attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.goPage(1)}}},[t._v("编辑")])],1)})],2),t.showFooter?a("span",{staticClass:"footer"},[a("van-button",{staticStyle:{"margin-left":"0.26rem"},attrs:{plain:"",hairline:"",round:"",type:"default",size:"small"},on:{click:t.moreBtn}},[t._v("更多")]),a("van-button",{staticStyle:{"margin-left":"0.26rem"},attrs:{plain:"",hairline:"",round:"",type:"default",size:"small"},on:{click:function(e){return t.goPage(1)}}},[t._v("补充")]),a("van-button",{staticStyle:{"margin-left":"0.26rem"},attrs:{plain:"",hairline:"",round:"",type:"default",size:"small",disabled:t.editDisabled},on:{click:function(e){return t.goPage(2)}}},[t._v("编辑")])],1):t._e()]):t._e(),2==t.pageState?a("span",{staticClass:"box"},[a("EmptyComponent",{attrs:{text:"暂无签约合同",title:"新建合同"},on:{eventBtn:t.addBtn}}),a("span",{on:{click:t.checkBtn}},[t._v("\n\t\t\t\t查看往期\n\t\t\t")])],1):t._e(),0==t.pageState?a("span",{staticClass:"box"},[a("van-loading",{attrs:{type:"spinner",vertical:!0}},[t._v("加载中...")])],1):t._e(),a("van-popup",{attrs:{position:"bottom"},model:{value:t.moreFlage,callback:function(e){t.moreFlage=e},expression:"moreFlage"}},[a("span",{staticClass:"moreBox"},[a("span",{staticClass:"moreBoxItem",on:{click:t.addBtn}},[t._v("\n\t\t\t\t\t新增合同\n\t\t\t\t")]),a("span",{staticClass:"moreBoxItem",on:{click:t.checkBtn}},[t._v("\n\t\t\t\t\t查看往期\n\t\t\t\t")]),a("span",{staticClass:"moreBoxItem",on:{click:t.stopBtn}},[t._v("\n\t\t\t\t\t终止合同\n\t\t\t\t")]),a("div",{staticStyle:{height:"0.26rem",background:"gainsboro"}}),a("span",{staticClass:"moreBoxItem",staticStyle:{border:"none"},on:{click:function(e){t.moreFlage=!1}}},[t._v("\n\t\t\t\t\t取消\n\t\t\t\t")])])])],1)},s=[],i=a("9694"),r=a("b970"),o=a("71a5"),l=a("5a42"),c=a("668c"),u=a("885b"),d=a("c276"),m={components:{Item1:l["a"],Item2:c["a"],EmptyComponent:u["a"],Upload:i["a"]},data:function(){return{pageState:0,empty:!1,moreFlage:!1,showFooter:!0,data:""}},computed:{canAddContract:function(){return 1!=this.data.state},editDisabled:function(){var t=!1;return t=2==this.data.charge_manage.state||3==this.data.state,t}},filters:{filterArray:function(t){return[t]},stateFilter:function(t){var e="";switch(parseInt(t)){case 1:e="合同中";break;case 2:e="已过期";break;case 3:e="合同终止";break}return e},charge_manageStateFilter:function(t){return 1==t?"未到账":"已到账"}},methods:{onClickLeft:function(){this.$router.go(-1)},moreBtn:function(){this.moreFlage=!0},goPage:function(t){1!=t?this.$router.push({name:"addContract",query:{type:"edite",ktvID:this.$route.query.ktvID,number:this.data.number}}):Object(r["c"])({message:"请前往pc端修改, 创建补充合同",duration:2e3,background:"#1989fa"})},addBtn:function(t){if(!this.canAddContract)return Object(r["d"])("请终止当前合同"),void(this.moreFlage=!1);this.$router.push({name:"addContract",query:{type:"create",ktvID:this.$route.query.ktvID}})},checkBtn:function(){this.$router.push({name:"forwardContract",query:{ktvID:this.$route.query.ktvID}})},stopBtn:function(){var t=this;this.moreFlage=!1,Object(d["e"])("星期一")?r["a"].confirm({title:"提示",message:"确定要终止该合同？"}).then(function(){t.stopContract()}).catch(function(){}):Object(r["c"])({message:"当前不能终止合同，请在周一进行该操作",duration:1e3,background:"red"})},stopContract:function(){var t=this;r["d"].loading({duration:0,forbidClick:!0});var e={state:3,id:this.data.id};Object(o["y"])(e).then(function(e){r["d"].clear(),r["d"].success("合同已终止"),t.data.state=3,setTimeout(function(){t.$router.go(-1)},500)}).catch(function(t){r["d"].clear(),r["d"].fail("操作失败")})},getDate:function(){var t=this,e={ktv:this.$route.query.ktvID,state:1};this.showFooter||(e.state="",e.number=this.number),this.pageState=0,Object(o["q"])(e).then(function(e){console.log(e),e.data.results.length>0?(t.pageState=1,t.data=e.data.results[0],t.data.accessory_contract.reverse()):t.pageState=2})}},mounted:function(){document.title="合同信息",this.$route.query.type&&"forwardContract"==this.$route.query.type&&(this.showFooter=!1,this.number=this.$route.query.number),this.getDate()}},f=m,p=(a("4b6a"),a("2877")),v=Object(p["a"])(f,n,s,!1,null,"7665a177",null);e["default"]=v.exports},"3d0f":function(t,e,a){},"4b6a":function(t,e,a){"use strict";var n=a("fa9d"),s=a.n(n);s.a},"518b":function(t,e,a){"use strict";var n=a("3d0f"),s=a.n(n);s.a},"5a42":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"van-cell van-field"},[a("div",{staticClass:"van-cell__title van-field__label"},[t._v(t._s(t.label))]),a("div",{staticClass:"van-cell__value",staticStyle:{display:"flex","align-items":"center","justify-content":"flex-end","margin-left":"0.8rem"}},[a("span",{style:{color:t.color}},[t._v(" "+t._s(t.value)+" ")])])])},s=[],i={props:{label:{type:String,default:"企业注册名称"},value:{type:String,default:"杭州银乐迪西溪银泰店"},color:{type:String,default:"#999999"}},data:function(){return{}}},r=i,o=a("2877"),l=Object(o["a"])(r,n,s,!1,null,null,null);e["a"]=l.exports},"668c":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list2Box"},[a("div",{staticClass:"van-cell van-field"},[a("div",{staticClass:"van-cell__title van-field__label"},[t._v(t._s(t.label))]),a("div",{staticClass:"van-cell__value",staticStyle:{display:"flex","align-items":"center","justify-content":"flex-start","margin-left":"0.8rem"}})]),a("div",{staticClass:"imgbox"},[a("van-image",{attrs:{width:"3.2rem",fit:"contain",src:t.src},on:{click:t.ImagePreviewBtn},scopedSlots:t._u([{key:"loading",fn:function(){return[a("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0},{key:"error",fn:function(){return[t._v("加载失败")]},proxy:!0}])}),a("span",[t._v("\n\t\t\t"+t._s(t.name)+"\n\t\t")])],1)])},s=[],i=a("b970"),r={props:{label:{type:String,default:"企业注册名称"},src:{type:String,default:"https://img.yzcdn.cn/vant/cat.jpeg"},name:{type:String,default:""}},data:function(){return{imageList:[{url:a("cf05"),title:"你看我叼吗1",id:1}]}},methods:{ImagePreviewBtn:function(){Object(i["b"])([this.src])}}},o=r,l=(a("518b"),a("2877")),c=Object(l["a"])(o,n,s,!1,null,"5262fee6",null);e["a"]=c.exports},fa9d:function(t,e,a){}}]);
//# sourceMappingURL=chunk-6fa1c6aa.79a93c06.js.map