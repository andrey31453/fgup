import { createWebHistory, createRouter } from 'vue-router'

const home = () => import('../pages/home.vue')
const page_1 = () => import('../pages/page_1.vue')
const page_2 = () => import('../pages/page_2.vue')
const page_3 = () => import('../pages/page_3.vue')

const routes = [
	{ path: '/', component: home },
	{ path: '/page_1', component: page_1 },
	{ path: '/page_2', component: page_2 },
	{ path: '/page_3', component: page_3 },
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
})
