import React, { Component } from 'react';
import Swiper from 'react-native-swiper';

export class ListSlider extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const i = this.props.currentIndex;
		const itemList = this.props.itemList;
		const props = {
			loadMinimal: true,
			loadMinimalSize: 1,
			loop: false,
			index: i,
			dotColor: '#C5C5C5',
			activeDotColor: '#4D678B',
			removeClippedSubviews: false,
		};
		return (
			<Swiper {...props}>
				{itemList.map(this.props.renderItem)}
			</Swiper>
		);
	}
}
