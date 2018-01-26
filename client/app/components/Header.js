import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderStyles = StyleSheet.create({
	headerContainer: {
		backgroundColor: '#293038',
		height: 60,
		flexDirection: 'row',
		alignItems: 'center'
	},
	headerText: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#FFFFFF',
		textAlign: 'center'
	},
	leftContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	rightContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
});

export default class Header extends Component {
	constructor(props) {
		super(props);
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
				<View style={HeaderStyles.rightContainer}>
				</View>
			</View>
		);
	}

	getBackButton() {
		if (!this.props.hasBackButton) {
			return null;
		}
		return (
			<Icon
				name={'chevron-left'}
				onPress={() => this.props.navigation.goBack()}
				color={'white'}
				size={35}
			/>
		);
	}
}
