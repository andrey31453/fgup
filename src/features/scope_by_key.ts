import { _table_data_key } from '~db'
import { user_scopes } from '~db'

type _scope_key_relations = Record<_table_data_key, user_scopes>

const scope_key_relations: _scope_key_relations = {
	dfo: user_scopes.read_dfo,
	cfo: user_scopes.read_cfo,
	ufo: user_scopes.read_ufo,
	szfo: user_scopes.read_szfo,
}

export const scope_by_key = (data_key: _table_data_key) =>
	scope_key_relations[data_key]
