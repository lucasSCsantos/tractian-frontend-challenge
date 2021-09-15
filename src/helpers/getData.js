export const getData = (data,type, unit) => {
	return data && data.reduce((acc, curr) => {
		if(curr.status === type && curr.unitId === unit){
			return acc + 1;
		}
		return acc;
	}, 0);
};

export const getTotal = (data, unit) => {
	return data && data.reduce((acc, curr) => (
		curr.unitId === unit ? acc + 1 : acc
	), 0);
};