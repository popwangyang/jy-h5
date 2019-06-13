<template>
	<div class="ImplementationBox">
		<!-- <van-nav-bar
		  title="实施信息"
		  left-arrow
		  @click-left="onClickLeft"
		/> -->
		<span class="nav">
		  	企业信息
		</span>
		<Item1
		 label="vod品牌"
		 value="xxxx"
		/>
		<Item1
		 label="系统版本号"
		 value="v2.0.0"
		/>
		<Item1
		 label="vod场所ID"
		 value="2223323"
		/>
		<Item1
		 label="实施包厢数"
		 value="56"
		/>
		<span class="box3">
			<span class="item">
				<span class="icon" @click="clickBtn(1)">
					<van-icon name="browsing-history" size="3.6em"></van-icon>
				</span>
				<span class="text">升级系统</span>
			</span>
			<span class="item">
				<span class="icon" @click="clickBtn(2)">
					<van-icon name="browsing-history" size="3.6em"></van-icon>
				</span>
				<span class="text">升级记录</span>
			</span>
			<span class="item">
				<span class="icon" @click="clickBtn(3)">
					<van-icon name="browsing-history" size="3.6em"></van-icon>
				</span>
				<span class="text">编辑</span>
			</span>
			<span class="item">
				<span class="icon" @click="clickBtn(4)">
					<van-icon name="browsing-history" size="3.6em"></van-icon>
				</span>
				<span class="text">新增实施</span>
			</span>
			<span class="item">
				<span class="icon" @click="clickBtn(5)">
					<van-icon name="browsing-history" size="3.6em"></van-icon>
				</span>
				<span class="text">实施记录</span>
			</span>
		</span>
		<van-dialog
		  v-model="UpgradeSystemFlage"
		  title="升级系统"
		  show-cancel-button
		>
		<span class="dialogFlage">
		  <span class="title">当前版本：V2.3.0 </span>
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
	</div>
</template>

<script>
	import Item1 from './components/list1.vue'
	import { Dialog } from 'vant';
	export default{
		components:{ Item1 },
		data(){
			return{
				UpgradeSystemFlage:false,
				value:"",
				keyboardshow: false
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			clickBtn(index){
				switch(index){
					case 1:
					  this.UpgradeSystemBtn();
					break;
					case 2:
					  this.$router.push({name: "UpgradeRecord"})
					break;
					case 3:
					  this.$router.push({name: "edit"})
					break;
					case 4:
					  this.$router.push({name: "edit"})
					break;
					case 5:
					  this.$router.push({name: "ImplementationRecord"})
					break;
				}
			},
			UpgradeSystemBtn(){
				this.UpgradeSystemFlage = true;
			},
			onFocus(){
				this.keyboardshow = true;
				// evt.preventDefault(); 
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
			}
		},
		mounted() {
			document.title = "实施信息";
		}
	}
</script>

<style scoped="scoped" lang="less">
	.ImplementationBox{
		height: 100%;
		position: relative;
		background: #fafafa;
		.nav{
			background: #fafafa;
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
			border-top: 0.16rem solid gainsboro;
			flex-direction: row;
			.item{
				width: 25%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-bottom: 0.26rem;
				font-size: 14px;
				.icon{
					width: 1.5rem;
					height: 1.5rem;
					// background: yellow;
					display: flex;
					align-items: center;
					justify-content: center;
					border-radius: 50%;
					border: 1px solid gainsboro;
					margin-bottom: 0.26rem;
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
				padding: 0.3rem 0;
			}
			.input{
				width: 5rem;
				height: 2rem;
				// background: yellow;
				
			}
		}
	}
</style>
