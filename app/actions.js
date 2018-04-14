/*
 * action types
 */
export const FAQ_LOAD_REQUEST = 'FAQ_LOAD_REQUEST'; // not used
export const FAQ_LOADED = 'FAQ_LOADED';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_ROLLBACK = 'LOGIN_ROLLBACK';
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const EDIT_USER = 'EDIT_USER';
export const EDIT_USER_REQUEST = 'EDIT_USER_REQUEST';
export const EDIT_USER_ROLLBACK = 'EDIT_USER_ROLLBACK';
export const USER_LOAD_REQUEST = 'USER_LOAD_REQUEST';  // not used
export const USER_LOADED = 'USER_LOADED';
export const ACTIVITY_LOAD_REQUEST = 'ACTIVITY_LOAD_REQUEST'; // not used
export const USER_ACTIVITY_REQUEST = 'USER_ACTIVITY_REQUEST'; // not used
export const ACTIVITY_LOADED = 'ACTIVITY_LOADED';
export const USER_ACTIVITY_LOADED = 'USER_ACTIVITY_LOADED';
export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const ADD_ACTIVITY_ROLLBACK = 'ADD_ACTIVITY_ROLLBACK';
export const REMOVE_ACTIVITY = 'REMOVE_ACTIVITY';
export const REMOVE_ACTIVITY_ROLLBACK = 'REMOVE_ACTIVITY_ROLLBACK';
export const ALERTS_REQUEST = 'ALERTS_REQUEST'; // not used
export const ALERTS_LOADED = 'ALERTS_LOADED';
export const TOKEN_LOAD_REQUEST = 'TOKEN_LOAD_REQUEST';
export const TOKEN_LOADED = 'TOKEN_LOADED';
export const SEND_TOKEN = 'SEND_TOKEN';
export const USER_ALERT_REQUEST = 'USER_ALERT_REQUEST'; // not used
export const USER_ALERT_LOADED = 'USER_ALERT_LOADED';
export const UPDATE_USER_ALERT = 'UPDATE_USER_ALERT';
export const UPDATE_USER_ALERT_ROLLBACK = 'UPDATE_USER_ALERT_ROLLBACK';


const API_URL = 'https://water-festival-server.appspot.com/';

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

export const getUser = (userId) => ({
	type: USER_LOAD_REQUEST,
	meta: {
		offline: {
			effect: {
				url: `${API_URL}/users/id/${userId}`,
				method: 'GET'
			},
			commit: { type: USER_LOADED }
		}
	}
});

export const editUser = (user, oldUser) => ({
	type: EDIT_USER_REQUEST,
	payload: { user },
	meta: {
		offline: {
			effect: {
				url: `${API_URL}/users/edit`,
				method: 'PUT',
				body: JSON.stringify(user)
			},
			commit: { type: EDIT_USER },
			rollback: {
				type: EDIT_USER_ROLLBACK,
				meta: { user: oldUser }
			}
		}
	}
});

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

export const getUserLastAlertSeen = (userId) => ({
	type: USER_ALERT_REQUEST,
	meta: {
		offline: {
			effect: {
				url: `${API_URL}/users/id/${userId}`,
				method: 'GET'
			},
			commit: { type: USER_ALERT_LOADED }
		}
	}
});

export const updateUserLastAlertSeen = (id, oldLastAlertSeen, newLastAlertSeen) => ({
	type: UPDATE_USER_ALERT,
	lastAlertSeen: newLastAlertSeen,
	meta: {
		offline: {
			effect: {
				url: `${API_URL}/users/edit`,
				method: 'PUT',
				body: JSON.stringify({
					id,
					lastAlertSeen: newLastAlertSeen
				})
			},
			rollback: {
				type: UPDATE_USER_ALERT_ROLLBACK,
				meta: { lastAlertSeen: oldLastAlertSeen }
			}
		}
	}
});

export const addActivity = (id, oldActivities, newActivities) => ({
	type: ADD_ACTIVITY,
	activities: newActivities,
	meta: {
		offline: {
			effect: {
				url: `${API_URL}/users/edit`,
				method: 'PUT',
				body: JSON.stringify({
					id,
					activities: newActivities
				})
			},
			rollback: {
				type: ADD_ACTIVITY_ROLLBACK,
				meta: { activities: oldActivities }
			}
		}
	}
});

export const removeActivity = (id, oldActivities, newActivities) => ({
	type: REMOVE_ACTIVITY,
	activities: newActivities,
	meta: {
		offline: {
			effect: {
				url: `${API_URL}/users/edit`,
				method: 'PUT',
				body: JSON.stringify({
					id,
					activities: newActivities,
				})
			},
			rollback: {
				type: REMOVE_ACTIVITY_ROLLBACK,
				meta: { activities: oldActivities }
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

export const getTokenList = () => ({
	type: TOKEN_LOAD_REQUEST,
	meta: {
		offline: {
			// the network action to execute:
			effect: { url: `${API_URL}/tokens/list`, method: 'GET' },
			// action to dispatch when effect succeeds:
			commit: { type: TOKEN_LOADED }
		}
	}
});

export const sendToken = (tokenObject) => ({
	type: SEND_TOKEN,
	meta: {
		offline: {
			effect: {
				url: `${API_URL}/tokens/insert`,
				method: 'POST',
				body: JSON.stringify(tokenObject)
			}
		}
	}
});
