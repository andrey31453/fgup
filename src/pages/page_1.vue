<script setup lang="ts">
import { table_1 } from '~db'
import { the_table, the_wrapper } from '~ui'
</script>

<template>
	<the_wrapper
		column
		gap
	>
		<h1>Таблица 1</h1>
		<the_table :data="table_1" />
	</the_wrapper>
</template>
