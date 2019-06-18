<template>
	<div class="addContractBox">
		<span  v-if="pageState == 1">
			<van-field
				v-model="data.number"
				label="合同编号"
				placeholder="请输入"
				input-align="right"
				:readonly="readOnly"
			/>
			<SelectComponent 
				label="套餐名称"
				placeholder="请选择"
				type="default"
				:columns="ktvRechargeList | listFilter"
				v-model="recharge_packageName"
				:disabled="readOnly"
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
				:disabled="readOnly"
				/>
<!-- 			<SelectComponent 
				label="合同起始日期"
				placeholder="请选择"
				type="date"
				:columns="[]"
				v-model="data.end_date"
				:disabled="readOnly"
				/> -->
			<span class="line"></span>
			
			<Item3
			title="合同文件"
			v-model="data.annex.id"
			:src="data.annex.src"
			:name="data.annex.name"
			/>
			<span class="footer">
				<van-button class="button" size="large" :loading="loading" @click="clickBtn">保存</van-button>
			</span>
		</span>
		<span class="box" v-if="pageState == 0">
			<van-loading type="spinner" :vertical="true">加载中...</van-loading>
		</span>
	</div>
</template>

<script>
	import { Toast } from "vant"
	import { addKtvContract, ktvRechargeList, ktvContractList, editeKtvContract, supplementKtvContract } from "@/api/ktv.js"
	import SelectComponent from "@/components/SelectComponent.vue"
	import Item3 from "@/components/list3.vue"
	import Item1 from "@/components/list1.vue"
	export default{
		components:{ SelectComponent, Item3, Item1 },
		data(){
			return{
				pageState:1,
				data:{
					number:"",
					annex:{
						id:"",
						src:"",
						name:""
					},
					begin_date:"",
					ktv: this.$route.query.ktvID,
					recharge_package:"",
					box_count:"",
				},
				id:"",  // 合同id
				recharge_packageName:"",
				loading:false,
				ktvRechargeList:[],
				readOnly:false
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
			clickBtn() {
				console.log(this.data)
				Toast.loading({
					duration: 0,       // 持续展示 toast
					forbidClick: true, // 禁用背景点击
				})
				var send_data = Object.assign({}, this.data);
				    send_data.annex = send_data.annex.id;
				if(this.$route.query.type == "create"){
					addKtvContract(send_data).then(res => {
						Toast.clear();
						Toast.success("创建成功")
						setTimeout(() => {
						  this.$router.go(-1);
						}, 500)
					}).catch(err => {
						Toast.clear();
						Toast.fail("创建失败")
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
						Toast.fail("修改失败")
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
				this.pageState = 0;
				ktvRechargeList().then(res => {
					this.pageState = 1;
					this.ktvRechargeList = res.data.results;
				})
			},
			getContractDetail(){
				var send_data = {
					ktv: this.$route.query.ktvID,
					state: 1
				}
				ktvContractList(send_data).then(res => {
                    var obj = res.data.results[0];
					this.id = obj.id;
					this.data.number = obj.number;
					this.data.annex.id = obj.annex.id+"";
					this.data.annex.src = obj.annex.download_url;
					this.data.annex.name = obj.annex.name;
					this.data.begin_date = obj.begin_date;
					this.recharge_packageName = obj.package_name;
					this.data.box_count = obj.box_count;
				})
			}
		},
		mounted(){
			this.getList();
			document.title = "新增合同"
			if(this.$route.query.type == 'edite'){
				document.title = "修改合同"
				this.getContractDetail()
			}else if(this.$route.query.type == "supplement"){
				document.title = "补充合同"
				this.getContractDetail()
				this.readOnly = true;
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
	}
</style>
