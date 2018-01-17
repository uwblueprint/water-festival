import React, { Component } from 'react';
import BottomNavigation, { Tab, NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator, StackNavigator } from 'react-navigation'

import { Header } from '../components/header'
import { FaqList, FaqDetails } from '../components/faq'

class FaqScreen extends Component {
	static navigationOptions = ({navigation}) => ({
		header: <Header title={'Information'} />
	});

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<FaqList navigation={this.props.navigation} />
		);
	}
}

export const FaqScreenStack = StackNavigator({
	FaqList: {
		screen: FaqScreen,
	},
	FaqDetails: {
		screen: FaqDetails,
	},
}, {
	mode: 'modal',
});
