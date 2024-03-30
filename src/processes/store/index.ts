import { defineStore } from 'pinia'

// user

import user_store from './user'
const use_user_store = defineStore('user', user_store)

// export

export { use_user_store }
