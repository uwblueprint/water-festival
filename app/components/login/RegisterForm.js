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
import HideWithKeyboard from 'react-native-hide-with-keyboard';

class RegisterForm extends Component {
	constructor(props) {
		super(props);

		const { onHaveAccountPress } = props;
		this.state = { onHaveAccountPress };
	}

	render() {
		return (
			<View style={ styles.container }>
				<StatusBar barStyle="light-content" />
				<View style= {styles.contentContainer}>
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
						activeOpacity={ 0.8 }
						style={ styles.buttonContainer }
						onPress={ () => {} }
					>
						<Text style={ styles.buttonText }>REGISTER</Text>
					</TouchableOpacity>
				</View>
				<HideWithKeyboard>
					<View style={ styles.footer }>
						<Text
							style={ styles.noAccount }
						>
							Already have an account?
						</Text>
						<Text
							style={ styles.register }
							onPress={ this.state.onHaveAccountPress }
						>
							LOGIN
						</Text>
					</View>
				</HideWithKeyboard>
			</View>
		);
	}
}

RegisterForm.propTypes = {
	onHaveAccountPress: PropTypes.func.isRequired
};

// define your styles
const darkBlue = '#0288D1';
const lightBlue = '#03A9F4';

const styles = StyleSheet.create({
		container: {
			flex: 1,
			padding: 20,
			marginTop: 30
		},
		contentContainer: {
			flex: 1
		},
		footer: {
			alignItems: 'center'
		},
		input: {
			height: 40,
			marginTop: 15,
			padding: 10,
			color: '#000'
		},
		buttonContainer: {
			backgroundColor: darkBlue,
			paddingVertical: 15,
			borderRadius: 30,
			borderWidth: 1,
			borderColor: lightBlue,
			marginTop: 20
		},
		buttonText: {
			color: '#fff',
			textAlign: 'center',
			fontWeight: '700'
		},
		forgotPassText: {
			color: 'blue',
			textAlign: 'right',
			fontSize: 13,
			marginBottom: 25,
			marginRight: 20
		},
		noAccount: {
			color: 'black',
			textAlign: 'center'
		},
		register: {
			color: 'blue',
			width: 100,
			textAlign: 'center',
			fontSize: 15,
			fontWeight: "bold",
			marginTop: 10
		}
});

export default RegisterForm;
