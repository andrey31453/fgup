import {
	users,
	_user,
	roles,
	_role,
	user_roles,
	scopes,
	_scopes,
	user_scopes,
} from '~db'

export default {
	state: () => {
		return {
			current_user_id: null as number,
			users: [] as _user[],
			roles: [] as _role[],
			scopes: {} as _scopes,
		}
	},

	getters: {
		current_user: (state): _user =>
			state.users.find((user) => user.id === state.current_user_id),

		current_roles(state): user_roles[] {
			return state.roles.find(
				(user_roless) => user_roless.user_id === this.current_user_id
			).roles
		},

		current_scopes(state): Set<user_scopes> {
			return this.current_roles.reduce((acc, current_role) => {
				state.scopes[current_role].forEach((scope) => acc.add(scope))

				return acc
			}, new Set())
		},
	},

	actions: {
		init() {
			this.users = users
			this.roles = roles
			this.scopes = scopes
			this.current_user_id = users[0].id
		},

		can(scope: user_scopes | user_scopes[]): boolean {
			return [scope]
				.flat()
				.reduce((can, scope) => can || this.current_scopes.has(scope), false)
		},
	},
}
