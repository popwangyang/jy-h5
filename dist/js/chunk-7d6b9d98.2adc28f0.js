(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d6b9d98"],{"9e93":function(t,e,a){},a8a1:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"editAccountInformationBox"},[a("van-field",{attrs:{label:"账号","input-align":"right",placeholder:"请输入邮箱地址"},model:{value:t.data.account,callback:function(e){t.$set(t.data,"account",e)},expression:"data.account"}}),a("van-field",{attrs:{label:"初始密码",type:t.inputType,"input-align":"right","right-icon":t.passwordIconType,placeholder:"请输入"},on:{"click-right-icon":t.righIconBtn},model:{value:t.data.password,callback:function(e){t.$set(t.data,"password",e)},expression:"data.password"}}),a("van-field",{attrs:{label:"手机号",type:"tel","input-align":"right",placeholder:"请输入"},model:{value:t.data.phone,callback:function(e){t.$set(t.data,"phone",e)},expression:"data.phone"}}),a("div",{staticClass:"van-cell van-field"},[a("div",{staticClass:"van-cell__title van-field__label"},[t._v("是否启用")]),a("div",{staticClass:"van-cell__value"},[a("van-switch",{attrs:{size:"22px"},model:{value:t.data.checked,callback:function(e){t.$set(t.data,"checked",e)},expression:"data.checked"}})],1)]),a("span",{staticClass:"footer"},[a("van-button",{attrs:{loading:t.loading,"loading-type":"spinner","loading-text":"加载中...",type:"primary",size:"large"},on:{click:t.onClickBtn}},[t._v(t._s(t.buttonText))])],1)],1)},i=[],o=a("71fd"),c={data:function(){return{loading:!1,inputTypeFlag:!0,data:{account:"",password:"",phone:"",checked:!0},buttonText:"",ToastText:""}},computed:{passwordIconType:function(){return this.inputTypeFlag?"closed-eye":"eye-o"},inputType:function(){return this.inputTypeFlag?"password":"text"}},methods:{righIconBtn:function(){this.inputTypeFlag=!this.inputTypeFlag},onClickBtn:function(){var t=this;this.loading=!0,setTimeout(function(){t.loading=!1,o["c"].success(t.ToastText)},1e3)}},mounted:function(){"edit"==this.$route.query.type?(document.title="编辑账号",this.buttonText="保存",this.ToastText="保存成功"):(document.title="新建账号",this.buttonText="新建试用账号",this.ToastText="创建成功")}},s=c,l=(a("c2ef"),a("17cc")),d=Object(l["a"])(s,n,i,!1,null,"3638b39a",null);e["default"]=d.exports},c2ef:function(t,e,a){"use strict";var n=a("9e93"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-7d6b9d98.2adc28f0.js.map