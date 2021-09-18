const responsableExist = (array, asset) => {
	const responsableObj = array ? array.find((arr) => (arr.assetId === asset.id)) : false;
	return responsableObj ? responsableObj.responsable : undefined;
}

export default responsableExist;