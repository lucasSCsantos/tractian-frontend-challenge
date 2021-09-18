const deleteServiceOrder = (serviceOrder) => {
	const ordersList = JSON.parse(localStorage.getItem('serviceOrdersList'));
	let index = 0;
	console.log(serviceOrder)
	console.log(ordersList)
	console.log(ordersList.indexOf(serviceOrder));
	const exist = ordersList.some((order,idx) => {
		index = idx;
		return checkEqual(serviceOrder, order);
	});
	
	if (exist) {
		localStorage.setItem('serviceOrdersList', JSON.stringify([
			...ordersList.slice(0, index),
			...ordersList.slice(index + 1),
		]))
	}
}

const checkEqual = (obj1, obj2) => {
	const arr1 = Object.values(obj1);
	const arr2 = Object.values(obj2);

	const isEqual = ((arr1.length === arr2.length) && arr1.every((el, index) => (el === arr2[index])));
	return isEqual;

}

export default deleteServiceOrder;