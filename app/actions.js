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

export const login = () => ({ type: LOGIN });
export const logout = () => ({ type: LOGOUT });
