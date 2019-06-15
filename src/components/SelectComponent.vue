<template>
	<div class="van-cell" style="border-bottom: 1px solid #ebedf0">
		<div  class="van-cell van-field" @click="clickBtn" style="padding: 0;">
			<div class="van-cell__title van-field__label">{{label}}</div>
			<div class="van-cell__value" style="display: flex;align-items: center;justify-content: flex-end;">
						<span v-if="value == ''">
							{{placeholder}}
						</span>
						<span v-else style="color: #000000;">
							<span v-if="type == 'map'">
							  {{value | MapFilter}}
							</span>
							<span v-else>
								{{value}}
							</span>
						</span>
				<van-icon name="arrow" size="16px" style="margin-left: 4px;"/>
			</div>
		</div>
		<van-popup
		  v-model="show"
		  position="bottom"
		>
		  <van-picker
		    v-if="type=='default'"
		    show-toolbar
		    :columns="columns"
		    @cancel="onCancel"
        @confirm="onConfirm"
		  />
		   <van-area
		   v-if="type=='map'"
		   @cancel="onCancel"
		   @confirm="onConfirm"
		   :area-list="areaList"
		  />
		   <van-datetime-picker
		    v-if="type=='date'"
			  v-model="currentDate"
			  type="date"
			  :min-date="minDate"
			  :formatter="formatter"
			  @cancel="onCancel"
			  @confirm="onConfirm"
			/>
			 <van-datetime-picker
			  v-if="type=='time'"
			  v-model="currentTime"
			  type="time"
				:disabled="disabled"
				:min-hour="minHour"
				:max-hour="maxHour"
				:min-minute="minMinute"
				:max-minute="maxMinute"
			  @cancel="onCancel"
			  @confirm="onConfirm"
			/>
		</van-popup>
		
	</div>
</template>

<script>
	import data from '@/assets/map.js'
	import { getAddressName } from "@/libs/tools"
	import { getDay } from "@/libs/util"
	export default{
		props:{
			type:{
				type:String,
				default:"default"
			},
			label:{
				type:String,
				default:"eee"
			},
			placeholder:{
				type:String,
				default:'请输入'
			},
			columns:{
				type:Array,
				default:() => {
					return []
				}
			},
			minHour:{
				type:Number,
				default:0
			},
			maxHour:{
				type:Number,
				default:23
			},
			minMinute:{
				type:Number,
				default:0
			},
			maxMinute:{
				type:Number,
				default:59
			},
			disabled:{
				type:Boolean,
				default: false
			},
			value:[String, Array]
		},
		model: {
			prop: 'value',
			event: 'returnBack'
		},
		filters:{
			MapFilter(value){
				console.log(value)
				return getAddressName(value);
			}
		},
		computed:{
			mapValue(){
				if(this.type == "map"){
					return this.value[2].code;
				}else{
					return ""
				}
			}
		},
		data(){
			return{
				show:false,
				areaList:data,
				minDate: new Date(2000, 1, 1),
				currentDate: new Date(),
				currentTime: "12:00"
			}
		},
		methods:{
			formatter(type, value) {
			  if (type === 'year') {
				return `${value}年`;
			  } else if (type === 'month') {
				return `${value}月`
			  } else if (type === 'day') {
				return `${value}日`
			  }
			  return value;
			},
			clickBtn(){
				if(!this.disabled){
				  this.show = true;
				}
			},
			onCancel(){
				this.defaultIndex = 0;
				this.show = false;
			},
			onConfirm(value, index){
			    var result = ""
			    switch(this.type){
				  case "default":
					result = value;
				  break;
				  case "map":
					result = value;
				  break;
				  case "date":
				    result = getDay(value);
				  break;
				  case "time":
				    result = value;
						this.$emit("change", value);
				  break;
			    }
			    this.$emit('returnBack', result);
				this.show = false;
			}
		},
		mounted() {
		}
	}
</script>

<style scoped="scoped" lang="less">
	.van-cell:not(:last-child)::after{
		    border-bottom: 0;
	}
</style>
