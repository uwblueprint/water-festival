import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	View,
	Image,
	Text,
	ScrollView
} from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeStyles from '../../styles/HomeStyles';
import logo from '../../images/wwcgf_logo.png';
import { darkGray } from '../../styles/Colours';
import { logout } from '../../actions';

class Home extends React.Component {

	static navigationOptions = () => ({
		header: null,
		title: 'Home'
	});

	constructor(props) {
		super(props);

		const { onLogout, name } = props;

		this.state = {
			onLogout,
			name
		};
	}

	render() {
		return (
			<ScrollView
				style={ HomeStyles.container }
				contentContainerStyle={ HomeStyles.scrollContainer }
			>
				<View style={ HomeStyles.topBar }>
					<Icon
						name="notifications"
						color={ darkGray }
						size={ 35 }
						onPress={ () => this.props.navigation.navigate("AlertsScreen") }
					/>
					<Image resizeMode="contain" style={ HomeStyles.logo } source={ logo } />
					<Icon
						name="settings"
						color={ darkGray }
						size={ 35 }
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

const mapStateToProps = ({ currentUser }) => {
	const name = (currentUser && currentUser.hasOwnProperty('name')) ? currentUser.name : '';
	return { name };
};

const mapDispatchToProps = dispatch => {
	return {
		onLogout: () => {
			dispatch(logout());
		}
	};
};

Home.propTypes = {
	name: PropTypes.string.isRequired,
	navigation: PropTypes.object.isRequired,
	onLogout: PropTypes.func.isRequired,
	navigate: PropTypes.func
};

Home.defaultProps = {
	navigate: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
