const getUnitAssets = (array, unit) => {
	const newArr = array.filter((arr) => (arr.unitId === +unit));
	return newArr;
}

export default getUnitAssets;