<template>
	<div class="forgetPage">
		<h2>邮箱验证</h2>
		<div class="item">
				<h4>邮箱</h4>
				<div>
					<van-field
						v-model="fromData.username"
						left
						placeholder="请输入邮箱"
					  />
				</div>
			</div>
			<div class="item">
				<h4>验证码</h4>
				<div>
					<van-field
					v-model="fromData.code"
					placeholder="请输入验证码"
					>
						<span class="loading" slot="button">
						   <span  class="code" @click="getCode" v-if="loadState == 0">发送验证码</span>
						   <van-loading  v-if="loadState == 1" size="20" color="#4B74FF"/>
						   <span class="code" v-if="loadState == 2">{{time}}s</span>
						</span>
					</van-field>
				</div>
			</div>
			<div class="footer">
				<van-button class="button"  size="large" :disabled="!disabled" @click="handleFrom">下一步</van-button>
			</div>
	</div>
</template>

<script>
	import { Error } from '@/libs/error.js'
	import { Toast } from "vant"
	import { checkForm } from '@/libs/util.js'
	import { getIdentifyungCode, testIdentifyungCode } from '@/api/user.js'
	export default{
		data(){
		  return{
				time: 60,
				loadState: 0,
				setInterval: null,
			  fromData: {
				  username: '',
				  code: ''
			  },
				rule:{
					username: { required: true, type: 'email', message: '请输入邮箱账号' }
				}
		  }	
		},
		computed:{
			disabled(){
				var flag = true;
			  for(var key in this.fromData){
					if(this.fromData[key] == ''){
					   flag = false;
					}
				}
				return flag;
			}
		},
		methods: {
			getCode(){
				if(!checkForm(this.fromData, this.rule)) {
					return;
				}
				  this.loadState = 1;
				getIdentifyungCode(this.fromData.username).then((res) => {
					this.loadState = 2;
					this.time =  60;
					this.setInterval = setInterval(() => {
						if(this.time <= 0){
							clearInterval(this.setInterval);
							this.loadState = 0;
							this.time =  60;
						}
						this.time--;
					}, 1000)
				}).catch(err => {
					this.loadState = 0;
					Toast.fail(err.data.message);
				})
			},
			handleFrom(){
				const { username, code } = this.fromData;
				testIdentifyungCode({ username, code }).then((res) => {
					 this.$emit('event1', {username, code, index:2});
				}).catch(err => {
					Toast.fail(err.data.message);
				})
			}
		},
		mounted() {
			document.title = "邮箱验证"
		},
		destroyed() {
			if(this.setInterval != null) {
				clearInterval(this.setInterval);
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.forgetPage{
		display: block;
		height: 100%;
		width: 100%;
		background: #ffffff;
		padding: 0.676rem 0.26rem;
		box-sizing: border-box;
		.item{
			&> div{
				border-bottom: 1px solid #C6CBD4;
				margin-bottom: 0.3rem;
				.code{
					font-size:12px;
					font-weight:500;
					color:rgba(75,116,255,1);
				}
			}
			.loading{
				width: 100%;
				height: 0.6rem;
				display: flex;
				align-items: center;
			}
		}
		.footer{
			margin-top: 1rem;
			display: block;
		}
	}
	h2, h4{
		margin: 0;
		padding: 0;
	}
	h2{
		font-size:20px;
		font-weight:500;
		color: #020202;
		margin-bottom: 0.52rem;
	}
	h4{
		font-size:12px;
		font-weight:400;
		color:rgba(108,114,124,1);
		margin-bottom: 0.26rem;
	}
</style>
