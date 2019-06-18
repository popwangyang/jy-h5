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
				type:[String, Number]
			},
			value:{
				type:[String, Number]
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
		padding: 0.16rem 0.6rem;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 2.6rem;
		box-sizing: border-box;
		.label{
			font-size:0.4rem;
			font-weight:600;
			display: block;
			margin-bottom: 0.16rem;
			overflow: hidden;
			text-overflow: ellipsis; 
			-o-text-overflow: ellipsis;
			white-space:nowrap;
			
		}
		.value{
			font-size:0.26rem;
			// font-family:PingFangSC-Regular;
			font-weight:400;
		}
		.selected{
			
			border: 1px solid blue;
		}
	}
</style>
