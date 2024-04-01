<script setup lang="ts">
import { the_wrapper } from '~ui'
import { user_scope } from '~db'
import { use_user_store } from '~store'
const { can } = use_user_store()
</script>

<template>
	<nav>
		<the_wrapper>
			<router-link
				v-if="can(user_scope.read_pm1)"
				to="/page_1"
			>
				page 1
			</router-link>
			<router-link
				v-if="can(user_scope.read_pm2)"
				to="/page_2"
			>
				page 2
			</router-link>
			<router-link
				v-if="can(user_scope.read_pm3)"
				to="/page_3"
			>
				page 3
			</router-link>
		</the_wrapper>
	</nav>
</template>
