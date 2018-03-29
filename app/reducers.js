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
	ADD_ACTIVITY_ROLLBACK,
	REMOVE_ACTIVITY,
	REMOVE_ACTIVITY_ROLLBACK,
	ALERTS_LOADED,
	PREPCHECK_LOADED,
  PREPCHECKED,
	PREPCHECKED_ROLLBACK,
	PREPUNCHECKED,
	PREPUNCHECKED_ROLLBACK
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
		case ADD_ACTIVITY_ROLLBACK:
		case REMOVE_ACTIVITY_ROLLBACK:
			return action.meta.activities;
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

const myPrepCheck = (state = [], action) => {
	switch (action.type) {
		case LOGIN: {
			if (!action.payload.success || !action.payload.user) return state;
			const { prepCheck } = action.payload.user;
			return prepCheck;
		}
		case PREPCHECK_LOADED:
			return action.payload.prepCheck;
		case PREPCHECKED:
		case PREPUNCHECKED:
			return action.prepCheck;
		case PREPCHECKED_ROLLBACK:
		case PREPUNCHECKED_ROLLBACK:
			return action.meta.prepCheck;
		default:
			return state;
	}
};

// Check for offline
const offline = (state = {}, action) => {
	switch (action.type) {
		case REHYDRATE: {
			const { payload } = action;
			if (!payload) return state;

			// Empty API call queue on rehydration
			if (payload.hasOwnProperty('offline')) payload.offline.outbox = [];
			if (!payload.currentUser || !payload.currentUser.hasOwnProperty('_id')) {
				payload.authStatus = {};
				payload.currentUser = {};
				payload.isLoggedIn = false;
				payload.myActivities = [];
			}

			return { ...state, ...payload, busy: false };
		}
		default:
			return state;
	}
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
	myPrepCheck,
	offline,
});

export default reducers;
