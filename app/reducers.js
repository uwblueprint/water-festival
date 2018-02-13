import { combineReducers } from 'redux'
import {
	FAQ_LOADED,
	LOGIN,
	LOGOUT
} from './actions';

// Retrieve FAQ List from server
const currentQuestions = (state = [], action) => {
	switch (action.type) {
		case FAQ_LOADED: {
			const { faqList } = action;
			// eslint-disable-next-line no-console
			if (!faqList) console.log('ERROR: faqList is undefined');
			return faqList || state;
		}
		default:
			return state;
	}
};

// returns login status
const loginStatus = (state = false, action) => {
	switch (action.type) {
		case LOGIN:
			return true;
		case LOGOUT:
			return false;
		default:
			return state;
	}
};


// Turns different reducing functions into a single reducing function
const reducers = combineReducers({
	currentQuestions,
	loginStatus
});

export default reducers;
