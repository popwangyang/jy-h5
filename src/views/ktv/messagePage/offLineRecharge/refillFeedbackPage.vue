<template>
	<div class="refillFeedbackBox">
		<span class="content">
			<span>
				<van-icon name="checked" size="1.3rem" color="#01cca3"/>
			</span>
			<span>
				支付成功
			</span>
			<span>我们将尽快为您完成充值</span>
		</span>
		<span class="line"></span>
		<van-cell title="支付金额" value="1300元" />
		<van-cell title="实际到账" value="1500元" />
		<span class="footer">
			<van-button 
			size="large"
			class="button"
			>完成</van-button>
		</span>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				loading:false
			}
		},
		mounted() {
			document.title = "支付成功"
		}
	}
</script>

<style scoped="scoped" lang="less">
	.refillFeedbackBox{
		height: 100%;
		background: #fafafa; 
		.content{
		   height: 4.55rem;
		   display: flex;
		   align-items: center;
		   justify-content: center;
		   flex-direction: column;
		   background: white;
		   padding: 0.3rem 0.39rem;
		   border-bottom: 1px solid  #f2f3f5;
		   & span:nth-child(1){
			   display: block;
			   margin-top: 0.8rem;
		   }
		   & span:nth-child(2){
			  font-size:24px;
			  font-weight:400;
			  color:rgba(33,33,33,1);
		   }
		    & span:nth-child(3){
				margin-top: 0.2rem;
				font-size:14px;
				font-weight:400;
				color:rgba(102,102,102,1);
			}
		}
		.line{
			display: block;
			height: 0.26rem;
			background: #F6F6F6;
		}
		.footer{
			display: flex;
			width: 100%;
			padding: 0.26rem 0.39rem;
			box-sizing: border-box;
			margin-top: 2rem;
		}
	}
</style>
