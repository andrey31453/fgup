<script setup lang="ts">
import { the_wrapper } from '~ui'
</script>

<template>
	<nav>
		<the_wrapper>
			<router-link to="/page_1">page 1</router-link>
			<router-link to="/page_2">page 2</router-link>
			<router-link to="/page_3">page 3</router-link>
		</the_wrapper>
	</nav>
</template>
