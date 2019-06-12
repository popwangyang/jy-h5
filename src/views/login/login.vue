<template>
  <div class="loginBox">
    <span class="title">
		XXXXXXXX
	</span>
    <span class="body">
		<span class="bodyItem">
			<van-field
				v-model="username"
				clearable
				placeholder="请输入邮箱号"
				input-align="left"
				style="background: #f0f0f0;"
			  />
		</span>
		<span class="bodyItem">
			<van-field
				v-model="password"
				clearable
				:type="inputType"
				placeholder="请输入密码"
				input-align="left"
				:right-icon="rightIcon"
				@click-right-icon="rightIconBtn"
				style="background: #f0f0f0;"
			  />
		</span>
		<span class="bodyItem" style="background: white;padding-left: 0;padding-right: 0;">
			<van-button 
			round 
			type="info" 
			size="large" 
			loading-text="登录中..." 
			loading-type="spinner"
			:loading="loading"
			:disabled="disabled"
			style="background: #666666;border:1px solid #666666;"
			@click="loginBtn">登录</van-button>
		</span>
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