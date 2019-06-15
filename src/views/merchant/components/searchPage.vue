<template>
	<div class="searchPageBox">
		<span class="nav">
			<van-search v-model="searchValue" placeholder="请输入门店名称" show-action shape="round" background="#f4f4f4">
				<div class="navRight" slot="action">
				</div>
			</van-search>
		</span>
		<span class="body">
		    <van-list v-model="loading" :finished="finished" :finished-text="finishedText" @load="getList" v-if=" searchValue != ''">
					<span v-for="item in list" :key="item.id" @click="selectBtn(item)">
						<van-cell  :value="item.name" v-if="item.isSelected">
							<van-icon slot="right-icon" name="checked" color="#01cca3" ></van-icon>
						</van-cell>
						  <van-cell :value="item.name" v-else/>
						</van-cell>
					</span>
			  </van-list>
		</span>
		<span class="footer">
			<van-button class="button" size="large" @click="onClickBtn">返回</van-button>
		</span>
	</div>
</template>

<script>
	import { getKTVlist } from '@/api/ktv'
	import { setSelected, arrDeletItem } from '@/libs/util'
	export default{
		props:{
			value:{
				type:Array,
				default: () => {
					return [];
				}
			}
		},
		model:{
			prop:'value',
			event:'retunBack'
		},
		data(){
			return{
				selectArr: this.value,
				loading:false,
				finished:false,
				searchValue:"",
				list:[],
				page:1,
				page_size:30,
				total:"",
				finishedText:"没有更多了"
			}
		},
		methods: {
			onClickBtn(){
				this.$emit("ok");
			},
			selectBtn(item){
				if(!item.isSelected){
				  item.isSelected = true
				  this.selectArr.push(item)
				}else{
					item.isSelected = false
					this.selectArr.splice(this.selectArr.indexOf(item), 1);
				}
				this.$emit("retunBack", this.selectArr);
			},
			init(){
				this.list = [];
				this.total = 0;
				this.page = 1;
				this.page_size = 30;
				this.loading = false;
				this.finished = false;
				this.finishedText = "没有更多了！";
				this.getList();
			},
			getList(){
				var send_data = {
					name: this.searchValue,
					page: this.page,
					page_size: this.page_size
				}
				getKTVlist(send_data).then(res => {
					res.data.results.map(_=> _.isSelected = false);
					var arr = this.list.concat(res.data.results);
					var obj = {};
					this.list = arr.reduce((cur,next) => {
							obj[next.id] ? "" : obj[next.id] = true && cur.push(next);
							return cur;
						},[]);
					console.log(this.value)
					setSelected(this.value, this.list);
					console.log(this.list)
					this.finishedText = "没有更多了！";
					this.page++;
					this.total = res.data.count;
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
					  this.init()
					}
				},
				immediate: true
			}
		},
		mounted() {
		
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
		}
		.footer{
			display: flex;
			width: 100%;
			height: 2rem;
			align-items: center;
			justify-content: center;
			padding: 0 0.39rem;
			box-sizing: border-box;
		}
	}
</style>
