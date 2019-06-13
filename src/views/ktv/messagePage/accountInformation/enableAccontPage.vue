<template>
	<div class="enableAccontBox">
		<van-notice-bar
		  text="正式启用账号后将永久无法使用试用账号"
		  left-icon="info"
		/>
		<SelectComponent
		type="default"
		:columns="columns"
		label="开始计费时间"
		placeholder="请选择"
		v-model="time"
		/>
		<span class="text">
			{{text}}
		</span>
		<span class="footer">
			<van-button 
			:loading="loading"
			loading-type="spinner"
			loading-text="加载中..."
			type="primary" 
			size="large" 
			@click="onClickBtn">正式启用</van-button>
		</span>
	</div>
</template>

<script>
	import { setSelectDays, getTime } from "@/libs/util"
	import SelectComponent from "@/components/SelectComponent.vue"
	import Item1 from '@/components/list1.vue'
	import { Toast } from 'vant';
	export default{
		components:{ SelectComponent, Item1 },
		data(){
			return{
				columns: setSelectDays(30),
				time:"",
				loading:false
			}
		},
		computed:{
			text(){
				if(this.time == ""){
					return "";
				}else{
					var num = parseInt(this.time.substr(0, this.time.length - 2));
					var str = "于 "+getTime(num)+" 开始计费"
				    return str;
				}
				
			}
		},
		methods:{
		   onClickBtn(){
			   this.loading = true;
			   setTimeout(() => {
				   Toast.success('启用成功');
				   this.loading =false;
			   }, 1000)
		   }
		},
		mounted() {
			
		}
	}
</script>

<style scoped="scoped" lang="less">
	.enableAccontBox{
		height: 100%;
		position: relative;
		background: #fafafa;
		.text{
			display: flex;
			padding: 0.2rem 0.39rem;
			font-size: 14px;
			color: #b9b8bd;
			height: 0.8rem;
		}
		.footer{
			display: flex;
			padding: 0.26rem 0.39rem;
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
