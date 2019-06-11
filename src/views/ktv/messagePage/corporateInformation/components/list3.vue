<template>
	<div class="list3Box">
		<span class="title">
			{{title}}
		</span>
		<span class="content">
			<span class="item"></span>
		</span>
	</div>
</template>

<script>
	export default{
		props:{
			title:{
				type:String,
				default:"营业执照附件"
			}
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.list3Box{
		padding: 0 0.39rem;
		.title{
			display: flex;
			padding: 0.4rem 0;
			font-size: 0.364rem;
			background: yellowgreen;
			.item{
				
			}
		}
	}
</style>
