<template>
	<div style="height: 100%;">
		<div class="box">
			<searchComponent :placeholder="placeholder" :value="searchValue" />
			<span class="body">
				<merchantIndexPage v-if="!showPageFlag" />
				<ktvIndexPage v-if="showPageFlag" />
			</span>
			<span class="tabbar">
				<van-tabbar v-model="active" active-color="#07c160" inactive-color="#000" :fixed="false">
					<van-tabbar-item icon="home-o">商户管理</van-tabbar-item>
					<div class="add">
						<van-icon class="icon" name="add-o" slot="icon" size="3em" style="background: white;border-radius: 50%;" @click="addBtn" />
					</div>
					<van-tabbar-item icon="search">KTV信息</van-tabbar-item>
				</van-tabbar>
			</span>
		</div>
		<van-popup v-model="showPopup" position="bottom">
			<addComponent />
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
				showPopup: false
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
			},
			searchValue() {
				console.log("pppp")
				if (!!this.$route.params.searchValue) {
					return this.$route.params.searchValue
				} else {
					return "";
				}
			}
		},
		methods: {
			addBtn() {
				this.showPopup = true;
			}
		},
		mounted() {
			document.title = "商户管理"
			console.log("商户管理")
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
		/* background: yellow; */
		width: 30%;
		display: flex;
		justify-content: center;
		position: relative;
	}

	.add .icon {
		position: absolute;
		top: -8px;
	}
</style>
