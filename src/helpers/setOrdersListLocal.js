const setOrdersListLocal = (serviceOrder) => {
	const ordersList = JSON.parse(localStorage.getItem('serviceOrdersList'));
	if (ordersList) {
		localStorage.setItem('serviceOrdersList', JSON.stringify([
			...ordersList,
			serviceOrder,
		]))
	} else {
		localStorage.setItem('serviceOrdersList', JSON.stringify([
			serviceOrder,
		]))
	}
}

export default setOrdersListLocal;