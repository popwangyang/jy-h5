<template>
	<div class="addContractBox">
		<van-field
			v-model="data.contractName"
			label="合同编号"
			placeholder="请输入"
			input-align="right"
		/>
		<van-field
			v-model="data.contractName"
			label="套餐名称"
			placeholder="请输入"
			input-align="right"
		/>
		<van-field
			v-model="data.contractName"
			label="包厢数量"
			placeholder="请输入"
			input-align="right"
		/>
		<span class="line"></span>
		<SelectComponent 
			label="合同起始日期"
			placeholder="请选择"
			type="date"
			:columns="[]"
			v-model="data.startTime"
			/>
		<SelectComponent 
			label="结算起始时间"
			placeholder="请选择"
			type="date"
			:columns="[]"
			v-model="data.endTime"
			/>
		<span class="line"></span>
		<SelectComponent 
			label="合同状态"
			placeholder="请选择"
			type="default"
			:columns="[]"
			v-model="data.contractState"
			/>
		<SelectComponent 
			label="到账状态"
			placeholder="请选择"
			type="default"
			:columns="[]"
			v-model="data.arrivalAccountState"
			/>
		<span class="line"></span>
		<Item4
		title="合同文件"
		 v-model="data.contractAdress1"
		/>
		<Item4
		title="合同文件"
		 v-model="data.contractAdress2"
		/>
		<span class="footer">
			<van-button type="primary" size="large">大号按钮</van-button>
		</span>
	</div>
</template>

<script>
	import SelectComponent from "@/components/SelectComponent.vue"
	import Item4 from "@/components/list4.vue"
	export default{
		components:{ SelectComponent, Item4 },
		data(){
			return{
				data:{
					contractName:"",
					packageName:"",
					BalconyNumber:"",
					startTime:"",
					endTime:"",
					contractState:"",
					arrivalAccountState:"",
					contractAdress1:"",
					contractAdress2:""
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.addContractBox{
		height: 100%;
		background: #F6F6F6;
		.footer{
			
		}
	}
</style>
