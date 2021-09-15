const correctUptime = (total) => {
	const month = Math.round(total * 0.00136986);
	return `há ${month} mes${month === 1 ? '' : 'es'}`;
}

export default correctUptime;