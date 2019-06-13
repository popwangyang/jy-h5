<template>
	<div>
		<!-- <van-nav-bar
		  title="商户名称A"
		  left-text="返回"
		  right-text="按钮"
		  left-arrow
		/> -->
		<span class="box">
			<span class="boxItem1">
				<span>商户名称A</span>
				<span>
					<van-button type="default" size="mini" @click="goEditePage">编辑</van-button>
				</span>
			</span>
			<span class="boxItem2">
				<span>账号 : </span>
				<span> 59984822@qq.com</span>
			</span>
			<span class="boxItem2">
				<span>手机号 : </span>
				<span> 137 8399 382</span>
			</span>
		</span>
		<van-index-bar :index-list="[]">
		  <van-index-anchor index="关联场所:3" :sticky="false"/>
		  <van-cell title="杭州银乐迪西溪银泰店" />
		  <van-cell title="门店B" />
		  <van-cell title="门店C" />
		</van-index-bar>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			goEditePage(){
				this.$router.push({name:"merchantEdite", params:{type:'edite'}})
			}
		},
		mounted() {
			document.title = "商户名称A";
		}
	}
</script>

<style scoped="scoped">
	.box{
		display: flex;
		background: wheat;
		padding: 0.26rem 0.3rem;
		flex-direction: column;
	}
	.boxItem1{
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}
	.boxItem1>span:nth-child(1){
		font-size: 0.46rem;
	}
	.boxItem2{
		display: flex;
		align-items: center;
		padding: 0.16rem 0;
	}
</style>
