export interface _user {
	id: number
	name: string
	photo_id: number
}

enum _user_names {
	baron = 'Барон Харконнен',
	paul = 'Пол Атрейдес',
	chani = 'Чани',
}

export const users: _user[] = [
	{
		id: 1,
		name: _user_names.baron,
		photo_id: 1,
	},

	{
		id: 2,
		name: _user_names.paul,
		photo_id: 2,
	},

	{
		id: 3,
		name: _user_names.chani,
		photo_id: 3,
	},
]
