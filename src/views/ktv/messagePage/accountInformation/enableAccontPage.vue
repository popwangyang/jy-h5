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
			class="button"
			size="large"
			:disabled="disabled"
			@click="onClickBtn">正式启用</van-button>
		</span>
	</div>
</template>

<script>
	import { AccountOfficiallOpened } from "@/api/ktv.js"
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
				loading:false,
				ktvID:""
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
				
			},
			disabled(){
				return this.time == "" ? true:false;
			}
		},
		methods:{
		   onClickBtn(){
			   this.loading = true;
			   var send_data = {
				   ktvID: this.ktvID,
				   chargeable_time: parseInt(this.time.substr(0, this.time.length - 2))
			   }
			   AccountOfficiallOpened(send_data).then(res => {
				   this.loading = false;
				   Toast.success("账号启用成功")
				   console.log(res)
			   }).catch(err => {
				   this.loading = false;
				   Toast.fail("账号启用失败")
			   })
		   }
		},
		mounted() {
			this.ktvID = this.$route.query.ktvID;
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
