import { storeToRefs } from 'pinia'
import { watch } from 'vue'
import { useRouter } from 'vue-router'

import { use_user_store } from '~store'
import { routes_data } from '~router'

export const use_user_scope_guard = () => {
	const { current_user_id } = storeToRefs(use_user_store())
	const router = useRouter()

	watch(current_user_id, () => router.push({ name: routes_data.home.name }))
}
