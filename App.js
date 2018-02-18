import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import Container from './app/Container';
import LoginScreen from './app/screens/LoginScreen';
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
		const view = (this.state.isLoggedIn) ? <Container /> : <LoginScreen />;
		return (
			<Provider store={ store }>
				{ view }
			</Provider>
		);
	}
}
