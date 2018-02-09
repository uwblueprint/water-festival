/*
 * action types
 */
export const FAQ_LOADED = 'FAQ_LOADED';


/*
 * action creators
 */
export const faqLoaded = (faqList) => {
	return { type: FAQ_LOADED, faqList };
};
