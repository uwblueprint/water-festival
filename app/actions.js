/*
 * action types
 */
export const FAQ_LOADED = 'FAQ_LOADED';
export const ACTIVITY_LOADED = 'ACTIVITY_LOADED';
export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const REMOVE_ACTIVITY = 'REMOVE_ACTIVITY';

/*
 * action creators
 */
export const faqLoaded = (faqList) => {
	return { type: FAQ_LOADED, faqList };
};

export const activityLoaded = (activityList) => {
	return { type: ACTIVITY_LOADED, activityList };
};

export const addActivity = (activityId) => {
	return { type: ADD_ACTIVITY, activityId };
};

export const removeActivity = (activityId) => {
	return { type: REMOVE_ACTIVITY, activityId };
};
