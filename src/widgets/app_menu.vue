<script setup lang="ts">
defineProps({
	home: {
		type: Boolean,
		default: false,
	},
})

import { the_wrapper, the_icon } from '~ui'
import { user_scopes } from '~db'
import { use_user_store } from '~store'
const { can } = use_user_store()

import { routes_data } from '~router'
</script>

<template>
	<nav>
		<the_wrapper gap>
			<router-link
				v-if="home"
				:to="routes_data.home.path"
			>
				<the_wrapper
					column
					center
				>
					<the_icon
						name="home"
						size="24"
					/>
				</the_wrapper>
			</router-link>

			<router-link
				v-if="can(user_scopes.read_pm1)"
				:to="routes_data.page_1.path"
			>
				Пункт меню 1
			</router-link>

			<router-link
				v-if="can(user_scopes.read_pm2)"
				:to="routes_data.page_2.path"
			>
				Пункт меню 2
			</router-link>

			<router-link
				v-if="can(user_scopes.read_pm3)"
				:to="routes_data.page_3.path"
			>
				Пункт меню 3
			</router-link>
		</the_wrapper>
	</nav>
</template>

<style scoped lang="scss">
@use '~styles/vars';

.router-link-active {
	font-weight: bold;
	color: vars.$bc;
}
</style>
