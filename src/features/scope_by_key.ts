import { _table_data_key } from '~db'
import { user_scope } from '~db'

type _scope_key_relations = Record<_table_data_key, user_scope>

const scope_key_relations: _scope_key_relations = {
	dfo: user_scope.read_dfo,
	cfo: user_scope.read_cfo,
	ufo: user_scope.read_ufo,
	szfo: user_scope.read_szfo,
}

export const scope_by_key = (data_key: _table_data_key) =>
	scope_key_relations[data_key]
