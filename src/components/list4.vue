<template>
	<div class="list3Box">
		<span class="title">
			{{title}}
		</span>
		<span class="content">
			<span class="item">
				<span class="box">

				</span>
			</span>
		</span>
	</div>
</template>

<script>
	export default{
		components:{  },
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
