// create_app

import { createApp as create_app } from 'vue'
import app from './app.vue'

const vue_app = create_app(app)

// styles

import '~styles/reset.scss'
import '~styles/default.scss'
import '~styles/fonts.scss'

// vuetify

import 'vuetify/styles'
import { use_vuetify } from '~entities'

const vuetify = use_vuetify()
vue_app.use(vuetify)

// pinia

import { createPinia as create_pinia } from 'pinia'
vue_app.use(create_pinia())

// router

import { router } from '~router'
vue_app.use(router)

// mount

vue_app.mount('#app')
