import { use_user_store } from '~store'

export const use_users = () => use_user_store().init()
