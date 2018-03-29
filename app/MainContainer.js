import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NetInfo } from 'react-native';
import { connect } from 'react-redux';
import LoginScreen from './screens/LoginScreen';
import Container from './Container';
import LoadingScreen from './screens/LoadingScreen';
import { getFaqList, getActivityList, getAlertsList } from './actions';
import { arrayOfObjectEquals } from './utils/arrays';

class MainContainer extends Component {
	constructor(props) {
		super(props);

		const {
			isLoggedIn,
			loaded,
			loadFaq,
			loadActivities,
			loadAlerts
		} = props;

		this.state = {
			isLoggedIn,
			loaded,
			loadFaq,
			loadActivities,
			loadAlerts,
			isConnected: false,
			count: 0
		};

		this.getData = this.getData.bind(this);
	}

	getData() {
		const { loaded, loadAlerts, loadActivities, loadFaq } = this.state;

		if (!loaded.alertsLoaded) {
			this.setState({ count: 0 });
			loadAlerts();
		} else if (!loaded.faqLoaded) {
			this.setState({ count: 1 });
			loadFaq();
		} else if (!loaded.allActivitiesLoaded) {
			this.setState({ count: 2 });
			loadActivities();
		}
	}

	componentDidMount() {
		// Checks if user is connected to the internet
	  NetInfo.getConnectionInfo().then(isConnected => {
			this.setState({ isConnected });

			// Load app data if connected
			if (this.state.isLoggedIn && isConnected) this.getData();
		});
	}

	componentWillReceiveProps(nextProps) {
		if (!arrayOfObjectEquals(nextProps.loaded, this.state.loaded)) {
			this.setState({ loaded: nextProps.loaded });
		} else if (this.state.count < 3) this.getData();

		if (nextProps.isLoggedIn !== this.state.isLoggedIn) {
			this.setState({ isLoggedIn: nextProps.isLoggedIn });
		}
	}

	render() {
		const {
			isLoggedIn,
			loaded,
			isConnected,
			count
		} = this.state;

		// If not logged in
		if (!isLoggedIn) return <LoginScreen />;
		// If not connected to internet or data fully loaded
		else if (!isConnected ||
			(loaded.alertsLoaded && loaded.allActivitiesLoaded && loaded.faqLoaded))
			return <Container />;
		// If connected but data is not fully loaded
		else return <LoadingScreen progress={ count } />;
	}
}

const mapStateToProps = ({ isLoggedIn, loaded}) => {
	return { isLoggedIn, loaded };
};

const mapDispatchToProps = dispatch => {
	return {
		loadFaq: () => dispatch(getFaqList()),
		loadActivities: () => dispatch(getActivityList()),
		loadAlerts: () => dispatch(getAlertsList())
	};
}

MainContainer.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired,
	loaded: PropTypes.object.isRequired,
	loadFaq: PropTypes.func.isRequired,
	loadActivities: PropTypes.func.isRequired,
	loadAlerts: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
