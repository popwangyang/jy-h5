<template>
	<div class="emptyComponentBox">
		<img :src="imgsrc" alt="">
		<span style="color: #d0d0d0;">
			{{text}}
		</span>
		<span class="item"  @click="btn">
			{{title}}
		</span>
	</div>
</template>

<script>
	export default{
		props:['text', 'title'],
		data(){
			return{
				imgsrc:require("@/assets/empty.png")
			}
		},
		methods:{
			btn(){
				this.$emit('eventBtn')
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.emptyComponentBox{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		img{
			margin-bottom: 0.1rem;
		}
		.item{
            padding-left: 0.3rem;
			padding-right: 0.3rem;
			margin-top: 0.8rem;
			height:0.78rem;
			background:linear-gradient(180deg,rgba(61,158,255,1) 0%,rgba(24,82,243,1) 100%);
			border-radius:16px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: white;
			&:active{
				background: #134ae4c9;
			}
		}
	}
	
</style>
