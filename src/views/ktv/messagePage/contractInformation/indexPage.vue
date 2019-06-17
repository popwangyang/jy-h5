<template>
	<div class="contractBox">
		<span v-if="pageState == 1">
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
			<Item2
			 label="合同文件"
			 :name="data.annex.name"
			 :src="data.annex.download_url"
			/>
			<Item2
			v-for="item in data.accessory_contract"
			:key="item.id"
			label="补充合同"
			:name="item.annex.name"
			:src="item.annex.download_url"
			/>
			
			<span class="footer" v-if="showFooter">
				<van-button plain hairline round type="default" size="small" @click="moreBtn" style="margin-left: 0.26rem;">更多</van-button>
				<van-button plain hairline round type="default" size="small" @click="goPage(1)" style="margin-left: 0.26rem;">补充</van-button>
				<van-button plain hairline round type="default" size="small" @click="goPage(2)" style="margin-left: 0.26rem;">编辑</van-button>
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
				<span class="moreBoxItem" @click="addBtn" v-if="canAddContract">
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
	import { Toast, Dialog } from "vant"
	import {ktvContractList, stopContract} from "@/api/ktv.js"
	import Item1 from "@/components/list1.vue"
	import Item2 from "@/components/list2.vue"
	import EmptyComponent from "@/components/EmptyComponent.vue"
	export default{
		components:{ Item1, Item2, EmptyComponent },
		data(){
			return{
				pageState:0,
				empty:false,
				moreFlage:false,
				showFooter:true,
				data:""
			}
		},
		computed: {
			canAddContract() {
				return this.data.state == 1 ? false:true 
			}
		},
		filters: {
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
				var result = "";
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
					this.$router.push({name:"addContract", query:{type:"supplement", ktvID: this.$route.query.ktvID, contractID: this.data.id}})
				}else{
					this.$router.push({name:"addContract", query:{type:"edite", ktvID: this.$route.query.ktvID}})
				}
			},
			addBtn(index){
				  this.$router.push({name:"addContract", query:{type:"create", ktvID: this.$route.query.ktvID}})
			},
			checkBtn(){
				this.$router.push({name:"forwardContract"})
			},
			stopBtn(){
				this.moreFlage = false;
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
				this.pageState = 0;
				ktvContractList(send_data).then(res => {
					console.log(res)
					if(res.data.results.length > 0){
						this.pageState = 1;
						this.data = res.data.results[0]
					}else{
						this.pageState = 2;
					}
				})
			}
		},
		mounted() {
			document.title = "合同信息";
			this.getDate();
			if(this.$route.query.type && this.$route.query.type == "forwardContract" ){
				this.showFooter = false;
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.contractBox{
		height: 100%;
		position: relative;
		background: #fafafa;
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
