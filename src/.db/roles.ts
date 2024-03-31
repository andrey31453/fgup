export enum _user_role {
	admin = 'admin',
	subadmin = 'subadmin',
	user = 'user',
}

export interface _role {
	user_id: number
	roles: _user_role[]
}

export const roles: _role[] = [
	{
		user_id: 1,
		roles: [_user_role.admin],
	},

	{
		user_id: 2,
		roles: [_user_role.subadmin],
	},

	{
		user_id: 3,
		roles: [_user_role.user],
	},
]
