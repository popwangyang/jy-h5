<template>
	<div class="priceComponentBox" :style="{ borderColor: color, color: color }">
		<span class="label">{{label}}元</span>
		<span class="value">赠送{{value}}元</span>
	</div>
</template>

<script>
	export default{
		props:{
			label:{
				type:String,
				default:"13"
			},
			value:{
				type:String,
				default: "2"
			},
			isSelected:{
				type:Boolean,
				default:false
			}
		},
		computed:{
			color(){
				if(this.isSelected){
					return "#4479EF";
				}else{
					return "#444444";
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.priceComponentBox{
		display: flex;
		border-radius:4px;
		border: 1px solid black;
		padding: 0.16rem 0.7rem;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		
		.label{
			font-size:16px;
			// font-family:PingFangSC-Semibold;
			font-weight:600;
			display: block;
			margin-bottom: 0.16rem;
		}
		.value{
			font-size:10px;
			// font-family:PingFangSC-Regular;
			font-weight:400;
		}
		.selected{
			
			border: 1px solid blue;
		}
	}
</style>
