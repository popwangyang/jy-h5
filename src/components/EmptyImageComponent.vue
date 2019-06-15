<template>
	<div class="EmptyImageComponentBox">
		<img :src="imgUrl" :style="{width: size+'rem'}">
		<span>
			{{text}}
		</span>
	</div>
</template>

<script>
	
	export default{
		props:{
			text:{
				type:String,
				default:"暂无充值记录"
			},
			img:{
				type:String,
				default:"empty"
			},
			type:{
				type:String,
				default:'png'
			},
			size:{
				type:Number,
				default:2
			}
		},
		data(){
			return{
				 imgUrl:require("@/assets/"+this.img+"."+ this.type)
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.EmptyImageComponentBox{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		img{
			margin-bottom: 0.26rem;
		}
		&>span{
			font-size:14px;
			font-weight:400;
			color:rgba(198,203,212,1); 
		}
	}
</style>
