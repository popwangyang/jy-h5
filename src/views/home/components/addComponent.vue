<template>
	<div class="addComponentBox">
		<span class="item">
			<span class="cricle" @click="create('merchant')">
				<van-icon :name="addMerchantImg" size="6em"></van-icon>
			</span>
			<span>新建商户</span>
		</span>
		<span class="item">
			<span class="cricle" @click="create('ktv')">
				<van-icon :name="addKTVImg" size="6em"></van-icon>
			</span>
			<span>新建KTV</span>
		</span>
		<van-icon name="cross" class="close" color="#999999" size="0.6rem" @click="closeBtn"/>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				addMerchantImg: require("@/assets/img/tabbar/newCreateMerchant.png"),
				addKTVImg: require("@/assets/img/tabbar/newCreateKTV.png")
			}
		},
		methods:{
			create(e){
				console.log(e)
				switch(e){
				  case 'merchant':
					  this.$router.push({ name: "merchantEdite", query: { type:"create" } })
					break;
				  case 'ktv':
					  this.$router.push({name: "ktvEdite", query: {type: "create"}});
					break;
				}
			},
			closeBtn(){
				this.$emit("close")
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.addComponentBox{
		height: 4.94rem;
		display: flex;
		position: relative;
		.item{
			width: 50%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.cricle{
				width: 2rem;
				height: 2rem;
				border-radius: 50%;

				display: flex;
				align-items: center;
				justify-content: center;
				color: #444444;
				&:active{
					background: #0a0a0a00;
				}
			}
			
		}
		.close{
			position: absolute;
			left: 50%;
			margin-left: -0.3rem;
			bottom: 0.6rem;
		}
	}
</style>
