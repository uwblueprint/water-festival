import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'

import { Header } from '../components/header'
import { FaqList, FaqDetails } from '../components/faq'


class FaqScreen extends Component {
	static navigationOptions = () => ({
		header: <Header title="Information" />
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

const FaqScreenStack = StackNavigator({
	FaqList: {
		screen: FaqScreen,
	},
	FaqDetails: {
		screen: FaqDetails,
	},
}, {
	mode: 'modal',
});

export default FaqScreenStack;