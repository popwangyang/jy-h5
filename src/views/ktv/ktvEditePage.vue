<template>
	<div class="ktvEditeBox">
		<!-- <van-nav-bar
		  :title="title"
		  left-text="返回"
		  left-arrow
		  @click-left="onClickLeft"
		/> -->
		<span class="nav">
			KTV信息
		</span>
		  <van-field
			v-model="data.ktvName"
			clearable
			label="场所名称"
			placeholder="请输入"
			input-align="right"
		  />
       <SelectComponent 
		label="场所类型"
		placeholder="请选择"
		type="default"
		:columns="columns"
		v-model="data.ktvType"
		/>
		<span class="nav">
			联系人信息
		</span>
		 <van-field
			v-model="data.personName"
			clearable
			label="联系人名称"
			placeholder="请输入"
			input-align="right"
		/>
		 <van-field
			v-model="data.phone"
			clearable
			label="手机号"
			placeholder="请输入"
			input-align="right"
		/>
		 <van-field
			v-model="data.tel"
			clearable
			label="场所电话"
			placeholder="请输入"
			input-align="right"
		/>
		<span class="nav">
			联系人信息
		</span>
		<SelectComponent 
			label="开业时间"
			placeholder="请选择"
			:columns="[]"
			type="date"
			v-model="data.Ktime"
		/>
		<SelectComponent 
			label="营业状态"
			placeholder="请选择"
			type="default"
			:columns="columns"
			v-model="data.state"
		/>
		<SelectComponent 
			label="营业时间"
			placeholder="请选择"
			type="date"
			:columns="[]"
			v-model="data.Ytime"
		/>
		<SelectComponent 
			label="地址"
			placeholder="请选择"
			type="map"
			:columns="[]"
			v-model="data.address"
		/>
		<van-field
			v-model="data.detailAddress"
			type="textarea"
			placeholder="请输入详细地址"
			rows="2"
			style="border: 1px solid #f6f6f6;"
		 />
		 <span class="footer">
		   <van-button type="primary" size="large">保存</van-button>
		 </span>
	</div>
</template>

<script>
	import SelectComponent from '@/components/SelectComponent.vue'
	export default{
		components:{ SelectComponent },
		data(){
			return{
				title:"新建KTV",
				show2:false,
				columns: [ "量贩式", "夜场" ],
				data:{
					ktvName:"",
					ktvType:"",
					personName:"",
					phone:"",
					tel:"",
					Ktime:"",
					state:"",
					Ytime:"",
					address:"",
					detailAddress:""
				}
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
		},
		mounted() {
			if(this.$route.params.type == 'edite'){
				document.title= "编辑KTV";
				// this.title = "编辑KTV"
			}else{
				document.title= "新建KTV";
			    // this.title = "新建KTV"
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.ktvEditeBox{
		height: 100%;
		background: #fafafa;
		.nav{
			background: #fafafa;
			display: block;
			padding: 0.16rem 0.39rem;
			color: #979797;
		}
		.footer{
			display: block;
			margin: 0.1rem 0;
			padding: 0 0.39rem;
			box-sizing: border-box;
			background: #f2f2f25b;
		}
	}
</style>
