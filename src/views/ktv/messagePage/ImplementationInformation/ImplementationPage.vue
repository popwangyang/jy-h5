<template>
	<div class="ImplementationBox">
		<span class="box" v-if="pageState == 1">
			  <Item1
			  label="vod品牌"
			  :value="data.vod_brand"
			  />
			  <Item1
			  label="系统版本号"
			  :value="data.vod_version"
			  />
			  <Item1
			  label="vod场所ID"
			  :value="data.vod_ktv_id"
			  />
			  <Item1
			  label="实施包厢数"
			  :value="data.implement_box_count"
			  />
			  <span class="box3">
			  	<span class="item">
			  		<span class="icon" @click="clickBtn(1)">
			  			<van-icon :name="upgrade" size="1.352rem"></van-icon>
			  		</span>
			  		<span class="text">升级系统</span>
			  	</span>
			  	<span class="item">
			  		<span class="icon" @click="clickBtn(2)">
			  			<van-icon :name="upgradeRecord" size="1.352rem"></van-icon>
			  		</span>
			  		<span class="text">升级记录</span>
			  	</span>
			  	<span class="item">
			  		<span class="icon" @click="clickBtn(3)">
			  			<van-icon :name="editImplement" size="1.352rem"></van-icon>
			  		</span>
			  		<span class="text">编辑</span>
			  	</span>
			  	<span class="item">
			  		<span class="icon" @click="clickBtn(4)">
			  			<van-icon :name="addImplement" size="1.352rem"></van-icon>
			  		</span>
			  		<span class="text">新增实施</span>
			  	</span>
			  	<span class="item">
			  		<span class="icon" @click="clickBtn(5)">
			  			<van-icon :name="implementRecord" size="1.352rem"></van-icon>
			  		</span>
			  		<span class="text">实施记录</span>
			  	</span>
			  </span>
			  <van-dialog
			  	v-model="UpgradeSystemFlage"
			  	title="升级系统"
			  	show-cancel-button
					@confirm="confirm"
					@cancel="cancel"
			  >
			  <span class="dialogFlage">
			  	<span class="title">当前版本：{{data.vod_version}} </span>
			  	<span class="input">
			  		<van-field style="background: #f5f5f9;border-radius: 6px;" 
			  		v-model="value" 
			  		placeholder="请输入升级版本号"
			  		@focus="onFocus"
			  		/>
			  	</span>
			  </span>
			  </van-dialog>
			  <van-number-keyboard
			  	:show="keyboardshow"
			  	theme="custom"
			  	extra-key="."
			  	close-button-text="完成"
			  	@blur="keyboardshow = false"
			  	@input="onInput"
			  	@delete="onDelete"
			  	:z-index="10000"
			  />
		</span>
		<span class="box1" v-if="pageState == 0">
			<van-loading type="spinner" :vertical="true">加载中...</van-loading>
		</span>
		<span class="box1" v-if="pageState == 2">
			<EmptyComponent
			text="暂无实施信息"
			title="新建实施"
			@eventBtn="createBtn"
			/>
		</span>
	</div>
</template>

<script>
	import EmptyComponent from '@/components/EmptyComponent.vue'
	import { getImplementDetail, upVod } from "@/api/ktv.js"
	import Item1 from '@/components/list1.vue'
	import { Dialog, Toast } from 'vant';
	export default{
		components:{ Item1, EmptyComponent },
		data(){
			return{
				addImplement: require("@/assets/img/ktv/addImplement.png"),
				editImplement: require("@/assets/img/ktv/editImplement.png"),
				implementRecord: require("@/assets/img/ktv/implementRecord.png"),
				upgradeRecord: require("@/assets/img/ktv/upgradeRecord.png"),
				upgrade: require("@/assets/img/ktv/upgrade.png"),
				pageState:0,
				UpgradeSystemFlage:false,
				value:"",
				keyboardshow: false,
				id:"",
				ktvID:"",
				data:{
					vod_ktv_id:"",
					vod_version:"",
					vod_brand:"",
					implement_box_count:"",
				}
			}
		},
		methods:{
			confirm(){
				console.log(this.value)
				var vod_ktv ={
					new_version: this.value,
					original_version: this.data.vod_version,
					vod_ktv: this.ktvID,
				}
				upVod(vod_ktv).then(res => {
					Toast.success("升级成功")
					this.getData(this.ktvID);
				}).catch(err => {
					Toast.fail("升级失败")
				})
			},
			cancel(){
				this.value = ""
			},
			createBtn(){
				this.$router.push({name: "edit", query:{ktvID: this.ktvID, type: 'create'}})
			},
			onClickLeft(){
				this.$router.go(-1)
			},
			clickBtn(index){
				switch(index){
					case 1:
					  this.UpgradeSystemBtn();
					break;
					case 2:
					  this.$router.push({name: "UpgradeRecord", query:{ktvID: this.ktvID}})
					break;
					case 3:
					 this.data.id = this.id;
					  this.$router.push({name: "edit", query:{type:"edite", data: JSON.stringify(this.data), ktvID: this.ktvID}})
					break;
					case 4:
					  this.$router.push({name: "edit", query:{ktvID: this.ktvID, type: 'create'}})
					break;
					case 5:
					  this.$router.push({name: "ImplementationRecord", query:{ktvID: this.ktvID }})
					break;
				}
			},
			UpgradeSystemBtn(){
				this.UpgradeSystemFlage = true;
			},
			onFocus(){
				this.keyboardshow = true;
				 document.activeElement.blur();
			},
			onInput(e){
				this.value += e;
				console.log(e)
			},
			onDelete(){
				if(this.value.length > 0){
					this.value = this.value.substr(0, this.value.length - 1);
				}
			},
			getData(id){
				this.pageState = 0;
				getImplementDetail(id).then(res => {
					if(res.data.results.length > 0){
						this.id = res.data.results[0].id;
						this.data.vod_brand = res.data.results[0].brand;
						this.data.vod_version = res.data.results[0].vod_version;
						this.data.vod_ktv_id= res.data.results[0].vod_ktv_id;
						this.data.implement_box_count= res.data.results[0].implement_box_count+"";
						this.pageState = 1;
					}else{
						this.pageState = 2;
					}
				})
			}
		},
		mounted() {
			document.title = "实施信息";
			this.ktvID = this.$route.query.id;
			this.getData(this.ktvID);
		}
	}
</script>

<style scoped="scoped" lang="less">
	.ImplementationBox{
		height: 100%;
		.box{
			height: 100%;
			display: block;
			width: 100%;
			position: relative;
			background: #f6f6f6;
			 .nav{
			 	background: #f6f6f6;
			 	display: block;
			 	padding: 0.16rem 0.39rem;
			 	color: #979797;
			 }
			 .box3{
			 	padding: 0.26rem 0;
			 	display: flex;
			 	justify-content: flex-start;
			 	flex-wrap: wrap;
			 	background: white;
			 	margin-top: 0.26rem;
			 	flex-direction: row;
			 	.item{
			 		width: 20%;
			 		display: flex;
			 		flex-direction: column;
			 		justify-content: center;
			 		align-items: center;
			 		font-size:12px;
			 		font-family:PingFangSC-Semibold;
			 		font-weight:600;
			 		color:rgba(68,68,68,1);
			 		margin-bottom: 0.26rem;
			 		.icon{
			 			display: flex;
			 			align-items: center;
			 			justify-content: center;
			 			&:hover{
			 				background: #0a0a0a00;
			 			}
			 		}
			 	}
			 }
			 .dialogFlage{
			 	display: flex;
			 	flex-direction: column;
			 	align-items: center;
			 	.title{
			 		font-size: 0.3rem;
			 		padding: 0.2rem 0;
					color: #888888;
			 	}
			 	.input{
			 		width: 5rem;
			 		height: 1.6rem;
			 		// background: yellow;
			 		
			 	}
			 }
		}
		.box1{
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			position: relative;
			background: #fafafa;
		}
	}
</style>
<style>
	.ImplementationBox .van-dialog{
		top:30%;
	}
</style>