<template>
	<div class="list2Box">
		<div class="van-cell van-field">
			<div class="van-cell__title van-field__label">{{label}}</div>
			<div class="van-cell__value" style="display: flex;align-items: center;justify-content: flex-end;margin-left: 0.8rem;">
              {{label1}}
			</div>

		</div>
		<div class="imgbox">
			<van-icon name="goods-collect-o" size="2em"/>
			<span>
				文件名.jpg
			</span>
		</div>
	</div>

</template>

<script>
	export default {
		props: {
			label: {
				type: String,
				default: "企业注册名称"
			},
			label1: {
				type: String,
				default: "企业注册名称"
			},
			value: {
				type: String,
				default: "杭州银乐迪西溪银泰店"
			}
		},
		data() {
			return {
				imageList: [{
					url: require('../../../../../assets/logo.png'),
					title: '你看我叼吗1',
					id: 1
				}]
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.list2Box {
		background: white;
        padding-bottom: 0.26rem;
		.imgbox {
			display: flex;
			align-items: center;
			background: #fafafa;
			margin: 0 0.39rem;
			padding: 0.26rem 0.39rem;
			&>span:nth-child(2){
				margin-left: 0.26rem;
			}
		}
	}
</style>
