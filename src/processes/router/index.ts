import { createWebHashHistory, createRouter } from 'vue-router'

import { user_scopes } from '~db'
import { use_user_store } from '~store'

const home = () => import('../pages/home.vue')
const page_1 = () => import('../pages/page_1.vue')
const page_2 = () => import('../pages/page_2.vue')
const page_3 = () => import('../pages/page_3.vue')

export enum route_paths {
	home = '/',
	page_1 = '/page_1',
	page_2 = '/page_2',
	page_3 = '/page_3',
}

const routes = [
	{
		path: route_paths.home,
		name: 'home',
		component: home,
	},

	{
		path: route_paths.page_1,
		component: page_1,
		meta: {
			access: user_scopes.read_pm1,
		},
	},

	{
		path: route_paths.page_2,
		component: page_2,
		meta: {
			access: user_scopes.read_pm2,
		},
	},

	{
		path: route_paths.page_3,
		component: page_3,
		meta: {
			access: user_scopes.read_pm3,
		},
	},
]

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

router.beforeEach(async (to, from, next) => {
	if (to.meta?.access && !use_user_store().can(to.meta.access as user_scopes))
		return next({ name: 'home' })

	return next()
})
