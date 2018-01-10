import { Platform } from 'react-native';
import { combineReducers } from 'redux'
import { FAQ_LOADED } from './actions';

const ADDRESS = Platform.OS === 'android'
	? 'http://192.168.1.141'
	: 'http://localhost';
const API_URL = `${ADDRESS}:9090/faq`;

// Retrieve FAQ List from server
const currentQuestions = (state = [], action) => {
	switch (action.type) {
		case FAQ_LOADED:
			const { faqList } = action;
			if (!faqList) console.log('ERROR: faqList is undefined');
			return faqList || state;
		default:
			return state;
	}
};


// Turns different reducing functions into a single reducing function
const reducers = combineReducers({
	currentQuestions
});

export default reducers;
