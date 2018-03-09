import { combineReducers } from 'redux'
import {
	FAQ_LOADED,
	LOGIN_REQUEST,
	LOGIN_ROLLBACK,
	LOGIN,
	LOGOUT,
	ACTIVITY_LOADED,
	ADD_ACTIVITY,
	REMOVE_ACTIVITY,
	ALERTS_LOADED,
} from './actions';

const REHYDRATE = 'persist/REHYDRATE';

// Retrieve FAQ List from server
const currentQuestions = (state = [], action) => {
	switch (action.type) {
		case FAQ_LOADED: {
			const faqList = action.payload;
			// eslint-disable-next-line no-console
			if (!faqList) console.log('ERROR: faqList is undefined');
			return faqList || state;
		}
		default:
			return state;
	}
};

// returns login status
const isLoggedIn = (state = false, action) => {
	switch (action.type) {
		case LOGIN:
			return action.payload.success;
		case LOGOUT:
			return false;
		default:
			return state;
	}
};

const authStatus = (state = {}, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {};
		case LOGIN:
			return action.payload;
		case LOGIN_ROLLBACK:
			return state;
		case REHYDRATE:
			return {};
		default:
			return state;
	}
}

const userLogin = (state = {}, action) => {
	switch (action.type) {
		case LOGIN: {
			if (!action.payload.success) return state;
			const { user } = action.payload;
			return user;
		}
		case LOGOUT:
			return {};
		default:
			return state;
	}
}


// Retrieve Activities List from server
const currentActivities = (state = [], action) => {
	switch (action.type) {
		case ACTIVITY_LOADED: {
			const { activityList } = action;
			return activityList || state;
		}
		default:
			return state;
	}
};

const myActivities = (state = [], action) => {
	var activityIndex = state.indexOf(action.activityId);

	switch (action.type) {
		case ADD_ACTIVITY: {
			if (activityIndex < 0){
				return [...state, action.activityId];
			}
			return state;
		} case REMOVE_ACTIVITY: {
			if (activityIndex >= 0) {
				state.splice(activityIndex, 1);
				return [...state];
			}
			return state;
		}
		default:
			return state;
	}
};

// Retrieve Alerts List from server
const currentAlerts = (state = [], action) => {
	switch (action.type) {
		case ALERTS_LOADED: {
			const { alertsList } = action;
			// eslint-disable-next-line no-console
			if (!alertsList) console.log('ERROR: alertsList is undefined');
			return alertsList || state;
		}
		default:
			return state;
	}
};

// Turns different reducing functions into a single reducing function
const reducers = combineReducers({
	currentQuestions,
	isLoggedIn,
	authStatus,
	userLogin,
	currentActivities,
	myActivities,
	currentAlerts,
});

export default reducers;
