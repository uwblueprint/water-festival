import React from 'react';
import { StackNavigator, NavigationActions } from 'react-navigation';
import Header from '../components/Header';
import AlertsList from '../components/alerts/AlertsList';

class AlertsScreen extends React.Component {

	static navigationOptions = ({ navigation }) => ({
		header: (
			<Header
				title="Notifications"
				hasBackButton
				// Need NavigationActions to access prev page bc nested stack navigators
				goBack={ () => navigation.dispatch(NavigationActions.back()) }
			/>
		),
		title: "Home",
	});

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<AlertsList />
		);
	}
}

const AlertsScreenStack = StackNavigator({
	AlertsList: {
		screen: AlertsScreen,
	},
},
{
	mode: 'modal',
	headerMode: "none",
});

export default AlertsScreenStack;
