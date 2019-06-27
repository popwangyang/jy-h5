<template>
	<div class="editAccountInformationBox">

		<van-field 
		v-model="data.username" 
		label="账号"
		required
		input-align="right"
		placeholder="请输入邮箱地址" />
		<van-field 
		v-if="$route.query.type != 'edit'"
		v-model="data.password" 
		label="初始密码"
		required
		type="text"
		input-align="right"
		placeholder="请输入" />
		<SelectComponent 
		label="所属品牌"
		placeholder="请选择"
		type="default"
		:required="true"
		:columns="columns"
		v-model="data.AccountType"
		/>

		<div class="van-cell van-field">
			<div class="van-cell__title van-field__label">是否启用</div>
			<div class="van-cell__value">
				<van-switch v-model="data.is_active" size="22px"/>
			</div>
		</div>
		<span class="footer">
			<van-button 
			:loading="loading"
			loading-type="spinner"
			loading-text="加载中..."
			class="button"
			size="large" 
			@click="onClickBtn">{{buttonText}}</van-button>	
		</span>
	</div>
</template>

<script>
	import SelectComponent from '@/components/SelectComponent.vue'
	import { Error } from '@/libs/error.js'
	import { checkForm } from '@/libs/util.js'
	import { setTrialAccount, getAccountDetail, editAccount } from "@/api/ktv.js"
	import { Toast } from 'vant';
	export default{
		components:{ SelectComponent },
		data(){
			const validatenickname = (value, callback) => {
				if(value == ""){
					callback(new Error("呢称不能为空"))
				}else if(value.length > 20){
					callback(new Error("呢称不能超过20个字"))
				}else{
					callback();
				}
			}
			const validatepassword = (value, callback) => {
				var myrey = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
				if(value == ''){
					callback(new Error("账号密码不能为空"))
				}else if(!myrey.test(value)){
					callback(new Error("请输入6~20位数字和字母组合"))
				}else{
					callback();
				}
			}
			
			return{
				loading:false,
				columns: [ "k乐宝", "丽音动感" ],
				data:{
					accountType: "",
					username: "",
					password: "",
					is_active: true,
					group: [],
					ktv_id: this.$route.query.ktvID,
					id:""
				},
				buttonText:"",
				ToastText:"",
				ktvID:"",
				rule: {
					accountType:{ required: true, message: '品牌名称不能为空' },
					username:{ required: true, type: 'email', message: '邮箱账号不能为空' },
					password: { required: true, validator: validatepassword },
				}
			}
		},
		computed:{

		},
		methods:{
			onClickBtn(){
				if(this.$route.query.type == 'edit'){
					delete this.rule.password;
				}
				if(!checkForm(this.data, this.rule)){
					return;
				}
				this.loading = true;
				var send_data = Object.assign({}, this.data);
				    send_data.is_active = send_data.is_active ? 1:0;
					console.log(send_data)
					if(this.$route.query.type == "create"){
					  setTrialAccount(send_data).then(res => {
					  	console.log(res)
					  	this.loading = false;
					  	Toast.success("账号创建成功");
						setTimeout(() => {
							this.$router.go(-1)
						}, 500)
					  }).catch(err => {
					  	this.loading = false;
						if(err.data){
					  	  Toast.fail(err.data.non_field_errors[0])
						}else{
						  Toast.fail("账号创建异常");
						}
					  })	
					}else{
						delete send_data.password;
				      editAccount(send_data).then(res => {
				      	console.log(res)
				      	this.loading = false;
				      	Toast.success("账号修改成功")
						setTimeout(() => {
							this.$router.go(-1)
						}, 500)
				      }).catch(err => {
				      	this.loading = false;
				      	Toast.fail("账号修改失败")
				      })
					}
			},
			getDetail(){
				var send_data = {
					code: "K",
					ktv_id: this.ktvID
				}
				Toast.loading({
				  duration: 0,       // 持续展示 toast
				  forbidClick: true, // 禁用背景点击
				  loadingType: 'circular',
				});
				getAccountDetail(send_data).then(res => {
					Toast.clear();
					Object.keys(this.data).map(item => this.data[item] = item == "group" ? [res.data.results[0].group[0].id]:res.data.results[0][item])
					console.log(this.data)
				})
			}
		},
		mounted() {
			if(this.$route.query.type == "edit"){
				document.title = "编辑账号"
				this.buttonText = "保存"
				this.ToastText = "保存成功"
				this.ktvID = this.$route.query.ktvID;
				this.getDetail();
			}else{
				document.title = "新建账号"
				this.buttonText = "新建试用账号"
				this.ToastText = "创建成功"
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.editAccountInformationBox{
		height: 100%;
		background: #fafafa;
		.footer{
			display: flex;
			height: 50px;
			padding: 0.16rem 0.39rem;
			width: 100%;
			margin-top: 1.5rem;
			background: white;
			box-sizing: border-box;
			justify-content: flex-end;
			align-items: center;
		}
	}
</style>
