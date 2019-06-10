<template>
	<div class="placeBox">
		<slot></slot>
		<span class="name">
			PlaceItem
		</span>
	</div>
</template>
<style scoped="scoped">
	.placeBox{
		border-bottom: 1px solid lightgray;
		display: flex;
		padding: 0.36rem 0.3rem;
		background: white;
		align-items: center;
	}
	.placeBox .name{
		margin-left: 0.26rem;
	}
</style>

