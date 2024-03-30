<script setup lang="ts">
import { the_wrapper } from '~ui'
</script>

<template>
	<the_wrapper
		class="app_wrapper"
		column
		between
	>
		<slot />
	</the_wrapper>
</template>

<style scoped lang="scss">
@use '~styles/utils';

.app_wrapper {
	@include utils.font();
	min-height: 100vh;
}
</style>
