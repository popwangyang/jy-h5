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
					<van-icon class="delete" name="delete" size="0.6rem" color = "#fff" @click="deleteBtn"/>
					
				</span>
				<span style="align-self: flex-end;margin-left: 10px;font-size: 14px;">
					{{fileName}}
				</span>
				<Upload ref="upload" @upload="upload" v-if="src == '' || src.substr(0, 4) != 'http' || state != 0"/>
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
				default:""
			},
			src:{
				type:String,
				default:""
			},
			name:{
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
				state:0,
				fileName: this.name
			}
		},
		methods:{
			upload(result){
				console.log(result);
				this.$emit("returnBack", result+"");
			},
			ImagePreviewBtn(){
				ImagePreview([
					this.src
				])
			},
			deleteBtn(){
				console.log('d')
				this.state = 1;
				this.fileName = "";
				this.$emit("returnBack", "")
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.list3Box{
		padding: 0 0.39rem;
		background: white;
		min-height: 3.9rem;
		padding-bottom: 10px;
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
						bottom: 4px;
						right: 2px;
						color: white;
					}
				}
			}
		}
		
	}
</style>
