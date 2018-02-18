/*
 * action types
 */
export const FAQ_LOADED = 'FAQ_LOADED';
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";


/*
 * action creators
 */
export const faqLoaded = (faqList) => {
	return { type: FAQ_LOADED, faqList };
};

export const login = (user) => ({ type: LOGIN, user });
export const logout = () => ({ type: LOGOUT });
