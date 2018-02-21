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

class LoginForm extends Component {
	constructor(props) {
		super(props);

		const { onLogin, onRegisterPress } = props;
		this.state = {
			username: '',
			password: '',
			onLogin,
			onRegisterPress
		};

		this.onLoginPress = this.onLoginPress.bind(this);
	}

	forgotPassword() {

	}

	onLoginPress() {
		const { username, password } = this.state;

		this.state.onLogin({
			username,
			password
		});
	}

	render() {
		return (
			<View style={ styles.container }>
				<StatusBar barStyle="light-content" />
				<View style= {styles.contentContainer}>
					<TextInput
						style={ styles.input }
						onChangeText={ username => this.setState({ username }) }
						autoCorrect={ false }
						onSubmitEditing={ () => this.refs.passwordField.focus() }
						returnKeyType='next'
						placeholder='Username'
						underlineColorAndroid={ darkBlue }
						placeholderTextColor='rgba(0,0,0,0.7)'
					/>
					<TextInput
						ref='passwordField'
						style={ styles.input }
						onChangeText={ password => this.setState({ password }) }
						returnKeyType='go'
						onSubmitEditing={ () => this.onLoginPress() }
						placeholder='Password'
						underlineColorAndroid={ darkBlue }
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
						onPress={ this.onLoginPress }
					>
						<Text style={ styles.buttonText }>LOGIN</Text>
					</TouchableOpacity>
				</View>
				<HideWithKeyboard>
					<View style={ styles.footer }>
						<Text
							style={ styles.noAccount }
						>
							Don't have an account?
						</Text>
						<Text
							style={ styles.register }
							onPress={ this.state.onRegisterPress }
						>
							REGISTER
						</Text>
					</View>
				</HideWithKeyboard>
			</View>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onLogin: (user) => {
			dispatch(login(user));
		}
	};
};

LoginForm.propTypes = {
	onLogin: PropTypes.func.isRequired,
	onRegisterPress: PropTypes.func.isRequired
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
			width: 100,
			textAlign: 'center',
			fontSize: 15,
			fontWeight: 'bold',
			marginTop: 10
		}
});

export default connect(null, mapDispatchToProps)(LoginForm);
