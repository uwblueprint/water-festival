import React from 'react';
// Redux
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
// Redux Persist
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/lib/integration/react';
// Redux Offline
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
// Redux Middleware
import logger from 'redux-logger';
// Misc
import MainContainer from './app/MainContainer';
import reducers from './app/reducers';

const initalState = {};

const persistConfig = {
	key: 'root',
	storage,
	stateReconciler: autoMergeLevel2 // shallow merge state 2 layers down
};

const store = createStore(
	persistReducer(persistConfig, reducers),
	initalState,
	compose(
		applyMiddleware(logger),
		offline(offlineConfig)
	)
);

const persistor = persistStore(store);

// PersistGate uses loading screen until persisted state has been retrieved and saved to redux
const WaterFestivalApp = () => (
	<Provider store={ store }>
		<PersistGate persistor={ persistor }>
			<MainContainer />
		</PersistGate>
	</Provider>
);

export default WaterFestivalApp;
