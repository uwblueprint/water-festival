import React, { Component } from 'react';
import BottomNavigation, { Tab, NavigationComponent } from 'react-native-material-bottom-navigation'
import { TabNavigator, StackNavigator } from 'react-navigation'

import Header from '../components/Header'
import FaqList from '../components/faq/FaqList'
import FaqDetails from '../components/faq/FaqDetails'

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

export default FaqScreenStack = StackNavigator({
	FaqList: {
		screen: FaqScreen,
	},
	FaqDetails: {
		screen: FaqDetails,
	},
}, {
	mode: 'modal',
});
