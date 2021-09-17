export const isEmptyObject = (object) => {
	return Object.values(object).length > 0 ?
	false :
	true;
}

export const isEmptyArray = (array) => {
	return array.length > 0 ?
	false :
	true;
}
