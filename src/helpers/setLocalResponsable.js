const setLocalResponsable = (editableStr, responsables, actualAsset, setEditableStr) => {
	if (editableStr !== 'Delegar responsável') {
		if(responsables) {
			const idx = responsables.indexOf(responsables.find((resp) => (
				resp.assetId === actualAsset.id
			)))
			if (idx >= 0) {
				localStorage.setItem('responsable', JSON.stringify([
					...responsables.splice(0, idx),
					{ assetId: actualAsset.id, responsable: editableStr },
					...responsables.splice(idx + 1)
				])) 
			} else {
				localStorage.setItem('responsable', JSON.stringify([
					...responsables,
					{ assetId: actualAsset.id, responsable: editableStr },
				])) 
			}
		} else {
			localStorage.setItem('responsable', JSON.stringify([
				{ assetId: actualAsset.id, responsable: editableStr },
			]))
			setEditableStr('Delegar responsável');
		}
	}
}

export default setLocalResponsable;