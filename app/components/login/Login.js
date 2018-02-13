import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';
import logo from '../../images/logo.png';

// create a component
class Login extends Component {
	constructor(props) {
		super(props);

		const { onLoginPress } = props;
		this.state = { onLoginPress };
	}

	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={ styles.container }>
				<View style={ styles.loginContainer }>
					<Image resizeMode="contain" style={ styles.logo } source={ logo } />
				</View>
				<View style={ styles.formContainer }>
					<LoginForm onLoginPress={ this.state.onLoginPress } />
				</View>
			</KeyboardAvoidingView>
		);
	}
}

Login.propTypes = {
	onLoginPress: PropTypes.func.isRequired
};

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f2f6ff',
	},
	loginContainer:{
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logo: {
		position: 'absolute',
		width: 500,
		height: 200
	}
});

export default Login;
