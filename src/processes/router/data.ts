import { user_scopes } from '~db'

export type _route_key = 'home' | 'page_1' | 'page_2' | 'page_3'
interface _route_value {
	name: string
	path: string
	component: Function
	access?: user_scopes
}
export type _routes_data = Record<_route_key, _route_value>

export const routes_data: _routes_data = {
	home: {
		name: 'home',
		path: '/',
		component: () => import('../../pages/home.vue'),
	},

	page_1: {
		name: 'page_1',
		path: '/page_1',
		component: () => import('../../pages/page_1.vue'),
		access: user_scopes.read_pm1,
	},

	page_2: {
		name: 'page_2',
		path: '/page_2',
		component: () => import('../../pages/page_2.vue'),
		access: user_scopes.read_pm2,
	},

	page_3: {
		name: 'page_3',
		path: '/page_3',
		component: () => import('../../pages/page_3.vue'),
		access: user_scopes.read_pm3,
	},
}
