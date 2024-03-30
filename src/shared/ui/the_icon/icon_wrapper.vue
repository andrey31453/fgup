<script setup lang="ts">
defineProps({
	name: {
		type: String,
		required: true,
	},
	width: {
		type: [Number, String],
		default: 18,
	},
	height: {
		type: [Number, String],
		default: 18,
	},
	color: {
		type: String,
		default: 'currentColor',
	},
})
</script>

<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="width"
		:height="height"
		viewBox="0 0 18 18"
	>
		<title
			:id="name"
			lang="en"
		>
			{{ name }} icon
		</title>
		<g :fill="color">
			<slot />
		</g>
	</svg>
</template>

<style scoped lang="scss">
svg {
	display: inline-block;
	vertical-align: baseline;
}
</style>
