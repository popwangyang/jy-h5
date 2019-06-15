<template>
	<div class="placeBox">
		<slot></slot>
		
	</div>
</template>
<style scoped="scoped">
	.placeBox{
		border-bottom: 1px solid lightgray;
		display: flex;
		background: white;
		align-items: center;
	}
	.placeBox .name{
		margin-left: 0.26rem;
	}
</style>

