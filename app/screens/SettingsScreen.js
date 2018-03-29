import React from 'react';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation'
import Header from '../components/Header'
import Settings from '../components/settings/Settings'

class SettingsScreen extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		header: (
			<Header
				title="Settings"
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
			<Settings navigation={ this.props.navigation } />
		);
	}
}

SettingsScreen.propTypes = {
	navigation: PropTypes.object.isRequired,
};

export default SettingsScreen;
