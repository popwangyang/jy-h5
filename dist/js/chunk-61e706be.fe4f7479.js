(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61e706be"],{1173:function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},"24c5":function(t,e,n){"use strict";var r,i,o,a,c=n("b8e3"),s=n("e53d"),u=n("d864"),f=n("40c3"),l=n("63b6"),h=n("f772"),p=n("79aa"),d=n("1173"),v=n("a22a"),m=n("f201"),g=n("4178").set,y=n("aba2")(),w=n("656e"),x=n("4439"),_=n("bc13"),b=n("cd78"),L="Promise",k=s.TypeError,E=s.process,j=E&&E.versions,P=j&&j.v8||"",O=s[L],S="process"==f(E),F=function(){},C=i=w.f,T=!!function(){try{var t=O.resolve(1),e=(t.constructor={})[n("5168")("species")]=function(t){t(F,F)};return(S||"function"==typeof PromiseRejectionEvent)&&t.then(F)instanceof e&&0!==P.indexOf("6.6")&&-1===_.indexOf("Chrome/66")}catch(r){}}(),R=function(t){var e;return!(!h(t)||"function"!=typeof(e=t.then))&&e},I=function(t,e){if(!t._n){t._n=!0;var n=t._c;y(function(){var r=t._v,i=1==t._s,o=0,a=function(e){var n,o,a,c=i?e.ok:e.fail,s=e.resolve,u=e.reject,f=e.domain;try{c?(i||(2==t._h&&D(t),t._h=1),!0===c?n=r:(f&&f.enter(),n=c(r),f&&(f.exit(),a=!0)),n===e.promise?u(k("Promise-chain cycle")):(o=R(n))?o.call(n,s,u):s(n)):u(r)}catch(l){f&&!a&&f.exit(),u(l)}};while(n.length>o)a(n[o++]);t._c=[],t._n=!1,e&&!t._h&&N(t)})}},N=function(t){g.call(s,function(){var e,n,r,i=t._v,o=B(t);if(o&&(e=x(function(){S?E.emit("unhandledRejection",i,t):(n=s.onunhandledrejection)?n({promise:t,reason:i}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",i)}),t._h=S||B(t)?2:1),t._a=void 0,o&&e.e)throw e.v})},B=function(t){return 1!==t._h&&0===(t._a||t._c).length},D=function(t){g.call(s,function(){var e;S?E.emit("rejectionHandled",t):(e=s.onrejectionhandled)&&e({promise:t,reason:t._v})})},G=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),I(e,!0))},M=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw k("Promise can't be resolved itself");(e=R(t))?y(function(){var r={_w:n,_d:!1};try{e.call(t,u(M,r,1),u(G,r,1))}catch(i){G.call(r,i)}}):(n._v=t,n._s=1,I(n,!1))}catch(r){G.call({_w:n,_d:!1},r)}}};T||(O=function(t){d(this,O,L,"_h"),p(t),r.call(this);try{t(u(M,this,1),u(G,this,1))}catch(e){G.call(this,e)}},r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n("5c95")(O.prototype,{then:function(t,e){var n=C(m(this,O));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=S?E.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&I(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r;this.promise=t,this.resolve=u(M,t,1),this.reject=u(G,t,1)},w.f=C=function(t){return t===O||t===a?new o(t):i(t)}),l(l.G+l.W+l.F*!T,{Promise:O}),n("45f2")(O,L),n("4c95")(L),a=n("584a")[L],l(l.S+l.F*!T,L,{reject:function(t){var e=C(this),n=e.reject;return n(t),e.promise}}),l(l.S+l.F*(c||!T),L,{resolve:function(t){return b(c&&this===a?O:this,t)}}),l(l.S+l.F*!(T&&n("4ee1")(function(t){O.all(t)["catch"](F)})),L,{all:function(t){var e=this,n=C(e),r=n.resolve,i=n.reject,o=x(function(){var n=[],o=0,a=1;v(t,!1,function(t){var c=o++,s=!1;n.push(void 0),a++,e.resolve(t).then(function(t){s||(s=!0,n[c]=t,--a||r(n))},i)}),--a||r(n)});return o.e&&i(o.v),n.promise},race:function(t){var e=this,n=C(e),r=n.reject,i=x(function(){v(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return i.e&&r(i.v),n.promise}})},3024:function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},"3c11":function(t,e,n){"use strict";var r=n("63b6"),i=n("584a"),o=n("e53d"),a=n("f201"),c=n("cd78");r(r.P+r.R,"Promise",{finally:function(t){var e=a(this,i.Promise||o.Promise),n="function"==typeof t;return this.then(n?function(n){return c(e,t()).then(function(){return n})}:t,n?function(n){return c(e,t()).then(function(){throw n})}:t)}})},4178:function(t,e,n){var r,i,o,a=n("d864"),c=n("3024"),s=n("32fc"),u=n("1ec9"),f=n("e53d"),l=f.process,h=f.setImmediate,p=f.clearImmediate,d=f.MessageChannel,v=f.Dispatch,m=0,g={},y="onreadystatechange",w=function(){var t=+this;if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},x=function(t){w.call(t.data)};h&&p||(h=function(t){var e=[],n=1;while(arguments.length>n)e.push(arguments[n++]);return g[++m]=function(){c("function"==typeof t?t:Function(t),e)},r(m),m},p=function(t){delete g[t]},"process"==n("6b4c")(l)?r=function(t){l.nextTick(a(w,t,1))}:v&&v.now?r=function(t){v.now(a(w,t,1))}:d?(i=new d,o=i.port2,i.port1.onmessage=x,r=a(o.postMessage,o,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",x,!1)):r=y in u("script")?function(t){s.appendChild(u("script"))[y]=function(){s.removeChild(this),w.call(t)}}:function(t){setTimeout(a(w,t,1),0)}),t.exports={set:h,clear:p}},"43fc":function(t,e,n){"use strict";var r=n("63b6"),i=n("656e"),o=n("4439");r(r.S,"Promise",{try:function(t){var e=i.f(this),n=o(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},4439:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(e){return{e:!0,v:e}}}},"4c25":function(t,e,n){"use strict";var r=n("b479"),i=n.n(r);i.a},"4c95":function(t,e,n){"use strict";var r=n("e53d"),i=n("584a"),o=n("d9f6"),a=n("8e60"),c=n("5168")("species");t.exports=function(t){var e="function"==typeof i[t]?i[t]:r[t];a&&e&&!e[c]&&o.f(e,c,{configurable:!0,get:function(){return this}})}},"4ec3":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("66df"),i=function(t,e){return r["a"].request({headers:{"Content-Type":"application/json;"},url:t,method:"GET",params:e}).then(function(t){return t.data})};
/*
    @Time    : 2019/3/28 08:43
    @Author  : wangzhaoguang
    @Email   : wangzhaoguang@hlchang.com
    @File    : api.js
    @Software: webstrom
    @license : 娱网科道信息技术有限公司 copyright  2016-2019 */},"570b":function(t,e,n){"use strict";var r=n("6385"),i=n.n(r);i.a},"5c95":function(t,e,n){var r=n("35e8");t.exports=function(t,e,n){for(var i in e)n&&t[i]?t[i]=e[i]:r(t,i,e[i]);return t}},6385:function(t,e,n){},"656e":function(t,e,n){"use strict";var r=n("79aa");function i(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=r(e),this.reject=r(n)}t.exports.f=function(t){return new i(t)}},"696e":function(t,e,n){n("c207"),n("1654"),n("6c1c"),n("24c5"),n("3c11"),n("43fc"),t.exports=n("584a").Promise},"795b":function(t,e,n){t.exports=n("696e")},9694:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uploadBox"},[n("div",{staticClass:"title"},[t.required?n("span",{staticStyle:{color:"red","margin-left":"-6px","margin-right":"2px"}},[t._v("*")]):t._e(),t._v(t._s(t.title))]),n("div",{staticClass:"content"},[n("div",{staticClass:"imgList"},t._l(t.imgList,function(e){return n("div",{key:e.index},[n("ImageComponent",{attrs:{data:e,rate:t.rate,isShow:t.isShow},on:{delete:t.deleteBtn}})],1)}),0),t.isShow?t._e():n("div",{staticClass:"upload",staticStyle:{"margin-top":"10px"}},[n("van-uploader",{attrs:{"after-read":t.afterRead,"max-count":t.maxCount,multiple:""}})],1)])])},i=[],o=(n("96cf"),n("795b")),a=n.n(o);function c(t,e,n,r,i,o,c){try{var s=t[o](c),u=s.value}catch(f){return void n(f)}s.done?e(u):a.a.resolve(u).then(r,i)}function s(t){return function(){var e=this,n=arguments;return new a.a(function(r,i){var o=t.apply(e,n);function a(t){c(o,r,i,a,s,"next",t)}function s(t){c(o,r,i,a,s,"throw",t)}a(void 0)})}}n("7f7f"),n("c5f6");var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"imgBox"},[n("span",{staticClass:"box"},[n("van-image",{attrs:{width:"3.2rem",fit:"contain",src:t.data.download_url},on:{click:t.ImagePreviewBtn},scopedSlots:t._u([{key:"loading",fn:function(){return[n("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0},{key:"error",fn:function(){return[t._v("加载失败")]},proxy:!0}])}),n("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.showDelete,expression:"showDelete"}],staticClass:"delete",attrs:{name:"delete",size:"0.6rem",color:"#fff"},on:{click:t.deleteBtn}}),n("van-circle",{directives:[{name:"show",rawName:"v-show",value:!t.data.isFinish,expression:"!data.isFinish"}],staticClass:"circle",attrs:{rate:t.rate,speed:100,size:"60px","stroke-width":80},model:{value:t.currentRate,callback:function(e){t.currentRate=e},expression:"currentRate"}})],1),n("span",{staticStyle:{"align-self":"flex-end","margin-left":"10px","font-size":"14px",width:"50%","word-break":"break-word"}},[t._v("\n\t\t\t"+t._s(t.data.name)+"\n\t\t")])])},f=[],l=n("b970"),h={props:{data:Object,rate:Number,isShow:Boolean},data:function(){return{currentRate:this.rate}},computed:{showDelete:function(){return!this.isShow&&!!this.data.isFinish}},methods:{ImagePreviewBtn:function(){Object(l["b"])([this.data.download_url])},deleteBtn:function(){this.$emit("delete",this.data.id),console.log(";;;")}},mounted:function(){console.log(this.isShow)}},p=h,d=(n("570b"),n("2877")),v=Object(d["a"])(p,u,f,!1,null,"79139fb1",null),m=v.exports,g=n("4ec3"),y={props:{required:{type:Boolean,default:!1},title:{type:String,default:"合同文件"},maxCount:{type:Number,default:1},imgListProps:[Array,Object],isShow:{type:Boolean,default:!1}},components:{ImageComponent:m},data:function(){return{imgList:[],rate:0,isUploadID:""}},model:{prop:"imgListProps",event:"returnBack"},methods:{createImgListItem:function(t){var e={index:this.imgList.length,id:"",download_url:t.content,name:t.file.name,isFinish:!1,prograss:0};this.imgList.push(e),this.isUploadID=e.index},getToken:function(t){var e={name:t.file.name,mime:t.file.type,size:1024*t.file.size};return new Promise(function(n,r){Object(g["a"])("/copyright/upload/upload",e).then(function(e){var r={};r.token=e.credential,r.name=t.file.name,r.key=e.key,r.id="",r.file=t.file,n(r)}).catch(function(t){r(t)})})},upload:function(t){var e=this,n=new FormData;n.append("file",t.file),n.append("token",t.token),n.append("file",t.name),n.append("key",t.key),n.append("x:id",t.id);var r=new XMLHttpRequest;r.open("POST","https://up-z1.qiniup.com/",!0),r.onload=this.uploadCom,r.onerror=this.uploadFail,r.upload.onprogress=this.progressFunction,r.send(n),r.onreadystatechange=function(){if(r.readyState===XMLHttpRequest.DONE)if(201===r.status){var t=JSON.parse(r.responseText);console.log(t),e.imgList.map(function(n){n.index==e.isUploadID&&(n.id=t.id)})}else try{var n=JSON.parse(r.responseText)["msg"];message.error(n,10)}catch(i){}}},progressFunction:function(t){this.rate=t.loaded/t.total*100,console.log(t)},uploadCom:function(t){var e=this;this.imgList.map(function(t){t.index==e.isUploadID&&(t.isFinish=!0)}),console.log(this.imgList),this.$emit("returnBack",this.imgList)},uploadFail:function(){},afterRead:function(){var t=s(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(this),this.rate=0,!(this.imgList.length>=this.maxCount)){t.next=5;break}return Object(l["c"])("最多只能上传".concat(this.maxCount,"份文件")),t.abrupt("return");case 5:return this.createImgListItem(e),t.next=8,this.getToken(e);case 8:n=t.sent,this.upload(n);case 10:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),deleteBtn:function(t){this.imgList=this.imgList.filter(function(e,n,r){return e.id!=t})}},mounted:function(){if(console.log(this.imgListProps),Array.isArray(this.imgListProps))this.imgList=this.imgListProps.reduce(function(t,e,n){return e.isFinish=!0,e.index=n,e.prograss=100,t.push(e),t},[]);else{var t=Object.assign({},this.imgListProps);t.isFinish=!0,t.index=0,t.prograss=100,console.log([t]),this.imgList=[t]}}},w=y,x=(n("4c25"),Object(d["a"])(w,r,i,!1,null,"6b5ea6d2",null));e["a"]=x.exports},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,n,r){var i=e&&e.prototype instanceof v?e:v,o=Object.create(i.prototype),a=new O(r||[]);return o._invoke=k(t,n,a),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}t.wrap=s;var f="suspendedStart",l="suspendedYield",h="executing",p="completed",d={};function v(){}function m(){}function g(){}var y={};y[o]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(S([])));x&&x!==n&&r.call(x,o)&&(y=x);var _=g.prototype=v.prototype=Object.create(y);function b(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function L(t){function e(n,i,o,a){var c=u(t[n],t,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"===typeof f&&r.call(f,"__await")?Promise.resolve(f.__await).then(function(t){e("next",t,o,a)},function(t){e("throw",t,o,a)}):Promise.resolve(f).then(function(t){s.value=t,o(s)},function(t){return e("throw",t,o,a)})}a(c.arg)}var n;function i(t,r){function i(){return new Promise(function(n,i){e(t,r,n,i)})}return n=n?n.then(i,i):i()}this._invoke=i}function k(t,e,n){var r=f;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return F()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=u(t,e,n);if("normal"===s.type){if(r=n.done?p:l,s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}function E(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,E(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=u(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,d;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function S(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:F}}function F(){return{value:e,done:!0}}return m.prototype=_.constructor=g,g.constructor=m,g[c]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},b(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,n,r,i){var o=new L(s(e,n,r,i));return t.isGeneratorFunction(n)?o:o.next().then(function(t){return t.done?t.value:o.next()})},b(_),_[c]="Generator",_[o]=function(){return this},_.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return c.type="throw",c.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;P(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:S(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},a22a:function(t,e,n){var r=n("d864"),i=n("b0dc"),o=n("3702"),a=n("e4ae"),c=n("b447"),s=n("7cd6"),u={},f={};e=t.exports=function(t,e,n,l,h){var p,d,v,m,g=h?function(){return t}:s(t),y=r(n,l,e?2:1),w=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(o(g)){for(p=c(t.length);p>w;w++)if(m=e?y(a(d=t[w])[0],d[1]):y(t[w]),m===u||m===f)return m}else for(v=g.call(t);!(d=v.next()).done;)if(m=i(v,y,d.value,e),m===u||m===f)return m};e.BREAK=u,e.RETURN=f},aba2:function(t,e,n){var r=n("e53d"),i=n("4178").set,o=r.MutationObserver||r.WebKitMutationObserver,a=r.process,c=r.Promise,s="process"==n("6b4c")(a);t.exports=function(){var t,e,n,u=function(){var r,i;s&&(r=a.domain)&&r.exit();while(t){i=t.fn,t=t.next;try{i()}catch(o){throw t?n():e=void 0,o}}e=void 0,r&&r.enter()};if(s)n=function(){a.nextTick(u)};else if(!o||r.navigator&&r.navigator.standalone)if(c&&c.resolve){var f=c.resolve(void 0);n=function(){f.then(u)}}else n=function(){i.call(r,u)};else{var l=!0,h=document.createTextNode("");new o(u).observe(h,{characterData:!0}),n=function(){h.data=l=!l}}return function(r){var i={fn:r,next:void 0};e&&(e.next=i),t||(t=i,n()),e=i}}},b479:function(t,e,n){},bc13:function(t,e,n){var r=n("e53d"),i=r.navigator;t.exports=i&&i.userAgent||""},c207:function(t,e){},cd78:function(t,e,n){var r=n("e4ae"),i=n("f772"),o=n("656e");t.exports=function(t,e){if(r(t),i(e)&&e.constructor===t)return e;var n=o.f(t),a=n.resolve;return a(e),n.promise}},f201:function(t,e,n){var r=n("e4ae"),i=n("79aa"),o=n("5168")("species");t.exports=function(t,e){var n,a=r(t).constructor;return void 0===a||void 0==(n=r(a)[o])?e:i(n)}}}]);
//# sourceMappingURL=chunk-61e706be.fe4f7479.js.map