<template>
	<div class="offLineRechargeBox">
		<div v-if="pageState == 1">
			<span class="title">
				<span class="titleLeft">
					<span>账户余额</span>
					<span>￥7,188.00</span>
				</span>
				<span class="titleRight">
					<span @click="goRechargeRecord" style="color: #4479EF;">
						充值记录
					</span>
					<van-icon name="arrow" />
				</span>
			</span>
			<span class="line"></span>
			<span class="content">
				<span class="title">包厢充值单价</span>
				<span class="body">
					<span class="item" v-for="item in rechargeList" @click="select(item.id)">
						<PriceComponent
						:label="item.recharge_amount"
						:value="item.present_amount"
						:key="item.id"
						:isSelected="item.isSelected"
						/>
					</span>
					
				</span>
			</span>
			<span class="line"></span>
			<van-cell title="包厢数量" :value="number" />
			<span class="line"></span>
			<van-cell title="支付金额" :value="paymentAmount" />
			<van-cell title="实际到账" :value="realAmount" />
			<span class="footer">
				<van-button 
				size="large"
				:loading="loading"
				loading-type="spinner"
				loading-text="提交充值"
				@click="rechargeBtn"
				class="button"
				>提交充值</van-button>
			</span>
			<span class="xieyi">
				<span>
					支付即同意<span class="name" @click="goXieyi">《xxxx授权协议》</span>
				</span>
			</span>
		</div>
		<div class="box" v-if="pageState == 0">
			<van-loading type="spinner" :vertical="true">加载中...</van-loading>
		</div>
	</div>
</template>

<script>
	import { ktvRechargeList } from "@/api/ktv.js"
	import { Toast } from 'vant';
	import PriceComponent from "./components/priceComponent.vue"
	export default{
		components:{ PriceComponent },
		data(){
			return{
				pageState:0,
				loading:false,
				rechargeList:[],
				setSeal:"",
				number:100
			}
		},
		computed:{
			paymentAmount(){
				return this.setSeal == "" ? "" : this.setSeal.recharge_amount * this.number +"元";
			},
			realAmount(){
				return this.setSeal == "" ? "" : (this.setSeal.recharge_amount + this.setSeal.present_amount) * this.number+"元";
			}
		},
		methods:{
			select(id){
				console.log(id)
				this.rechargeList.map((item, index) => {
					if(item.id == id){
						item.isSelected = !item.isSelected;
						this.setSeal = item.isSelected ? item:""
					}else{
						item.isSelected = false;
					}
				})
			},
			rechargeBtn(){
				this.loading = true;
				setTimeout(() => {
					this.loading = false;
					// Toast.success('充值成功');
					Toast("系统繁忙，请稍后重试")
					this.$router.push({name:"refillFeedback"})
				}, 1000)
			},
			goXieyi(){
				this.$router.push({name:"xieyi"})
			},
			goRechargeRecord(){
				this.$router.push({name:"RechargeRecord"})
			},
			init(){
				this.pageState = 0;
				var P1 = new Promise((resolve, reject) => {
					ktvRechargeList().then(res => {
						this.rechargeList = res.data.results.map(item => {
							item.isSelected = false;
							return item;
						});
						console.log(this.rechargeList)
						resolve(true);
					}).catch(err => {
						reject(false)
					})
				})
// 				var P2 = new Promise((resolve, reject) => {
// 					ktvDetail
// 				})
				Promise.all([P1]).then(res => {
					this.pageState = 1;
				})
			}
		},
		mounted() {
			document.title = "线下充值";
			this.init()
		}
	}
</script>

<style scoped="scoped" lang="less">
	.offLineRechargeBox{
		height: 100%;
		background: #fafafa;
		.box{
			display: flex;
			height: 100%;
			align-items: center;
			justify-content: center;
		}
		.title{
			display: flex;
			padding: 0.3rem 0.39rem;
			background: white;
			.titleLeft{
				display: flex;
				width: 60%;
				font-weight:600;
				color:rgba(51,51,51,1);
				flex-direction: column;
				& span:nth-child(1){
					font-size:14px;
					padding: 0.26rem 0;
				}
				& span:nth-child(2){
					font-size: 24px;
					padding: 0.16rem 0;
				}
			}
			.titleRight{
				display: flex;
				width: 40%;
				justify-content: flex-end;
				align-items: center;
				font-size: 14px;
			}
		}
		.line{
			display: block;
			height: 0.2rem;
			background: #fafafa;
		}
		.content{
			display: block;
			background: white;
			width: 100%;
			.title{
				font-size:14px;
				font-weight:600;
				color:rgba(51,51,51,1);
			}
			.body{
				display: flex;
				flex-wrap: wrap;
				padding: 0.3rem 0;
				overflow: auto;
				max-height: 5.6rem;
				.item{
					width: 33%;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-bottom: 0.3rem;
				}
			}
		}
		.footer{
			display: flex;
			width: 100%;
			padding: 0.26rem 0.39rem;
			box-sizing: border-box;
			margin-top: 0.6rem;
		}
		.xieyi{
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 10px;
			color: #999999;
			.name{
				color: #4479EF;
			}
		}
	}
</style>
