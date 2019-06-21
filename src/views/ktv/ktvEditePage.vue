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
		:required="rule.ktvName.required"
		/>
       <SelectComponent 
		label="场所类型"
		placeholder="请选择"
		type="default"
		:required="true"
		:columns="columns"
		v-model="data.ktvType"
		/>
		<span class="nav">
			联系人信息
		</span>
		 <van-field
			v-model="data.personName"
			label="联系人名称"
			required
			placeholder="请输入"
			input-align="right"
		/>
		 <van-field
			v-model="data.phone"
			label="手机号"
			required
			placeholder="请输入"
			input-align="right"
		/>
		 <van-field
			v-model="data.tel"
			label="场所电话"
			required
			placeholder="请输入"
			input-align="right"
		/>
		<span class="nav">
			营业信息
		</span>
		<SelectComponent 
			label="开业时间"
			placeholder="请选择"
			:columns="[]"
			:required="true"
			type="date"
			v-model="data.Ktime"
		/>
		<SelectComponent 
			label="营业状态"
			placeholder="请选择"
			type="default"
			:required="true"
			:columns="ktvState"
			v-model="data.state"
		/>
		<van-cell title="营业时间" :value="data.Ytime | YtimeFilter" is-link  @click="goBusinessHours" v-show="data.Ytime == ''"/>
		<van-cell title="营业时间" :value="data.Ytime | YtimeFilter"   @click="goBusinessHours" v-show="data.Ytime != ''"/>
		<SelectComponent 
			label="地址"
			placeholder="请选择"
			type="map"
			:required="true"
			:columns="[]"
			v-model="data.address"
		/>
		<van-field
			v-model="data.detailAddress"
			type="textarea"
			placeholder="请输入详细地址"
			rows="2"
			:required="true"
			style="border: 1px solid #f6f6f6;"
		 />
		 <span class="box" v-if="YtimeFlage">
			 <YTimePage v-model="data.Ytime" @btn="goBusinessHours"/>
		 </span>
		 <span class="footer">
		   <van-button :loading="loading" loading-type="spinner"  loading-text="加载中..."  size="large" class="button" @click="handlerFrom('edite')" v-if="isEdite">保存</van-button>
		   <van-button :loading="loading" loading-type="spinner"  loading-text="加载中..."  size="large" class="button" @click="handlerFrom('create')" v-else>创建</van-button>
		 </span>
	</div>
</template>

<script>
	import { Error } from '@/libs/error.js'
	import { Toast } from "vant"
	import { setKtvDetail, creatKtvDetail } from '@/api/ktv.js'
	import { setAddress, checkForm } from '@/libs/util.js'
	import SelectComponent from '@/components/SelectComponent.vue'
	import YTimePage from "./businessHoursPage.vue"
	export default{
		components:{ SelectComponent, YTimePage },
		data(){
			const validateKtvName = (value, callback) => {
                if (value === '') {
                    callback(new Error("场所名字不能为空"));
                } else if(value.length > 20) {
                    callback(new Error("场所名字应小于20个字"));
                }else{
					callback();
				}
            };
			const validatePhone = (value, callback) => {
				 var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
			    if (value === '') {
			        callback(new Error("手机号不能为空"));
			    } else if(!myreg.test(value)){
					callback(new Error("手机号格式不正确"));
				}else{
					callback();
				}
			};
			const validateTel = (value, callback) => {
				var myreg = /^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/;
			    if (value === '') {
			        callback(new Error("场所电话不能为空"));
			    } else if(myreg.test(value)){
					callback(new Error("场所电话号码不正确"));
				}else{
					callback();
				}
			};
			return{
				error:"",
				isEdite:false,
				YtimeFlage:false,
				columns: [ "量贩式", "夜场" ],
				ktvState: ["正常", "停业","暂停营业"],
				loading:false,
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
				},
				rule:{
					ktvName: { required: true, validator: validateKtvName },
					ktvType: { required: true, message: "场所类型不能为空"},
					personName: { required: true, message: "联系人名称不能为空" },
					phone: { required: true, validator: validatePhone},
					tel: { required: true, validator: validateTel},
					Ktime: { required: true, message: "请选择开业时间"},
					state: { required: true, message: "营业状态不能为空"},
					Ytime: { required: true, message: "营业时间不能为空"},
					address: { required: true, message: "区域地质不能为空"},
					detailAddress: {required: true, message: "详细地址不能为空" }
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
					this.data.state = data.business_state == 1 ? "正常": data.business_state == "2" ? "停业":"暂停营业"
					this.data.address = setAddress(data);
					this.data.detailAddress = data.address;
				}
			},
			goBusinessHours(){
				this.YtimeFlage = !this.YtimeFlage;
			},
			handlerFrom(type){
				if(!checkForm(this.data, this.rule)) {
					return;
				}
			  var send_data = {
					name: this.data.ktvName,
					type: this.data.ktvType == "量贩式" ? "1":"2",
					contact: this.data.personName,
					address: this.data.detailAddress,
					place_contact: this.data.tel,
					phone_number: this.data.phone,
					opening_hours: this.data.Ktime,
					business_hours: JSON.stringify(this.data.Ytime),
					business_state: this.data.state == "正常" ? 1: this.data.state == "停业" ? 2:3,
					province_code: this.data.address[0].code,
					city_code: this.data.address[1].code,
					county_code: this.data.address[2].code
				}
				this.loading = true;
				console.log(send_data);
				if(type == "edite"){
					send_data.id = JSON.parse(this.$route.query.data).id
					setKtvDetail(send_data).then(res => {
						this.loading = false;
						Toast.success('保存成功');
						console.log(res)
						setTimeout(() => {
							this.$router.go(-1);
						}, 500)
					}).catch(err => {
						this.loading = false;
						Toast.fail('保存失败');
					})
				}else{
					creatKtvDetail(send_data).then(res => {
						this.loading = false;
						Toast.success('创建成功');
						console.log(res)
						setTimeout(() => {
							this.$router.go(-1);
						}, 500)
					}).catch(err => {
						this.loading = false;
						Toast.fail('创建失败');
					})
				}
			}
		},
		mounted() {
			console.log(this.$route.query.type)
			if(this.$route.query.type == 'edite'){
				this.isEdite = true;
				document.title= "编辑KTV";
			}else{
				this.isEdite = false;
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
