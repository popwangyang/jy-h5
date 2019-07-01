<template>
	<div class="ktvDetailBox">
		<span v-if="pageState == 1">
			<span class="content">
				<span class="box1">
					<span class="title">
						<div>
							<span class="text">{{data.name}}</span>
							<span>
								<van-button class="button-small"  size="mini" @click="editeBtn">编辑</van-button>
							</span>
						</div>
						<div>
							<span class="type">
								<span v-if="data.type == 1" class="lingfan">量贩</span>
								<span v-else class="yedian">夜店</span>
								<span>{{data.merchant_name}}</span>
							</span>
						</div>
					</span>
					<van-cell title="联系人" :value="data.contact"></van-cell>
					<van-cell title="联系号码" :value="data.phone_number"></van-cell>
					<van-cell title="场所编号" :value="data.serial_number"></van-cell>
					<!-- <van-cell title="包厢数" :value="data.implement_box_count"/> -->
					<van-cell title="所在地" :value="address"></van-cell>
		
				</span>
				<span class="nav">营业信息</span>
				<span class="box2">
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
							<van-icon :name="merchart" size="1.352rem"></van-icon>
						</span>
						<span class="text">企业信息</span>
					</span>
					<span class="item">
						<span class="icon" @click="goPage(2)">
							<van-icon :name="implementation" size="1.352rem"></van-icon>
						</span>
						<span class="text">实施信息</span>
					</span>
					<span class="item">
						<span class="icon" @click="goPage(3)">
							<van-icon :name="contract" size="1.352rem"></van-icon>
						</span>
						<span class="text">签约信息</span>
					</span>
					<span class="item">
						<span class="icon" @click="goPage(4)">
							<van-icon :name="account" size="1.352rem"></van-icon>
						</span>
						<span class="text">账号信息</span>
					</span>
					<span class="item">
						<span class="icon" @click="goPage(5)">
							<van-icon :name="offLine" size="1.352rem"></van-icon>
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
	import { getKTVDetail, getKTVDetail1 } from '@/api/ktv.js'
	import Error from "@/components/EmptyImageComponent.vue"
	export default{
		components: { Error },
		data(){
			return{
				Phone: require("@/assets/img/ktv/phone.png"),
				account:require("@/assets/img/ktv/account.png"),
				contract:require("@/assets/img/ktv/contract.png"),
				implementation:require("@/assets/img/ktv/implementation.png"),
				merchart:require("@/assets/img/ktv/merchart.png"),
				offLine:require("@/assets/img/ktv/offLine.png"),
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
					  this.$router.push({name:"offLineRecharge", query:{ktvID: this.data.id}})
					break;
				}
			},
			getKtvDetail(){
				this.pageState = 0;
				getKTVDetail1(this.ktvID).then(res => {
					this.pageState = 1;
					this.data = res.data;
					this.$store.commit('setKtvDate', this.data);
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
		padding-left:0.26rem;
		padding-right: 0.26rem;
		padding-top: 0.26rem;
		box-sizing: border-box;
		background: #F6F6F6;
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
				background: white;
				&>span{
					width: 100%;
					display: flex;
				}
				.title{
					background: url("../../assets/img/ktv/navImg.png") no-repeat;
					background-size:100% 100%;
					width: 100%;
					// height: 1.43rem;
					display: block;
					padding: 0.26rem;
					box-sizing: border-box;
					&>div{
						display: flex;
					    justify-content: space-between;
					}
					.text{
						font-size:15px;
						font-family:PingFangSC-Semibold;
						font-weight:600;
						color:rgba(255,255,255,1);
					}
					.type{
						font-size: 12px;
						span{
							color: white;
							font-size: 12px;
						}
						& span:nth-child(1){
							margin-right: 0.26rem;
						}
						.lingfan{
							background:linear-gradient(90deg,rgba(241,194,135,1) 0%,rgba(204,152,88,1) 100%);
							border-radius:3px;
							padding: 0px 4px;
						}
						.yedian{
							background:linear-gradient(90deg,rgba(41,241,245,1) 0%,rgba(43,196,211,1) 100%);
							border-radius:3px;
							padding: 0px 4px;
						}
					}
				}
				.phone{
					display: flex;
					background:#EFEEF3;
					height: 1.22rem;
					align-items: center;
					justify-content: center;
					font-size:14px;
					font-family:PingFangSC-Semibold;
					font-weight:600;
					color:rgba(68,68,68,1);
					&>span{
						margin-left: 0.1rem;
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
				& .time:nth-child(1){
					border-bottom: 1px solid #f6f6f6;
				}
				.time{
					padding: 0.12rem 0.39rem;
					display: flex;
					flex-direction: column;
					
					.time_title{
						font-size:10px;
						font-family:PingFangSC-Regular;
						font-weight:400;
						color:rgba(153,153,153,1);
						margin: 0.1rem 0;
					}
					.time_content{
						font-size:14px;
						font-family:PingFangSC-Regular;
						font-weight:400;
						color:rgba(68,68,68,1);
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
					width: 20%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					font-size:12px;
					font-family:PingFangSC-Semibold;
					font-weight:600;
					color:rgba(68,68,68,1);
					margin-bottom: 0.26rem;
					.icon{
						width: 1.5rem;
						height: 1.5rem;
						// background: yellow;
						display: flex;
						align-items: center;
						justify-content: center;
						&:hover{
							background: #0a0a0a00;
						}
					}
				}
			}
		}
	}
</style>
<style>
	.time:not(:last-child)::after{
	  border-bottom: 1px solid #ebedf0;
	}
</style>
