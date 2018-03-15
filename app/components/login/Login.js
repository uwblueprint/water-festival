import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import LoginForm from './LoginForm';
import logo from '../../images/wwcgf_logo.png';

class Login extends React.Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);

		const { navigate } = props.navigation;

		this.navigate = navigate;
		this.onRegisterPress = this.onRegisterPress.bind(this);
	}

	onRegisterPress() {
		this.navigate('Register');
	}

	render() {
		return (
			<ScrollView style={ styles.container }>
				<View style={{ alignItems: 'center' }}>
					<Image resizeMode="contain" style={ styles.logo } source={ logo } />
				</View>
				<LoginForm onRegisterPress={ this.onRegisterPress } />
			</ScrollView>
		);
	}
}

Login.propTypes = {
	navigation: PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	logo: {
		justifyContent: 'center',
		marginTop: 70,
		alignItems: 'center',
		height: 180
	}
});

export default Login;
