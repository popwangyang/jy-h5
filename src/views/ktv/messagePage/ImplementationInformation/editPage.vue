<template>
	<div class="editBox">
		<!-- <van-nav-bar
		  title="实施信息"
		  left-arrow
		  @click-left="onClickLeft"
		/> -->
		 <SelectComponent 
			label="vod品牌"
			placeholder="请选择"
			type="default"
			:required="true"
			:columns="columns | vodFilter"
			v-model="data.vod_brand"
			/>
		 <van-field
			v-model="data.vod_version"
			required
			label="系统版本号"
			placeholder="请输入"
			input-align="right"
		/>	
		<van-field
			v-model="data.vod_ktv_id"
			required
			label="vod场所ID"
			placeholder="请输入"
			input-align="right"
		/>
		<van-field
			v-model="data.implement_box_count"
			required
			label="实施包厢数"
			placeholder="请输入"
			input-align="right"
		/>
		<span class="footer">
		  <van-button 
		  class="button"
		  size="large"
		  :loading="loading"
		  loading-type="spinner"
		  loading-text="加载中..."
		  @click="saveBtn">保存</van-button>
		</span>
	</div>
</template>

<script>
	import { Error } from '@/libs/error.js'
	import { checkForm } from '@/libs/util.js'
	import { getVodList, addImplementDetail, editeImplementDetail } from "@/api/ktv.js"
	import { Toast } from 'vant';
	import SelectComponent from '@/components/SelectComponent.vue'
	export default{
		components:{ SelectComponent },
		data(){
			return{
				columns:[],
				loading:false,
				ktvID:"",
				id:"",
				data:{
					vod_ktv_id:"",
					vod_version:"",
					vod_brand:"",
					implement_box_count:""
				},
				rule:{
					vod_brand: { required: true, message:"请选择vode品牌"},
					vod_version: { required: true, message:"系统版本号不能为空"},
					vod_ktv_id: { required: true, message:"vod场所ID不能为空"},
					implement_box_count: { required: true, message:"实施包厢数不能为空"},
				}
			}
		},
		filters:{
			vodFilter(value){
				return value.reduce((cur, next) => { 
						    cur.push(next.brand)
								return cur;
					}, []);
			}
		},
		methods:{
			onClickLeft(){
				this.$router.go(-1)
			},
			saveBtn(){
				console.log(this.data)
				var send_data = {
					vod_ktv_id : this.data.vod_ktv_id,
					vod_version : this.data.vod_version,
					vod_brand : this.columns.filter(_ => _.brand == this.data.vod_brand)[0].id,
					implement_box_count : this.data.implement_box_count,
					ktv: this.ktvID
				}
				if(!checkForm(this.send_data, this.rule)) {
					return;
				}
				this.loading = true;
				
				if(this.$route.query.type == "create"){
					addImplementDetail(send_data).then(res => {
						this.loading = false;
						Toast.success("创建成功");
						setTimeout(() => {
						  this.$router.go(-1);
						}, 500)
						console.log(res);
					}).catch(err => {
						this.loading = false;
						Toast.fail("创建失败");
					})
				}else{
					send_data.id = this.id;
					editeImplementDetail(send_data).then(res => {
						this.loading = false;
						Toast.success("保存成功");
						setTimeout(() => {
							this.$router.go(-1);
						}, 500)
						console.log(res);
					}).catch(err => {
						this.loading = false;
						Toast.fail("保存失败");
					})
				}
			},
			getVodList(){
				getVodList().then(res => {
					this.columns = res.data.results;
				})
			}
		},
		mounted() {
			document.title = "实施信息";
			this.ktvID = this.$route.query.ktvID;
			this.id = this.$route.query.id;
			this.getVodList();
			if(this.$route.query.type=="edite"){
				var data = JSON.parse(this.$route.query.data);
				console.log(data)
				this.id = data.id;
				this.data.vod_ktv_id = data.vod_ktv_id
				this.data.vod_version = data.vod_version
				this.data.vod_brand = data.vod_brand
	      this.data.implement_box_count = data.implement_box_count
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.editBox{
		height: 100%;
		background: #fafafa;
		position: relative;
		.footer{
			width: 100%;
			position: absolute;
			left: 0;
			bottom: 0;
			display: block;
			margin: 0.3rem 0;
			padding: 0 0.39rem;
			box-sizing: border-box;
			background: #f2f2f25b;
		}
	}
</style>
