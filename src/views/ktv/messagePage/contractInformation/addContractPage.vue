<template>
	<div class="addContractBox">
		<span  v-if="pageState == 1">
			<van-field
				v-model="data.number"
				label="合同编号"
				placeholder="请输入"
				input-align="right"
				v-if="!isSupplement"
			/>
			<SelectComponent 
				label="套餐名称"
				placeholder="请选择"
				type="default"
				:columns="ktvRechargeList | listFilter"
				v-model="recharge_packageName"
				v-if="!isSupplement"
				
				/>
			<van-field
				v-model="data.box_count"
				label="包厢数量"
				placeholder="请输入"
				input-align="right"
			/>
			<span class="line"></span>
			<SelectComponent 
				label="合同起始日期"
				placeholder="请选择"
				type="date"
				:columns="[]"
				v-model="data.begin_date"
				v-if="!isSupplement"
				/>
			<!-- <SelectComponent 
				label="开始扣费日期"
				placeholder="请选择"
				type="date"
				:columns="[]"
				v-model="data.end_date"
				:disabled="readOnly"
				/> -->
			<span class="line"></span>
			<Upload :maxCount="maxCount" v-model="data.annex" title="合同文件">
				
			</Upload>
			<span class="footer1" v-if="isSupplement">
				<span @click="clickBtn">创建</span>
				<span @click="cancelBtn">取消</span>
			</span>
			<span class="footer" v-else>
				<van-button class="button" size="large" :loading="loading" @click="clickBtn">保存</van-button>
			</span>
		</span>
		<span class="box" v-if="pageState == 0">
			<van-loading type="spinner" :vertical="true">加载中...</van-loading>
		</span>
	</div>
</template>

<script>
	import { Error } from '@/libs/error.js'
	import { checkForm } from '@/libs/util.js'
	import Upload from '@/components/upload/uploadRelease'
	import { Toast } from "vant"
	import { addKtvContract, ktvRechargeList, ktvContractList, editeKtvContract, supplementKtvContract } from "@/api/ktv.js"
	import SelectComponent from "@/components/SelectComponent.vue"
	import Item3 from "@/components/list3.vue"
	import Item1 from "@/components/list1.vue"
	export default{
		components:{ SelectComponent, Item1, Upload },
		data(){
			const validateNumber = (value, callback) => {
				if(value == ""){
					callback(new Error("合同编号不能为空"))
				}else if(value.length > 50){
					callback(new Error("合同编号不能超过50个字"))
				}else{
					callback();
				}
			}
			const validateBoxCount = (value, callback) => {
				if(value == ""){
					callback(new Error("包厢数不能为空"))
				}else if(!Number.isFinite(parseInt(value)) && parseInt(value) > 0){
					callback(new Error("包厢数应为正整数"))
				}else{
					callback();
				}
			}
			return{
				isSupplement: false, // 是否是补充合同；
				maxCount: 30, // 补充合同为1，其他为30；
				pageState:1,
				data:{
					number:"",
					annex: [],
					begin_date:"",
					ktv: this.$route.query.ktvID,
					recharge_package:"",
					box_count:"",
				},
				id:"",  // 合同id
				recharge_packageName:"",
				loading:false,
				ktvRechargeList:[],
				rule:{
					number:{ required: true, validator: validateNumber },
					annex: { required: true, type: 'array', message: '合同附件不能为空'},
					begin_date: { required: true, message: '合同起始日期不能为空' },
					recharge_package: { required: true, message: '套餐名称不能为空' },
					box_count: { required: true, validator: validateBoxCount },
					
				}
			}
		},
		filters: {
			listFilter: function(arr) {
				return arr.reduce((cur, next) => {
					cur.push(next.name)
					return cur;
				},[]);
			}
		},
		watch: {
			recharge_packageName:{
				handler(newValue, olderValue){
					this.ktvRechargeList.map(item => {
						if(item.name == newValue){
							this.data.recharge_package = item.id;
						}
					})
				},
				immediate: true
			}
		},
		methods: {
			cancelBtn(){
				this.$router.go(-1);
			},
			clickBtn() {
				if(this.isSupplement){
					delete this.rule.number;
					delete this.rule.begin_date;
					delete this.rule.recharge_package;
				}
				console.log(this.data)
				if(!checkForm(this.data, this.rule)){
					return;
				}
				console.log(this.data)
				Toast.loading({
					duration: 0,       // 持续展示 toast
					forbidClick: true, // 禁用背景点击
				})
				var send_data = Object.assign({}, this.data);
				    send_data.annex = send_data.annex.reduce((cur, next) => {
						cur.push(next.id);
						return cur;
					}, []).join(',');
					send_data.box_count = Number(send_data.box_count);
				if(this.$route.query.type == "create"){
					addKtvContract(send_data).then(res => {
						Toast.clear();
						Toast.success("创建成功")
						setTimeout(() => {
						  this.$router.go(-1);
						}, 500)
					}).catch(err => {
						Toast.clear();
						Toast.fail(err.data.number[0])
					})
				}else if(this.$route.query.type == "edite"){
					send_data.id = this.id;
					editeKtvContract(send_data).then(res => {
						Toast.clear();
						Toast.success("修改成功")
						setTimeout(() => {
						  this.$router.go(-1);
						}, 500)
					}).catch(err => {
						Toast.clear();
						Toast.fail(err.data.number[0])
					})
				}else{
					var data = {
						contract : this.$route.query.contractID,
						annex: send_data.annex,
						category: 1,
						box_count: send_data.box_count
					}
					supplementKtvContract(data).then(res => {
						Toast.clear();
						Toast.success("补充成功");
						setTimeout(() => {
						  this.$router.go(-1);
						}, 500)
					}).catch(err => {
						Toast.clear();
						Toast.fail("补充失败")
					})
				}
			},
			getList(){
				return new Promise((resolve, reject) => {
					ktvRechargeList().then(res => {
						this.ktvRechargeList = res.data.results;
						resolve(true)
					}).catch(e => {
						reject(false);
					})
				})
				
			},
			async getContractDetail(){
				var send_data = {
					ktv: this.$route.query.ktvID,
					state: 1
				}
				await this.getList();
				console.log(this.ktvRechargeList, "//////////")
				this.pageState = 0;
				ktvContractList(send_data).then(res => {
					console.log(res)
					this.pageState = 1;
                    var obj = res.data.results[res.data.count - 1];
					this.id = obj.id;
					this.data.annex = this.$route.query.type == "supplement" ? []:obj.annex;
					this.data.number = obj.number;
					this.data.begin_date = obj.begin_date;
					this.recharge_packageName = obj.package_name;
					this.data.box_count = obj.box_count;
				})
			}
		},
		mounted(){
			
			
			if(this.$route.query.type == 'edite'){
				document.title = "修改合同"
				this.getContractDetail()
			}else if(this.$route.query.type == "supplement"){
				this.maxCount = 1;
				this.isSupplement = true;
				document.title = "补充合同"
				this.getContractDetail()
			}else{
			    document.title = "新增合同"
			    this.getList();
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.addContractBox{
		height: 100%;
		background: #F6F6F6;
		.box{
			display: flex;
			height: 100%;
			justify-content: center;
			align-items: center;
		}
		.footer{
			display: block;
			margin: 0.26rem 0;
			padding: 0 0.39rem;
			box-sizing: border-box;
			background: #f2f2f25b;
		}
		.footer1{
			font-size:16px;
			font-weight:500;
			color:rgba(153,153,153,1);
			background:rgba(255,255,255,1);
		    box-shadow:0px -1px 5px -1px rgba(0,0,0,0.16);
			display: flex;
			height: 1.144rem;
			justify-content: space-around;
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
		}
		.footer1 > span{
			display: flex;
			height: 100%;
			width: 50%;
			align-items: center;
			justify-content: center;
		}
		.footer1 > span:last-child{
			background: #458CF4;
			color: white;
		}
	}
</style>
