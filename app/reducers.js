import { combineReducers } from 'redux'
import {
	FAQ_LOADED,
	LOGIN_REQUEST,
	LOGIN_ROLLBACK,
	LOGIN,
	LOGOUT,
	EDIT_USER,
	ACTIVITY_LOADED,
	USER_ACTIVITY_LOADED,
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

const currentUser = (state = {}, action) => {
	switch (action.type) {
		case LOGIN: {
			if (!action.payload.success || !action.payload.user) return state;
			const { user } = action.payload;
			return user;
		}
		case LOGOUT:
			return {};
		case EDIT_USER: {
			if (!action.payload.user) return state;
			const { user } = action.payload;
			return user;
		}
		default:
			return state;
	}
}

// Retrieve Activities List from server
const currentActivities = (state = [], action) => {
	switch (action.type) {
		case ACTIVITY_LOADED: {
			const activityList = action.payload;
			return activityList || state;
		}
		default:
			return state;
	}
};

const myActivities = (state = [], action) => {
	switch (action.type) {
		case LOGIN: {
			if (!action.payload.success || !action.payload.user) return state;
			const { activities } = action.payload.user;
			return activities;
		}
		case USER_ACTIVITY_LOADED:
			return action.payload.activities;
		case ADD_ACTIVITY:
		case REMOVE_ACTIVITY:
			return action.activities;
		default:
			return state;
	}
};

// Retrieve Alerts List from server
const currentAlerts = (state = [], action) => {
	switch (action.type) {
		case ALERTS_LOADED: {
			const alertsList = action.payload;
			return alertsList || state;
		}
		default:
			return state;
	}
};

// Check for offline
const offline = (state = {}, action) => {
	case REHYDRATE: {
		// Empty API call queue on rehydration
		action.payload.offline.outbox = []

		return { ...state, ...action.payload.offline, busy: false };
	}
	case default:
		return state;
}

// Turns different reducing functions into a single reducing function
const reducers = combineReducers({
	currentQuestions,
	isLoggedIn,
	authStatus,
	currentUser,
	currentActivities,
	myActivities,
	currentAlerts,
});

export default reducers;
