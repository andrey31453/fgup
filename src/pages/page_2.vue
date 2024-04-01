<script setup lang="ts">
import { table_2 } from '~db'
import { the_table, the_wrapper } from '~ui'
</script>

<template>
	<the_wrapper
		column
		gap
	>
		<h1>Таблица 2</h1>
		<the_table :data="table_2" />
	</the_wrapper>
</template>
