const getUnitAssets = (array, unit) => {
	console.log(unit)
	const newArr = array.filter((arr) => (arr.unitId === +unit));
	return newArr;
}

export default getUnitAssets;