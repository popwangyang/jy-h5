<template>
	<div class="ktvEditeBox">
		<span class="nav">
			KTV信息
		</span>
		<van-field
		v-model="data.ktvName"
		label="场所名称"
		placeholder="请输入"
		input-align="right"
		/>
       <SelectComponent 
		label="场所类型"
		placeholder="请选择"
		type="default"
		:columns="columns"
		v-model="data.ktvType"
		/>
		<span class="nav">
			联系人信息
		</span>
		 <van-field
			v-model="data.personName"
			label="联系人名称"
			placeholder="请输入"
			input-align="right"
		/>
		 <van-field
			v-model="data.phone"
			label="手机号"
			placeholder="请输入"
			input-align="right"
		/>
		 <van-field
			v-model="data.tel"
			label="场所电话"
			placeholder="请输入"
			input-align="right"
		/>
		<span class="nav">
			联系人信息
		</span>
		<SelectComponent 
			label="开业时间"
			placeholder="请选择"
			:columns="[]"
			type="date"
			v-model="data.Ktime"
		/>
		<SelectComponent 
			label="营业状态"
			placeholder="请选择"
			type="default"
			:columns="ktvState"
			v-model="data.state"
		/>
		<van-cell title="营业时间" :value="data.Ytime | YtimeFilter" @click="goBusinessHours"/>
		  <van-icon slot="right-icon" name="is-link" v-show="data.Ytime == '请选择'"></van-icon>
		</van-cell>
		<SelectComponent 
			label="地址"
			placeholder="请选择"
			type="map"
			:columns="[]"
			v-model="data.address"
		/>
		<van-field
			v-model="data.detailAddress"
			type="textarea"
			placeholder="请输入详细地址"
			rows="2"
			style="border: 1px solid #f6f6f6;"
		 />
		 <span class="box" v-if="YtimeFlage">
			 <YTimePage v-model="data.Ytime" @btn="goBusinessHours"/>
		 </span>
		 <span class="footer">
		   <van-button  size="large" class="button" @click="handlerFrom('edite')">保存</van-button>
		 </span>
	</div>
</template>

<script>
	import { setKtvDetail } from '@/api/ktv.js'
	import { setAddress } from '@/libs/util.js'
	import SelectComponent from '@/components/SelectComponent.vue'
	import YTimePage from "./businessHoursPage.vue"
	export default{
		components:{ SelectComponent, YTimePage },
		data(){
			return{
				title:"新建KTV",
				show2:false,
				YtimeFlage:false,
				columns: [ "量贩式", "夜场" ],
				ktvState: ["营业", "倒闭"],
				data:{
					ktvName:"",
					ktvType:"",
					personName:"",
					phone:"",
					tel:"",
					Ktime:"",
					state:"",
					Ytime:"",
					address:"",
					detailAddress:""
				}
			}
		},
		filters:{
			YtimeFilter(obj){
				if(obj == ""){
					return "请选择"
				}
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
		},
		methods:{
			init(){
				if(this.$route.query.type==="edite"){
					var data = JSON.parse(this.$route.query.data);
					this.data.ktvName = data.name;
					this.data.ktvType = data.type === 1 ? "量贩式":"夜总会";
					this.data.personName = data.contact;
					this.data.phone = data.phone_number;
					this.data.tel = data.place_contact;
					this.data.Ktime = data.opening_hours;
					this.data.Ytime = eval("("+data.business_hours+")");
					this.data.state = data.business_state == 1 ? "营业":"倒闭"
					this.data.address = setAddress(data);
					this.data.detailAddress = data.address;
				}
			},
			goBusinessHours(){
				this.YtimeFlage = !this.YtimeFlage;
			},
			handlerFrom(type){
			  var send_data = {
					name: this.data.ktvName,
					type: this.data.ktvType == "量贩式" ? "1":"2",
					contact: this.data.personName,
					address: this.data.detailAddress,
					place_contact: this.data.tel,
					phone_number: this.data.phone,
					opening_hours: this.data.Ktime,
					business_hours: JSON.stringify(this.data.Ytime),
					business_state: this.data.state == "营业" ? 1:2,
					province_code: this.data.address[0].code,
					city_code: this.data.address[1].code,
					county_code: this.data.address[2].code
				}
				if(type == "edite"){
					send_data.id = JSON.parse(this.$route.query.data).id
				console.log(send_data);
					setKtvDetail(send_data).then(res => {
						 console.log(res)
					})
				}
			}
		},
		mounted() {
			console.log(this.$route.query.type)
			if(this.$route.query.type == 'edite'){
				document.title= "编辑KTV";
			}else{
				document.title= "新建KTV";
			}
			this.init()
		}
	}
</script>

<style scoped="scoped" lang="less">
	.ktvEditeBox{
		height: 100%;
		background: #fafafa;
		position: relative;
		.nav{
			background: #fafafa;
			display: block;
			padding: 0.16rem 0.39rem;
			color: #979797;
		}
		.box{
			display: flex;
			height: 100%;
			background: yellow;
			position: fixed;
			z-index: 200;
			width: 100%;
			left: 0;
			top: 0;
		}
		.footer{
			display: block;
			margin: 0.26rem 0;
			padding: 0 0.39rem;
			box-sizing: border-box;
			background: #f2f2f25b;
		}
	}
</style>
