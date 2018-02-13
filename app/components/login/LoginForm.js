//import liraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	StatusBar
} from 'react-native';

// create a component
class LoginForm extends Component {
	constructor(props) {
		super(props);

		const { onLoginPress } = props;
		this.state = { onLoginPress };
	}

	render() {
		return (
			<View style={ styles.container }>
				<StatusBar barStyle="light-content" />
				<TextInput
					style={ styles.input }
					autoCapitalize="none"
					onSubmitEditing={ () => this.passwordInput.focus() }
					autoCorrect={ false }
					keyboardType='email-address'
					returnKeyType="next"
					placeholder='Email or Mobile Num'
					placeholderTextColor='rgba(0,0,0,0.7)'
				/>
				<TextInput
					style={ styles.input }
					returnKeyType="go"
					ref={ (input)=> this.passwordInput = input }
					placeholder='Password'
					placeholderTextColor='rgba(0,0,0,0.7)'
					secureTextEntry
				/>
				<TouchableOpacity
					style={ styles.buttonContainer }
					onPress={ this.state.onLoginPress }
				>
					<Text style={ styles.buttonText }>LOGIN</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

LoginForm.propTypes = {
	onLoginPress: PropTypes.func.isRequired
};

// define your styles
const styles = StyleSheet.create({
		container: {
			padding: 20
		},
		input: {
			height: 40,
			backgroundColor: 'rgba(167, 190, 229, 0.2)',
			marginBottom: 10,
			padding: 10,
			color: '#000'
		},
		buttonContainer: {
			backgroundColor: '#2980b6',
			paddingVertical: 15
		},
		buttonText: {
			color: '#fff',
			textAlign: 'center',
			fontWeight: '700'
		},
		loginButton: {
			backgroundColor: '#2980b6',
			color: '#fff'
		}
});

//make this component available to the app
export default LoginForm;
