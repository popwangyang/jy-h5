<template>
	<div class="offLineRechargeBox">
		<div v-if="pageState == 1">
			<span class="title">
				<span class="titleLeft">
					<span>账户余额</span>
					<span>￥{{ktvData.balance}}</span>
				</span>
				<span class="titleRight">
					<span @click="goRechargeRecord" style="color: #FFFFFF;margin-top: 0.28rem;">
						充值记录
					</span>
				</span>
			</span>
			<span class="line"></span>
			<span class="content">
				<span class="content-title">包厢充值单价</span>
				<span class="body">
					<span class="item" :key="item.id" v-for="item in rechargeList" @click="select(item.id)">
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
	import { ktvRechargeList, getKTVDetail, ktvContractList, rechargeOffLine } from "@/api/ktv.js"
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
				number:100,
				ktvID:"",
				ktvData:"",
				packageID:"",
				contractID:""
			}
		},
		computed:{
			paymentAmount(){
				console.log("ppppp")
				return this.setSeal == "" ? "0元" : this.$dealNumber(this.setSeal.recharge_amount * this.number) +"元";
			},
			realAmount(){
				return this.setSeal == "" ? "0元" : this.$dealNumber((this.setSeal.recharge_amount + this.setSeal.present_amount) * this.number)+"元";
			}
		},
		methods:{
			select(id){
				console.log(id)
				this.packageID = id;
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
				var send_data ={
					contract: this.contractID.toString(),  //合同PK
					package: this.packageID.toString(),  //套餐PK
					ktv: this.ktvID  //场所PK
				}
				console.log(send_data);
				rechargeOffLine(send_data).then(res => {
					console.log(res);
					this.loading = false;
					Toast.success("充值成功")
					setTimeout(() => {
						this.$router.push({name:"refillFeedback", query:{paymentAmount: this.paymentAmount, realAmount: this.realAmount}});
					}, 500)
					
				}).catch(err => {
					this.loading = false;
					Toast("系统繁忙，请稍后重试")
				})
			},
			goXieyi(){
				this.$router.push({name:"xieyi"})
			},
			goRechargeRecord(){
				this.$router.push({name:"RechargeRecord", query:{ktvID: this.ktvID}})
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
				var P2 = new Promise((resolve, reject) => {
					getKTVDetail(this.ktvID).then(res => {
						this.ktvData = res.data;
						resolve(true);
					}).catch(err => {
						reject(false)
					})
				})
				var P3 = new Promise((resolve, reject) => {
					var send_data = {
						ktv: this.ktvID,
						state: 1
					}
					ktvContractList(send_data).then(res => {
						this.number = res.data.results.length > 0 ? res.data.results[0].box_count:0;
						this.contractID = res.data.results.length > 0 ? res.data.results[0].id:"";
						resolve(true);
					}).catch(err => {
						reject(false)
					})
				})
				Promise.all([P1, P2, P3]).then(res => {
					this.pageState = 1;
					console.log(this.ktvData);
				})
			}
		},
		mounted() {
			document.title = "线下充值";
			this.ktvID = this.$route.query.ktvID;
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
			height: 3.718rem;
			background: url("../../../../assets/img/ktv/offLineRecharge.png") no-repeat;
			background-size: cover;
			.titleLeft{
				display: flex;
				width: 60%;
				font-size:16px;
				flex-direction: column;
				& span:nth-child(1){
					font-family:PingFangSC-Medium;
					font-weight:500;
					color:rgba(255,255,255,1);
					padding: 0.26rem 0;
				}
				& span:nth-child(2){
					font-size:24px;
					font-family:DINAlternate-Bold;
					font-weight:bold;
					color:rgba(255,255,255,1);
					padding: 0.16rem 0;
				}
			}
			.titleRight{
				display: flex;
				width: 40%;
				justify-content: flex-end;
				align-items: flex-start;
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
			background:rgba(255,255,255,1);
			box-shadow:0px 2px 10px 2px rgba(61,191,248,0.11);
			border-radius:4px;
			margin: 0 0.4rem;
			margin-top: -1.4rem;
			padding: 0.26rem 0.3rem;
			.content-title{
				font-size:14px;
				font-family:PingFangSC-Semibold;
				font-weight:600;
				color:rgba(51,51,51,1);
				line-height: 0.52rem;
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
