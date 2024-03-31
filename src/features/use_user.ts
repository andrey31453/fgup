import { use_user_store } from '~store'

export const use_user = () => use_user_store().init()
