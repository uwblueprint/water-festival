/*
 * action types
 */
export const FAQ_LOADED = 'FAQ_LOADED';
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const ACTIVITY_LOADED = 'ACTIVITY_LOADED';
export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const REMOVE_ACTIVITY = 'REMOVE_ACTIVITY';
export const ALERTS_LOADED = 'ALERTS_LOADED';

/*
 * action creators
 */
export const faqLoaded = (faqList) => ({ type: FAQ_LOADED, faqList });

export const login = (user) => ({ type: LOGIN, user });

export const logout = () => ({ type: LOGOUT });

export const activityLoaded = (activityList) => ({ type: ACTIVITY_LOADED, activityList });

export const addActivity = (activityId) => ({ type: ADD_ACTIVITY, activityId });

export const removeActivity = (activityId) => ({ type: REMOVE_ACTIVITY, activityId });

export const alertsLoaded = (alertsList) => ({ type: ALERTS_LOADED, alertsList });
