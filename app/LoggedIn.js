import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NetInfo } from 'react-native';
import { connect } from 'react-redux';
import Container from './Container';
import LoadingScreen from './screens/LoadingScreen';
import { getFaqList, getActivityList, getAlertsList } from './actions';
import { arrayOfObjectEquals } from './utils/arrays';

class LoggedIn extends Component {
	constructor(props) {
		super(props);

		const {
			loaded,
			loadFaq,
			loadActivities,
			loadAlerts
		} = props;


		this.state = {
			loaded: loaded || {},
			loadFaq,
			loadActivities,
			loadAlerts,
			isConnected: true,
			progress: 0.1
		};

		// Checks if user is connected to the internet
		NetInfo.isConnected.fetch().then(isConnected => {
			this.setState({ isConnected });

			// Load app data if connected
			if (isConnected && loaded) this.getData(loaded);
		});

		this.getData = this.getData.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (!arrayOfObjectEquals(nextProps.loaded, this.state.loaded)) {
			this.setState({ loaded: nextProps.loaded || {} });
		}

		if (this.state.progress < 1) {
			this.getData(nextProps.loaded);
		}
	}

	getData(loaded) {
		const { loadAlerts, loadActivities, loadFaq } = this.state;

		if (!loaded.alertsLoaded) {
			this.setState({ progress: 0.1 });
			loadAlerts();
		} else if (!loaded.faqLoaded) {
			this.setState({ progress: 0.5 });
			loadFaq();
		} else if (!loaded.allActivitiesLoaded) {
			this.setState({ progress: 0.8 });
			loadActivities();
		} else this.setState({ progress: 1.0 });

		setTimeout(() => this.setState({ progress: 1.0 }), 2000);
	}

	render() {
		const { isConnected, progress } = this.state;

		// If not connected to internet or data fully loaded
		if (isConnected === false || progress === 1)
			return <Container />;
		// If connected but data is not fully loaded
		else return <LoadingScreen progress={ progress } />;
	}
}

const mapStateToProps = ({ loaded }) => {
	return { loaded };
};

const mapDispatchToProps = dispatch => {
	return {
		loadFaq: () => dispatch(getFaqList()),
		loadActivities: () => dispatch(getActivityList()),
		loadAlerts: () => dispatch(getAlertsList())
	};
}

LoggedIn.propTypes = {
	loaded: PropTypes.object.isRequired,
	loadFaq: PropTypes.func.isRequired,
	loadActivities: PropTypes.func.isRequired,
	loadAlerts: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);
