<script setup lang="ts">
import { computed, Ref } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

const toggle_theme = () => {
	theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

const icon_name: Ref<string> = computed(() =>
	theme.global.current.value.dark ? 'sun' : 'moon'
)

import { the_btn, the_icon } from '~ui'
</script>

<template>
	<the_btn
		submit
		@click="toggle_theme"
	>
		<the_icon :name="icon_name" />
	</the_btn>
</template>
