export const correct = (string) => {
	switch (string) {
		case 'maxTemp':
			return 'Temperatura:';
		case 'power':
			return 'Potência:';
		case 'rpm':
			return 'Rotações:';
		case 'inAlert':
			return 'Em Alerta';
		case 'inOperation':
			return 'Em Operação';
		case 'inDowntime':
			return 'Em Parada';
		default:
			return `${string[0].toUpperCase()}${string.substr(1)}`;
	}
};

export const correctDate = (date) => {
	const hora = date.substr(11,5);
	const data = date.substr(0,10).split('-').reverse().join('/');
	return `${data} às ${hora}`;
};

export const correctIcon = (spec) => {
	switch (spec) {
		case 'maxTemp':
			return 0;
		case 'rpm':
			return 1;
		case 'power':
			return 2;
		default:
			break;
	}
}