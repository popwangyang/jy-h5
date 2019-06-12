<template>
	<div class="van-cell van-field">
		<div class="van-cell__title van-field__label">{{label}}</div>
		<div class="van-cell__value" style="display: flex;align-items: center;justify-content: flex-start;margin-left: 0.8rem;">
					<span> {{value}} </span>
		</div>
	</div>
</template>
<script>
	export default{
		props:{
			label:{
				type:String,
				default:"企业注册名称"
			},
			value:{
				type:String,
				default:"杭州银乐迪西溪银泰店"
			}
		},
		data(){
			return{
				
			}
		}
	}
</script>
