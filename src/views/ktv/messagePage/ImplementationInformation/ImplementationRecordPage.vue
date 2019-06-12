<template>
	<div class="ImplementationRecordBox">
		<van-nav-bar
		  title="实施记录"
		  left-arrow
		  @click-left="onClickLeft"
		/>
		<span class="content">
			<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
		        <van-list
		            v-model="loading"
		            :finished="finished"
		            @load="onLoad"
		            :offset="10"
					finished-text="没有更多了"
		        >
		            <div class="list-item">
		                <!-- <van-cell v-for="item in list" :key="item" :title="item + 'sss'" /> -->
						<van-cell 
						v-for="item in list" :key="item" 
						title="vod品牌" 
						label="2019-6-3 11:23:32" 
						is-link
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
                }, 500);
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
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.ImplementationRecordBox{
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
