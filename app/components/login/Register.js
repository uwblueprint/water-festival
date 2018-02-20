import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import RegisterForm from './RegisterForm';

class Register extends React.Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);

		const { navigate, goBack } = props.navigation;

		this.goBack = goBack;
		this.onHaveAccountPress = this.onHaveAccountPress.bind(this);
	}

	onHaveAccountPress() {
		this.goBack();
	}

	render() {
		return (
			<KeyboardAvoidingView behavior="padding" style={ styles.container }>
				<RegisterForm onHaveAccountPress={ this.onHaveAccountPress } />
			</KeyboardAvoidingView>
		);
	}
}

Register.propTypes = {
	navigation: PropTypes.object.isRequired,
}

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f2f6ff',
	}
});

export default Register;
