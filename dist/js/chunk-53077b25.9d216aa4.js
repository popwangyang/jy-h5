(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53077b25"],{"5a42":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"van-cell van-field"},[e("div",{staticClass:"van-cell__title van-field__label"},[t._v(t._s(t.label))]),e("div",{staticClass:"van-cell__value",staticStyle:{display:"flex","align-items":"center","justify-content":"flex-end","margin-left":"0.8rem"}},[e("span",{style:{color:t.color}},[t._v(" "+t._s(t.value)+" ")])])])},i=[],c={props:{label:{type:String,default:"企业注册名称"},value:{type:String,default:"杭州银乐迪西溪银泰店"},color:{type:String,default:"#999999"}},data:function(){return{}}},s=c,l=e("2877"),r=Object(l["a"])(s,n,i,!1,null,null,null);a["a"]=r.exports},8165:function(t,a,e){},adc0:function(t,a,e){"use strict";var n=e("8165"),i=e.n(n);i.a},f73e:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"accountInformationBox"},[1==t.statePage?e("div",{staticClass:"box1"},[e("span",{staticClass:"line"}),e("Item1",{attrs:{label:"昵称",value:t.data.nickname}}),e("Item1",{attrs:{label:"登录账号",value:t.data.email}}),e("Item1",{attrs:{label:"余额",value:t.data.balance}}),e("Item1",{attrs:{label:"创建日期",value:t.data.create_date}}),e("span",{staticClass:"line"}),null!=t.data.phone?e("Item1",{attrs:{label:"状态",value:t.data.phone}}):t._e(),e("Item1",{attrs:{label:"状态",value:t.data.is_active}}),e("Item1",{attrs:{label:"性质",value:t.account_status}}),e("span",{staticClass:"footer"},["已启用"==t.data.is_active?e("van-button",{staticStyle:{"margin-left":"0.3rem"},attrs:{plain:"",hairline:"",round:"",type:"default",size:"small"},on:{click:t.stopAccontBtn}},[t._v("禁用账号")]):t._e(),"已禁用"==t.data.is_active?e("van-button",{staticStyle:{"margin-left":"0.3rem"},attrs:{plain:"",hairline:"",round:"",type:"default",size:"small"},on:{click:t.startAccontBtn}},[t._v("启用账号")]):t._e(),1==t.data.account_status?e("van-button",{staticStyle:{"margin-left":"0.3rem"},attrs:{plain:"",hairline:"",round:"",type:"default",size:"small"},on:{click:t.enableAccontBtn}},[t._v("正式启用")]):t._e(),e("van-button",{staticStyle:{"margin-left":"0.3rem"},attrs:{plain:"",hairline:"",round:"",type:"default",size:"small"},on:{click:t.editBtn}},[t._v("编辑")])],1)],1):t._e(),2==t.statePage?e("div",{staticClass:"box2"},[e("EmptyComponent",{attrs:{text:t.text,title:t.title},on:{eventBtn:t.createBtn}})],1):t._e(),0==t.statePage?e("div",{staticClass:"box2"},[e("van-loading",{attrs:{type:"spinner",vertical:!0}},[t._v("加载中...")])],1):t._e(),3==t.statePage?e("div",{staticClass:"box2"},[e("Error",{attrs:{text:"数据请求异常",img:"fail"}})],1):t._e()])},i=[],c=e("71a5"),s=e("885b"),l=e("1926"),r=e("5a42"),o=e("b970"),u={components:{Item1:r["a"],EmptyComponent:s["a"],Error:l["a"]},data:function(){return{statePage:0,text:"暂未创建账号",title:"新建试用账号",ktvID:"",data:"",account_status:""}},methods:{stopAccontBtn:function(){var t=this,a=this;o["a"].confirm({title:"禁用账号",message:"禁用账号后，将无法登录，确定禁用吗？"}).then(function(){var e={id:a.data.id,is_active:0,area_code_list:a.data.area_code_list};o["c"].loading({duration:0,forbidClick:!0,loadingType:"circular"}),Object(c["r"])(e).then(function(a){o["c"].clear(),o["c"].success("账号已禁用"),t.data.is_active="已禁用"}).catch(function(){o["c"].fail("操作失败")})})},startAccontBtn:function(){var t=this,a=this;o["a"].confirm({title:"启用账号",message:"启用账号后，将可以登录，确定启用吗？"}).then(function(){var e={id:a.data.id,is_active:1,area_code_list:a.data.area_code_list};o["c"].loading({duration:0,forbidClick:!0,loadingType:"circular"}),Object(c["r"])(e).then(function(a){o["c"].clear(),o["c"].success("账号已启用"),t.data.is_active="已启用"}).catch(function(){o["c"].fail("操作失败")})})},enableAccontBtn:function(){this.$router.push({name:"enableAccont",query:{ktvID:this.$route.query.ktvID}})},editBtn:function(){this.$router.push({name:"editAccountInformation",query:{type:"edit",ktvID:this.$route.query.ktvID}})},createBtn:function(){this.$router.push({name:"editAccountInformation",query:{type:"create",ktvID:this.$route.query.ktvID}})},getData:function(){var t=this,a={code:"K",ktv_id:this.ktvID};this.statePage=0,Object(c["g"])(a).then(function(a){a.length>0?(t.statePage=1,t.data=a[0],t.data.is_active=t.data.is_active?"已启用":"已禁用",t.data.balance=t.data.balance+"元",t.account_status=1==t.data.account_status?"试用账号":"正式账号"):t.statePage=1}).catch(function(a){t.statePage=3})}},mounted:function(){document.title="账号信息",this.ktvID=this.$route.query.ktvID,this.getData()}},d=u,v=(e("adc0"),e("2877")),f=Object(v["a"])(d,n,i,!1,null,"42778154",null);a["default"]=f.exports}}]);
//# sourceMappingURL=chunk-53077b25.9d216aa4.js.map