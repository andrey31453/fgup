import { user_role } from './roles'

export enum user_scope {
	read_pm1,
	read_pm2,
	read_pm3,

	read_dfo,
	read_cfo,
	read_ufo,
	read_szfo,
}

export interface _scopes {
	[key: string]: user_scope[]
}

export const scopes: _scopes = {
	[user_role.admin]: [
		user_scope.read_pm1,
		user_scope.read_pm2,
		user_scope.read_pm3,
		user_scope.read_dfo,
		user_scope.read_cfo,
		user_scope.read_ufo,
		user_scope.read_szfo,
	],

	[user_role.subadmin]: [
		user_scope.read_pm1,
		user_scope.read_pm2,
		user_scope.read_dfo,
	],

	[user_role.user]: [
		user_scope.read_pm2,
		user_scope.read_pm3,
		user_scope.read_cfo,
		user_scope.read_szfo,
	],
}
