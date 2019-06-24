<template>
  <div id="app">
			<router-view v-if="!$route.meta.keepAlive"/>
			<keep-alive>
				<router-view v-if="$route.meta.keepAlive"/>
			</keep-alive>
  </div>
</template>
<script>
import  "@/assets/css/public.css"
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

