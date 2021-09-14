import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Asset from './Pages/Asset';
import Assets from './Pages/Assets';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Orders from './Pages/Orders';

export default function Routes() {
	return (
		<Switch>
			<Route exact path="/home" component={ Home } />
			<Route exact path="/assets" component={ Assets } />
			<Route exact path="/assets/:id" component={ Asset } />
			<Route exact path="/orders" component={ Orders } />
			<Route path="*" component={ NotFound } />
		</Switch>
	)
}
