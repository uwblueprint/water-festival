//import liraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	StatusBar
} from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import { login } from '../../actions';

// create a component
class LoginForm extends Component {
	constructor(props) {
		super(props);

		const { onLoginPress } = props;
		this.state = { onLoginPress };
	}

	forgotPassword() {

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
					<Text
						style={ styles.forgotPassText }
						onPress={ this.forgotPassword }
					>
						Forgot your password?
					</Text>
					<TouchableOpacity
						activeOpacity={ 0.8 }
						style={ styles.buttonContainer }
						onPress={ this.state.onLoginPress }
					>
						<Text style={ styles.buttonText }>LOGIN</Text>
					</TouchableOpacity>
				</View>
				<HideWithKeyboard style={ styles.footer }>
					<Text
						style={ styles.noAccount }
					>
						Don't have an account?
					</Text>
					<Text
						style={ styles.register }
						onClick={ () => {} }
					>
						REGISTER
					</Text>
				</HideWithKeyboard>
			</View>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onLoginPress: () => {
			dispatch(login());
		}
	}
};

LoginForm.propTypes = {
	onLoginPress: PropTypes.func.isRequired
};

// define your styles
const darkBlue = '#0288D1';
const lightBlue = '#03A9F4';

const styles = StyleSheet.create({
		container: {
			flex: 1,
			padding: 20
		},
		contentContainer: {
			flex: 1
		},
		footer: {
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
			borderColor: lightBlue
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
			textAlign: 'center',
			fontSize: 15,
			fontWeight: "bold",
			marginTop: 10
		}
});

export default connect(null, mapDispatchToProps)(LoginForm);
