<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  data(){
		return{
			
		}
	},
	mounted() {
		console.log(this.$router)
	}
}
</script>
<style>
	body, html{
		height: 100%;
	}
	#app{
		height: 100%;
	}
</style>

