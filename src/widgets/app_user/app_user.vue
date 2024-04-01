<script setup lang="ts">
import { use_user_store } from '~store'
import { storeToRefs } from 'pinia'

const user_store = use_user_store()
const { users, current_user_id, current_user } = storeToRefs(user_store)

user_store.init()

import { use_user_scope_guard } from '~features'
use_user_scope_guard()

import { the_wrapper } from '~ui'
</script>

<template>
	<the_wrapper
		class="choise_user"
		gap
	>
		<v-img
			class="choise_user__avatar rounded"
			aspect-ratio="1/1"
			cover
			:src="require(`./users/${current_user.photo_id}.jpg`)"
			:alt="current_user.name"
		/>

		<v-select
			class="choise_user__select"
			label="Пользователь"
			v-model="current_user_id"
			:items="users"
			item-value="id"
			item-title="name"
			variant="underlined"
		/>
	</the_wrapper>
</template>

<style scoped lang="scss">
@use '~styles/utils';
$avatar_size: 48px;

.choise_user {
	max-width: 100%;
	&__avatar {
		width: $avatar_size;
		height: $avatar_size;
	}

	&__select {
		height: $avatar_size;
		width: 300px;

		:deep(.v-select__selection-text) {
			@include utils.font('mark');
		}
	}
}
</style>
