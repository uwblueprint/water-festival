import { combineReducers } from 'redux'
import {
	FAQ_LOADED,
	ACTIVITY_LOADED,
	ADD_ACTIVITY,
	REMOVE_ACTIVITY,
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
		} case REMOVE_ACTIVITY: {
			if (activityIndex >= 0) {
				state.splice(activityIndex, 1);
				return [...state];
			}
		}
		default:
			return state;
	}
};

// Turns different reducing functions into a single reducing function
const reducers = combineReducers({
	currentQuestions,
	currentActivities,
	myActivities
});

export default reducers;
