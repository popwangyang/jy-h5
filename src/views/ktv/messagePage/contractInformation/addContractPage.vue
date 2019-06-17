<template>
	<div class="addContractBox">
		<van-field
			v-model="data.number"
			label="合同编号"
			placeholder="请输入"
			input-align="right"
		/>
		<van-field
			v-model="data.recharge_package"
			label="套餐名称"
			placeholder="请输入"
			input-align="right"
		/>
		<span class="line"></span>
		<van-field
			v-model="data.bank_user_name"
			label="银行开户名"
			placeholder="请输入"
			input-align="right"
		/>
		<van-field
			v-model="data.bank_name"
			label="开户行"
			placeholder="请输入"
			input-align="right"
		/>
		<van-field
			v-model="data.bank_account"
			label="银行卡号"
			placeholder="请输入"
			input-align="right"
		/>
		<van-field
			v-model="data.tax_number"
			label="税号"
			placeholder="请输入"
			input-align="right"
		/>
		<van-field
			v-model="data.deduction_start_time"
			label="扣费起始时间"
			placeholder="请输入"
			input-align="right"
		/>
		<SelectComponent 
			label="合同起始日期"
			placeholder="请选择"
			type="date"
			:columns="[]"
			v-model="data.begin_date"
			/>
		<SelectComponent 
			label="结算起始时间"
			placeholder="请选择"
			type="date"
			:columns="[]"
			v-model="data.end_date"
			/>
		<span class="line"></span>
		<SelectComponent 
			label="合同状态"
			placeholder="请选择"
			type="default"
			:columns="[]"
			v-model="data.contractState"
			/>
		<span class="line"></span>
	<!-- 	<Item4
		title="合同文件"
		 v-model="data.contractAdress1"
		/> -->
		<!-- <Item4
		title="合同文件"
		 v-model="data.contractAdress2"
		/> -->
		<span class="footer">
			<van-button class="button" size="large">大号按钮</van-button>
		</span>
	</div>
</template>

<script>
	import { addKtvContract } from "@/api/ktv.js"
	import SelectComponent from "@/components/SelectComponent.vue"
	import Item4 from "@/components/list4.vue"
	export default{
		components:{ SelectComponent, Item4 },
		data(){
			return{
				data:{
					"number":"",
					"annex":"",
					"begin_date":"",
					"end_date":"",
					"bank_user_name":"",
					"bank_name":"",
					"bank_account":"",
					"tax_number":"",
					"deduction_start_time":"",
					"ktv":"",
					"recharge_package":""
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
			display: block;
			margin: 0.26rem 0;
			padding: 0 0.39rem;
			box-sizing: border-box;
			background: #f2f2f25b;
		}
	}
</style>
