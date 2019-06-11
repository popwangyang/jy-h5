<template>
	<div class="list3Box">
		<span class="title">
			{{title}}
		</span>
		<span class="content">
			<span class="item">
				<Upload/>
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
			}
		},
		data(){
			return{
				fileList:[]
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
			// background: yellowgreen;
		}
		.content{
			.item{
				display: flex;
				width: 2rem;
				height: 2rem;
				background: wheat;
			}
		}
		
	}
</style>
