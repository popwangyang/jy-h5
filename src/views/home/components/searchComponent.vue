<template>
	<div class="searchBox">
		<span class="nav">
			<van-search v-model="inputValue" :placeholder="placeholder" show-action shape="round">
				<div class="navRight" slot="action">
					<van-icon :name="imgUrl" size="2em" @click="personBtn"/>
				</div>
			</van-search>
		</span>
		<van-popup v-model="showPopup" position="bottom">
			<span class="PopupBox">
				<span @click="adminBtn">管理员</span>
				<span @click="signOut">退出</span>
			</span>
		</van-popup>
	</div>
</template>

<script>
	import { Dialog } from 'vant';
	export default{
		props:{
			placeholder:{
				type:String,
				default:"请输入"
			},
			value:{
				type:String,
				default:""
			}
		},
		data(){
			return{
				showPopup:false,
				inputValue: this.value,
				imgUrl: require("../../../assets/wode.png")
			}
		},
		watch: {
			inputValue(newValue, oldValue) {
				this.$emit("input", this.inputValue);
			}
		},
		methods:{
			personBtn(){
				this.showPopup = true;
			},
			adminBtn(){
				this.showPopup = false;
			},
			signOut(){
				this.showPopup = false;
				setTimeout(() => {
					Dialog.confirm({
						message: '确定退出当前账号？'
					}).then(() => {
						// on confirm
					}).catch(() => {
						// on cancel
					});
				}, 200)
			}
		},
		mounted(){
	
		}
	}
</script>

<style scoped="scoped" lang="less">
	.searchBox{
		.nav {
			display: block;
			border-bottom: 1px solid #F6F6F6;
			// border-top: 1px solid gainsboro;
			.van-search__content{
				background-color:#EFEEF3;
				.van-cell{
					.van-cell__value{
						.van-field__body{
							.van-field__control{
									font-size: 10px !import;
								}
							}
					}
				}
			}
		}
		.navRight {
			height: 100%;
			line-height: 100%;
			background:rgba(255,255,255,1);
            box-shadow:0px 0px 6px 2px rgba(0,0,0,0.05);
			border-radius: 50%;
		}
		.PopupBox{
			display: block;
			height: 2.6rem;
			background: white;
			font-size:14px;
			font-family:PingFangSC-Regular;
			font-weight:400;
			color:rgba(119,119,119,1);
			&>span{
				display: flex;
				height: 1.3rem;
				align-items: center;
				justify-content: center;
				&:active{
					background: #0a0a0a33;
				}
			}
			&>span:nth-child(1){
				border-bottom: 1px solid #F6F6F6;
			}
		}
			
	}
</style>
