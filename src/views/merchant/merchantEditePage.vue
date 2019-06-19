<template>
	<div class="merchantEditbox">
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
			v-if="$route.query.type == 'create'"
			label="初始密码"
			:type="inputType"
			input-align="right"
			:right-icon="passwordIconType"
			@click-right-icon="righIconBtn"
			placeholder="请输入" />
			<div class="van-cell van-field">
				<div class="van-cell__title van-field__label">是否启用</div>
				<div class="van-cell__value">
					<van-switch v-model="data.checked" active-color="#2BC8D6" inactive-color="#ffffff" size="22px"/>
				</div>
			</div>
		</van-cell-group>
		<span class="box1">
			<span class="title">营业信息</span>
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
		<div class="box2" v-if="box2Flage">
			<addPlace v-model="data.ktvList" @ok="btnPlace"/>
		</div>
		<span class="footer">
			<van-button class="button" size="large" @click="handleFrom('edite')" v-if="title == '编辑商户'">保存</van-button>
			<van-button class="button" size="large" @click="handleFrom('create')" v-else>创建</van-button>
		</span>
	</div>
</template>

<script>
	import { createMerchant, editeMerchant } from "@/api/merchant.js"
	import { Toast } from 'vant';
	import addPlace from "./components/searchPage.vue"
	export default{
		components:{ addPlace },
		data(){
			return{
				inputTypeFlag:true,
				box2Flage:false,
				closeImg: require("@/assets/img/merchant/close.png"),
				data:{
					name:"",
					account:"",
					password:"",
					phone:"",
					checked:true,
					ktvList:[]
				}
			}
		},
		computed:{
			title(){
				if(this.$route.params.type == "edite"){
					document.title = "编辑商户"
					return "编辑商户"
				}else{
					document.title = "新建商户"
					return "新建商户"
				}
			},
			passwordIconType(){
				return this.inputTypeFlag ? "closed-eye":"eye-o";
			},
			inputType(){
				return this.inputTypeFlag ? "password":"text";
			}
		},
		methods:{
			deletBtn(item){
				this.data.ktvList.splice(this.data.ktvList.indexOf(item), 1);
			},
			righIconBtn(){
				this.inputTypeFlag = !this.inputTypeFlag;
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
						Toast.fail("编辑失败");
						this.loading = false;
					})
				}else{
					createMerchant(send_data).then(res => {
						this.loading = false;
						Toast.success("创建成功");
						setTimeout(() => {
							this.$router.go(-1)
						}, 500)
					}).catch(err => {
						Toast.fail("创建失败");
						this.loading = false;
					})
				}
				
			}
		},
		mounted() {
			if(this.$route.query.type == 'edite') {
			  this.data = JSON.parse(this.$route.query.data);	
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
		margin: 0.26rem 0;
		padding: 0 0.39rem;
		background: #f2f2f25b;
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
