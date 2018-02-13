import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import Container from './app/Container';
import Login from './app/components/login/Login';
import reducers from './app/reducers';

const initalState = {};

const store = createStore(
	reducers,
	initalState,
	applyMiddleware(logger)
);

export default class WaterFestivalApp extends React.Component {
	state = {
		isLoggedIn: false
	};

	render() {
		if (this.state.isLoggedIn)
			return (
				<Provider store={ store }>
					<Container
						onLogoutPress={ () => this.setState({ isLoggedIn: false }) }
					/>
				</Provider>
			);
		else
			return (
				<Login
					onLoginPress={ () => this.setState({ isLoggedIn: true }) }
				/>
			);
	}

}
