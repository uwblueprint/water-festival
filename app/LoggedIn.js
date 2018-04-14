import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NetInfo, AppState } from 'react-native';
import { connect } from 'react-redux';
import Container from './Container';
import LoadingScreen from './screens/LoadingScreen';
import {
	getFaqList,
	getActivityList,
	getAlertsList,
	getUser
} from './actions';
import { arrayOfObjectEquals } from './utils/arrays';

class LoggedIn extends Component {
	constructor(props) {
		super(props);

		const {
			loaded,
			loadFaq,
			loadActivities,
			loadAlerts,
			loadUser,
			userId
		} = props;


		this.state = {
			appState: 'active',
			userId,
			loaded: loaded || {},
			loadFaq,
			loadActivities,
			loadAlerts,
			loadUser,
			isConnected: true,
			progress: 0.1
		};

		this.handleAppStateChange = this.handleAppStateChange.bind(this);
	}

	componentDidMount() {
		AppState.addEventListener('change', this.handleAppStateChange);
		// Checks if user is connected to the internet
		NetInfo.isConnected.fetch().then(isConnected => {
			this.setState({ isConnected });

			// Load app data if connected
			if (isConnected && this.state.loaded) this.getData(this.state.loaded);
		});
	}

	componentWillReceiveProps(nextProps) {
		if (this.state.userId !== nextProps.userId) {
				this.setState({ userId: nextProps.userId });
		}

		if (!arrayOfObjectEquals(nextProps.loaded, this.state.loaded)) {
			this.setState({ loaded: nextProps.loaded || {} });
		}

		if (this.state.progress < 1) {
			this.getData(nextProps.loaded);
		}
	}

	handleAppStateChange(nextState) {
		const { loadAlerts, loadActivities, loadFaq, loadUser, userId } = this.state;
		if (this.state.appState.match(/inactive|background/) && nextState === 'active') {
			console.log(userId)
			if (userId) loadUser(userId);
      loadAlerts();
			loadFaq();
			loadActivities();
    }
		console.log(nextState);
    this.setState({ appState: nextState });
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

		setTimeout(() => {
			if (this.state.progress < 1.0) this.setState({ progress: 1.0 })
		}, 2000);
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

const mapStateToProps = ({ loaded, currentUser }) => {
	const userId = (currentUser && currentUser.hasOwnProperty('_id')) ? currentUser._id : '';
	return { loaded, userId };
};

const mapDispatchToProps = dispatch => {
	return {
		loadFaq: () => dispatch(getFaqList()),
		loadActivities: () => dispatch(getActivityList()),
		loadAlerts: () => dispatch(getAlertsList()),
		loadUser: (userId) => dispatch(getUser(userId))
	};
}

LoggedIn.propTypes = {
	loaded: PropTypes.object.isRequired,
	userId: PropTypes.string.isRequired,
	loadFaq: PropTypes.func.isRequired,
	loadActivities: PropTypes.func.isRequired,
	loadAlerts: PropTypes.func.isRequired,
	loadUser: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);
