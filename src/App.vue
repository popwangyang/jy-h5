<template>
  <div id="app">
			<router-view v-if="!$route.meta.keepAlive"/>
			<keep-alive>
				<router-view v-if="$route.meta.keepAlive"/>
			</keep-alive>
  </div>
</template>
<script>
export default {
  data(){
		return{
			
		}
	},
	mounted() {
		console.log(this.$router, this.$route.meta.keepAlive)
	}
}
</script>
<style>
	body, html{
		height: 100%;
		font-size: 14px;
		font-family:PingFangSC-Regular;
	}
	.line{
		display: block;
		height: 0.26rem;
		background: #F6F6F6;
	}
	.button{
		background:linear-gradient(180deg,rgba(54,210,254,1) 0%,rgba(50,156,238,1) 100%);
		color: white !important;
		border-radius:4px !important;
	}
	#app{
		height: 100%;
	}
</style>

