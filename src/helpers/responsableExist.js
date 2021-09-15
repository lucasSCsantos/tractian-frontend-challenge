const responsableExist = (array, asset) => {
	const responsableObj = array.find((arr) => (arr.assetId === asset.id))
	return responsableObj ? responsableObj.responsable : undefined;
}

export default responsableExist;