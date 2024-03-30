<script setup lang="ts">
import * as icons from './icons'

defineProps({
	name: {
		type: String,
		required: true,
		validator(value: string) {
			return ['sun', 'moon'].includes(value)
		},
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
			<component :is="icons[name]" />
		</g>
	</svg>
</template>
