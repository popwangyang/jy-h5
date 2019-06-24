<template>
	<div class="forgetPageBox">
		<getCodeComponet v-if="state == 1" @event1="event"/>
		<setNewPassword v-if="state == 2" :username="username" :code="code" @event2="finish"/>
	</div>
</template>

<script>
	import getCodeComponet from './components/getCodeComponet'
	import setNewPassword from './components/setNewPasswordComponet'
	export default{
		components:{ getCodeComponet, setNewPassword },
		data(){
			return{
				state: 1,
				username: '',
				code: ''
			}
		},
		methods:{
			event(msg){
				this.state = msg.index;
				this.username = msg.username;
				this.code = msg.code;
			},
			finish(){
				this.$emit('event');
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.forgetPageBox{
		height: 100%;
	}
</style>
