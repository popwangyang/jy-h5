<template>
	<div class="ktvDetailBox">
		<span v-if="pageState == 1">
			<span class="content">
				<span class="box1">
					<span class="title">
						<span class="text">{{data.name}}</span>
						<span>
							<van-button  size="small" @click="editeBtn" style="background:linear-gradient(180deg,rgba(54,210,254,1) 0%,rgba(50,156,238,1) 100%);border-radius:16px;color: white;">编辑</van-button>
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
				<span class="line"></span>
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
		</span>
		<span class="box" v-if="pageState == 0">
			<van-loading type="spinner" :vertical="true">加载中...</van-loading>
		</span>
		<span class="box" v-if="pageState == 2">
			<Error
			text="数据请求异常"
			img="fail"
			/>
		</span>
	</div>
</template>

<script>
	import { getKTVDetail } from '@/api/ktv.js'
	import Error from "@/components/EmptyImageComponent.vue"
	export default{
		components: { Error },
		data(){
			return{
				pageState:0,
				data:"",
				ktvID:""
			}
		},
		computed:{
			address(){
				var result = this.data.province+","+this.data.city+","+this.data.county+","+this.data.address;
				return result;
			},
			Ytime(){
				var obj = eval('(' + this.data.business_hours + ')')
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
			editeBtn(){
				this.$router.push({name:"ktvEdite", query:{type:"edite", data:JSON.stringify(this.data)}})
			},
			goPage(index){
				switch(index){
					case 1:
					  this.$router.push({name:"CImessage", query:{id: this.data.id}})
					break;
					case 2:
					  this.$router.push({name:"Implementation", query:{id: this.data.id}})
					break;
					case 3:
					  this.$router.push({name:"contractInformation", query:{ktvID: this.data.id}})
					break;
					case 4:
					  this.$router.push({name:"accountInformation", query:{ktvID: this.data.id}})
					break;
					case 5:
					  this.$router.push({name:"offLineRecharge"})
					break;
				}
			},
			getKtvDetail(){
				this.pageState = 0;
				getKTVDetail(this.ktvID).then(res => {
					this.pageState = 1;
					this.data = res.data;
				}).catch(err => {
					this.pageState = 2;
				})
			}
		},
		mounted() {
			document.title= "场所详情";
			this.ktvID = this.$route.query.ktvID;
			this.getKtvDetail();
		}
	}
</script>

<style scoped="scoped" lang="less">
	.ktvDetailBox{
		height: 100%;
		display: flex;
		flex-direction: column;
		.box{
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		.content{
			flex: 1;
			background: white;
			&>span{
				display: flex;
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
					font-size: 12px;
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
						font-size: 14px;
						&>span{
							margin-left: 0.2rem;
						}
					}
				}
				.address{
					margin-top: 0.26rem;
					&>span:nth-child(2){
						line-height: 100%;
						margin-left: 0.2rem;
						font-size: 14px;
					}
				}
			}
			.box2{
				background: white;
				.title{
					padding: 0.12rem 0.39rem;
					background: #F6F6F6;
					font-size: 12px;
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
