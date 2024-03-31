import { _user_role } from './roles'

export enum _user_scope {
	read_pm1,
	read_pm2,
	read_pm3,

	read_dfo,
	read_cfo,
	read_ufo,
	read_szfo,
}

export interface _scopes {
	[key: string]: _user_scope[]
}

export const scopes: _scopes = {
	[_user_role.admin]: [
		_user_scope.read_pm1,
		_user_scope.read_pm2,
		_user_scope.read_pm3,
		_user_scope.read_dfo,
		_user_scope.read_cfo,
		_user_scope.read_ufo,
		_user_scope.read_szfo,
	],

	[_user_role.subadmin]: [
		_user_scope.read_pm1,
		_user_scope.read_pm2,
		_user_scope.read_dfo,
	],

	[_user_role.user]: [
		_user_scope.read_pm2,
		_user_scope.read_pm3,
		_user_scope.read_cfo,
		_user_scope.read_szfo,
	],
}
