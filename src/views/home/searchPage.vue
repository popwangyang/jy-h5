<template>
	<div class="searchPageBox">
		<span class="nav">
			<van-search :placeholder="placeholder" show-action shape="round" background="#f4f4f4">
				<div class="navRight" slot="action">
					<van-icon name="user-circle-o" size="2em" />
				</div>
			</van-search>
		</span>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				placeholder:""
			}
		},
		mounted() {
			this.placeholder = this.$route.query.placeholder
		}
	}
</script>

<style scoped="scoped" lang="less">
	.searchPageBox{
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
	}
</style>
