const isEmpty = (object) => {
	return Object.values(object).length > 1 ?
	false :
	true;
}

export default isEmpty;