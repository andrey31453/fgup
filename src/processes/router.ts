import { createMemoryHistory, createRouter } from 'vue-router'
import { page_1, page_2, page_3 } from '~pages'

const routes = [
	{ path: '/', component: page_1 },
	{ path: '/page_1', component: page_1 },
	{ path: '/page_2', component: page_2 },
	{ path: '/page_3', component: page_3 },
]

export const router = createRouter({
	history: createMemoryHistory(),
	routes,
})
