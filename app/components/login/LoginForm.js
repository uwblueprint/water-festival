import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StatusBar,
	AsyncStorage
} from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import validate from '../../utils/validation';
import { login } from '../../actions';
import ErrorMessage from './ErrorMessage';
import styles from '../../styles/LoginFormStyles';

class LoginForm extends Component {
	constructor(props) {
		super(props);

		const {
			onLogin,
			onRegisterPress,
			authStatus
		} = props;
		this.state = {
			username: '',
			password: '',
			onLogin,
			onRegisterPress,
			errorMsg: '',
			loading: false
		};

		this.onLoginPress = this.onLoginPress.bind(this);
	}

	onLoginPress() {
		const { username, password } = this.state;

		validate({ username, password }, 'LOGIN', (error) => {
			if (!error) {
				this.setState({ errorMsg: '' });
				this.state.onLogin({ username, password });
			} else {
				this.setState({ errorMsg: error });
			}
		});
	}

	forgotPassword() {

	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.authStatus.hasOwnProperty('success') && !nextProps.authStatus.success) {
			this.setState({ errorMsg: 'Username and/or password is incorrect'});
		} else this.setState({ errorMsg: '' });
	}

	render() {
		const body = (this.state.loading)
			? null
			: (
				<View style={ styles.container }>
					<StatusBar barStyle="light-content" />
					<ErrorMessage msg={ this.state.errorMsg } />
					{ body }
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

		return body;
	}
}

const mapStateToProps = ({ authStatus }) => {
	return { authStatus };
};

const mapDispatchToProps = dispatch => {
	return {
		onLogin: (user) => {
			dispatch(login(user));
		}
	};
};

LoginForm.propTypes = {
	onLogin: PropTypes.func.isRequired,
	onRegisterPress: PropTypes.func.isRequired,
	authStatus: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
