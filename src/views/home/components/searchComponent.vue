<template>
	<div class="searchBox">
		<span class="nav" @click="goSearch">
			<van-search :placeholder="placeholder" show-action shape="round" background="#f4f4f4" :readonly="true">
				<div class="navRight" slot="action">
					<van-icon name="user-circle-o" size="2em" />
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
			}
		},
		methods:{
			goSearch(){
				this.$router.push({name:"search", query:{placeholder: this.placeholder}})
			}
		}
		
	}
</script>

<style scoped="scoped" lang="less">
	.searchBox{
		.nav {
			display: block;
			border-bottom: 1px solid gainsboro;
			border-top: 1px solid gainsboro;
		}
		.navRight {
			height: 100%;
			/* background: yellow; */
			margin-top: 0.1rem;
			line-height: 100%;
		}
		.van-search__content{
			background-color:white;
		}
	}
</style>
