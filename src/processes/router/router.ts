import {
	createWebHashHistory,
	createWebHistory,
	createRouter,
} from 'vue-router'

import { use_user_store } from '~store'
import { user_scopes } from '~db'

import { routes_data, _routes_data, _route_key } from './data'

const create_route = (data: _routes_data, key: _route_key) => {
	const { name, path, component, access } = data[key]

	return {
		name,
		path,
		component,
		meta: { access },
	}
}

const routes = Object.keys(routes_data).map((key) =>
	create_route(routes_data, key as _route_key)
)

export const router = createRouter({
	history: createWebHistory(),
	// @ts-ignore
	routes,
})

router.beforeEach(async (to, from, next) => {
	if (to.meta?.access && !use_user_store().can(to.meta.access as user_scopes))
		return next({ name: 'home' })

	return next()
})
