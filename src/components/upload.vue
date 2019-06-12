<template>
	<div class="uploadBox">
		<van-uploader
		 :after-read="afterRead"
		 capture="camera"
		 :max-count="1"
		 v-model="fileList"
		 multiple
		 preview-size="80px"
		/>
		<span class="box1" v-show="state == 1">
			<van-circle
			  v-model="currentRate"
			  :rate="rate"
			  :speed="100"
			  size="60px"
			  :stroke-width="80"
			>
			  <span class="van-circle__text" style="color: white;font-weight: bold;">
				  {{text}}
			  </span>
			</van-circle>
		</span>
		<span class="box2" v-show="state == 2" @click="imagePreview"></span>
		<span class="delete" v-show="closeState == 1">
			<van-icon name="clear" size="0.4rem" color = "#565353" @click="deleteBtn"/>
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
				state:0,
				closeState:0,
				currentRate:0,
				rate:0,
				fileList:[],
				fromData:{}
			}
		},
		computed: {
			text() {
			  return this.currentRate.toFixed(0) + '%'
			}
		},
		methods:{
			imagePreview(){
				console.log(this.fileList)
				var result = [];
				this.fileList.map((item) => {
					result.push(item.content)
				})
				ImagePreview(result);
			},
			afterRead(data) {
			  // 此时可以自行将文件上传至服务器
			  console.log(data);
			  let obj = {
			    name: data.file.name, // 文件名字
			    mime: data.file.type, // 文件类型限制参数格式为标准mime对应格式字符串
			    // 文件大小限制单位byte
			    size: data.file.size * 1024 // 文件大小this.size单位是kb转为byte
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
				this.state = 1;
				this.closeState = 1;
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
						this.$emit("upload", body)
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
				  this.state = 2;
				}, 200)
				// console.log("uploadCom", e)
			},
			uploadFail(){
				console.log("uploadFail")
			},
			deleteBtn(){
				console.log('deleteBtn')
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
		position: relative;
		// background: yellow;
		width: 2.5rem;
		height: 2.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		.box1{
			display: flex;
			justify-content: center;
			align-items: center;
			width: 2.1rem;
			height: 2.1rem;
			margin: 0.06rem;
			// background: #0c0c0b3b;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 1;
		}
		.box2{
			width: 2.1rem;
			height: 2.1rem;
			margin: 0.06rem;
			position: absolute;
			left: 0;
			top: 0;
			z-index: 1;
		}
		.delete{
			position: absolute;
			top: -0.104rem;
			right: 0.156rem;
			z-index: 2;
		}
	}
	
</style>

