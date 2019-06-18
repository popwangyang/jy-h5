<template>
	<div style="height: 100%;">
		<div class="box">
			<searchComponent :placeholder="placeholder" :value="searchValue"  @input="searchChaneg" ref="search"/>
			<span class="body">
				<merchantIndexPage :searchValue="searchMerchant"  v-if="!showPageFlag" />
				<ktvIndexPage :searchValue="searchKTV" v-if="showPageFlag" />
			</span>
			<span class="tabbar">
				<van-tabbar v-model="active" active-color="#2a77f9" inactive-color="#D8D8D8" :fixed="false" @change="tabbarBtn" style="box-shadow:0px -1px 5px -1px rgba(0,0,0,0.16);">
					<van-tabbar-item icon="home-o">
						<span>商户管理</span>
						<img
						  slot="icon"
						  slot-scope="props"
						  :src="props.active ? icnMerchant.active : icnMerchant.normal"
						>
					</van-tabbar-item>
					<div class="add">
					    <div class="addBody">
							<div class="circle"></div>
							<div class="square">
								<img :src="addImg" alt="" @click="addBtn">
							</div>
						</div>
					
					</div>
					<van-tabbar-item icon="search">
						<span>KTV信息</span>
						<img
						  slot="icon"
						  slot-scope="props"
						  :src="props.active ? icnKTV.active : icnKTV.normal"
						>
				    </van-tabbar-item>
				</van-tabbar>
			</span>
		</div>
		<van-popup v-model="showPopup" position="bottom">
			<addComponent @close="addBtn"/>
		</van-popup>
	</div>
</template>
<script>
	import merchantIndexPage from '@/views/merchant/indexPage.vue'
	import ktvIndexPage from '@/views/ktv/indexPage.vue'
	import addComponent from './components/addComponent.vue'
	import searchComponent from './components/searchComponent.vue'
	export default {
		components: {
			merchantIndexPage,
			ktvIndexPage,
			addComponent,
			searchComponent
		},
		data() {
			return {
				active: 0,
				showPopup: false,
				searchKTV:"",
				searchMerchant:"",
				searchValue:"",
				icnMerchant:{
					active:require("@/assets/img/tabbar/tabbarMerchant1.png"),
					normal:require("@/assets/img/tabbar/tabbarMerchant2.png")
				},
				icnKTV:{
					active:require("@/assets/img/tabbar/tabbarKTV1.png"),
					normal:require("@/assets/img/tabbar/tabbarKTV2.png")
				},
				addImg: require("@/assets/img/tabbar/tabbarAdd.png"),
				
			}
		},
		computed: {
			title() {
				if (this.active == 0) {
					document.title = "商户管理";
					return "商户管理"
				} else if (this.active == 1) {
					document.title = "KTV";
					return "KTV"
				}
			},
			showPageFlag() {
				console.log(this.active)
				if (this.active == 0) {
					return 0;
				} else if (this.active == 1) {
					return 1;
				}
			},
			placeholder() {
				if (this.active == 0) {
					return "请输入商户名称"
				} else if (this.active == 1) {
					return "请输入KTV名称"
				}
			}
		},
		methods: {
			addBtn() {
				console.log(this.showPopup)
				this.showPopup = !this.showPopup;
			},
		
			searchChaneg(value) {
				console.log(value);
				if (this.active == 0) {
					this.searchMerchant = value;
				} else if (this.active == 1) {
					this.searchKTV = value;
				}
			},
			tabbarBtn(value){
				localStorage.setItem("active", value);
				this.$refs.search.inputValue = "";
				this.searchChaneg("");
				this.setTitle();
			},
			setTitle(){
				if(this.active == 0){
				document.title = "商户管理"
				}else{
				document.title = "KTV管理"
				}
			}
		},
		mounted() {
			this.active = parseInt(localStorage.getItem('active'));
			this.setTitle();
		}
	}
</script>

<style scoped="scoped">
	.box {
		/* background: green; */
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.title {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 1.196rem;
		background: yellow;
		font-size: 0.46rem;
	}

	.body {
		background: lightgray;
		flex: 1;
		overflow: auto;
	}

	.add {
		
		width: 30%;
		display: flex;
		justify-content: center;
		position: relative;
	}
    
	.add .addBody{
		width:1.04rem;
		height: 1.04rem;
		position: relative;
	}
	.add .addBody .circle{
		background: white;
		border-radius: 50%;
		width: 120%;
		height: 120%;
		position: absolute;
		left: -10%;
		top: -30%;
		z-index: 3;
		box-shadow:0px -1px 5px -1px rgba(0,0,0,0.16);
	}
	.add .addBody .square{
		background: white;
		width: 150%;
		height: 100%;
		position: absolute;
		top: 0;
		left: -25%;
		z-index: 4;
		text-align: center;
	}
	.add .addBody .square img{
		margin-top: -0.1rem;
		width: 0.836rem;
		height: 0.836rem;
	}
</style>
