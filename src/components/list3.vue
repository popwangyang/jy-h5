<template>
	<div class="list3Box">
		<span class="title">
			{{title}}
		</span>
		<span class="content">
			<span class="item">
				<span class="box" v-if="src != '' && src.substr(0, 4) == 'http' && state == 0">
					<van-image width="3.2rem" fit="contain" :src="src" @click="ImagePreviewBtn">
						<template v-slot:loading>
							<van-loading type="spinner" size="20"/>
						</template>
						<template v-slot:error>加载失败</template>
					</van-image>
					<van-icon class="van-uploader__preview-delete" name="delete" size="0.4rem" color = "#fff" @click="deleteBtn"/>
				</span>
				<Upload ref="upload" @upload="upload" v-else/>
			</span>
		</span>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	import { deleteMaterial } from "@/api/ktv.js"
	import { ImagePreview } from 'vant'
	import Upload from "@/components/upload"
	export default{
		components:{ Upload },
		props:{
			title:{
				type:String,
				default:"营业执照附件"
			},
			src:{
				type:String,
				default:""
			},
			value:{
				type:String,
				default:""
			}
		},
		model: {
			prop: 'value',
			event: 'returnBack'
		},
		data(){
			return{
				state:0
			}
		},
		methods:{
			upload(result){
				console.log(result);
				this.$emit("returnBack", result.id+"");
			},
			ImagePreviewBtn(){
				ImagePreview([
					this.src
				])
			},
			deleteBtn(){
				console.log('d')
				this.state = 1;
				this.$emit("returnBack", "")
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.list3Box{
		padding: 0 0.39rem;
		background: white;
		height: 3.9rem;
		.title{
			display: flex;
			padding: 0.4rem 0;
			font-size: 0.364rem;
		}
		.content{
			.item{
				display: flex;
				.box{
					display: flex;
					position: relative;
					background: white;
					.delete{
						position: absolute;
						bottom: 0rem;
						right: 0rem;
						z-index: 2;
					}
				}
			}
		}
		
	}
</style>
