import React from 'react';
import PropTypes from 'prop-types';
import {
	Text,
	View,
} from 'react-native';
import AlertsStyles from '../../styles/AlertStyles';
import Header from '../Header'

class AlertDetails extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		header: (
			<Header
				title="Notifications"
				hasBackButton
				goBack={ () => navigation.goBack() }
			/>
		),
		title: "Home",
		swipeEnabled: false,
	});

	constructor(props) {
		super(props);
	}

	render() {
		const { state } = this.props.navigation;
		const item = state.params.currentAlert;
		return (
			<View key={ state.params.index } style={ AlertsStyles.alertDetailsContainer }>
				<Text style={ AlertsStyles.alertDetailsName }>
					{item.name}
				</Text>
				<Text style={ AlertsStyles.alertDetailsDescription }>
					{item.description}
				</Text>
			</View>
		);
	}
}

AlertDetails.propTypes = {
	navigation: PropTypes.object.isRequired
};

export default AlertDetails;
