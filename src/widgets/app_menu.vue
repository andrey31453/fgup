<script setup lang="ts">
defineProps({
	home: {
		type: Boolean,
		default: false,
	},
})

import { the_wrapper, the_icon } from '~ui'
import { user_scope } from '~db'
import { use_user_store } from '~store'
const { can } = use_user_store()
</script>

<template>
	<nav>
		<the_wrapper gap>
			<router-link
				v-if="home"
				to="/"
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
				v-if="can(user_scope.read_pm1)"
				to="/page_1"
			>
				Пункт меню 1
			</router-link>
			<router-link
				v-if="can(user_scope.read_pm2)"
				to="/page_2"
			>
				Пункт меню 2
			</router-link>
			<router-link
				v-if="can(user_scope.read_pm3)"
				to="/page_3"
			>
				Пункт меню 3
			</router-link>
		</the_wrapper>
	</nav>
</template>
