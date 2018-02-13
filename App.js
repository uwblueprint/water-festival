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
		const view = (this.state.isLoggedIn) ? <Container /> : <Login />;
		return (
			<Provider store={ store }>
				{ view }
			</Provider>
		);
	}
}
