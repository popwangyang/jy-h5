<template>
	<div class="list2Box">
		<div class="van-cell van-field">
			<div class="van-cell__title van-field__label">{{label}}</div>
			<div class="van-cell__value" style="display: flex;align-items: center;justify-content: flex-start;margin-left: 0.8rem;">

			</div>
		</div>
		<div class="imgbox">
			<van-image
			  width="3.2rem"
			  fit="contain"
			  :src="src"
			  @click="ImagePreviewBtn"
			>
				<template v-slot:loading>
					<van-loading type="spinner" size="20" />
				</template>
				 <template v-slot:error>加载失败</template>
			</van-image>
			<span>
				{{name}}
			</span>
		</div>
	</div>
</template>

<script>
	import { ImagePreview } from 'vant'
	export default {
		props: {
			label: {
				type: String,
				default: "企业注册名称"
			},
			src: {
				type: String,
				default: "https://img.yzcdn.cn/vant/cat.jpeg"
			},
			name: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				imageList: [{
					url: require('@/assets/logo.png'),
					title: '你看我叼吗1',
					id: 1
				}]
			}
		},
		methods:{
			ImagePreviewBtn(){
				ImagePreview([
					this.src
				])
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.list2Box {
		background: white;
        padding-bottom: 0.26rem;
		.van-cell:not(:last-child)::after{
			border: none;
		}
		.imgbox {
			display: flex;
			align-items: flex-end;
			background: #fafafa;
			margin: 0 0.39rem;
			padding: 0.26rem 0.39rem;
			&>span:nth-child(2){
				margin-left: 0.26rem;
				
			}
		}
	}
</style>
