<template>
	<div class="ICediteBox">
		<span class="nav">
		  	企业信息
		</span>
		<van-field
		  v-model="data.company_name"
		  label="企业注册名称"
		  placeholder="请输入"
		  required
		  input-align="right"
		/>
		<van-field
		  v-model="data.license_number"
		  required
		  label="营业执照编号"
		  placeholder="请输入"
		  input-align="right"
		/>
		<Upload title="营业执照照片" v-model='data.license_photo' :required="true"/>
		
		<span class="nav">
		  	法人信息
		</span>
		<van-field
		  v-model="data.legal_representative"
		  required
		  label="法人姓名"
		  placeholder="请输入"
		  input-align="right"
		/>
		<van-field
		  v-model="data.legal_representative_card"
		  required
		  label="身份证号"
		  placeholder="请输入"
		  input-align="right"
		/>
		<Upload title="身份证照片" v-model='data.identity_card_photo' :required="true"/>
		<span class="footer">
		    <van-button 
			class="button"
			size="large" 
			:loading="loading"
			loading-type="spinner"
            loading-text="加载中..."
			@click="saveBtn">{{buttonText}}</van-button>
		</span>
	</div>
</template>

<script>
	import Upload from '@/components/upload/uploadRelease'
	import { Error } from '@/libs/error.js'
	import { checkForm } from '@/libs/util.js'
	import { Toast } from "vant"
	import { addKtvCorporateDetail, putKtvCorporateDetail } from "@/api/ktv.js"
	export default{
		components:{ Upload },
		data(){
			const validateName = (value, callback) => {
			    if (value === '') {
			        callback(new Error("企业名字不能为空"));
			    } else if(value.length > 50) {
			        callback(new Error("企业名字应小于50个字"));
			    }else{
					callback();
				}
			};
			 
		    const validatelicense_number = (value, callback) => {
				var myrey = /^[0-9a-zA-Z]{1,}$/;
			     if (value === '') {
			         callback(new Error("营业执照注册号不能为空"));
			     } else if(value.length > 50) {
			         callback(new Error("营业执照注册号不能超过50个字符"));
			     }else if(!myrey.test(value)){
					 callback(new Error("营业执照注册号为数字和字母组合"));
			 	}else{
					callback();
				}
			 };
			return{
				loading:false,
				data:{
					company_name:"",
					license_number: "",
					license_photo: [],
					legal_representative:"",
					legal_representative_card:"",
					identity_card_photo: [],
					id:""
				},
				rule:{
					company_name:{required: true, validator: validateName},
					license_number:{required: true, validator: validatelicense_number},
					license_photo:{required: true, message:"请上传营业执照照片"},
					legal_representative:{required: true, message:"法人代表名称不能为空"},
					legal_representative_card:{required: true, type:"IDcard", message:"法人身份证号不能为空"},
					identity_card_photo:{required: true, message:"请上传身份证照片"}
				}
			}
		},
		computed:{
			buttonText(){
				return this.$route.query.type == "edite" ? "保存":"创建";
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			saveBtn(){
				var send_data = {
					company_name: this.data.company_name,
					license_number:this.data.license_number,
					license_photo: this.data.license_photo.id,
					legal_representative: this.data.legal_representative,
					legal_representative_card: this.data.legal_representative_card,
					identity_card_photo: this.data.identity_card_photo.id,
					ktv: this.$route.query.id
				}
				if(!checkForm(send_data, this.rule)) {
					return;
				}
				this.loading = true;
				console.log(send_data)
				if(this.$route.query.type == "create"){
					addKtvCorporateDetail(send_data).then(res => {
						this.loading = false;
						Toast.success("创建成功")
						this.$router.go(-1);
					}).catch(err => {
						this.loading = false;
						if(err.data.legal_representative_card){
							Toast.fail(err.data.legal_representative_card[0])
						}else{
							Toast.fail("创建失败")
						}
					})
				}else{
					send_data.id = this.data.id;
					putKtvCorporateDetail(send_data).then(res => {
						this.loading = false;
						Toast.success("修改成功")
						this.$router.go(-1);
					}).catch(err => {
						this.loading = false;
						if(err.data.legal_representative_card){
							Toast.fail(err.data.legal_representative_card[0])
						}else{
							Toast.fail("修改失败")
						}
					})
				}
			},
			init(){
				if(this.$route.query.type == 'edite'){
					var data = JSON.parse(this.$route.query.data)
					this.data.company_name = data.company_name;
					this.data.license_number = data.license_number;
					this.data.license_photo = data.license_photo;
					this.data.legal_representative = data.legal_representative;
					this.data.legal_representative_card = data.legal_representative_card;
					this.data.identity_card_photo = data.identity_card_photo;
					this.data.id = data.id
				}
			}
		},
		mounted() {
			document.title = "企业信息";
			this.init();
		}
	}
</script>

<style scoped="scoped" lang="less">
	.ICediteBox{
		height: 100%;
		position: relative;
		background: #fafafa;
		.nav{
			background: #fafafa;
			display: block;
			padding: 0.16rem 0.39rem;
			color: #979797;
		}
		.footer{
			display: flex;
			height: 80px;
			padding: 0.16rem 0.39rem;
			width: 100%;
			box-sizing: border-box;
			justify-content: flex-end;
			align-items: center;
		}
	}
</style>
