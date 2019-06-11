<template>
	<div class="uploadBox">
		<van-uploader
		 :after-read="afterRead"
		 capture="camera"
		 v-model="fileList"
		 multiple 
		/>
	</div>
</template>

<script>
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
				fileList:[],
				fromData:{}
			}
		},
		methods:{
			afterRead(data) {
			  // 此时可以自行将文件上传至服务器
			  console.log(data);
			  let obj = {
			    name: data.file.name, // 文件名字
			    mime: data.file.type, // 文件类型限制参数格式为标准mime对应格式字符串
			    // 文件大小限制单位byte
			    size: data.file.size * 1024 // 文件大小this.size单位是kb转为byte
			  }
			  get('/copyright/upload/upload', obj).then(res => {
				console.log(res)
			    this.fromData.token = res.credential
			    this.fromData.file = data.file.name
			    this.fromData.key = res.key
			    this.fromData['x:id'] = this.id === '' ? '' : this.id// 为空就是新增有值就是修改
			    console.log(this.fromData)
			  }).catch(() => {
			    
			  })
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	
</style>
