export const arrayEquals = (a1, a2) => (
	Array.isArray(a1) && Array.isArray(a2) && a1.length === a2.length && a1.every((v,i) => {
		if (v !== a2[i]) console.log('v: ', v, '  , w: ', a2[i]);
		return v === a2[i];
	})
);

export const objectEquals = (o1, o2) => (
	typeof o1 === 'object' && typeof o2 === 'object' && Object.keys(o1).length === Object.keys(o2).length && Object.keys(o1).every(k => {
		const isEqual = (Array.isArray(o1[k]) && Array.isArray(o2[k]))
			? arrayEquals(o1[k], o2[k])
			: o1[k] === o2[k]
		if (!isEqual) console.log('o1[k]: ', o1[k], ',   o2[k]: ', o2[k]);
		return isEqual;
	})
);

export const arrayOfObjectEquals = (a1, a2) => (
	Array.isArray(a1) && Array.isArray(a2) && a1.length === a2.length && a1.every((v,i) => {
		if (!objectEquals(v, a2[i])) console.log('v1: ', v, '  , w1: ', a2[i]);
		return objectEquals(v, a2[i]);
	})
);
