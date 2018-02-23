import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import MainContainer from './app/MainContainer';
import reducers from './app/reducers';

const initalState = {};

const store = createStore(
	reducers,
	initalState,
	applyMiddleware(logger)
);

const WaterFestivalApp = () => (
	<Provider store={ store }>
		<MainContainer />
	</Provider>
);

export default WaterFestivalApp;
