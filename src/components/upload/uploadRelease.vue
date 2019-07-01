<template>
	<div class="uploadBox">
		<div class="title">
			<span>
				<span style="color: red;margin-left: -6px;margin-right: 2px;" v-if="required">*</span>{{title}}
			</span>
			<span>
				<slot></slot>
			</span>
		</div>
		<div class="content">
			<div class="imgList">
				<div v-for="item in imgList" :key="item.index">
					<ImageComponent :data="item" @delete="deleteBtn" :rate="rate" :isShow="isShow"/>
				</div>
			</div>
			<div class="upload" style="margin-top: 10px;" v-if="!isShow">
				<van-uploader
				 :after-read="afterRead"
				 :max-count="maxCount"
				 multiple
				/>
			</div>
		</div>
	</div>
</template>

<script>
	import ImageComponent from './components/imgComponent.vue'
	import { get } from '@/api/api.js'
	import { Toast } from 'vant'
	import { checkFormat, checkListFileSize } from '@/libs/util'
	export default{
		props:{
			required: {
				type: Boolean,
				default: false
			},
			title:{
				type: String,
				default: '合同文件'
			},
			maxCount: {
				type: Number,
				default:1
			},
			imgListProps: [Array, Object],
			isShow: { //是否是展示组件
				type: Boolean,
				default: false
			},
			format: {
				type: Array,
				default: () => {
				  return ['jpg', 'jpeg'];
				}
			},
			maxSize: {  // 上传文件的总大小(M)；
				type: Number,
				default: 100
			}
		},
		components:{ ImageComponent },
		data(){
			return{
				imgList: [],
				rate: 0,
				isUploadID: ''
			}
		},
		model:{
			prop: 'imgListProps',
			event: 'returnBack'
		},
		methods:{
			createImgListItem(data){
				var obj = {
					index: this.imgList.length,
					id:'',
					download_url: data.content,
					name: data.file.name,
					isFinish: false,
					prograss: 0,
				}
				this.imgList.push(obj);
				this.isUploadID = obj.index;
			},
			getToken(data){
				let obj = {
				  name: data.file.name, 
				  mime: data.file.type, 
				  size: data.file.size * 1024 
				}
				return new Promise((resolve, reject) => {
					get('/copyright/upload/upload', obj).then(res => {
						var fromData = {}
						    fromData.token = res.credential
						    fromData.name = data.file.name
						    fromData.key = res.key
						    fromData.id =  '' // 为空就是新增有值就是修改
						    fromData.file = data.file;
					  resolve(fromData);
					}).catch((e) => {
					  reject(e);
					})  
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
						console.log(body)
						this.imgList.map((item) => {
							if(item.index == this.isUploadID){
								item.id = body.id;
							}
						})
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
				this.rate = (evt.loaded / evt.total) * 100;
				console.log(evt);
			},
			uploadCom(e){
				this.imgList.map((item) => {
					if(item.index == this.isUploadID){
						item.isFinish = true;
					}
				})
				console.log(this.imgList);
				this.$emit("returnBack", this.imgList);
			},
			uploadFail(){
				
			},
			async afterRead(data){
				console.log(this)
				this.rate = 0;
				console.log(data, "上传图片")
				
				if(!checkFormat(data.file.type, this.format)){
					Toast(`仅支持 ${this.format.join(', ')} 格式`);
					return;
				}
				
				if(this.imgList.length >= this.maxCount){
					Toast(`最多只能上传${this.maxCount}份文件`);
					return;
				}
				this.createImgListItem(data);
				const fromData = await this.getToken(data);
				this.upload(fromData);
			},
			deleteBtn(id){
				this.imgList = this.imgList.filter((item, index, arr) => {
					return item.id != id;
				})
			}
		},
		mounted() {
			console.log(this.imgListProps)
			if(Array.isArray(this.imgListProps)){
				this.imgList = this.imgListProps.reduce((cur, next, index) => {
						next.isFinish = true;
						next.index = index;
						next.prograss = 100;
						cur.push(next);
						return cur;
					}, []);
			}else{
				let next  = Object.assign({}, this.imgListProps);
				    next.isFinish = true;
				    next.index = 0;
				    next.prograss = 100;
					console.log([next])
				this.imgList = [next];
			}
			
		}
	}
</script>

<style scoped="scoped" lang="less">
	.uploadBox{
		display: block;
		background: white;
		padding: 0.26rem  0.39rem;
		box-sizing: border-box;
		width: 100%;
		.title{
			color: #323233;
			font-size: 14px;
			line-height: 24px;
			display: flex;
			justify-content: space-between;
		}
		.content{
			background: #f6f6f6;
			padding: 0.26rem;
		}
	}
</style>
