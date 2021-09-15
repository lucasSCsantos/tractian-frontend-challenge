const progressColor = (score) => {
	switch (true) {
		case score >= 70:
			return ['#108ee9', '#87d068'];
		case score < 70 && score >= 60:
			return ['#FFCF69', '#FFAD00'];
		case score < 60:
			return ['#FF5C24', '#FF2E3B'];
		default:
			break;
	}
}

export default progressColor;