export const getData = (data,type, actualUser) => {
	return data && data.reduce((acc, curr) => {
		if(curr.status === type && curr.unitId === actualUser.unitId){
			return acc + 1;
		}
		return acc;
	}, 0);
};

export const getTotal = (data, actualUser) => {
	return data && data.reduce((acc, curr) => (
		curr.unitId === actualUser.unitId ? acc + 1 : acc
	), 0);
};