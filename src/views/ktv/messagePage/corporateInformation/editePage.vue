<template>
	<div class="ICediteBox">
		<!-- <van-nav-bar
		  title="企业信息"
		  left-arrow
		  @click-left="onClickLeft"
		/> -->
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
		<Item3
		 v-model="data.BLP"
		 :src="data.BLP"
		/>
		<span class="nav">
		  	法人信息
		</span>
		<van-field
		  v-model="data.LegalPersonName"
		  clearable
		  label="法人姓名"
		  placeholder="请输入"
		  input-align="right"
		/>
		<van-field
		  v-model="data.IDnumber"
		  clearable
		  label="身份证号"
		  placeholder="请输入"
		  input-align="right"
		/>
		<Item3
		 v-model="data.ICP"
		/>
		<span class="footer">
			<!-- <van-button plain hairline round type="default" size="small" @click="goPage">编辑</van-button> -->
		    <van-button 
			type="primary" 
			size="large" 
			:loading="loading"
			loading-type="spinner"
            loading-text="加载中..."
			@click="saveBtn">保存</van-button>
		</span>
	</div>
</template>

<script>
	import Item3 from '@/components/list3.vue'
	export default{
		components:{ Item3 },
		data(){
			return{
				loading:false,
				data:{
					QName:"杭州银乐迪西溪银泰店",
					BLN: "HZ827389193",
					BLP:"",
					LegalPersonName:"王亚伟",
					IDnumber:"33027382827838133",
					ICP:""
				}
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			saveBtn(){
				this.loading = true;
				setTimeout(() => {
					this.loading = false;
				    console.log(this.data);
					this.$toast.success({
						message: "成功",
					  })
				}, 2000)
			}
		},
		mounted() {
			document.title = "企业信息";
		}
	}
</script>

<style scoped="scoped" lang="less">
	.ICediteBox{
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
			height: 80px;
			padding: 0.16rem 0.39rem;
			width: 100%;
			position: absolute;
			bottom: 0;
			left: 0;
			box-sizing: border-box;
			justify-content: flex-end;
			align-items: center;
		}
	}
</style>
