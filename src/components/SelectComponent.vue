<template>
	<div>
		<div class="van-cell van-field" @click="clickBtn">
			<div class="van-cell__title van-field__label">{{label}}</div>
			<div class="van-cell__value" style="display: flex;align-items: center;justify-content: flex-end;">
						<span v-if="value == ''">
							{{placeholder}}
						</span>
						<span v-else>
							{{value}}
						</span>
				<van-icon name="arrow" size="1em"/>
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
				default:[]
			},
			value:{
				type:String,
				default:""
			}
		},
		model: {
			prop: 'value',
			event: 'returnBack'
		},
		data(){
			return{
				show:false,
				areaList:data,
				minDate: new Date(2000, 1, 1),
				currentDate: new Date()
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
				this.show = true;
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
					result = getAddressName(value);
				  break;
				  case "date":
				    result = getDay(value);
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
	
</style>
