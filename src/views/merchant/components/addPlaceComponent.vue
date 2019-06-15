<template>
	<div class="addPlaceBox">
		<span class="nav">
			<van-search
			  v-model="searchValue"
			  placeholder="请输入门店名称"
			  show-action
			  @search="onSearch"
			  background="#f4f4f4"
			>
			<div class="navRight" slot="action">
			</div>
			</van-search>
		</span>
		<span class="body">
			<span class="item" @click="selectBtn(item)" v-for="item in list" :key="item.id">{{item.name}}</span>
		</span>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				data:{},
				searchValue:'',
				list:[
					{
						id:1,
						name:"门店A"
					},
					{
						id:2,
						name:"门店B"
					},
					{
						id:3,
						name:"门店C"
					}
				]
			}
		},
		methods:{
			onSearch(){
				
			},
			selectBtn(item){
				console.log(item)
				this.$router.push({name:"merchantEdite"})
			}
		},
		mounted() {
			this.data = this.$route.params.data;
			console.log(this.data);
			document.title = "选择门店";
		}
	}
</script>

<style scoped="scoped" lang="less">
	.addPlaceBox{
		display: flex;
		flex-direction: column;
		background: #f4f4f4;
		height: 100%;
		.nav{
			display: block;
			border-bottom: 1px solid gainsboro;
			border-top: 1px solid gainsboro;
			.navRight{
				height: 100%;
				/* background: yellow; */
				margin-top: 0.1rem;
				line-height: 100%;
			}
		}
		.van-search__content{
			background-color:white;
			border-radius: 6px;
		}
		.body{
			flex: 1;
			// background: yellow;
			overflow: auto;
			.item{
				display: block;
				padding: 0.3rem 0.39rem;
				background: white;
				border-bottom: 1px solid gainsboro;
				&:active{
					background: #0a0a0a00;
				}
			}
			
		}
	}
</style>
