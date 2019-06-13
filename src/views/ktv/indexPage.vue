<template>
	<div class="box">
		<span class="content">
			<List :search="searchValue"/>
		</span>
	</div>
</template>

<script>
	import List from './components/ListComponents.vue'
	export default{
		components:{ List },
		data(){
			return{
				searchValue:"",
				data:[]
			}
		},
		methods:{
			onSearch(){
				
			},
			onUser(){
				
			}
		},
		mounted() {
			console.log("ktvIndex")
		}
	}
</script>

<style scoped="scoped">
	.box{
		background: #f4f4f4;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.nav{
		display: block;
		background: #42B983;
		/* height: 1.3rem; */
		border-bottom: 1px solid gainsboro;
		border-top: 1px solid gainsboro;
	}
    .navRight{
		height: 100%;
		/* background: yellow; */
		margin-top: 0.1rem;
		line-height: 100%;
	}
	.content{
		background: ghostwhite;
		/* height: 14rem; */
		flex: 1;
    overflow-x: scroll;
	}
</style>
