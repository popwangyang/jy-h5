<template>
	<div class="searchPageBox">
		<span class="nav">
			<van-search v-model="searchValue" :placeholder="placeholder" show-action shape="round" background="#f4f4f4">
				<div class="navRight" slot="action">
				</div>
			</van-search>
		</span>
		<span class="body">
			<van-cell v-for="item in list" :key="item" :value="item" @click="onClick(item)"/>
		</span>
	</div>
</template>

<script>
	import { getKTVlist } from '@/api/ktv'
	export default{
		data(){
			return{
				placeholder:"",
				searchValue:"",
				list:[],
				page:1,
				page_size:30
			}
		},
		methods: {
			onClick(value) {
				this.$router.push({name:"home", params:{value:value}})
			},
			getList(){
				console.log(this.searchValue);
				var send_data = {
					name:this.searchValue,
					
				}
				// getKTVlist()
			}
		},
		watch: {
			searchValue:{
				handler(newValue, oldValue) {
					this.getList()
				}
			},
			immediate:true
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
		.van-search__content{
			background-color:white;
		}
	}
</style>
