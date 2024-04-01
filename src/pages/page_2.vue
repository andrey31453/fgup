<script setup lang="ts">
import { table_2, _table_data_key } from '~db'

import { use_user_store } from '~store'
const { can } = use_user_store()
import { scope_by_key } from '~features'
</script>

<template>
	<template
		v-for="(data_row, data_key) in table_2"
		:key="data_key"
	>
		<template v-if="can(scope_by_key(data_key))">
			<div
				v-for="(data, data_idx) in data_row"
				:key="data_key + data_idx"
			>
				{{ data }}
			</div>

			<hr />
		</template>
	</template>
</template>
