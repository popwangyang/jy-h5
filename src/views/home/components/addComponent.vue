<template>
	<div class="addComponentBox">
		<span class="item">
			<span class="cricle" @click="create('merchant')">
				<van-icon name="fire" size="4em"></van-icon>
			</span>
			<span>新建商户</span>
		</span>
		<span class="item">
			<span class="cricle" @click="create('ktv')">
				<van-icon name="gem" size="4em"></van-icon>
			</span>
			<span>新建KTV</span>
		</span>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			create(e){
				console.log(e)
				switch(e){
				  case 'merchant':
					  this.$router.push({ name: "merchantEdite", params: { type:"create" } })
					break;
				  case 'ktv':
					  this.$router.push({name: "ktvEdite", query: {type: "create"}});
					break;
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.addComponentBox{
		height: 6rem;
		display: flex;
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
				border: 1px solid gainsboro;
				margin-bottom: 0.26rem;
				display: flex;
				align-items: center;
				justify-content: center;
				&:active{
					background: #0a0a0a00;
				}
			}
			
		}
	}
</style>
