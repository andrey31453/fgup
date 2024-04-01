export type _table_data_key = 'dfo' | 'cfo' | 'ufo' | 'szfo'

export type _table_data = Record<_table_data_key, string[]>

export interface _table {
	header: string[]
	body: _table_data
}

const table_header = ['period 1', 'period 2', 'period 3', 'period 4']

export const table_1: _table = {
	header: table_header,
	body: {
		dfo: ['t1 dfo 1', 't1 dfo 2', 't1 dfo 3', 't1 dfo 4'],
		cfo: ['t1 cfo 1', 't1 cfo 2', 't1 cfo 3', 't1 cfo 4'],
		ufo: ['t1 ufo 1', 't1 ufo 2', 't1 ufo 3', 't1 ufo 4'],
		szfo: ['t1 szfo 1', 't1 szfo 2', 't1 szfo 3', 't1 szfo 4'],
	},
}

export const table_2: _table = {
	header: table_header,
	body: {
		dfo: ['t2 dfo 1', 't2 dfo 2', 't2 dfo 3', 't2 dfo 4'],
		cfo: ['t2 cfo 1', 't2 cfo 2', 't2 cfo 3', 't2 cfo 4'],
		ufo: ['t2 ufo 1', 't2 ufo 2', 't2 ufo 3', 't2 ufo 4'],
		szfo: ['t2 szfo 1', 't2 szfo 2', 't2 szfo 3', 't2 szfo 4'],
	},
}

export const table_3: _table = {
	header: table_header,
	body: {
		dfo: ['t3 dfo 1', 't3 dfo 2', 't3 dfo 3', 't3 dfo 4'],
		cfo: ['t3 cfo 1', 't3 cfo 2', 't3 cfo 3', 't3 cfo 4'],
		ufo: ['t3 ufo 1', 't3 ufo 2', 't3 ufo 3', 't3 ufo 4'],
		szfo: ['t3 szfo 1', 't3 szfo 2', 't3 szfo 3', 't3 szfo 4'],
	},
}
