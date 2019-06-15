<template>
	<div class="businessHoursBox">
		<span class="nav">
			营业时间
		</span>
		<SelectComponent 
			label="开始时间"
			placeholder="请选择"
			:columns="[]"
			type="time"
			:disabled="InputDisabled"
			@change="timeChange"
			v-model="startTime"
		/>
		<SelectComponent 
			label="结束时间"
			placeholder="请选择"
			:columns="[]"
			type="time"
			:disabled="InputDisabled"
			:min-hour="minHour"
			:min-minute="minMinute"
			v-model="endTime"
		/>
		<span class="nav">
			选择工作日
		</span>
		<span class="van-cell">
			<van-radio-group v-model="radio" style="display: flex;">
			  <van-radio name="1" style="margin-right: 0.4rem;">全时段</van-radio>
			  <van-radio name="2">部分时段</van-radio>
			</van-radio-group>
		</span>
		<span class="box">
			<span v-show="radio == '2'" >
				<van-cell :title="item.name"  v-for="item in time" clickable @click="selectBtn(item)">
					<van-icon name="checked" v-if="item.isSelect" color="#1989fa"></van-icon>
				</van-cell>
			</span>
		</span>
		<div class="footer">
			<van-button class="button" size="large" @click="clickBtn" :disabled="BtnDisabled">确定</van-button>
		</div>
	</div>
</template>

<script>
	import SelectComponent from '@/components/SelectComponent.vue'
	export default{
		components:{ SelectComponent },
		props:{
			value:{
				type:Object,
				default:() => {}
			}
		},
		model:{
			prop: 'value',
			event: 'returnBack'
		},
		data(){
			return{
				radio:"1",
				time:[],
				minHour:0,
				minMinute:0,
				startTime:"",
				endTime:"",
				InputDisabled:false
			}
		},
		computed:{
			BtnDisabled(){
				if(this.startTime && this.endTime){
					if(this.radio == "1"){
						return false;
					}else if(this.time.some(item => item.isSelect)){
						return false;
					}
				}
				return true;
			}
		},
		watch:{
			radio:{
				handler(n, o){
					if(n == '1'){
						this.InputDisabled = true;
						this.startTime = "00:00";
						this.endTime = "23:59";
					}else{
						var data = this.value;
						this.InputDisabled = false;
						this.startTime = data.start;
						this.endTime = data.end;
					}
				},
				immediate: true
			}
		},
		methods:{
			clickBtn(){
				console.log()
			  var obj = {
				  flag: this.radio == "1" ? 0:1,
				  days: this.radio == "1" ? [1,2,3,4,5,6,7] : this.time.reduce((cur, next) => {
					if(next.isSelect){
						cur.push(next.code)
					}
					return cur;
				}, []),
				  start: this.radio == "1" ? "" : this.startTime.split(":").length == 2 ? this.startTime+":00":this.startTime,
				  end: this.radio == "1"? "" : this.endTime.split(":").length == 2 ? this.endTime+":00":this.endTime
			  }
			  console.log(obj);
			  this.$emit("returnBack", obj);
			  this.$emit("btn");
			},
			timeChange(value){
				this.endTime = "";
				var startTime = value.split(":");
				this.minHour = parseInt(startTime[0]);
				this.minMinute = parseInt(startTime[1]);
			},
			init(){
				var data = this.value;
				if(data.flag == '0'){
					this.radio = "1";
					this.InputDisabled = true;
					this.startTime = "00:00";
					this.endTime = "23:59";
				}else{
				    this.radio = "2";
					this.startTime = data.start;
					this.endTime = data.end;
					this.InputDisabled = false;
				}
				var arr = []
				for(var i = 1; i < 8; i++){
					var str = ""
					var code = ""
					switch (i){
						case 1:
						  str = "星期一";
						  code = 1;
							break;
						case 2:
						  str = "星期二";
						  code = 2;
							break;
						case 3:
						  str = "星期三";
						  code = 3;
							break;
						case 4:
						  str = "星期四";
						  code = 4;
							break;
						case 5:
						  str = "星期五";
						  code = 5;
							break;
						case 6:
						  str = "星期六";
						  code = 6;
							break;
						case 7:
						  str = "星期日";
						  code = 7;
							break;
					}
					var obj = {
						name: str,
						code: code,
						isSelect: data.days.indexOf(i) == -1 ? false:true
					}
					arr.push(obj);
				}
				this.time = arr;
				console.log(this.time);
			},
			selectBtn(item){
				item.isSelect = !item.isSelect;
				
			}
		},
		mounted() {
			this.init();
		}
	}
</script>

<style scoped="scoped" lang="less">
	.businessHoursBox{
		width: 100%;
		height: 100%;
		.nav{
			background: #fafafa;
			display: block;
			padding: 0.16rem 0.39rem;
			color: #979797;
		}
		.box{
			display: block;
			width: 100%;
			height: 10rem;
		}
		.footer{
			width: 100%;
			padding: 0 0.39rem;
			box-sizing: border-box;
		}
	}
</style>
