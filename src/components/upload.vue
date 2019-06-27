<template>
	<div class="uploadBox">
		<van-uploader
		 :after-read="afterRead"
		 :max-count="30"
		 multiple
		 v-show="1"
		/>
		<span class="box1" v-show="state == 1">
				<van-image width="3.2rem" fit="contain" :src="src"  @click="foo">
					<template v-slot:loading>
						<van-loading type="spinner" size="20"/>
					</template>
					<template v-slot:error>加载失败</template>
				</van-image>
				<van-icon class="delete" name="delete" size="0.6rem" color = "#fff" v-show="closeState == 1" @click="deleteBtn"/>
			<van-circle
			  v-model="currentRate"
			  :rate="rate"
			  :speed="100"
			  size="60px"
			  :stroke-width="80"
				class="circle"
				v-show="showCircle == 1"
			>
			  <span class="van-circle__text" style="color: white;font-weight: bold;">
				  {{text}}
			  </span>
			</van-circle>
		</span>
		<span style="align-self: flex-end;font-size: 14px;margin-left: 10px;">
			{{fileName}}
		</span>
	</div>
</template>
<script>
	import { ImagePreview } from 'vant';
	import { post, get } from "@/api/api.js"
	export default{
		props:{
			id:{
				type:String,
				default:""
			}
		},
		data(){
			return{
				src:"",
				state:0,
				closeState:0,
				showCircle:0,
				currentRate:0,
				rate:0,
				fileList:[],
				fromData:{},
				fileName:""
			}
		},
		computed: {
			text() {
			  return this.currentRate.toFixed(0) + '%'
			}
		},
		methods:{
			foo(){
				console.log('ppppp')
				ImagePreview([
					this.src
				])
			},
			afterRead(data) {
			  console.log(data);
			    this.fileName = data.file.name
				this.state = 1;
				this.showCircle = 1;
				this.closeState = 0;
				this.src = data.content
			  let obj = {
			    name: data.file.name, 
			    mime: data.file.type, 
			    size: data.file.size * 1024 
			  }
			var P = new Promise((resolve, reject) => {
				get('/copyright/upload/upload', obj).then(res => {
				  this.fromData.token = res.credential
				  this.fromData.name = data.file.name
				  this.fromData.key = res.key
				  this.fromData.id = this.id === '' ? '' : this.id// 为空就是新增有值就是修改
				  this.fromData.file = data.file;
				  resolve(true)
				}).catch((e) => {
				  reject(false)
				})  
			  })
			  P.then(() => {
				  this.upload(this.fromData)
			  })
			},
			upload(send_data){
				
				var formData = new FormData();
				  formData.append("file", send_data.file);
					formData.append("token", send_data.token);
					formData.append("file", send_data.name);
					formData.append("key", send_data.key);
					formData.append("x:id", send_data.id);
				var xhr = new XMLHttpRequest();
				xhr.open('POST', 'https://up-z1.qiniup.com/', true);
				xhr.onload = this.uploadCom; //请求完成
				xhr.onerror =  this.uploadFail; //请求失败
				xhr.upload.onprogress = this.progressFunction;//上传进度调用方法实现
				xhr.send(formData);
				xhr.onreadystatechange =  () => {
				  if (xhr.readyState === XMLHttpRequest.DONE) {
					if (xhr.status === 201) {
						let body = JSON.parse(xhr.responseText);
						let data= body.data;
						// console.log(body)
						this.$emit("upload", body.id)
						// self.setState({'to_user_arr':data})
					}else{
					   try{
							let  msg = JSON.parse(xhr.responseText)["msg"];
							message.error(msg,10);
						}catch(e){}
					}
				  }
				};
			},
			progressFunction(evt){
				this.state = 1;
				this.rate = (evt.loaded / evt.total) * 100;
				console.log(evt);
			},
			uploadCom(e){
				setTimeout(() => {
					this.closeState = 1;
					this.showCircle = 0;
				}, 200)
			},
			uploadFail(){
				console.log("uploadFail")
			},
			deleteBtn(){
				this.fileName = "";
				this.fileList = []
				this.state = 0;
				this.closeState = 0;
				this.rate = 0;
				this.fromData = {};
				this.$emit("upload", "")
			}
		},
		mounted() {
			
		}
	}
</script>

<style scoped="scoped" lang="less">
	.uploadBox{
		// position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		.box1{
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0.06rem;
			position: relative;
			left: 0;
			top: 0;
			z-index: 1;
			.circle{
				position: absolute;
				left: 50%;
				margin-left: -30px;
			}
			.delete{
				position: absolute;
				bottom: 4px;
				right: 2px;
				color: white;
			}
		}
		.box2{
			margin: 0.06rem;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 1;
		}
		.name{
			align-items: flex-end;
		}
	}
	
</style>

