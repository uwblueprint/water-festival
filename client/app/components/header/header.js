import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { HeaderStyles } from './styles';

export class Header extends Component {
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
