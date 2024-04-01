<script setup lang="ts">
import { table_1 } from '~db'
import { the_table } from '~ui'
</script>

<template>
	<the_table :data="table_1" />
</template>
