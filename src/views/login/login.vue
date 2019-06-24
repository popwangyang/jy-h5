<template>
  <div class="loginBox" v-if="!isforgetPassword">
    <span class="title">
		
	</span>
	<span class="nav">
		管理端
	</span>
    <span class="body">
		<span class="top">
			<span class="topLeft">
				<span class="img"></span>
				<span class="text">
					账号登录
				</span>
			</span>
			<!-- <span class="topRight"></span> -->
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
		<span class="bodyFooter" style="color: #2266F6;" @click="forgetPassword">
			忘记密码
		</span>
	</span>
	<span class="loginFooter">
		
	</span>
  </div>
  <div v-else style="height: 100%;">
	  <ForgetPassword @event="forgetPassword"/>
  </div>
</template>

<script>
import ForgetPassword from './components/forgetPassword'
import './login.less'
import { mapActions } from 'vuex'
export default{
	components:{ ForgetPassword },
	data(){
		return{
			username:'',  // admin@hlchang.cn
			password:'',  // abc12345
			passwordFlag:false,
			loading:false,
			isforgetPassword:false,
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
		forgetPassword(){
			this.isforgetPassword = !this.isforgetPassword;
		},
		loginBtn () {
		  this.loading = true;
		  console.log(this.handleLogin)
		  var userName = this.username;
		  var password = this.password;
		  
		  this.handleLogin({ userName, password }).then(res => {	
			  this.loading = false;
			  console.log(res)
				 localStorage.setItem("active", 0);
				 localStorage.setItem('jyH5', JSON.stringify({userName, password}));
		      this.$router.push({
		        name: this.$config.homeName
		      })
		  }).catch((err) => {
			    this.loading = false;
				console.log(err)
				if(err.data.error){
					this.$toast.fail(err.data.error[0]);
				}else{
					this.$toast.fail("登录异常,请联系管理员")
				}
			})
		},
		rightIconBtn(){
			this.passwordFlag = !this.passwordFlag;
		},
		init(){
			if(localStorage.getItem('jyH5')){
			  const { userName, password } = JSON.parse(localStorage.getItem('jyH5'));
			  this.username = userName;
			  this.password = password;
			}
		}
	},
	mounted() {
		
		document.title = "鲸唱结算平台";
		this.init();
	}
}
</script>
