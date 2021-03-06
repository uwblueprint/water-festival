import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Picker,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StatusBar,
	NetInfo,
	CheckBox,
	Switch,
	ScrollView,
	Platform
} from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import validate from '../../utils/validation';
import ErrorMessage from './ErrorMessage';
import Modal from '../Modal';
import styles from '../../styles/RegisterFormStyles';

class RegisterForm extends Component {
	constructor(props) {
		super(props);

		const { onHaveAccountPress } = props;
		this.state = {
			name: '',
			school: '',
			username: '',
			phone: '',
			day: 1,
			password: '',
			confirmPassword: '',
			errorMsg: '',
			errorField: '',
			isModalVisible: false,
			consentIsChecked: false,
			onHaveAccountPress
		};

		this.onRegisterPress = this.onRegisterPress.bind(this);
		this.getUnderlineColour = this.getUnderlineColour.bind(this);
	}

	onRegisterPress() {
		const {
			name,
			school,
			phone,
			username,
			day,
			password,
			confirmPassword,
			consentIsChecked
		} = this.state;

		if (password !== confirmPassword) {
			this.setState({
				errorMsg: 'Passwords do not match',
				errorField: 'confirmPassword'
			});
			return;
		}

		validate({
			fullName: name,
			schoolName: school,
			mobileNumber: phone,
			username,
			password
		}, 'REGISTER', (error, field) => {
			if (!error) {
				if (!consentIsChecked) {
					this.setState({ errorMsg: 'Checkbox is not checked' });
					return;
				}

				this.setState({
					errorMsg: '',
					errorField: ''
				});

				const user = {
					name,
					school,
					username,
					phoneNumber: phone,
					day,
					password
				};

				this.registerUser(user, errorMsg => {
					if (errorMsg) {
						this.setState({
							errorMsg,
							errorField: 'username'
						});
					} else {
						this.setState({
							isModalVisible: true
						});
					}
				});
			} else {
				this.setState({
					errorMsg: error,
					errorField: field
				});
			}
		});
	}

	getUnderlineColour(fieldName) {
		return (this.state.errorField === fieldName)
			? styles.inputError
			: styles.input;
	}

	registerUser(userObj, callback) {
		const API_URL = 'https://water-festival-server.appspot.com/users/insert';
		const data = {
			method: 'POST',
			body: JSON.stringify(userObj),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		};

		NetInfo.isConnected.fetch().then(isConnected => {
			if (!isConnected) this.setState({ errorMsg: 'No Internet Connection' });
			else {
				fetch(API_URL, data)
					.then(response => response.json())
					.then(json => {
						const { user, message, code } = json;
						if (!user) {
							if (code === 11000) callback('Username has already been taken!');
							else if (message) callback(message);
							else {
								// eslint-disable-next-line no-console
								console.log('Something went wrong', json);
								callback('Oops, something went wrong!');
							}
						} else callback(null);
					})
					// eslint-disable-next-line no-console
					.catch(err => console.error(err));
			}
		});
	}

	render() {
		const checkbox = (Platform.OS === 'ios')
			? (
				<Switch
					value={ this.state.consentIsChecked }
					onValueChange={ (checked) => this.setState({ consentIsChecked: checked }) }
				/>
			)
			: (
				<CheckBox
					value={ this.state.consentIsChecked }
					onValueChange={ (checked) => this.setState({ consentIsChecked: checked }) }
				/>
			);

		return (
			<ScrollView style={ styles.container }>
				<StatusBar barStyle='light-content' />
				<Modal
					isModalVisible={ this.state.isModalVisible }
					onClose={ this.state.onHaveAccountPress }
				/>
				<View>
					<Text style={ styles.title }>
						Create An Account
					</Text>
					<Text style={ styles.disclaimer }>
						DISCLAIMER: This information will only be used on the day you are attending the event and will be discarded afterwards.
					</Text>
				</View>
				<ErrorMessage msg={ this.state.errorMsg } />
				<View style={ styles.contentContainer }>
					<TextInput
						style={ this.getUnderlineColour('name') }
						underlineColorAndroid='rgba(0,0,0,0)'
						onChangeText={ name => this.setState({ name }) }
						onSubmitEditing={ () => this.schoolField.focus() }
						keyboardType='default'
						returnKeyType='next'
						placeholder='Full name'
						placeholderTextColor='rgba(0,0,0,0.7)'
					/>
					<TextInput
						ref={ c => this.schoolField = c }
						style={ this.getUnderlineColour('school') }
						underlineColorAndroid='rgba(0,0,0,0)'
						onChangeText={ school => this.setState({ school }) }
						onSubmitEditing={ () => this.phoneField.focus() }
						keyboardType='default'
						returnKeyType='next'
						placeholder='School name'
						placeholderTextColor='rgba(0,0,0,0.7)'
					/>
					<TextInput
						ref={ c => this.phoneField = c }
						style={ this.getUnderlineColour('phone') }
						autoCapitalize='none'
						underlineColorAndroid='rgba(0,0,0,0)'
						onChangeText={ phone => this.setState({ phone }) }
						onSubmitEditing={ () => this.usernameField.focus() }
						autoCorrect={ false }
						keyboardType='phone-pad'
						returnKeyType='next'
						placeholder='Mobile number'
						placeholderTextColor='rgba(0,0,0,0.7)'
					/>
					<TextInput
						ref={ c => this.usernameField = c }
						style={ this.getUnderlineColour('username') }
						autoCapitalize='none'
						underlineColorAndroid='rgba(0,0,0,0)'
						onChangeText={ username => this.setState({ username }) }
						onSubmitEditing={ () => this.passwordField.focus() }
						autoCorrect={ false }
						returnKeyType='next'
						placeholder='Username'
						placeholderTextColor='rgba(0,0,0,0.7)'
					/>
					<TextInput
						ref={ c => this.passwordField = c }
						style={ this.getUnderlineColour('password') }
						underlineColorAndroid='rgba(0,0,0,0)'
						onChangeText={ password => this.setState({ password }) }
						onSubmitEditing={ () => this.confirmPasswordField.focus() }
						returnKeyType='next'
						placeholder='Password'
						placeholderTextColor='rgba(0,0,0,0.7)'
						secureTextEntry
					/>
					<TextInput
						ref={ c => this.confirmPasswordField = c }
						style={ this.getUnderlineColour('confirmPassword') }
						underlineColorAndroid='rgba(0,0,0,0)'
						onChangeText={ confirmPassword => this.setState({ confirmPassword }) }
						returnKeyType='go'
						placeholder='Confirm password'
						placeholderTextColor='rgba(0,0,0,0.7)'
						secureTextEntry
					/>
					<HideWithKeyboard>
						<View style={ styles.dayContainer }>
							<View style={ styles.dayTitle }>
								<Text>
									Day Attending:
								</Text>
							</View>
							<Picker
								style={ styles.dayPicker }
								selectedValue={ this.state.day }
								onValueChange={ (itemValue) => this.setState({
									day: itemValue
								}) }
							>
								<Picker.Item label='Mon' value={ 1 } />
								<Picker.Item label='Tue' value={ 2 } />
								<Picker.Item label='Wed' value={ 3 } />
								<Picker.Item label='Thu' value={ 4 } />
								<Picker.Item label='Fri' value={ 5 } />
							</Picker>
						</View>
					</HideWithKeyboard>
					<View style={ styles.checkboxContainer }>
						{ checkbox }
						<Text style={ styles.checkboxLabel }>
							{'I consent to allow my personal information listed here to be used by WWCGF for the duration of this event'}
						</Text>
					</View>
					<View style={ styles.buttonCenter }>
						<TouchableOpacity
							activeOpacity={ 0.8 }
							style={ styles.buttonContainer }
							onPress={ this.onRegisterPress }
						>
							<Text style={ styles.buttonText }>REGISTER</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={ styles.footer }>
					<Text
						style={ styles.noAccount }
					>
						Already have an account?
					</Text>
					<TouchableOpacity
						activeOpacity={ 0.8 }
						style={ styles.loginButton }
						onPress={ this.state.onHaveAccountPress }
					>
						<Text style={ styles.loginText }>LOGIN</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		);
	}
}

RegisterForm.propTypes = {
	onHaveAccountPress: PropTypes.func.isRequired
};

export default RegisterForm;
