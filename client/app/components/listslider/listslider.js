import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-native-swiper';

export default function ListSlider({ currentIndex, itemList, renderItem }) {
	const props = {
		loadMinimal: true,
		loadMinimalSize: 1,
		loop: false,
		index: currentIndex,
		dotColor: '#C5C5C5',
		activeDotColor: '#4D678B',
		removeClippedSubviews: false,
	};
	return (
		<Swiper {...props}>
			{itemList.map(renderItem)}
		</Swiper>
	);
}

ListSlider.propTypes = {
	currentIndex: PropTypes.number.isRequired,
	// eslint-disable-next-line react/forbid-prop-types
	itemList: PropTypes.array.isRequired,
	renderItem: PropTypes.func.isRequired
};
