<template>
	<div class="list3Box">
		<span class="title">
			{{title}}
		</span>
		<span class="content">
			<span class="item">
				<span class="box" v-if="src != '' && src.substr(0, 4) == 'http' && state == 0">
					<img :src="src" alt="" width="100%" height="100%" >
					<span class="delete">
						<van-icon name="clear" size="0.4rem" color = "#565353" @click="deleteBtn"/>
					</span>
				</span>
				<Upload ref="upload" @upload="upload" v-else/>
			</span>
		</span>
	</div>
</template>

<script>
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
				this.$emit("returnBack", result.key)
			},
			deleteBtn(){
				console.log('d')
				this.state = 1;
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
					width: 2.08rem;
					height: 2.08rem;
					background: white;
					padding-bottom: 0.312rem;
					.delete{
						position: absolute;
						top: -0.22rem;
						right: -0.22rem;
						z-index: 2;
					}
				}
			}
		}
		
	}
</style>
