export enum user_role {
	admin = 'admin',
	subadmin = 'subadmin',
	user = 'user',
}

export interface _role {
	user_id: number
	roles: user_role[]
}

export const roles: _role[] = [
	{
		user_id: 1,
		roles: [user_role.admin],
	},

	{
		user_id: 2,
		roles: [user_role.subadmin],
	},

	{
		user_id: 3,
		roles: [user_role.user],
	},
]
