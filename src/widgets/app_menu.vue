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

import { route_paths } from '~router'
</script>

<template>
	<nav>
		<the_wrapper gap>
			<router-link
				v-if="home"
				:to="route_paths.home"
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
				:to="route_paths.page_1"
			>
				Пункт меню 1
			</router-link>

			<router-link
				v-if="can(user_scopes.read_pm2)"
				:to="route_paths.page_2"
			>
				Пункт меню 2
			</router-link>

			<router-link
				v-if="can(user_scopes.read_pm3)"
				:to="route_paths.page_3"
			>
				Пункт меню 3
			</router-link>
		</the_wrapper>
	</nav>
</template>
