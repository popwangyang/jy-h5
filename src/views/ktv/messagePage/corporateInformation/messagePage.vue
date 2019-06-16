<template>
	<div class="ICmessageBox">
		<span v-if="pageState == 1">
			<span class="nav">
					企业信息
			</span>
			<Item1
			label="企业注册名称"
			:value="company_name"
			/>
			<Item1
			label="营业执照编号"
			:value="license_number"
			/>
			<Item2
			label="营业执照照片"
			:src="license_photo.download_url"
			:name="license_photo.name"
			/>
			<span class="nav">
					法人信息
			</span>
			<Item1
			label="法人姓名"
			:value="legal_representative"
			/>
			<Item1
			label="身份证号"
			:value="legal_representative_card"
			/>
			<Item2
			label="身份证照片"
			:src="identity_card_photo.download_url"
			:name="identity_card_photo.name"
			/>
			<span class="footer">
				<van-button plain hairline round type="default" size="small" @click="goPage('edite')">编辑</van-button>
			</span>
		</span>
		<span class="box" v-if="pageState == 0">
			<van-loading type="spinner" :vertical="true">加载中...</van-loading>
		</span>
		<span class="box" v-if="pageState == 2">
			<EmptyComponent
			 text="暂无企业信息"
			 title="创建企业信息"
			 @eventBtn="goPage('create')"
			/>
		</span>
	</div>
</template>

<script>
	import { getKtvCorporateDetail } from "@/api/ktv.js"
	import EmptyComponent from "@/components/EmptyComponent.vue"
	import Item1 from '@/components/list1.vue'
	import Item2 from '@/components/list2.vue'
	export default{
		components:{ Item1, Item2, EmptyComponent },
		data(){
			return{
				data:"",
				pageState: 0,
				company_name:"",
				identity_card_photo:"",
				legal_representative:"",
				legal_representative_card:"",
				license_number:"",
				license_photo:""
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			goPage(type){
				this.$router.push({name:"CIedite", query:{type: type, id: this.$route.query.id, data: type == 'edite' ? JSON.stringify(this.data):null}})
			},
			init(data){
				this.company_name = data.company_name;
				this.identity_card_photo = data.identity_card_photo;
				this.legal_representative = data.legal_representative;
				this.legal_representative_card = data.legal_representative_card;
				this.license_number = data.license_number;
				this.license_photo = data.license_photo;
				console.log(data)
			},
			getData(id){
				this.pageState = 0;
				getKtvCorporateDetail(id).then(res => {
					if(res.data.results.length == 0){
						this.pageState = 2;
					}else{
						this.pageState = 1;
						this.data = res.data.results[0]
						this.init(res.data.results[0])
					}
				})
			}
		},
		mounted() {
			document.title = "企业信息";
			this.getData(this.$route.query.id);
		}
	}
</script>

<style scoped="scoped" lang="less">
	.ICmessageBox{
		height: 100%;
		position: relative;
		background: #fafafa;
		.box{
			display: flex;
			height: 100%;
			align-items: center;
			justify-content: center;
		}
		.nav{
			background: #fafafa;
			display: block;
			padding: 0.16rem 0.39rem;
			color: #979797;
		}
		.footer{
			display: flex;
			height: 50px;
			padding: 0.16rem 0.39rem;
			width: 100%;
			position: absolute;
			bottom: 0;
			left: 0;
			background: white;
			box-sizing: border-box;
			justify-content: flex-end;
			align-items: center;
		}
	}
</style>
