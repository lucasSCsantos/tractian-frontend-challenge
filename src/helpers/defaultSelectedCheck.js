const defaultSelectedCheck = (pathname, obj) => {
	switch (true) {
		case pathname.includes(obj[1]):
			return 1;
		case pathname.includes(obj[2]):
			return 2;
		case pathname.includes(obj[3]):
			return 3;
		default:
			break;
	}
}

export default defaultSelectedCheck;