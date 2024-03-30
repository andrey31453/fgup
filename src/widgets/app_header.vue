<script setup lang="ts">
import { the_wrapper, the_background } from '~ui'

import { useSlots } from 'vue'
const slots = useSlots()
</script>

<template>
	<the_background
		class="app_header"
		variant="contrast"
	>
		<v-container>
			<the_wrapper between>
				<template v-if="slots.start">
					<the_wrapper start>
						<slot name="start" />
					</the_wrapper>
				</template>

				<template v-if="slots.end">
					<the_wrapper end>
						<slot name="end" />
					</the_wrapper>
				</template>

				<slot />
			</the_wrapper>
		</v-container>
	</the_background>
</template>

<style scoped lang="scss">
.app_header {
	position: sticky;
	top: 0;
	z-index: 1;
}
</style>
