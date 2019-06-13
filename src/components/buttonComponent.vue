<template>
	<div class="largeButton">
		<van-button 
		:size="size"
		:loading="loading"
	    loading-type="spinner"
	    :loading-text="loadingText"
		>大号按钮</van-button>
	</div>
</template>

<script>
	export default{
		props:{
			title:{
				type:String,
				default:"按钮"
			},
			size:{
				type:String,
				default:"large"
			},
			loading:{
				type:Boolean,
				default:false
			}
		},
		computed:{
			loadingText(){
				return this.title+"...";
			}
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style>
</style>
