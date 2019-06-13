<template>
	<div class="emptyComponentBox">
		<span style="color: #d0d0d0;">
			{{text}}
		</span>
		<span class="item" @click="btn">
			{{title}}
		</span>
	</div>
</template>

<script>
	export default{
		props:['text', 'title'],
		data(){
			return{
				
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
		// height: 100%;
		// background: yellow;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		.item{
			background: white;
			border: 1px solid gainsboro;
			padding: 0.3rem 0.9rem;
			margin-top: 0.3rem;
			&:active{
				background: #0a0a0a00;
			}
		}
	}
	
</style>
