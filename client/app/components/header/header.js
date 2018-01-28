import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HeaderStyles } from './styles';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	getBackButton() {
		if (!this.props.hasBackButton) {
			return null;
		}
		return (
			<Icon
				name="chevron-left"
				onPress={() => this.props.navigation.goBack()}
				color="white"
				size={35}
			/>
		);
	}

	render() {
		return (
			<View style={HeaderStyles.headerContainer}>
				<View style={HeaderStyles.leftContainer}>
					{this.getBackButton()}
				</View>
				<Text style={HeaderStyles.headerText}>
					{this.props.title}
				</Text>
				<View style={HeaderStyles.rightContainer} />
			</View>
		);
	}
}
