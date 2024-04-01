export const to_key = (...params: any[]): string =>
	params.reduce((key, param) => `${key}_${param}`, '')
