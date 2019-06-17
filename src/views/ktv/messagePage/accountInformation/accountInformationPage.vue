<template>
	<div class="accountInformationBox">
		<div class="box1" v-if="statePage == 1">
			<span class="line"></span>
			<Item1
			 label="登录账号"
			 value="5044822993@qq.com"
			/>
			<Item1
			 label="余额"
			 value="4,899.00元"
			/>
			<Item1
			 label="创建日期"
			 value="2019年6月2日  11:23:32"
			/>
			<span class="line"></span>
			<Item1
			 label="状态"
			 value="已启用"
			/>
			<Item1
			 label="性质"
			 value="试用账号"
			/>
			<span class="footer">
				<van-button plain hairline round type="default" size="small" style="margin-left: 0.3rem;" @click="stopAccontBtn">禁用账号</van-button>	
				<van-button plain hairline round type="default" size="small" style="margin-left: 0.3rem;" @click="enableAccontBtn">正式启用</van-button>
				<van-button plain hairline round type="default" size="small" style="margin-left: 0.3rem;" @click="editBtn">编辑</van-button>
			</span>
		</div>
		<div class="box2" v-if="statePage == 2">
			<EmptyComponent 
			 :text="text"
			 :title="title"
			 @eventBtn="createBtn"
			/>
		</div>
		<div class="box2" v-if="statePage == 0">
			<van-loading type="spinner" :vertical="true">加载中...</van-loading>
		</div>
		<div class="box2" v-if="statePage == 3">
			<Error
			text="数据请求异常"
			img="fail"
			/>
		</div>
	</div>
</template>

<script>
	import { getAccountDetail } from '@/api/ktv.js'
	import EmptyComponent from '@/components/EmptyComponent.vue'
	import Error from '@/components/EmptyImageComponent.vue'
	import Item1 from '@/components/list1.vue'
	import { Dialog, Toast } from 'vant';
	export default{
		components:{ Item1, EmptyComponent, Error },
		data(){
			return{
				statePage:0,
				text:"暂未创建账号",
				title:"新建试用账号",
				ktvID:""
			}
		},
		methods:{
			stopAccontBtn(){
				Dialog.confirm({
				  title: '禁用账号',
				  message: '禁用账号后，将无法登录，确定禁用吗？'
				}).then(() => {
					console.log("账号已禁用")
				   Toast.success('账号已禁用');
				}).catch(() => {
				  // on cancel
				});
			},
			enableAccontBtn(){
				this.$router.push({name:"enableAccont"})
			},
			editBtn(){
				this.$router.push({name:"editAccountInformation", query:{type:"edit", ktvID: this.$route.query.ktvID}})
			},
			createBtn(){
			    this.$router.push({name:"editAccountInformation", query:{type:"create", ktvID: this.$route.query.ktvID}})
			},
			getData(){
				var send_data = {
					code: "K",
					ktv_id: this.ktvID
				}
				this.statePage = 0;
				console.log(this.ktvID)
				getAccountDetail(send_data).then(res => {
					console.log(res)
					if(res.data.results.length > 0){
						this.statePage = 1;
						this.data.res.data.results[0];
					}else{
						this.statePage = 2;
					}
				}).catch(err => {
					this.statePage = 3;
				})
			}
		},
		mounted() {
			document.title = "账号信息";
			this.ktvID = this.$route.query.ktvID;
			this.getData();
		}
	}
</script>

<style scoped="scoped" lang="less">
	.accountInformationBox{
		height: 100%;
		background: #fafafa;
		.box1{
			height: 100%;
			position: relative;
			.line{
				display: block;
				height: 0.26rem;
				background: #fafafa;
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
		.box2{
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		
	}
	
</style>
