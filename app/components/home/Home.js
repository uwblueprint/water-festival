import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	View,
	Image,
	Text,
	ScrollView
} from 'react-native';
import { Permissions, Notifications } from 'expo';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeStyles from '../../styles/HomeStyles';
import logo from '../../images/wwcgf_logo.png';
import { darkGray } from '../../styles/Colours';
import { logout, getTokenList, sendToken } from '../../actions';


class Home extends React.Component {

	static navigationOptions = () => ({
		header: null,
		title: 'Home'
	});

	constructor(props) {
		super(props);

		this.state = {
			onLogout: props.onLogout,
			name: props.name,
			userId: props.userId,
			getTokenList: props.getTokenList,
			sendToken: props.sendToken,
			currentTokens: props.currentTokens
		};
	}

	componentWillMount() {
		this.registerForPushNotifications();
	}

	componentDidMount() {
		this.state.getTokenList();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.currentTokens !== this.state.currentTokens) {
			this.setState({
				currentTokens: nextProps.currentTokens
			});
		}
	}

	componentWillUnmount(){
			this._notificationSubscription && this._notificationSubscription.remove();
	}

	handleNotification = () => {
		this.props.navigation.navigate("AlertsScreen")
	};

	async registerForPushNotifications() {
		const { status: existingStatus } = await Permissions.getAsync(
			Permissions.NOTIFICATIONS
		);
		var finalStatus = existingStatus;

		if (existingStatus !== 'granted') {
			const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
			finalStatus = status;
		}
		if (finalStatus !== 'granted') return;

		var token = await Notifications.getExpoPushTokenAsync();
		this.subscription = Notifications.addListener(this.handleNotification);

		// We don't want to post tokens that have already been sent
		if (this.state.currentTokens.filter(t => t.token == token).length > 0) {
			return;
		}

		const tokenObject = {
			userId: this.state.userId,
			token: token
		};

		return this.state.sendToken(tokenObject);
	}

	render() {
		return (
			<ScrollView
				style={ HomeStyles.container }
				contentContainerStyle={ HomeStyles.scrollContainer }
			>
				<View style={ HomeStyles.topBar }>
					<Icon
						name="notifications-none"
						color={ darkGray }
						size={ 30 }
						onPress={ () => this.props.navigation.navigate("AlertsScreen") }
					/>
					<Image resizeMode="contain" style={ HomeStyles.logo } source={ logo } />
					<Icon
						name="settings"
						color={ darkGray }
						size={ 30 }
						onPress={ () => this.props.navigation.navigate("SettingsScreen") }
					/>
				</View>
				<Text
					style={ HomeStyles.welcomeMessage }
				>
					{ (this.state.name.length === 0) ? "Welcome!" : `Welcome, ${this.state.name}!` }
				</Text>
				<Button
					onPress={ () => this.props.navigation.navigate("AllActivitiesScreen") }
					activeOpacity={ 1 }
					containerStyle={ HomeStyles.button }
					style={ HomeStyles.buttonText }
				>
					Choose Your Activities
				</Button>
				<Button
					onPress={ () => this.props.navigation.navigate("MyScheduleScreen") }
					activeOpacity={ 1 }
					containerStyle={ HomeStyles.button }
					style={ HomeStyles.buttonText }
				>
					My Schedule
				</Button>
				<Button
					onPress={ () => this.props.navigation.navigate("GameScreen") }
					activeOpacity={ 1 }
					containerStyle={ HomeStyles.button }
					style={ HomeStyles.buttonText }
				>
					Groundwater Detective
				</Button>
				<Button
					onPress={ () => this.props.navigation.navigate("FaqScreen") }
					activeOpacity={ 1 }
					containerStyle={ HomeStyles.button }
					style={ HomeStyles.buttonText }
				>
					FAQ
				</Button>
				<Button
					onPress={ this.state.onLogout }
					activeOpacity={ 1 }
					containerStyle={ HomeStyles.logoutButton }
					style={ HomeStyles.logoutButtonText }
				>
					LOGOUT
				</Button>

			</ScrollView>
		);
	}
}

const mapStateToProps = ({ currentTokens, currentUser }) => {
	const name = (currentUser && currentUser.hasOwnProperty('name')) ? currentUser.name : '';
	const userId = (currentUser && currentUser.hasOwnProperty('_id')) ? currentUser._id : '';
	return {
		currentTokens,
		userId,
		name
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onLogout: () => {
			dispatch(logout());
		},
		getTokenList: () => {
			dispatch(getTokenList())
		},
		sendToken: (token) => {
			dispatch(sendToken(token))
		},
	};
};

Home.propTypes = {
	name: PropTypes.string.isRequired,
	userId: PropTypes.string.isRequired,
	currentTokens: PropTypes.array.isRequired,
	getTokenList: PropTypes.func.isRequired,
	navigation: PropTypes.object.isRequired,
	onLogout: PropTypes.func.isRequired,
	sendToken: PropTypes.func.isRequired,
	navigate: PropTypes.func
};

Home.defaultProps = {
	navigate: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
