import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './services/history';
import AdminPage from './components/AdminPage';
import ErrorPage from './components/ErrorPage';
import Login from './components/login';
import Home from './components/Home';
function App() {
	return (
		<Router history={history}>
			<div>
				<Switch>
					<Route exact path='/home' component={Home} />
					<Route exact path='/' render={() => <Redirect to='/login' />} />
					<Route path='/login' component={Login} />
					<Route path='/admin' component={AdminPage} />
					<Route path='/error' component={ErrorPage} />
				</Switch>
			</div>
		</Router>
	);
}

export const History = history;

export default App;
