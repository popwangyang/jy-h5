<template>
	<div class="imgBox">
			<span class="box">
				<van-image width="3.2rem" fit="contain" :src="data.download_url" @click="ImagePreviewBtn" v-if="data.format != 'application/pdf'">
					<template v-slot:loading>
						<van-loading type="spinner" size="20"/>
					</template>
					<template v-slot:error>加载失败</template>
				</van-image>
				<img :src="pdfUrl" alt="" style="width: 0.5rem;height: 0.5rem;" v-else>
				<van-icon class="delete" name="delete" size="0.6rem" color = "#fff" @click="deleteBtn" v-show="showDelete"/>
				<van-circle
				  v-model="currentRate"
				  :rate="rate"
				  :speed="100"
				  size="60px"
				  :stroke-width="80"
				  class="circle"
				  v-show="!data.isFinish"
				/>
			</span>
			<span class="title" :class="{a: data.format == 'application/pdf', b: data.format != 'application/pdf' }" >
				{{data.name}}
			</span>
	</div>
</template>

<script>
	import { ImagePreview } from 'vant'
	export default{
		props:{
			data:Object,
			rate:Number,
			isShow:Boolean,
		},
		data(){
			return{
				pdfUrl: require('@/assets/img/ktv/pdf.png'),
				currentRate: this.rate
			}
		},
		computed:{
			showDelete(){
				if(this.isShow){
					return false;
				}else{
					if(this.data.isFinish){
						return true;
					}else{
						return false;
					}
				}
			}
		},
		methods:{
			ImagePreviewBtn(){
				ImagePreview([
					this.data.download_url
				])
			},
			deleteBtn(){
				this.$emit('delete', this.data.id);
				console.log(";;;")
			}
		},
		mounted() {
			console.log(this.isShow)
		}
	}
</script>

<style scoped="scoped" lang="less">
	.imgBox{
		display: flex;
		.a{
			align-self: center;
		}
		.b{
			align-self: flex-end;
		}
		.title{
			margin-left: 10px;
			font-size: 14px; 
			width: 50%;
			word-break: break-word;
		}
		.box{
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
	}
</style>
