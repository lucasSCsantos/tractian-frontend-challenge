import React, { useEffect, useState } from 'react';
import { useFetch } from '../services/hooks';
import DataContext from './DataContext';

const Provider = ({ children }) => {
	const [actUserId, setActUserId] = useState(0);
	const [actAssetId, setActAssetId] = useState(0);
	const [actualUnit, setActualUnit] = useState(0);
	const userId = localStorage.getItem("actualUser");
	const assetId = localStorage.getItem("actualAssetId");
	const units = useFetch('https://my-json-server.typicode.com/tractian/fake-api/units', []);
	const users = useFetch('https://my-json-server.typicode.com/tractian/fake-api/users', []);
	const assets = useFetch('https://my-json-server.typicode.com/tractian/fake-api/assets', []);
	const actualUser = useFetch(`https://my-json-server.typicode.com/tractian/fake-api/users/${actUserId !== 0 ? actUserId : userId}`, {});
	const actualAsset = useFetch(`https://my-json-server.typicode.com/tractian/fake-api/assets/${actAssetId !== 0 ? actAssetId : assetId}`, {});

	useEffect(() => {
		setActualUnit(actualUser.unitId);
	}, [actualUser])
	
	const contextValue = {
		units,
		users,
		setActUserId,
		assets,
		actualUser,
		actualUnit,
		setActualUnit,
		setActAssetId,
		actualAsset,
	}

	return (
		<DataContext.Provider value={contextValue}>
			{children}
		</DataContext.Provider>
	);
}

export default Provider;
