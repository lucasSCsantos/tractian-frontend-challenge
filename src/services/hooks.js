import { useEffect, useState } from "react";

export const useFetch = (url, initialValue) => {
	const [result, setResult] = useState(initialValue);
	
	useEffect(() => {
		fetch(url)
			.then(r => r.json())
			.then(json => setResult(json));
	}, [])

	return result;
}