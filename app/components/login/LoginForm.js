import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StatusBar
} from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import validate from '../../utils/validation';
import { login } from '../../actions';
import ErrorMessage from './ErrorMessage';
import styles from '../../styles/LoginFormStyles';

class LoginForm extends Component {
	constructor(props) {
		super(props);

		const { onLogin, onRegisterPress } = props;
		this.state = {
			username: '',
			password: '',
			onLogin,
			onRegisterPress,
			errorMsg: '',
		};

		this.onLoginPress = this.onLoginPress.bind(this);
	}

	onLoginPress() {
		const { username, password } = this.state;

		validate({
			username,
			password
		}, 'LOGIN', (error) => {
			if (!error) {
				this.setState({ errorMsg: '' });
				this.state.onLogin({
					username,
					password
				}, errorMsg => {
					if (errorMsg) {
						this.setState({ errorMsg });
					}
				});
			} else {
				this.setState({ errorMsg: error });
			}
		});
	}

	forgotPassword() {

	}

	render() {
		return (
			<View style={ styles.container }>
				<StatusBar barStyle="light-content" />
				<ErrorMessage msg={ this.state.errorMsg } />
				<View style={ styles.contentContainer }>
					<TextInput
						style={ styles.input }
						onChangeText={ username => this.setState({ username }) }
						autoCorrect={ false }
						onSubmitEditing={ () => this.passwordField.focus() }
						returnKeyType='next'
						placeholder='Username'
						underlineColorAndroid='rgba(0,0,0,0)'
						placeholderTextColor='rgba(0,0,0,0.7)'
					/>
					<TextInput
						ref={ c => this.passwordField = c }
						style={ styles.input }
						onChangeText={ password => this.setState({ password }) }
						returnKeyType='go'
						onSubmitEditing={ () => this.onLoginPress() }
						placeholder='Password'
						underlineColorAndroid='rgba(0,0,0,0)'
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
							{"Don't have an account?"}
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
		onLogin: (userObj, callback) => {
			const API_URL = 'https://water-fest.herokuapp.com/users/authenticate';
			const data = {
				method: 'POST',
				body: JSON.stringify(userObj),
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			};

			fetch(API_URL, data)
				.then(response => response.json())
				.then(json => {
					const { user, success } = json;
					if (!success) callback('Username and/or password is invalid.');
					else {
						dispatch(login(user));
						callback(null);
					}
				})
				// eslint-disable-next-line no-console
				.catch(err => console.error(err));
		}
	};
};

LoginForm.propTypes = {
	onLogin: PropTypes.func.isRequired,
	onRegisterPress: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(LoginForm);
