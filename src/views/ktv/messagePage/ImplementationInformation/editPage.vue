<template>
	<div class="editBox">
		<!-- <van-nav-bar
		  title="实施信息"
		  left-arrow
		  @click-left="onClickLeft"
		/> -->
		 <SelectComponent 
			label="vod品牌"
			placeholder="请选择"
			type="default"
			:columns="columns"
			v-model="data.vodPingpai"
			/>
		 <van-field
			v-model="data.SystemVersionNumber"
			clearable
			label="系统版本号"
			placeholder="请输入"
			input-align="right"
		/>	
		<van-field
			v-model="data.VodPlacID"
			clearable
			label="vod场所ID"
			placeholder="请输入"
			input-align="right"
		/>
		<van-field
			v-model="data.ImplementingNumberBoxes"
			clearable
			label="实施包厢数"
			placeholder="请输入"
			input-align="right"
		/>
		<span class="footer">
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
	import { Toast } from 'vant';
	import SelectComponent from '@/components/SelectComponent.vue'
	export default{
		components:{ SelectComponent },
		data(){
			return{
				columns:["品牌1","品牌2","品牌3","品牌4","品牌5","品牌6"],
				loading:false,
				data:{
					vodPingpai:"",
					SystemVersionNumber:"",
					VodPlacID:"",
					ImplementingNumberBoxes:""
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
					Toast.success('保存成功');
				}, 2000)
			}
		},
		mounted() {
			document.title = "实施信息";
		}
	}
</script>

<style scoped="scoped" lang="less">
	.editBox{
		height: 100%;
		background: #fafafa;
		position: relative;
		.footer{
			width: 100%;
			position: absolute;
			left: 0;
			bottom: 0;
			display: block;
			margin: 0.3rem 0;
			padding: 0 0.39rem;
			box-sizing: border-box;
			background: #f2f2f25b;
		}
	}
</style>
