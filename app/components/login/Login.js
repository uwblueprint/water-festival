import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import LoginForm from './LoginForm';
import logo from '../../images/wwcgf_logo.png';

const Login = () => {
	return (
		<KeyboardAvoidingView behavior="padding" style={ styles.container }>
			<View style={ styles.loginContainer }>
				<Image resizeMode="contain" style={ styles.logo } source={ logo } />
			</View>
			<View style={ styles.formContainer }>
				<LoginForm />
			</View>
		</KeyboardAvoidingView>
	);
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
		height: 250
	}
});

export default Login;
