<template>
	<div class="ktvDetailBox">
		<van-nav-bar
		  title="场所详情"
		  left-text="返回"
		  left-arrow
		/>
		<span class="content">
			<span class="box1">
				<span class="title">
					<span class="text">杭州银乐迪西溪银泰店</span>
					<span>
						<van-button type="info" size="mini">编辑</van-button>
					</span>
				</span>
				<span class="type">
					<span>量贩式</span>
					<span>商户A</span>
				</span>
				<span class="detail">
					<span class="item">
						<van-icon name="manager" />
						<span>王五</span>
					</span>
					<span class="item">
						<van-icon name="phone" />
						<span>137 4837 2233</span>
					</span>
				</span>
				<span class="address">
					<span class="address_left">
						<van-icon name="location"></van-icon>
					</span>
					<span class="address_right">
						杭州市西湖区文一西路182号西溪银泰城F4-102
						杭州市西湖区文一西路182号西溪银泰城F4-102
						杭州市西湖区文一西路182号西溪银泰城F4-102
					</span>
				</span>
			</span>
			<span class="box2">
				<span class="title">营业信息</span>
				<span class="time">
					<span>
						开业时间
					</span>
					<span>
						2018年12月24日
					</span>
				</span>
				<span class="time">
					<span>
						营业时间
					</span>
					<span>
						7:00-22:00，周一、周二、周三、周四、周五
					</span>
				</span>
			</span>
			<span class="box3"></span>
		</span>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.ktvDetailBox{
		height: 100%;
		background: yellow;
		display: flex;
		flex-direction: column;
		.content{
			flex: 1;
			background: yellowgreen;
			&>span{
				display: flex;
				// padding-left:0.39rem;
				// padding-right: 0.39rem;
				flex-direction: column;
			}
			.box1{
				padding-left:0.39rem;
				padding-right: 0.39rem;
				background: white;
				padding-top: 0.5rem;
				padding-bottom: 0.4rem;
				&>span{
					width: 100%;
					display: flex;
				}
				.title{
					
					align-items: center;
					justify-content: space-between;
					.text{
						font-size: 0.42rem;
					}
				}
				.type{
					margin: 0.2rem 0;
					color: gainsboro;
					& span:nth-child(1){
						margin-right: 0.26rem;
					}
				}
				.detail{
					align-items: center;
					.item{
						margin-right: 0.5rem;
						display: flex;
						align-items: center;
						&>span{
							margin-left: 0.2rem;
						}
					}
				}
				.address{
					margin-top: 0.26rem;
					&>span:nth-child(2){
						margin-left: 0.2rem;
					}
				}
			}
			.box2{
				background: white;
				.title{
					padding: 0.12rem 0.39rem;
					background: gainsboro;
				}
				.time{
					padding: 0.12rem 0.39rem;
					.title{
						// font-size: 
					}
				}
			}
		}
	}
</style>
