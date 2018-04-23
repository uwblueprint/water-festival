import React from 'react';
// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
// Redux Offline
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/config';
// Redux Middleware
import logger from 'redux-logger';
// Misc
import MainContainer from './app/MainContainer';
import reducers from './app/reducers';

const store = createStore(
	reducers,
	compose(
		applyMiddleware(logger),
		offline(offlineConfig)
	)
);

const WaterFestivalApp = () => (
	<Provider store={ store }>
		<MainContainer />
	</Provider>
);

export default WaterFestivalApp;
