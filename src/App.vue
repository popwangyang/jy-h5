<template>
  <div id="app">
		<transition v-if="!$route.meta.keepAlive">
			<router-view/>
		</transition>
		<transition v-if="$route.meta.keepAlive">
			<keep-alive>
				{console.log(0000)}
				<router-view/>
			</keep-alive>
		</transition>
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
	}
	#app{
		height: 100%;
	}
</style>

