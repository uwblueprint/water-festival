import React from 'react';
import PropTypes from 'prop-types';
import { StackNavigator, NavigationActions } from 'react-navigation';
import Header from '../components/Header';
import AlertsList from '../components/alerts/AlertsList';
import AlertDetails from '../components/alerts/AlertDetails'

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
			<AlertsList navigation={ this.props.navigation } />
		);
	}
}

const AlertsScreenStack = StackNavigator({
	AlertsList: {
		screen: AlertsScreen,
	},
	AlertDetails: {
		screen: AlertDetails,
	},
},
{
	mode: 'modal',
	headerMode: "none",
});

AlertsScreen.propTypes = {
	navigation: PropTypes.object.isRequired
};
export default AlertsScreenStack;
