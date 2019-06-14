<template>
	<div>
		<van-cell value="内容" />
	</div>
</template>

<script>
	export default{
		props:{
			list:{
				type:Array,
				default:[]
			}
		},
		methods: {
			OnClick(value) {
				this.$router.push({name:"home", params:{value:value}})
			}
		},
	}
</script>

<style>
</style>
