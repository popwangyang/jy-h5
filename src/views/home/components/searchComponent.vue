<template>
	<div class="searchBox">
		<span class="nav">
			<van-search v-model="inputValue" :placeholder="placeholder" show-action shape="round">
				<div class="navRight" slot="action">
					<van-icon :name="imgUrl" size="2em" />
				</div>
			</van-search>
		</span>
	</div>
</template>

<script>
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
		
			
	}
</style>
