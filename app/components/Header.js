import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderStyles from '../styles/HeaderStyles';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.goBack = this.props.goBack;
	}

	getBackButton() {
		if (!this.props.hasBackButton) {
			return null;
		}
		return (
			<Icon
				name="chevron-left"
				onPress={() => this.goBack() }
				color="white"
				size={ 35 }
			/>
		);
	}

	render() {
		return (
			<View style={ HeaderStyles.headerContainer }>
				<View style={ HeaderStyles.leftContainer }>
					{this.getBackButton()}
				</View>
				<Text style={ HeaderStyles.headerText }>
					{this.props.title}
				</Text>
				<View style={ HeaderStyles.rightContainer } />
			</View>
		);
	}
}

Header.propTypes = {
	hasBackButton: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired,
	goBack: PropTypes.func
};
