<template>
	<div style="height: 100%;">
		<div class="box">
		<!-- 	<van-nav-bar
			  :title="title"
			/> -->
			<span class="body">
				<merchantIndexPage v-show="!showPageFlag"/>
				<ktvIndexPage v-show="showPageFlag"/>
			</span>
		</div>
		<van-tabbar
		  v-model="active"
		  active-color="#07c160"
		  inactive-color="#000"
		>
		  <van-tabbar-item icon="home-o">商户管理</van-tabbar-item>
		  <div class="add">
			<van-icon 
			  class="icon"
			  name="add-o"
			  slot="icon"
			  size="3em"
			  style="background: white;border-radius: 50%;"
			  @click="addBtn"
			  />
		  </div>
		  <van-tabbar-item icon="search">KTV信息</van-tabbar-item>
		</van-tabbar>
		<van-popup v-model="showPopup" position="bottom">
		 <addComponent/>
		</van-popup>
	</div>
</template>

<script>
	import merchantIndexPage from '@/views/merchant/indexPage.vue'
	import ktvIndexPage from '@/views/ktv/indexPage.vue'
	import addComponent from './components/addComponent.vue'
	export default {
		components:{ 
			merchantIndexPage,
		    ktvIndexPage,
			addComponent
		},
		data() {
			return {
				active: 0,
				showPopup:false
			}
		},
		computed:{
			title(){
				if(this.active == 0){
					document.title = "商户管理";
				  return "商户管理"
				}else if(this.active == 1){
					document.title = "KTV";
				  return "KTV"
				}
			},
			showPageFlag(){
				console.log(this.active)
				if(this.active == 0){
					return 0;
				}else if(this.active == 1){
					return 1;
				}
			}
		},
		methods:{
			addBtn(){
				this.showPopup = true;
			}
		},
		mounted(){
			document.title = "商户管理"
		}
	}
</script>

<style scoped="scoped">
.box{
	/* background: green; */
	height: 100%;
	display: flex;
	flex-direction: column;
	}
.title{
	display: flex;
	align-items: center;
	justify-content: center;
	height: 1.196rem;
	background: yellow;
	font-size: 0.46rem;
}
.body{
	background: lightgray;
	flex: 1;
	overflow: auto;
}
.add{
	/* background: yellow; */
	width: 30%;
	display: flex;
	justify-content: center;
	position: relative;
}
.add .icon{
	position: absolute;
	top:-8px;
}
</style>
