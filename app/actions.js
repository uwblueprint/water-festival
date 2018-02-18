/*
 * action types
 */
export const FAQ_LOADED = 'FAQ_LOADED';
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const REGISTER = "REGISTER";


/*
 * action creators
 */
export const faqLoaded = (faqList) => {
	return { type: FAQ_LOADED, faqList };
};

export const login = (user) => ({ type: LOGIN, user });
export const logout = () => ({ type: LOGOUT });
export const register = (user) => ({ type: REGISTER, user });
