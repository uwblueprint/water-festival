import { combineReducers } from 'redux'
import {
	FAQ_LOADED,
	LOGIN_REQUEST,
	LOGIN_ROLLBACK,
	LOGIN,
	LOGOUT,
	USER_LOADED,
	EDIT_USER_REQUEST,
	EDIT_USER,
	EDIT_USER_ROLLBACK,
	ACTIVITY_LOADED,
	USER_ACTIVITY_LOADED,
	ADD_ACTIVITY,
	ADD_ACTIVITY_ROLLBACK,
	REMOVE_ACTIVITY,
	REMOVE_ACTIVITY_ROLLBACK,
	ALERTS_LOADED,
	TOKEN_LOADED,
	USER_ALERT_LOADED,
	UPDATE_USER_ALERT,
	UPDATE_USER_ALERT_ROLLBACK
} from './actions';

const REHYDRATE = 'persist/REHYDRATE';

// Retrieve FAQ List from server
const currentQuestions = (state = [], action) => {
	switch (action.type) {
		case FAQ_LOADED: {
			const faqList = action.payload;
			if (!faqList || !Array.isArray(faqList)) {
				return state;
			}
			return faqList;
		}
		default:
			return state;
	}
};

const authStatus = (state = {}, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {};
		case LOGIN:
			return action.payload || {};
		case LOGIN_ROLLBACK:
			return state;
		case REHYDRATE: {
			const { payload } = action;

			if (payload == null || !payload.currentUser || !payload.currentUser.hasOwnProperty('_id'))
				return {};
			return state;
		}
		default:
			return state;
	}
}

const currentUser = (state = {}, action) => {
	switch (action.type) {
		case LOGIN: {
			const { payload } = action;

			if (payload == null || !payload.success || !payload.user) return state;
			const { user } = payload;
			return user || {};
		}
		case LOGOUT:
			return {};
		case USER_LOADED: {
			const { payload } = action;

			if (payload == null || !payload._id) return state;
			return payload || state;
		}
		case EDIT_USER_REQUEST:
		case EDIT_USER: {
			const { payload } = action;
			if (payload == null || payload.user == null) return state;
			const { user } = payload;
			return user || state;
		}
		case EDIT_USER_ROLLBACK: {
			const { meta } = action;
			if (meta == null || meta.user == null) return state;
			const { user } = action.meta;
			return user || state;
		}
		case REHYDRATE: {
			const { payload } = action;
			if (payload == null || payload.currentUser == null || !payload.currentUser.hasOwnProperty('_id'))
				return {};
			return state;
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
		case REHYDRATE: {
			const { payload } = action;
			if (payload == null || !payload.currentUser || !payload.currentUser.hasOwnProperty('_id'))
				return [];
			return state;
		}
		case LOGIN: {
			const { payload } = action;
			if (payload == null || !payload.success || payload.user == null) return state;
			const { activities } = action.payload.user;
			return activities || [];
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

const lastAlertSeen = (state = {}, action) => {
	switch (action.type) {
		case USER_ALERT_LOADED:
			return action.payload.lastAlertSeen;
		case UPDATE_USER_ALERT:
			if (!action.lastAlertSeen) return state;
			return action.lastAlertSeen;
		case UPDATE_USER_ALERT_ROLLBACK:
			return action.meta.lastAlertSeen;
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

// Retrieve token List from server
const currentTokens = (state = [], action) => {
	switch (action.type) {
		case TOKEN_LOADED: {
			const tokenList = action.payload;
			// eslint-disable-next-line no-console
			if (tokenList == null) console.log('ERROR: tokenList is undefined');
			return tokenList || state;
		}
		default:
			return state;
	}
};

// Check for offline
const offline = (state = {}, action) => {
	switch (action.type) {
		case REHYDRATE:
			return { outbox: [], busy: false };
		default:
			return state;
	}
}

// Handles boolean that tells app what data has been loaded into store
const loaded = (state = {
	faqLoaded: false,
	allActivitiesLoaded: false,
	alertsLoaded: false
}, action) => {
	switch (action.type) {
		case REHYDRATE:
		case LOGOUT:
			state.faqLoaded = false;
			state.allActivitiesLoaded = false;
			state.alertsLoaded = false;
			return state;
		case FAQ_LOADED:
			state.faqLoaded = true;
			return state;
		case ACTIVITY_LOADED:
			state.allActivitiesLoaded = true;
			return state;
		case ALERTS_LOADED:
			state.alertsLoaded = true;
			return state;
		default:
			return state;
	}
}

// Turns different reducing functions into a single reducing function
const reducers = combineReducers({
	currentQuestions,
	currentTokens,
	authStatus,
	currentUser,
	currentActivities,
	myActivities,
	currentAlerts,
	offline,
	loaded,
	lastAlertSeen
});

export default reducers;
