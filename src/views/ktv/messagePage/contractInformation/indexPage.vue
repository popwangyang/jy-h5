<template>
	<div class="contractBox">
		<span class="content" v-if="pageState == 1">
			<span class="body">
				<Item1
				 label="合同编号"
				 :value="data.number"
				/>
				<Item1
				 label="套餐名称"
				 :value="data.package_name"
				/>
				<Item1
				 label="包厢数量"
				 :value="data.box_count.toString()"
				/>
				<span class="line"></span>
				<Item1
				 label="合同起始日期"
				 :value="data.begin_date"
				/>
<!-- 只有账号为正式启用状态，并且有合同生效时才展示 , account_status 为1时是账号为试用阶段，为2时账号为启用阶段-->
				<Item1
				 label="结算起始日期"
				 v-if="$store.state.ktv.ktvData.account_status == 2"
				 :value="$store.state.ktv.ktvData.chargeable_time"
				/>
				<span class="line"></span>
				<Item1
				 label="合同状态"
				 :value="data.state | stateFilter"
				 color="#01CCA3"
				/>
				<Item1
				 label="到账状态"
				 :value="data.charge_manage.state | charge_manageStateFilter"
				/>
				<span class="line"></span>
				<Upload v-model="data.annex" :isShow='true' title="合同文件"/>
				<Upload v-model="item.annex" :isShow='true' title="补充合同" v-for="(item, index) in data.accessory_contract" :key="item.id">
					<van-button size="mini" type="primary" class="button-small" v-if="index == 0 && !editDisabled " @click="goPage(1)">编辑</van-button>
				</Upload>
			</span>
			<span class="footer" v-if="showFooter">
				<van-button plain hairline round type="default" size="small" @click="moreBtn" style="margin-left: 0.26rem;">更多</van-button>
				<van-button plain hairline round type="default" size="small" @click="goPage(1)" style="margin-left: 0.26rem;">补充</van-button>
				<van-button plain hairline round type="default" size="small" @click="goPage(2)" style="margin-left: 0.26rem;" :disabled="editDisabled">编辑</van-button>
			</span>
		</span>
		<span v-if="pageState == 2" class="box">
			<EmptyComponent
			  text="暂无签约合同"
			  title="新建合同"
				@eventBtn="addBtn"
			/>
			<span @click="checkBtn">
				查看往期
			</span>
		</span>
		<span class="box" v-if="pageState == 0">
			<van-loading type="spinner" :vertical="true">加载中...</van-loading>
		</span>
		<van-popup 
		v-model="moreFlage"
		position="bottom"
		>
			<span class="moreBox">
				<span class="moreBoxItem" @click="addBtn">
					新增合同
				</span>
				<span class="moreBoxItem" @click="checkBtn">
					查看往期
				</span>
				<span class="moreBoxItem" @click="stopBtn">
					终止合同
				</span>
				<div style="height: 0.26rem;background: gainsboro;"></div>
				<span class="moreBoxItem" style="border: none;" @click="moreFlage = false">
					取消
				</span>
			</span>
		</van-popup>
	</div>
</template>

<script>
	import Upload from '@/components/upload/uploadRelease'
	import { Toast, Dialog, Notify } from "vant"
	import {ktvContractList, stopContract} from "@/api/ktv.js"
	import Item1 from "@/components/list1.vue"
	import Item2 from "@/components/list2.vue"
	import EmptyComponent from "@/components/EmptyComponent.vue"
	import { checkWeekDay } from '@/libs/util'
	export default{
		components:{ Item1, Item2, EmptyComponent, Upload },
		data(){
			return{
				pageState:0,
				empty:false,
				moreFlage:false,
				showFooter:true,
				data:"",
			}
		},
		computed: {
			canAddContract() {
				return this.data.state == 1 ? false:true 
			},
			editDisabled() {  // 合同信息已到账状态，编辑按钮禁用掉；
				var flag = false;
				if(this.data.charge_manage.state == 2 || this.data.state == 3){
					flag = true;
				}else{
					flag = false;
				}
				return flag;
			}
		},
		filters: {
			filterArray: function(value) {
				return [value]
			},
			stateFilter: function(value) {
				var result = ""
				switch(parseInt(value)){
				  case 1:
					 result = "合同中";
					break;
				  case 2:
					 result = "已过期";
					break;
				  case 3:
					 result = "合同终止";
					break;
				}
				return result;
			},
			charge_manageStateFilter: function(value){
				return value == 1 ? "未到账":"已到账";
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			moreBtn(){
				this.moreFlage = true;
			},
			goPage(index){
				if(index == 1){
					Notify({
					  message: '请前往pc端修改, 创建补充合同',
					  duration: 2000,
					  background: '#1989fa'
					});
					return;
					this.$router.push({name:"addContract", query:{type:"supplement", ktvID: this.$route.query.ktvID, contractID: this.data.id}})
				}else{
					this.$router.push({name:"addContract", query:{type:"edite", ktvID: this.$route.query.ktvID, number: this.data.number}})
				}
			},
			addBtn(index){
				if(!this.canAddContract){
					Toast("请终止当前合同")
					this.moreFlage = false;
					return;
				}
				  this.$router.push({name:"addContract", query:{type:"create", ktvID: this.$route.query.ktvID}})
			},
			checkBtn(){
				this.$router.push({name:"forwardContract", query:{ ktvID: this.$route.query.ktvID }})
			},
			stopBtn(){
				this.moreFlage = false;
				if(!checkWeekDay('星期一')){
					Notify({
					  message: '当前不能终止合同，请在周一进行该操作',
					  duration: 1000,
					  background: 'red'
					});
					return;
				}
				Dialog.confirm({
				  title: '提示',
				  message: '确定要终止该合同？'
				}).then(() => {
				  this.stopContract();
				}).catch(() => {
				  // on cancel
				});
			},
			stopContract(){
				Toast.loading({
					duration: 0, // 持续展示 toast
                    forbidClick: true, // 禁用背景点击
				})
				var send_data ={
					state: 3,
					id: this.data.id
				}
				stopContract(send_data).then(res => {
					Toast.clear();
					Toast.success("合同已终止");
					this.data.state = 3;
					setTimeout(() => {
					  this.$router.go(-1);
					}, 500)
				}).catch(err => {
					Toast.clear();
					Toast.fail("操作失败");
				})
			},
			getDate(){
				var send_data ={
					ktv: this.$route.query.ktvID,
					state: 1
				}
				if(!this.showFooter){
					send_data.state = '';
					send_data.number = this.number;
				}
				this.pageState = 0;
				ktvContractList(send_data).then(res => {
					console.log(res)
					if(res.data.results.length > 0){
						this.pageState = 1;
						this.data = res.data.results[0];
						this.data.accessory_contract.reverse();
					}else{
						this.pageState = 2;
					}
				})
			}
		},
		mounted() {
			document.title = "合同信息";
			if(this.$route.query.type && this.$route.query.type == "forwardContract" ){
				this.showFooter = false;
				this.number = this.$route.query.number;
			}
			this.getDate();
			
		}
	}
</script>

<style scoped="scoped" lang="less">
	.contractBox{
		height: 100%;
		position: relative;
		background: #fafafa;
		.content{
			height: 100%;
			position: relative;
			background: #fafafa;
			display: flex;
			flex-direction: column;
			.body{
				flex: 1;
				overflow: auto;
			}
			.footer{
				display: flex;
				height: 50px;
				padding: 0.16rem 0.39rem;
				width: 100%;
				background: white;
				box-sizing: border-box;
				justify-content: flex-end;
				align-items: center;
			}
		}
		.box{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 100%;
			&>span{
				font-size:12px;
				font-family:PingFangSC-Regular;
				font-weight:400;
				color:rgba(68,121,239,1);
				margin-top: 0.26rem;
			}
		}
		.moreBox{
			display: flex;
			background: #fafafa;
			flex-direction: column;
			.moreBoxItem{
			  display: flex;
			  align-items: center;
			  justify-content: center;
			  border-bottom: 1px solid gainsboro;
			  height: 1.2rem;
			  font-size: 0.4rem;
			  &:active{
				 background: #2323212e;
			  }
			}
		}
		
	}
</style>
