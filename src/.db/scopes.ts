import { user_roles } from './roles'

export enum user_scopes {
	read_pm1,
	read_pm2,
	read_pm3,

	read_dfo,
	read_cfo,
	read_ufo,
	read_szfo,
}

export interface _scopes {
	[key: string]: user_scopes[]
}

export const scopes: _scopes = {
	[user_roles.admin]: [
		user_scopes.read_pm1,
		user_scopes.read_pm2,
		user_scopes.read_pm3,
		user_scopes.read_dfo,
		user_scopes.read_cfo,
		user_scopes.read_ufo,
		user_scopes.read_szfo,
	],

	[user_roles.subadmin]: [
		user_scopes.read_pm1,
		user_scopes.read_pm2,
		user_scopes.read_dfo,
	],

	[user_roles.user]: [
		user_scopes.read_pm2,
		user_scopes.read_pm3,
		user_scopes.read_cfo,
		user_scopes.read_szfo,
	],
}
