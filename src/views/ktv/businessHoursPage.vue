<template>
	<div class="businessHoursBox">
		<span class="nav">
			营业时间
		</span>
		<SelectComponent 
			label="开始时间"
			placeholder="请选择"
			:columns="[]"
			type="time"
			v-model="data.startTime"
		/>
		<SelectComponent 
			label="结束时间"
			placeholder="请选择"
			:columns="[]"
			type="time"
			v-model="data.endTime"
		/>
		<span class="nav">
			选择工作日
		</span>
		<van-cell title="单元格" is-link />
	</div>
</template>

<script>
	import SelectComponent from '@/components/SelectComponent.vue'
	export default{
		components:{ SelectComponent },
		data(){
			return{
				data:{
					startTime:"",
					endTime:""
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.businessHoursBox{
		.nav{
			background: #fafafa;
			display: block;
			padding: 0.16rem 0.39rem;
			color: #979797;
		}
		
	}
</style>
