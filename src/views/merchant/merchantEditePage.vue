<template>
	<div class="merchantEditbox">
		<div class="body">
			<van-cell-group>
				<van-field 
				v-model="data.name" 
				label="商户名称"
				input-align="right"
				placeholder="请输入" />
				<van-field 
				v-model="data.account" 
				label="账号"
				input-align="right"
				placeholder="请输入邮箱地址" />
				<van-field 
				v-model="data.password" 
				label="初始密码"
				v-if="$route.query.type == 'create'"
				type="text"
				input-align="right"
				placeholder="请输入" />
				<div class="van-cell van-field">
					<div class="van-cell__title van-field__label">是否启用</div>
					<div class="van-cell__value">
						<van-switch v-model="data.checked" active-color="#2BC8D6" inactive-color="#ffffff" size="22px"/>
					</div>
				</div>
			</van-cell-group>
			<span class="box1">
				<span class="title">关联场所</span>
				<span>
					<span class="add" @click="btnPlace">
						<span class="circle">
							<van-icon name="plus" size="0.2rem" color="#FFFFFF"/>
						</span>
						<span>请选择</span>
					</span>
				</span>
				<span class="body">
					<van-cell v-for="item in data.ktvList" :key="item.id">
						 <template slot="title">
							<van-icon :name="closeImg" style="margin-right: 0.26rem;line-height: 100%;" @click="deletBtn(item)"/>
							<span class="custom-text">{{item.name}}</span>
						 </template>
					</van-cell>
				</span>
			</span>
		</div>
		<div class="box2" v-if="box2Flage">
			<addPlace v-model="data.ktvList" @ok="btnPlace"/>
		</div>
		<span class="footer">
			<span @click="handleFrom('edite')" v-if="title == '编辑商户'">保存账号</span>
			<span @click="handleFrom('create')" v-else>创建账号</span>
			<span @click="cancleBtn">取消</span>
		</span>
	</div>
</template>

<script>
	import { Error } from '@/libs/error.js'
	import { checkForm } from '@/libs/util.js'
	import { createMerchant, editeMerchant } from "@/api/merchant.js"
	import { Toast } from 'vant';
	import addPlace from "./components/searchPage.vue"
	export default{
		components:{ addPlace },
		data(){
			const validateName = (value, callback) => {
				if(value == ""){
					callback(new Error("商户名称不能为空"))
				}else if(value.length > 50){
					callback(new Error("商户名称不能超过50个字"))
				}else{
					callback();
				}
			}
			const validateAccount = (value, callback) => {
				var myrey = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
				if(value == ""){
					callback(new Error("账号不能为空"))
				}else if(!myrey.test(value)){
					callback(new Error("邮箱格式不正确"))
				}else{
					callback();
				}
			}
			const validatePassword = (value, callback) =>{
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
				inputTypeFlag:true,
				box2Flage:false,
				closeImg: require("@/assets/img/merchant/close.png"),
				data:{
					name:"",
					account:"",
					password:"",
					checked:true,
					ktvList:[]
				},
				rule:{
					name: { required: true, validator: validateName },
					account: { required: true, type:'email', message:"账号不能为空" },
					password: {required: true, validator: validatePassword},
					ktvList: { required: true, type:'array', message:"请选择关联的ktv"}
				}
			}
		},
		computed:{
			title(){
				if(this.$route.query.type == "edite"){
					document.title = "编辑商户"
					return "编辑商户"
				}else{
					document.title = "新建商户"
					return "新建商户"
				}
			},
		},
		methods:{
			cancleBtn(){
				this.$router.go(-1);
			},
			deletBtn(item){
				this.data.ktvList.splice(this.data.ktvList.indexOf(item), 1);
			},
			btnPlace(){
				this.box2Flage = !this.box2Flage;
				if(this.box2Flage){
					document.title = "门店选择"
				}else{
				   if(this.$route.params.type == "edite"){
				   	document.title = "编辑商户"
				   	return "编辑商户"
				   }else{
				   	document.title = "新建商户"
				   	return "新建商户"
				   }
				}
			},
			handleFrom(type){
				if(this.$route.query.type == 'edite'){
					delete this.rule.password;
				}
				if(!checkForm(this.data, this.rule)){
					return;
				}
				this.loading = true;
				var send_data = {
					name: this.data.name,
					account: this.data.account,
					password: this.data.password,
					ktv: this.data.ktvList.reduce((cur, next) => { cur.push(next.id+""); return cur; }, []),
					status: this.data.checked
				}
				console.log(send_data);
				if(type == "edite"){
					send_data.id = this.data.id;
					editeMerchant(send_data).then(res => {
						this.loading = false;
						Toast.success("编辑成功");
						setTimeout(() => {
							this.$router.go(-1)
						}, 500)
					}).catch(err => {
						Toast.fail(err.data.error[0]);
						this.loading = false;
					})
				}else{
					createMerchant(send_data).then(res => {
						this.loading = false;
						Toast('创建账号后系统会将\n账号和密码发送至该箱发送邮件')
						setTimeout(() => {
							this.$router.go(-1)
						}, 500)
					}).catch(err => {
						Toast.fail(err.data.error[0]);
						this.loading = false;
					})
				}
				
			}
		},
		mounted() {
			if(this.$route.query.type == 'edite') {
			  this.data = JSON.parse(this.$route.query.data);	
				console.log(this.data)
			}
		}
	}
</script>

<style scoped="scoped">
	.merchantEditbox{
		height: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		background: #f2f2f25b;
	}
	.merchantEditbox .body{
		flex: 1;
	}
	.box1{
		flex: 1;
		display: flex;
		height: 8.6rem;
		background: #f2f2f25b;
		/*  */
		flex-direction: column;
	}
	.title{
		color: #D3D3D3;
		padding:0 0.39rem;
		margin: 0.26rem 0;
	}
	.add{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 1.222rem;
		color: #6666668a;
		background:rgba(239,238,243,1);
	}
	.add span:nth-child(2){
		font-size:14px;
		font-family:PingFangSC-Semibold;
		font-weight:600;
		color:rgba(68,68,68,1);
		line-height:20px;
		margin-left: 0.12rem;
	}
	.body{
		flex: 1;
		overflow: auto;
	}
	.box2{
		height: 100%;
		width: 100%;
		background: yellow;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
	}
	.footer{
		font-size:16px;
		font-weight:500;
		color:rgba(153,153,153,1);
		background:rgba(255,255,255,1);
        box-shadow:0px -1px 5px -1px rgba(0,0,0,0.16);
		display: flex;
		height: 1.144rem;
		justify-content: space-around;
	}
	.footer > span{
		display: flex;
		height: 100%;
		width: 50%;
		align-items: center;
		justify-content: center;
	}
	.footer > span:last-child{
		background: #458CF4;
		color: white;
	}
	.circle{
		display: flex;
		width: 0.364rem;
		height: 0.364rem;
		background: #2BC8D6;
		border-radius: 50%;
		align-items: center;
		justify-content: center;
	}
</style>
<style>
	.merchantEditbox .van-cell__title{
		display: flex;
		align-items: center;
	}
</style>
