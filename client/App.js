import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import Container from './app/Container';
import reducers from './app/reducers';

const initalState = {};

const store = createStore(
	reducers,
	initalState,
	applyMiddleware(logger)
);

export default function WaterFestivalApp() {
	return (
		<Provider store={store}>
			<Container />
		</Provider>
	)
}
