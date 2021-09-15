import React, { useState } from 'react';
import { useFetch } from '../services/hooks';
import DataContext from './DataContext';

const Provider = ({ children }) => {
	const units = useFetch('https://my-json-server.typicode.com/tractian/fake-api/units', []);
	const users = useFetch('https://my-json-server.typicode.com/tractian/fake-api/users', []);
	const assets = useFetch('https://my-json-server.typicode.com/tractian/fake-api/assets', []);
	const [actUserId, setActUserId] = useState(0)
	const contextValue = {
		units,
		users,
		actUserId,
		setActUserId,
		assets,
	}

	return (
		<DataContext.Provider value={contextValue}>
			{children}
		</DataContext.Provider>
	);
}

export default Provider;
