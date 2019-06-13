<template>
	<div class="contractBox">
		<!-- <van-nav-bar
		  title="合同信息"
		  left-arrow
		  @click-left="onClickLeft"
		/> -->
		<Item1
		 label="合同编号"
		 value="xxx"
		/>
		<Item1
		 label="套餐名称"
		 value="xxx"
		/>
		<Item1
		 label="包厢数量"
		 value="100"
		/>
		<Item1
		 label="合同起始日期"
		 value="2018-10-1"
		/>
		<Item1
		 label="结算起始时间"
		 value="2018-10-1"
		/>
		<Item1
		 label="合同状态"
		 value="合约中"
		/>
		<Item1
		 label="到账状态"
		 value="已到账"
		/>
		<Item2
		 label="合同文件"
		 label1="2018-10-1 11:23"
		 value="已到账"
		/>
		<Item2
		 label="补充合同"
		 label1="2018-10-1 11:23"
		 value="已到账"
		/>
		<span class="footer" v-if="showFooter">
			<van-button plain hairline round type="default" size="small" @click="moreBtn" style="margin-left: 0.26rem;">更多</van-button>
			<van-button plain hairline round type="default" size="small" @click="goPage" style="margin-left: 0.26rem;">补充</van-button>
			<van-button plain hairline round type="default" size="small" @click="goPage" style="margin-left: 0.26rem;">编辑</van-button>
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
	import Item1 from "./components/list1.vue"
	import Item2 from "./components/list2.vue"
	export default{
		components:{ Item1, Item2 },
		data(){
			return{
				moreFlage:false,
				showFooter:true
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			moreBtn(){
				this.moreFlage = true;
			},
			goPage(){
				
			},
			addBtn(){
				this.$router.push({name:"addContract"})
			},
			checkBtn(){
				this.$router.push({name:"forwardContract"})
			},
			stopBtn(){
				
			}
		},
		mounted() {
			document.title = "合同信息";
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
