const assetServiceOrdersList = (id) => {
	const ordersList = JSON.parse(localStorage.getItem('serviceOrdersList'));
	const exist = ordersList.some((order) => (order.assetId === id));
	return exist ?
		ordersList.filter((order) => (order.assetId === id))
			: undefined;
}

export default assetServiceOrdersList;