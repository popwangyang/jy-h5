<template>
	<div class="box" @click="goDetailPage">
		<span class="boxSpan1">
			<span>商户名称A (已停用)</span>
			<span>5家厂商</span>
		</span>
		<span class="boxSpan2">
			<van-icon name="arrow" size="1.6em" color="#83828c"/>
		</span>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			goDetailPage(){
				this.$router.push({name:"merchantDetail", params:{id:'id'}})
			}
		}
	}
</script>

<style scoped="scoped">
	.box{
		height: 1.8rem;
		padding: 0.2rem 0.3rem;
		display: flex;
		box-sizing: border-box;
		background: white;
		justify-content: space-between;
		border-bottom:1px solid #f6f6f6;
	}
	.boxSpan1{
		display: flex;
		height: 100%;
		flex-direction: column;
	}
	.boxSpan1 > span{
		display: flex;
		height: 0.7rem;
		align-items: center;
	}
	.boxSpan1 span:nth-child(1){
		font-size: 0.36rem;
		color: #333333;
	}
	.boxSpan1 span:nth-child(2){
		color: #999999;
	}
	.boxSpan2{
		display: flex;
		height: 100%;
		align-items: center;
	}
</style>
