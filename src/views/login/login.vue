<template>
  <div class="loginBox">
    <span class="title">
		
	</span>
    <span class="body">
		<span class="top">
			<span class="topLeft">
				<span class="img"></span>
				<span class="text">
					账号登录
				</span>
			</span>
			<span class="topRight"></span>
		</span>
		<span class="left"></span>
		<span class="right"></span>
		<span class="input" style="margin-top: 1.4rem;">
			<van-field
				v-model="username"
				placeholder="请输入邮箱号"
				input-align="left"
				style="background: none;"
			  />
		</span>
		<span class="input">
			<van-field
				v-model="password"
				:type="inputType"
				placeholder="请输入密码"
				input-align="left"
				:right-icon="rightIcon"
				@click-right-icon="rightIconBtn"
				style="background: none;"
			  /> 
		</span>
		<span class="input" style="border: none;">
			<van-button 
			round 
			type="info" 
			size="large" 
			loading-text="登录中..." 
			loading-type="spinner"
			:loading="loading"
			:disabled="disabled"
			class="button"
			@click="loginBtn">登录</van-button>
		</span>
	</span>
	<span class="loginFooter">
		
	</span>
  </div>
</template>

<script>
import './login.less'
import { mapActions } from 'vuex'
export default{
	data(){
		return{
			username:'',
			password:'',
			passwordFlag:false,
			loading:false,
			
		}
	},
	computed:{
		rightIcon(){
			return this.passwordFlag ? "eye-o":"closed-eye";
		},
		inputType(){
			return this.passwordFlag ? "text":"password";
		},
		disabled(){
			if(this.username !="" && this.password != ""){
				return false;
			}else{
				return true;
			}
		}
	},
	methods:{
		 ...mapActions([
		  'handleLogin',
		  'getUserInfo'
		]),
		loginBtn () {
		  this.loading = true;
		  console.log(this.handleLogin)
		  var userName = this.username;
		  var password = this.password;
		  
		  this.handleLogin({ userName, password }).then(res => {	
			  this.loading = false;
			  console.log(res)
		      this.$router.push({
		        name: this.$config.homeName
		      })
		  }).catch((err) => {
			    this.loading = false;
				this.$toast.fail(err.data.non_field_errors[0]);
			})
		},
		rightIconBtn(){
			this.passwordFlag = !this.passwordFlag;
		}
	},
	mounted() {
		document.title = "鲸唱结算平台"
	}
}
</script>
