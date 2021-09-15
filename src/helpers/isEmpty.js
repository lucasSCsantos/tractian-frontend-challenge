const isEmpty = (object) => {
	return Object.values(object).length > 1 ?
	true :
	false;
}

export default isEmpty;