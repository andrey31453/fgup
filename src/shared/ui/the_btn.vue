<script setup lang="ts">
const props = defineProps({
	submit: {
		type: Boolean,
		default: false,
	},
})

const variants = {
	submit: 'tonal',
	default: 'text',
}

const get_variant = ({ submit }) => {
	if (submit) return variants.submit

	return variants.default
}
const variant = get_variant(props)
</script>

<template>
	<v-btn
		:variant="variant"
		class="the_btn"
	>
		<slot />
	</v-btn>
</template>

<style lang="scss" scoped>
~widgetsuse '~styles/utils';

.the_btn {
	cursor: pointer;
	~widgetsinclude utils.animation();
	~widgetsinclude utils.opacity();

	&:hover {
		~widgetsinclude utils.opacity('false');
	}
}
</style>
