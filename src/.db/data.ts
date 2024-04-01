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
		dfo: ['т1 ДФО 1', 'т1 ДФО 2', 'т1 ДФО 3', 'т1 ДФО 4'],
		cfo: ['т1 ЦФО 1', 'т1 ЦФО 2', 'т1 ЦФО 3', 'т1 ЦФО 4'],
		ufo: ['т1 УФО 1', 'т1 УФО 2', 'т1 УФО 3', 'т1 УФО 4'],
		szfo: ['т1 СЗФО 1', 'т1 СЗФО 2', 'т1 СЗФО 3', 'т1 СЗФО 4'],
	},
}

export const table_2: _table = {
	header: table_header,
	body: {
		dfo: ['t2 ДФО 1', 't2 ДФО 2', 't2 ДФО 3', 't2 ДФО 4'],
		cfo: ['t2 ЦФО 1', 't2 ЦФО 2', 't2 ЦФО 3', 't2 ЦФО 4'],
		ufo: ['t2 УФО 1', 't2 УФО 2', 't2 УФО 3', 't2 УФО 4'],
		szfo: ['t2 СЗФО 1', 't2 СЗФО 2', 't2 СЗФО 3', 't2 СЗФО 4'],
	},
}

export const table_3: _table = {
	header: table_header,
	body: {
		dfo: ['т3 ДФО 1', 'т3 ДФО 2', 'т3 ДФО 3', 'т3 ДФО 4'],
		cfo: ['т3 ЦФО 1', 'т3 ЦФО 2', 'т3 ЦФО 3', 'т3 ЦФО 4'],
		ufo: ['т3 УФО 1', 'т3 УФО 2', 'т3 УФО 3', 'т3 УФО 4'],
		szfo: ['т3 СЗФО 1', 'т3 СЗФО 2', 'т3 СЗФО 3', 'т3 СЗФО 4'],
	},
}
