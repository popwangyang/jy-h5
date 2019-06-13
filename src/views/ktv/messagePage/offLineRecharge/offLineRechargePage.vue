<template>
	<div class="offLineRechargeBox">
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
				<span class="item">
					<PriceComponent
					label="13"
					value="2"
					:isSelected="false"
					/>
				</span>
				<span class="item">
					<PriceComponent
					label="13"
					value="2"
					:isSelected="false"
					/>
				</span>
				<span class="item">
					<PriceComponent
					label="13"
					value="2"
					:isSelected="false"
					/>
				</span>
				<span class="item">
					<PriceComponent
					label="13"
					value="2"
					:isSelected="true"
					/>
				</span>
			</span>
		</span>
		<span class="line"></span>
		<van-cell title="包厢数量" value="100" />
		<span class="line"></span>
		<van-cell title="支付金额" value="1300元" />
		<van-cell title="实际到账" value="1500元" />
		<span class="footer">
			<van-button 
			size="large"
			:loading="loading"
			loading-type="spinner"
			loading-text="提交充值"
			@click="rechargeBtn"
			style="background:linear-gradient(180deg,rgba(54,210,254,1) 0%,rgba(50,156,238,1) 100%);color: white;border-radius:4px;"
			>提交充值</van-button>
		</span>
		<span class="xieyi">
			<span>
				支付即同意<span class="name" @click="goXieyi">《xxxx授权协议》</span>
			</span>
		</span>
	</div>
</template>

<script>
	import { Toast } from 'vant';
	import PriceComponent from "./components/priceComponent.vue"
	export default{
		components:{ PriceComponent },
		data(){
			return{
				loading:false,
			}
		},
		methods:{
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
			}
		},
		mounted() {
			document.title = "线下充值"
		}
	}
</script>

<style scoped="scoped" lang="less">
	.offLineRechargeBox{
		height: 100%;
		background: #fafafa;
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
