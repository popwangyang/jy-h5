<template>
	<div class="forwardContractBox">
		<!-- <van-nav-bar
		  title="往期合同"
		  left-arrow
		  @click-left="onClickLeft"
		/> -->
		<span class="content">
			<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
		        <van-list
		            v-model="loading"
		            :finished="finished"
		            @load="onLoad"
		            :offset="0"
					finished-text="没有更多了"
		        >
		            <div class="list-item">
						<van-cell 
						v-for="item in list" :key="item" 
						title="合同编号" 
						label="2019-6-3"
						value="已终止"
						is-link
						@click="goDetail"
						/>
		            </div>
		        </van-list>
		    </van-pull-refresh>
		</span>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list: [],
                loading: false,   //是否处于加载状态
                finished: false,  //是否已加载完所有数据
                isLoading: false,   //是否处于下拉刷新状态
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			onLoad() {      //上拉加载
                setTimeout(() => {
                    for (let i = 0; i < 15; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    this.loading = false;
                    if (this.list.length >= 60) {
                        this.finished = true;
                    }
                }, 1000);
            },
            onRefresh() {       //下拉刷新
                setTimeout(() => {
                    this.finished = false;
                    this.isLoading = false;
                    this.list = []
                    this.onLoad()
                }, 500);
            },
			createBtn(){
				// this.$router.push({name:"merchantEdite"})
			},
			goDetail(){
			   this.$router.push({name:"contractInformation", query:{type:"forwardContract"}})
			}
		},
		mounted() {
			document.title = "往期合同";
		}
	}
</script>

<style scoped="scoped" lang="less">
	.forwardContractBox{
		height: 100%;
		position: relative;
		background: #fafafa;
		display: flex;
		flex-direction: column;
		.content{
			flex: 1;
			// background: yellow;
			overflow: auto;
		}
	}
</style>
