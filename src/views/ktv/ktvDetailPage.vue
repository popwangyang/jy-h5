<template>
	<div class="ktvDetailBox">
		<!-- <van-nav-bar
		  title="场所详情"
		  left-text="返回"
		  left-arrow
		  @click-left="onClickLeft"
		/> -->
		<span class="content">
			<span class="box1">
				<span class="title">
					<span class="text">{{data.name}}</span>
					<span>
						<van-button type="info" size="small" @click="editeBtn">编辑</van-button>
					</span>
				</span>
				<span class="type">
					<span v-if="data.type == 1">量贩式</span>
					<span v-else>夜店式</span>
					<span>商户A</span>
				</span>
				<span class="detail">
					<span class="item">
						<van-icon name="manager" />
						<span>{{data.contact}}</span>
					</span>
					<span class="item">
						<van-icon name="phone" />
						<span>{{data.phone_number}}</span>
					</span>
				</span>
				<span class="address">
					<span class="address_left">
						<van-icon name="location"></van-icon>
					</span>
					<span class="address_right">
						{{address}}
					</span>
				</span>
			</span>
			<span class="box2">
				<span class="title">营业信息</span>
				<span class="time">
					<span class="time_title">
						开业时间
					</span>
					<span class="time_content">
						{{data.opening_hours}}
					</span>
				</span>
				<span class="time">
					<span class="time_title">
						营业时间
					</span>
					<span class="time_content">
						{{Ytime}}
					</span>
				</span>
			</span>
			<span class="box3">
				<span class="item">
					<span class="icon" @click="goPage(1)">
						<van-icon name="browsing-history" size="3.6em"></van-icon>
					</span>
					<span class="text">企业信息</span>
				</span>
				<span class="item">
					<span class="icon" @click="goPage(2)">
						<van-icon name="browsing-history" size="3.6em"></van-icon>
					</span>
					<span class="text">实施信息</span>
				</span>
				<span class="item">
					<span class="icon" @click="goPage(3)">
						<van-icon name="browsing-history" size="3.6em"></van-icon>
					</span>
					<span class="text">签约信息</span>
				</span>
				<span class="item">
					<span class="icon" @click="goPage(4)">
						<van-icon name="browsing-history" size="3.6em"></van-icon>
					</span>
					<span class="text">账号信息</span>
				</span>
				<span class="item">
					<span class="icon" @click="goPage(5)">
						<van-icon name="browsing-history" size="3.6em"></van-icon>
					</span>
					<span class="text">线下充值</span>
				</span>
			</span>
		</span>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				data:""
			}
		},
		computed:{
			address(){
				var result = this.data.province+","+this.data.city+","+this.data.county+","+this.data.address;
				return result;
			},
			Ytime(){
				var obj = eval('(' + this.data.business_hours + ')')
				console.log(obj)
				if(!!obj){
				  if(obj.flag == 0){
				  	return "全部时间段";
				  }else{
				  	var str = obj.start +"-"+ obj.end+"  ";
				  	obj.days.map(item => {
				  		switch (item){
				  			case 1:
				  			  str += "星期一,";
				  				break;
				  			case 2:
				  			  str += "星期二,";
				  				break;
				  			case 3:
				  			  str += "星期三,";
				  				break;
				  			case 4:
				  			  str += "星期四,";
				  				break;
				  			case 5:
				  			  str += "星期五,";
				  				break;
				  			case 6:
				  			  str += "星期六,";
				  				break;
				  			case 7:
				  			  str += "星期日,";
				  				break;
				  		}
				  	})
				  return str.substr(0, str.length-1);;
				  }
				}
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			editeBtn(){
				this.$router.push({name:"ktvEdite", params:{type:"edite"}})
			},
			goPage(index){
				switch(index){
					case 1:
					  this.$router.push({name:"CImessage"})
					break;
					case 2:
					  this.$router.push({name:"Implementation"})
					break;
					case 3:
					  this.$router.push({name:"contractInformation"})
					break;
					case 4:
					  this.$router.push({name:"Implementation"})
					break;
					case 5:
					  this.$router.push({name:"Implementation"})
					break;
				}
			}
		},
		mounted() {
			document.title= "场所详情";
			this.data = JSON.parse(this.$route.query.item);
			console.log(this.data)
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
			background: white;
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
						font-size: 16px;
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
						font-size: 12px;
					}
				}
			}
			.box2{
				background: white;
				.title{
					padding: 0.12rem 0.39rem;
					background: gainsboro;
				}
				& .time:nth-child(2){
					border-bottom: 1px solid #f6f6f6;
				}
				.time{
					padding: 0.12rem 0.39rem;
					display: flex;
					flex-direction: column;
					.time_title{
						font-size: 12px;
						margin: 0.1rem 0;
					}
					.time_content{
						font-size: 12px;
						padding: 0.1rem 0;
					}
				}
			}
			.box3{
				padding: 0.26rem 0rem;
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;
				background: white;
				border-top: 0.16rem solid gainsboro;
				flex-direction: row;
				.item{
					width: 25%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					font-size: 14px;
					margin-bottom: 0.26rem;
					.icon{
						width: 1.5rem;
						height: 1.5rem;
						// background: yellow;
						display: flex;
						align-items: center;
						justify-content: center;
						border-radius: 50%;
						border: 1px solid gainsboro;
						margin-bottom: 0.26rem;
						&:hover{
							background: #0a0a0a00;
						}
					}
				}
			}
		}
	}
</style>
