(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ac7c2d7"],{"3d3d":function(t,e,a){"use strict";var n=a("8d58"),s=a.n(n);s.a},"406e":function(t,e,a){},"45fe":function(t,e,a){"use strict";var n=a("fc9e"),s=a.n(n);s.a},6073:function(t,e,a){"use strict";var n=a("406e"),s=a.n(n);s.a},"8d58":function(t,e,a){},d065:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ICediteBox"},[a("span",{staticClass:"nav"},[t._v("\n\t\t  \t企业信息\n\t\t")]),a("van-field",{attrs:{clearable:"",label:"企业注册名称",placeholder:"请输入","input-align":"right"},model:{value:t.data.QName,callback:function(e){t.$set(t.data,"QName",e)},expression:"data.QName"}}),a("van-field",{attrs:{clearable:"",label:"营业执照编号",placeholder:"请输入","input-align":"right"},model:{value:t.data.BLN,callback:function(e){t.$set(t.data,"BLN",e)},expression:"data.BLN"}}),a("Item3",{attrs:{src:t.data.BLP},model:{value:t.data.BLP,callback:function(e){t.$set(t.data,"BLP",e)},expression:"data.BLP"}}),a("span",{staticClass:"nav"},[t._v("\n\t\t  \t法人信息\n\t\t")]),a("van-field",{attrs:{clearable:"",label:"法人姓名",placeholder:"请输入","input-align":"right"},model:{value:t.data.LegalPersonName,callback:function(e){t.$set(t.data,"LegalPersonName",e)},expression:"data.LegalPersonName"}}),a("van-field",{attrs:{clearable:"",label:"身份证号",placeholder:"请输入","input-align":"right"},model:{value:t.data.IDnumber,callback:function(e){t.$set(t.data,"IDnumber",e)},expression:"data.IDnumber"}}),a("Item3",{model:{value:t.data.ICP,callback:function(e){t.$set(t.data,"ICP",e)},expression:"data.ICP"}}),a("span",{staticClass:"footer"},[a("van-button",{attrs:{type:"primary",size:"large",loading:t.loading,"loading-type":"spinner","loading-text":"加载中..."},on:{click:t.saveBtn}},[t._v("保存")])],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list3Box"},[a("span",{staticClass:"title"},[t._v("\n\t\t"+t._s(t.title)+"\n\t")]),a("span",{staticClass:"content"},[a("span",{staticClass:"item"},[""!=t.src&&"http"==t.src.substr(0,4)&&0==t.state?a("span",{staticClass:"box"},[a("img",{attrs:{src:t.src,alt:"",width:"100%",height:"100%"}}),a("span",{staticClass:"delete"},[a("van-icon",{attrs:{name:"clear",size:"0.4rem",color:"#565353"},on:{click:t.deleteBtn}})],1)]):a("Upload",{ref:"upload",on:{upload:t.upload}})],1)])])},o=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"uploadBox"},[a("van-uploader",{attrs:{"after-read":t.afterRead,capture:"camera","max-count":1,multiple:"","preview-size":"80px"},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}}),a("span",{directives:[{name:"show",rawName:"v-show",value:1==t.state,expression:"state == 1"}],staticClass:"box1"},[a("van-circle",{attrs:{rate:t.rate,speed:100,size:"60px","stroke-width":80},model:{value:t.currentRate,callback:function(e){t.currentRate=e},expression:"currentRate"}},[a("span",{staticClass:"van-circle__text",staticStyle:{color:"white","font-weight":"bold"}},[t._v("\n\t\t\t  "+t._s(t.text)+"\n\t\t  ")])])],1),a("span",{directives:[{name:"show",rawName:"v-show",value:2==t.state,expression:"state == 2"}],staticClass:"box2",on:{click:t.imagePreview}}),a("span",{directives:[{name:"show",rawName:"v-show",value:1==t.closeState,expression:"closeState == 1"}],staticClass:"delete"},[a("van-icon",{attrs:{name:"clear",size:"0.4rem",color:"#565353"},on:{click:t.deleteBtn}})],1)],1)},r=[],c=(a("7364"),a("71fd")),u=a("66df"),d=function(t,e){return u["a"].request({headers:{"Content-Type":"application/json;"},url:t,method:"GET",params:e}).then(function(t){return t.data})},p={props:{id:{type:String,default:""}},data:function(){return{state:0,closeState:0,currentRate:0,rate:0,fileList:[],fromData:{}}},computed:{text:function(){return this.currentRate.toFixed(0)+"%"}},methods:{imagePreview:function(){console.log(this.fileList);var t=[];this.fileList.map(function(e){t.push(e.content)}),Object(c["a"])(t)},afterRead:function(t){var e=this;console.log(t);var a={name:t.file.name,mime:t.file.type,size:1024*t.file.size},n=new Promise(function(n,s){d("/copyright/upload/upload",a).then(function(a){e.fromData.token=a.credential,e.fromData.name=t.file.name,e.fromData.key=a.key,e.fromData.id=""===e.id?"":e.id,e.fromData.file=t.file,n(!0)}).catch(function(t){s(!1)})});n.then(function(){e.upload(e.fromData)})},upload:function(t){var e=this;this.state=1,this.closeState=1;var a=new FormData;a.append("file",t.file),a.append("token",t.token),a.append("file",t.name),a.append("key",t.key),a.append("x:id",t.id);var n=new XMLHttpRequest;n.open("POST","https://up-z1.qiniup.com/",!0),n.onload=this.uploadCom,n.onerror=this.uploadFail,n.upload.onprogress=this.progressFunction,n.send(a),n.onreadystatechange=function(){if(n.readyState===XMLHttpRequest.DONE)if(201===n.status){var t=JSON.parse(n.responseText);t.data;e.$emit("upload",t)}else try{var a=JSON.parse(n.responseText)["msg"];message.error(a,10)}catch(s){}}},progressFunction:function(t){this.state=1,this.rate=t.loaded/t.total*100,console.log(t)},uploadCom:function(t){var e=this;setTimeout(function(){e.state=2},200)},uploadFail:function(){console.log("uploadFail")},deleteBtn:function(){console.log("deleteBtn"),this.fileList=[],this.state=0,this.closeState=0,this.rate=0,this.fromData={},this.$emit("upload","")}},mounted:function(){}},f=p,m=(a("3d3d"),a("17cc")),h=Object(m["a"])(f,l,r,!1,null,"b2defb36",null),v=h.exports,g={components:{Upload:v},props:{title:{type:String,default:"营业执照附件"},src:{type:String,default:""},value:{type:String,default:""}},model:{prop:"value",event:"returnBack"},data:function(){return{state:0}},methods:{upload:function(t){this.$emit("returnBack",t.key)},deleteBtn:function(){console.log("d"),this.state=1}}},b=g,x=(a("45fe"),Object(m["a"])(b,i,o,!1,null,"049539ae",null)),k=x.exports,w={components:{Item3:k},data:function(){return{loading:!1,data:{QName:"杭州银乐迪西溪银泰店",BLN:"HZ827389193",BLP:"",LegalPersonName:"王亚伟",IDnumber:"33027382827838133",ICP:""}}},methods:{onClickLeft:function(){this.$router.go(-1)},saveBtn:function(){var t=this;this.loading=!0,setTimeout(function(){t.loading=!1,console.log(t.data),t.$toast.success({message:"成功"})},2e3)}},mounted:function(){document.title="企业信息"}},C=w,L=(a("6073"),Object(m["a"])(C,n,s,!1,null,"7ae5f4e7",null));e["default"]=L.exports},fc9e:function(t,e,a){}}]);
//# sourceMappingURL=chunk-3ac7c2d7.cd46d037.js.map