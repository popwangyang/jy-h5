(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-614ed55e"],{"62d2":function(t,n,a){},dc3f:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"loginBox"},[a("span",{staticClass:"title"},[t._v("\n\t\tXXXXXXXX\n\t")]),a("span",{staticClass:"body"},[a("span",{staticClass:"bodyItem"},[a("van-field",{staticStyle:{background:"#f0f0f0"},attrs:{clearable:"",placeholder:"请输入邮箱号","input-align":"left"},model:{value:t.username,callback:function(n){t.username=n},expression:"username"}})],1),a("span",{staticClass:"bodyItem"},[a("van-field",{staticStyle:{background:"#f0f0f0"},attrs:{clearable:"",type:t.inputType,placeholder:"请输入密码","input-align":"left","right-icon":t.rightIcon},on:{"click-right-icon":t.rightIconBtn},model:{value:t.password,callback:function(n){t.password=n},expression:"password"}})],1),a("span",{staticClass:"bodyItem",staticStyle:{background:"white","padding-left":"0","padding-right":"0"}},[a("van-button",{staticStyle:{background:"#666666",border:"1px solid #666666"},attrs:{round:"",type:"info",size:"large","loading-text":"登录中...","loading-type":"spinner",loading:t.loading,disabled:t.disabled},on:{click:t.loginBtn}},[t._v("登录")])],1)])])},s=[],o=a("e20c"),i=(a("62d2"),a("591a")),l={data:function(){return{username:"",password:"",passwordFlag:!1,loading:!1}},computed:{rightIcon:function(){return this.passwordFlag?"eye-o":"closed-eye"},inputType:function(){return this.passwordFlag?"text":"password"},disabled:function(){return""==this.username||""==this.password}},methods:Object(o["a"])({},Object(i["b"])(["handleLogin","getUserInfo"]),{loginBtn:function(){var t=this;this.loading=!0,console.log(this.handleLogin);var n=this.username,a=this.password;this.handleLogin({userName:n,password:a}).then(function(n){t.loading=!1,console.log(n),t.$router.push({name:t.$config.homeName})}).catch(function(n){t.loading=!1,t.$toast.fail(n.data.non_field_errors[0])})},rightIconBtn:function(){this.passwordFlag=!this.passwordFlag}}),mounted:function(){document.title="鲸唱结算平台"}},r=l,c=a("17cc"),d=Object(c["a"])(r,e,s,!1,null,null,null);n["default"]=d.exports}}]);
//# sourceMappingURL=chunk-614ed55e.ffe560d7.js.map