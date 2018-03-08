import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/lib/integration/react';
import logger from 'redux-logger';
import MainContainer from './app/MainContainer';
import reducers from './app/reducers';
import LoadingScreen from './app/screens/LoadingScreen';

const initalState = {};

const persistConfig = {
	key: 'root',
	storage,
	stateReconciler: autoMergeLevel2 // shallow merge state 2 layers down
};

const store = createStore(
	persistReducer(persistConfig, reducers),
	initalState,
	applyMiddleware(logger)
);

const persistor = persistStore(store);


// PersistGate uses loading screen until persisted state has been retrieved and saved to redux
const WaterFestivalApp = () => (
	<Provider store={ store }>
		<PersistGate loading={ <LoadingScreen /> } persistor={ persistor }>
			<MainContainer />
		</PersistGate>
	</Provider>
);

export default WaterFestivalApp;
