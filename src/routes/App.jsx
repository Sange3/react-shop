import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState'
import Auth0ProviderWithHistory from '../auth0Provider'
import ProtectedRoute from '../protected-route';
import '../styles/global.css';

const App = () => {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
				<Auth0ProviderWithHistory>
					<Layout>
						<Switch>
							<Route exact path="/" component={Login} />
							<ProtectedRoute exact path="/list" component={Home} />
							<Route path="*" component={NotFound} />
						</Switch>
					</Layout>
				</Auth0ProviderWithHistory>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;
