export enum user_roles {
	admin = 'admin',
	subadmin = 'subadmin',
	user = 'user',
}

export interface _role {
	user_id: number
	roles: user_roles[]
}

export const roles: _role[] = [
	{
		user_id: 1,
		roles: [user_roles.admin],
	},

	{
		user_id: 2,
		roles: [user_roles.subadmin],
	},

	{
		user_id: 3,
		roles: [user_roles.user],
	},
]
