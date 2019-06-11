<template>
	<div class="ICediteBox">
		<van-nav-bar
		  title="企业信息"
		  left-arrow
		  @click-left="onClickLeft"
		/>
		<span class="nav">
		  	企业信息
		</span>
		<van-field
		  v-model="data.QName"
		  clearable
		  label="企业注册名称"
		  placeholder="请输入"
		  input-align="right"
		/>
		<van-field
		  v-model="data.BLN"
		  clearable
		  label="营业执照编号"
		  placeholder="请输入"
		  input-align="right"
		/>
		<Item3/>
	</div>
</template>

<script>
	import Item3 from './components/list3.vue'
	export default{
		components:{ Item3 },
		data(){
			return{
				data:{
					QName:"杭州银乐迪西溪银泰店",
					BLN: "HZ827389193",
					
				}
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			}
			
		}
	}
</script>

<style scoped="scoped" lang="less">
	.ICediteBox{
		height: 100%;
		position: relative;
		.nav{
			background: #fafafa;
			display: block;
			padding: 0.16rem 0.39rem;
			color: #979797;
		}
	}
</style>
