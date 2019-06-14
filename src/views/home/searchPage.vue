<template>
	<div class="searchPageBox">
		<span class="nav">
			<van-search v-model="searchValue" :placeholder="placeholder" show-action shape="round" background="#f4f4f4">
				<div class="navRight" slot="action">
				</div>
			</van-search>
		</span>
		<span class="body">
		    <van-list v-model="loading" :finished="finished" :finished-text="finishedText" @load="getList" v-if=" searchValue != ''">
			    <van-cell v-for="item in list" :key="item.id" :value="item.name" @click="onClick(item)"/>
			</van-list>
		</span>
	</div>
</template>

<script>
	import { getKTVlist } from '@/api/ktv'
	export default{
		data(){
			return{
				loading:false,
				finished:false,
				placeholder:"",
				searchValue:"",
				list:[],
				page:1,
				page_size:30,
				total:"",
				finishedText:"没有更多了"
			}
		},
		methods: {
			onClick(value) {
				this.$store.commit("clearKtv");
				this.$store.commit("setKtvList", [value]);
				this.$store.commit("setKtvCount", 0);
				this.$store.commit("setSearchValue", this.searchValue);
				this.$router.push({name:"home"})
			},
			init(){
				this.list = [];
				this.total = 0;
				this.page = 1;
				this.page_size = 30;
				this.loading = false;
				this.finished = false;
				this.finishedText = "没有更多了！";
			},
			getList(){
				console.log(this.searchValue);
				var send_data = {
					name: this.searchValue,
					page: this.page,
					page_size: this.page_size
				}
				getKTVlist(send_data).then(res => {
					this.finishedText = "没有更多了！";
					this.page++;
					this.total = res.data.count;
					this.list = this.list.concat(res.data.results);
					this.loading = false;
					if(this.list.length == 0){
						this.finishedText = "暂无搜索内容！";
					}
					if (this.list.length >= this.total) {
					  this.finished = true;
					}
				})
			}
		},
		watch: {
			searchValue:{
				handler(newValue, oldValue) {
					if(newValue != ""){
					  console.log("pppp")
					  this.init()
					}
				},
				immediate: true
			}
		},
		mounted() {
			this.placeholder = this.$route.query.placeholder
		}
	}
</script>

<style scoped="scoped" lang="less">
	.searchPageBox{
		display: flex;
		flex-direction: column;
		height: 100%;
		background: floralwhite;
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
		.body{
			flex: 1;
			overflow: auto;
			background: yellow;
		}
	}
</style>
