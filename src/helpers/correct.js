const correct = (string) => {
	switch (string) {
		case 'maxTemp':
			return 'Temperatura Máxima';
		case 'power':
			return 'Potência';
		case 'rpm':
			return 'RPM';
		default:
			break;
	}
}

export default correct;