<template>
	<div class="box">
		<van-nav-bar
		  :title="title"
		  left-text="返回"
		  left-arrow
		/>
		<van-cell-group>
			<van-field 
			v-model="data.name" 
			label="商户名称"
			input-align="right"
			placeholder="请输入" />
			<van-field 
			v-model="data.account" 
			label="账号"
			input-align="right"
			placeholder="请输入邮箱地址" />
			<van-field 
			v-model="data.password" 
			label="初始密码"
			:type="inputType"
			input-align="right"
			:right-icon="passwordIconType"
			@click-right-icon="righIconBtn"
			placeholder="请输入" />
			<van-field 
			v-model="data.phone" 
			label="手机号"
			type="tel"
			input-align="right"
			placeholder="请输入" />
			<div class="van-cell van-field">
				<div class="van-cell__title van-field__label">是否启用</div>
				<div class="van-cell__value">
					<van-switch v-model="data.checked" size="22px"/>
				</div>
			</div>
		</van-cell-group>
		<span class="box1">
			<span class="title">关联场所</span>
			<span class="add" @click="addPlace">
				<van-icon name="plus" size="0.5rem"/>
				<span style="margin-left: 0.06rem;">请选择</span>
			</span>
			<span class="body">
				<PlaceItem>
					<van-icon name="fire" />
				</PlaceItem>
				<PlaceItem>
					<van-icon name="fire" />
				</PlaceItem>
				<PlaceItem>
					<van-icon name="fire" />
				</PlaceItem>
				<PlaceItem>
					<van-icon name="fire" />
				</PlaceItem>
				<PlaceItem>
					<van-icon name="fire" />
				</PlaceItem>
				<PlaceItem>
					<van-icon name="fire" />
				</PlaceItem>
			</span>
		</span>
		<span class="footer">
			<van-button type="primary" size="large">保存</van-button>
		</span>
	</div>
</template>

<script>
	import PlaceItem from "./components/placeItem.vue"
	export default{
		components:{ PlaceItem },
		data(){
			return{
				inputTypeFlag:true,
				data:{
					name:"sss",
					account:"",
					password:"",
					phone:"",
					checked:true
				}
			}
		},
		computed:{
			title(){
				if(this.$route.params.type == "edite"){
					return "编辑商户"
				}else{
					return "新建商户"
				}
			},
			passwordIconType(){
				return this.inputTypeFlag ? "closed-eye":"eye-o";
			},
			inputType(){
				return this.inputTypeFlag ? "password":"text";
			}
		},
		methods:{
			righIconBtn(){
				this.inputTypeFlag = !this.inputTypeFlag;
			},
			addPlace(){
				this.$router.push({name:"addPlace"})
			}
		},
		mounted() {
			console.log(this.$route.params, "pppppppppp")
		}
	}
</script>

<style scoped="scoped">
	.box{
		height: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		background: #f2f2f25b;
	}
	.box1{
		flex: 1;
		display: flex;
		height: 8.6rem;
		background: #f2f2f25b;
		/*  */
		flex-direction: column;
	}
	.title{
		color: #D3D3D3;
		padding:0 0.39rem;
		margin: 0.26rem 0;
	}
	.add{
		display: flex;
		border: 1px dashed  #6666668a;
		align-items: center;
		justify-content: center;
		padding: 0.26rem 0;
		margin: 0 0.39rem;
		color: #6666668a;
	}
	.body{
		/* background: yellow; */
		border-top: 1px solid lightgray;
		flex: 1;
		margin: 0.52rem 0;
		overflow: auto;
	}
	.footer{
		margin: 0.26rem 0;
		padding: 0 0.39rem;
		background: #f2f2f25b;
	}
</style>
