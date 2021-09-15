import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../services/hooks';
import DataContext from './DataContext';

const Provider = ({ children }) => {
	const { pathname } = useLocation();
	const [actUserId, setActUserId] = useState(0);
	const [actAssetId, setActAssetId] = useState(0);
	const [actualUnit, setActualUnit] = useState(0);
	const [editableStr, setEditableStr] = useState('Delegar responsável');
	const userId = localStorage.getItem("actualUser");
	const assetId = localStorage.getItem("actualAssetId");
	const responsables = JSON.parse(localStorage.getItem("responsable"));
	const units = useFetch('https://my-json-server.typicode.com/tractian/fake-api/units', []);
	const users = useFetch('https://my-json-server.typicode.com/tractian/fake-api/users', []);
	const assets = useFetch('https://my-json-server.typicode.com/tractian/fake-api/assets', []);
	const company = useFetch('https://my-json-server.typicode.com/tractian/fake-api/companies', []);
	const actualUser = useFetch(`https://my-json-server.typicode.com/tractian/fake-api/users/${actUserId !== 0 ? actUserId : userId}`, {});
	const actualAsset = useFetch(`https://my-json-server.typicode.com/tractian/fake-api/assets/${actAssetId !== 0 ? actAssetId : assetId}`, {});

	useEffect(() => {
		setActualUnit(actualUser.unitId);
	}, [actualUser, pathname])

	useEffect(() => {
		if (editableStr !== 'Delegar responsável') {
			responsables ?
			localStorage.setItem('responsable', JSON.stringify([
				...responsables,
				{ assetId: actualAsset.id, responsable: editableStr },
			])) :
			localStorage.setItem('responsable', JSON.stringify([
				{ assetId: actualAsset.id, responsable: editableStr },
			]))
			setEditableStr('Delegar responsável');
		}
	}, [editableStr, actualAsset.id, responsables])
	
	const contextValue = {
		units,
		users,
		company,
		setActUserId,
		assets,
		actualUser,
		actualUnit,
		setActualUnit,
		setActAssetId,
		actualAsset,
		editableStr,
		setEditableStr,
		responsables,
	}

	return (
		<DataContext.Provider value={contextValue}>
			{children}
		</DataContext.Provider>
	);
}

export default Provider;
