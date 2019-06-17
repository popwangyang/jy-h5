<template>
	<div class="ICediteBox">
		<span class="nav">
		  	企业信息
		</span>
		<van-field
		  v-model="data.company_name"
		  clearable
		  label="企业注册名称"
		  placeholder="请输入"
		  input-align="right"
		/>
		<van-field
		  v-model="data.license_number"
		  clearable
		  label="营业执照编号"
		  placeholder="请输入"
		  input-align="right"
		/>
		<Item3
		 v-model="data.license_photo.id"
		 title="营业执照照片"
		 :src="data.license_photo.src"
		/>
		<span class="nav">
		  	法人信息
		</span>
		<van-field
		  v-model="data.legal_representative"
		  clearable
		  label="法人姓名"
		  placeholder="请输入"
		  input-align="right"
		/>
		<van-field
		  v-model="data.legal_representative_card"
		  clearable
		  label="身份证号"
		  placeholder="请输入"
		  input-align="right"
		/>
		<Item3
		 title="身份证照片"
		 v-model="data.identity_card_photo.id"
		 :src="data.identity_card_photo.src"
		/>
		<span class="footer">
			<!-- <van-button plain hairline round type="default" size="small" @click="goPage">编辑</van-button> -->
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
	import { Toast } from "vant"
	import { addKtvCorporateDetail, putKtvCorporateDetail } from "@/api/ktv.js"
	import Item3 from '@/components/list3.vue'
	export default{
		components:{ Item3 },
		data(){
			return{
				loading:false,
				data:{
					company_name:"",
					license_number: "",
					license_photo:{
						id:"",
						src:""
					},
					legal_representative:"",
					legal_representative_card:"",
					identity_card_photo:{
						id:"",
						src:""
					},
					id:""
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
				this.loading = true;
				var send_data = {
					company_name: this.data.company_name,
					license_number:this.data.license_number,
					license_photo: this.data.license_photo.id,
					legal_representative: this.data.legal_representative,
					legal_representative_card: this.data.legal_representative_card,
					identity_card_photo: this.data.identity_card_photo.id,
					ktv: this.$route.query.id
				}
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
					this.data.license_photo = {
						id: data.license_photo.id+"",
						src: data.license_photo.download_url
					};
					this.data.legal_representative = data.legal_representative;
					this.data.legal_representative_card = data.legal_representative_card;
					this.data.identity_card_photo = {
						id: data.identity_card_photo.id+"",
						src: data.identity_card_photo.download_url
					};
					this.data.id = data.id
						console.log(this.data)
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
			position: absolute;
			bottom: 0;
			left: 0;
			box-sizing: border-box;
			justify-content: flex-end;
			align-items: center;
		}
	}
</style>
