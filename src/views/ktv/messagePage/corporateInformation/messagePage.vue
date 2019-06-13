<template>
	<div class="ICmessageBox">
		<!-- <van-nav-bar
		  title="企业信息"
		  left-arrow
		  @click-left="onClickLeft"
		/> -->
		<span class="nav">
		  	企业信息
		</span>
		<Item1
		 label="企业注册名称"
		 value="杭州银乐迪西溪银泰店"
		/>
		<Item1
		 label="营业执照编号"
		 value="HZ827389193"
		/>
		<Item2
		 label="企业注册名称"
		 value="杭州银乐迪西溪银泰店"
		/>
		<span class="nav">
		  	法人信息
		</span>
		<Item1
		 label="法人姓名"
		 value="王五"
		/>
		<Item1
		 label="身份证号"
		 value="33027382827838133"
		/>
		<Item2
		 label="身份证照片"
		 value="杭州银乐迪西溪银泰店"
		/>
		<span class="footer">
			<van-button plain hairline round type="default" size="small" @click="goPage">编辑</van-button>
		</span>
	</div>
</template>

<script>
	import Item1 from '@/components/list1.vue'
	import Item2 from '@/components/list2.vue'
	export default{
		components:{ Item1, Item2 },
		data(){
			return{
				
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			goPage(){
				this.$router.push({name:"CIedite"})
			}
		},
		mounted() {
			document.title = "企业信息";
		}
	}
</script>

<style scoped="scoped" lang="less">
	.ICmessageBox{
		height: 100%;
		position: relative;
		background: #fafafa;
		.nav{
			background: #fafafa;
			display: block;
			padding: 0.16rem 0.39rem;
			color: #979797;
		}
		.footer{
			display: flex;
			height: 50px;
			padding: 0.16rem 0.39rem;
			width: 100%;
			position: absolute;
			bottom: 0;
			left: 0;
			background: white;
			box-sizing: border-box;
			justify-content: flex-end;
			align-items: center;
		}
	}
</style>
