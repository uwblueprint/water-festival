import React from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Image,
	Text,
} from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeStyles from '../../styles/HomeStyles';
import logo from '../../images/wwcgf_logo.png';
import { darkGray } from '../../styles/Colours';

class Home extends React.Component {

	static navigationOptions = () => ({
		header: null,
		title: 'Home'
	});

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={ HomeStyles.container }>
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
					Welcome to the Water Festival app!
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
					onPress={ () => this.props.navigation.navigate("MyActivitiesScreen") }
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
					onPress={ () => this.props.navigation.navigate("Logout") }
					activeOpacity={ 1 }
					containerStyle={ HomeStyles.logoutButton }
					style={ HomeStyles.logoutButtonText }
				>
					LOGOUT
				</Button>

			</View>
		);
	}
}

Home.propTypes = {
	navigation: PropTypes.object.isRequired,
	navigate: PropTypes.func,
};

Home.defaultProps = {
	navigate: () => {}
};

export default Home;
