<script setup lang="ts">
import { table_3 } from '~db'
import { the_table, the_wrapper } from '~ui'
</script>

<template>
	<the_wrapper
		column
		gap
	>
		<h1>Таблица 3</h1>
		<the_table :data="table_3" />
	</the_wrapper>
</template>
