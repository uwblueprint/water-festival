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
			<LoginForm />
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
		justifyContent: 'center',
		maxHeight: 180,
		marginTop: 70
	},
	logo: {
		position: 'absolute',
		height: 180
	}
});

export default Login;
