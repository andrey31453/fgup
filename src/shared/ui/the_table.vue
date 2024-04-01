<script setup lang="ts">
defineProps(['data'])

import { use_user_store } from '~store'
const { can } = use_user_store()
import { scope_by_key } from '~features'

import { to_key } from '~libs'
</script>

<template>
	<v-table>
		<thead class="bg-indigo-lighten-1">
			<tr>
				<th
					v-for="(header, header_idx) in data.header"
					:key="to_key('header', header_idx)"
					class="text-left"
				>
					{{ header }}
				</th>
			</tr>
		</thead>

		<tbody>
			<template
				v-for="(data_row, data_key) in data.body"
				:key="data_key"
			>
				<tr v-if="can(scope_by_key(data_key))">
					<td
						v-for="(data_td, data_idx) in data_row"
						:key="to_key(data_key, data_idx)"
					>
						{{ data_td }}
					</td>
				</tr>
			</template>
		</tbody>
	</v-table>
</template>
