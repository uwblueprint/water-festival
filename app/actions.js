/*
 * action types
 */
export const FAQ_LOAD_REQUEST = 'FAQ_LOAD_REQUEST'; // not used
export const FAQ_LOADED = 'FAQ_LOADED';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_ROLLBACK = 'LOGIN_ROLLBACK';
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const ACTIVITY_LOAD_REQUEST = 'ACTIVITY_LOAD_REQUEST'; // not used
export const USER_ACTIVITY_REQUEST = 'USER_ACTIVITY_REQUEST'; // not used
export const ACTIVITY_LOADED = 'ACTIVITY_LOADED';
export const USER_ACTIVITY_LOADED = 'USER_ACTIVITY_LOADED';
export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const REMOVE_ACTIVITY = 'REMOVE_ACTIVITY';
export const ALERTS_REQUEST = 'ALERTS_REQUEST'; // not used
export const ALERTS_LOADED = 'ALERTS_LOADED';

const API_URL = 'https://water-fest.herokuapp.com';

/*
 * action creators
 */
export const getFaqList = () => ({
	type: FAQ_LOAD_REQUEST,
	meta: {
		offline: {
			// the network action to execute:
			effect: { url: `${API_URL}/faq/list`, method: 'GET' },
			// action to dispatch when effect succeeds:
			commit: { type: FAQ_LOADED }
		}
	}
});

export const login = ({ username, password }) => ({
		type: LOGIN_REQUEST,
		meta: {
			offline: {
				effect: {
					url: `${API_URL}/users/authenticate`,
					method: 'POST',
					body: JSON.stringify({
						username,
						password
					})
				},
				commit: { type: LOGIN },
				// action to dispatch if network action fails permanently:
				rollback: { type: LOGIN_ROLLBACK }
			}
		}
	});

export const logout = () => ({ type: LOGOUT });

export const getActivityList = () => ({
	type: ACTIVITY_LOAD_REQUEST,
	meta: {
		offline: {
			effect: {
				url: `${API_URL}/activities/list`,
				method: 'GET'
			},
			commit: { type: ACTIVITY_LOADED }
		}
	}
});

export const getUserActivities = (userId) => ({
	type: USER_ACTIVITY_REQUEST,
	meta: {
		offline: {
			effect: {
				url: `${API_URL}/users/id/${userId}`,
				method: 'GET'
			},
			commit: { type: USER_ACTIVITY_LOADED }
		}
	}
});

export const addActivity = (id, activities) => ({
	type: ADD_ACTIVITY,
	activities,
	meta: {
		offline: {
			effect: {
				url: `${API_URL}/users/edit`,
				method: 'PUT',
				body: JSON.stringify({
					id,
					activities
				})
			}
		}
	}
});

export const removeActivity = (id, activities) => ({
	type: REMOVE_ACTIVITY,
	activities,
	meta: {
		offline: {
			effect: {
				url: `${API_URL}/users/edit`,
				method: 'PUT',
				body: JSON.stringify({
					id,
					activities
				})
			}
		}
	}
});

export const getAlertsList = () => ({
	type: ALERTS_REQUEST,
	meta: {
		offline: {
			effect: {
				url: `${API_URL}/alerts/list`,
				method: 'GET'
			},
			commit: { type: ALERTS_LOADED }
		}
	}
});
