(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57092a50"],{"5e7b":function(t,a,e){"use strict";var s=e("f6c7"),n=e.n(s);n.a},"62d2":function(t,a,e){},d64e:function(t,a,e){},dc3f:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.isforgetPassword?e("div",{staticStyle:{height:"100%"}},[e("ForgetPassword",{on:{event:t.forgetPassword}})],1):e("div",{staticClass:"loginBox"},[e("span",{staticClass:"title"}),e("span",{staticClass:"nav"},[t._v("\n\t\t管理端\n\t")]),e("span",{staticClass:"body"},[t._m(0),e("span",{staticClass:"left"}),e("span",{staticClass:"right"}),e("span",{staticClass:"input",staticStyle:{"margin-top":"1.4rem"}},[e("van-field",{staticStyle:{background:"none"},attrs:{placeholder:"请输入邮箱号","input-align":"left"},model:{value:t.username,callback:function(a){t.username=a},expression:"username"}})],1),e("span",{staticClass:"input"},[e("van-field",{staticStyle:{background:"none"},attrs:{type:t.inputType,placeholder:"请输入密码","input-align":"left","right-icon":t.rightIcon},on:{"click-right-icon":t.rightIconBtn},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),e("span",{staticClass:"input",staticStyle:{border:"none"}},[e("van-button",{staticClass:"button",attrs:{round:"",type:"info",size:"large","loading-text":"登录中...","loading-type":"spinner",loading:t.loading,disabled:t.disabled},on:{click:t.loginBtn}},[t._v("登录")])],1),e("span",{staticClass:"bodyFooter",staticStyle:{color:"#2266F6"},on:{click:t.forgetPassword}},[t._v("\n\t\t\t忘记密码\n\t\t")])]),e("span",{staticClass:"loginFooter"})])},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"top"},[e("span",{staticClass:"topLeft"},[e("span",{staticClass:"img"}),e("span",{staticClass:"text"},[t._v("\n\t\t\t\t\t账号登录\n\t\t\t\t")])])])}],o=e("cebc"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"forgetPageBox"},[1==t.state?e("getCodeComponet",{on:{event1:t.event}}):t._e(),2==t.state?e("setNewPassword",{attrs:{username:t.username,code:t.code},on:{event2:t.finish}}):t._e()],1)},r=[],l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"forgetPage"},[e("h2",[t._v("邮箱验证")]),e("div",{staticClass:"item"},[e("h4",[t._v("邮箱")]),e("div",[e("van-field",{attrs:{left:"",placeholder:"请输入邮箱"},model:{value:t.fromData.username,callback:function(a){t.$set(t.fromData,"username",a)},expression:"fromData.username"}})],1)]),e("div",{staticClass:"item"},[e("h4",[t._v("验证码")]),e("div",[e("van-field",{attrs:{placeholder:"请输入验证码"},model:{value:t.fromData.code,callback:function(a){t.$set(t.fromData,"code",a)},expression:"fromData.code"}},[e("span",{staticClass:"loading",attrs:{slot:"button"},slot:"button"},[0==t.loadState?e("span",{staticClass:"code",on:{click:t.getCode}},[t._v("发送验证码")]):t._e(),1==t.loadState?e("van-loading",{attrs:{size:"20",color:"#4B74FF"}}):t._e(),2==t.loadState?e("span",{staticClass:"code"},[t._v(t._s(t.time)+"s")]):t._e()],1)])],1)]),e("div",{staticClass:"footer"},[e("van-button",{staticClass:"button",attrs:{size:"large",disabled:!t.disabled},on:{click:t.handleFrom}},[t._v("下一步")])],1)])},c=[],d=e("b70e"),u=e("b970"),f=e("c276"),m=e("c24f"),p={data:function(){return{time:60,loadState:0,setInterval:null,fromData:{username:"",code:""},rule:{username:{required:!0,type:"email",message:"请输入邮箱账号"}}}},computed:{disabled:function(){var t=!0;for(var a in this.fromData)""==this.fromData[a]&&(t=!1);return t}},methods:{getCode:function(){var t=this;Object(f["c"])(this.fromData,this.rule)&&(this.loadState=1,Object(m["c"])(this.fromData.username).then(function(a){t.loadState=2,t.time=60,t.setInterval=setInterval(function(){t.time<=0&&(clearInterval(t.setInterval),t.loadState=0,t.time=60),t.time--},1e3)}).catch(function(a){t.loadState=0,a.data.error?u["c"].fail(a.data.error):u["c"].fail("获取验证码失败")}))},handleFrom:function(){var t=this,a=this.fromData,e=a.username,s=a.code;Object(m["e"])({username:e,code:s}).then(function(a){t.$emit("event1",{username:e,code:s,index:2})}).catch(function(t){u["c"].fail(t.data.error)})}},mounted:function(){document.title="邮箱验证"},destroyed:function(){null!=this.setInterval&&clearInterval(this.setInterval)}},h=p,v=(e("e0d7"),e("2877")),g=Object(v["a"])(h,l,c,!1,null,"b0c1abf4",null),w=g.exports,b=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"setNewBox"},[e("h2",[t._v("新密码")]),e("div",{staticClass:"item"},[e("h4",[t._v("新密码")]),e("div",[e("van-field",{attrs:{left:"",placeholder:"请输入新密码"},model:{value:t.fromData.password1,callback:function(a){t.$set(t.fromData,"password1",a)},expression:"fromData.password1"}})],1)]),e("div",{staticClass:"item"},[e("h4",[t._v("确认密码")]),e("div",[e("van-field",{attrs:{left:"",placeholder:"请再次输入密码"},model:{value:t.fromData.password2,callback:function(a){t.$set(t.fromData,"password2",a)},expression:"fromData.password2"}})],1)]),e("div",{staticClass:"footer"},[e("van-button",{staticClass:"button",attrs:{size:"large",loading:t.loading},on:{click:t.handleFrom}},[t._v("完成")])],1)])},C=[],_={props:["username","code"],data:function(){var t=function(t,a){var e=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;""==t?a(new d["a"]("密码不能为空")):e.test(t)?a():a(new d["a"]("请输入6~20位数字和字母组合"))},a=function(t,a,e){""==t?a(new d["a"]("请再次输入密码")):t!=e.password1?a(new d["a"]("两次输入密码不一致")):a()};return{loading:!1,fromData:{password1:"",password2:""},rule:{password1:{required:!0,validator:t},password2:{required:!0,validator:a}}}},methods:{handleFrom:function(){var t=this;if(Object(f["c"])(this.fromData,this.rule)){var a=fromData.password1;this.loading=!0,Object(m["b"])({username:username,code:code,password:a}).then(function(a){t.loading=!1,u["c"].success("密码修改成功"),t.$emit("event2")}).catch(function(a){t.loading=!1,u["c"].fail(a.data.error)})}}}},y=_,D=(e("5e7b"),Object(v["a"])(y,b,C,!1,null,"34712b35",null)),S=D.exports,$={components:{getCodeComponet:w,setNewPassword:S},data:function(){return{state:1,username:"",code:""}},methods:{event:function(t){this.state=t.index,this.username=t.username,this.code=t.code},finish:function(){this.$emit("event")}}},x=$,k=(e("e3a0"),Object(v["a"])(x,i,r,!1,null,"7d0867f3",null)),I=k.exports,F=(e("62d2"),e("2f62")),j={components:{ForgetPassword:I},data:function(){return{username:"",password:"",passwordFlag:!1,loading:!1,isforgetPassword:!1}},computed:{rightIcon:function(){return this.passwordFlag?"eye-o":"closed-eye"},inputType:function(){return this.passwordFlag?"text":"password"},disabled:function(){return""==this.username||""==this.password}},methods:Object(o["a"])({},Object(F["b"])(["handleLogin","getUserInfo"]),{forgetPassword:function(){this.isforgetPassword=!this.isforgetPassword},loginBtn:function(){var t=this;this.loading=!0,console.log(this.handleLogin);var a=this.username,e=this.password;this.handleLogin({userName:a,password:e}).then(function(s){t.loading=!1,console.log(s),localStorage.setItem("active",0),localStorage.setItem("jyH5",JSON.stringify({userName:a,password:e})),t.$router.push({name:t.$config.homeName})}).catch(function(a){t.loading=!1,console.log(a),a.data.error?t.$toast.fail(a.data.error[0]):t.$toast.fail("登录异常,请联系管理员")})},rightIconBtn:function(){this.passwordFlag=!this.passwordFlag},init:function(){if(localStorage.getItem("jyH5")){var t=JSON.parse(localStorage.getItem("jyH5")),a=t.userName,e=t.password;this.username=a,this.password=e}}}),mounted:function(){document.title="鲸唱结算平台",this.init()}},O=j,P=Object(v["a"])(O,s,n,!1,null,null,null);a["default"]=P.exports},df2d:function(t,a,e){},e0d7:function(t,a,e){"use strict";var s=e("df2d"),n=e.n(s);n.a},e3a0:function(t,a,e){"use strict";var s=e("d64e"),n=e.n(s);n.a},f6c7:function(t,a,e){}}]);
//# sourceMappingURL=chunk-57092a50.d57564c0.js.map