import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	Picker,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	StatusBar
} from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import validate from '../../utils/validation';
import { register } from '../../actions';
import ErrorMessage from './ErrorMessage';
import Modal from '../Modal';
import { darkBlue, errorRed, lightBlue } from '../../styles/Colours';

class RegisterForm extends Component {
	constructor(props) {
		super(props);

		const { onRegister, onHaveAccountPress } = props;
		this.state = {
			name: '',
			school: '',
			username: '',
			phone: '',
			day: 1,
			password: '',
			confirmPassword: '',
			onRegister,
			onHaveAccountPress,
			errorMsg: '',
			errorField: '',
			isModalVisible: false
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
			confirmPassword
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

				this.state.onRegister(user, errorMsg => {
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
			? errorRed
			: darkBlue;
	}

	render() {
		return (
			<View style={ styles.container }>
				<StatusBar barStyle="light-content" />
				<Modal
					isModalVisible={ this.state.isModalVisible }
					onClose={ this.state.onHaveAccountPress }
				/>
				<View>
					<Text style={ styles.title }>
						Create An Account
					</Text>
					<Text style={ styles.disclaimer }>
						Disclaimer: This information will only be used during the event and will be discarded once the event is over.
					</Text>
				</View>
				<ErrorMessage msg={ this.state.errorMsg } />
				<View style={ styles.contentContainer }>
					<TextInput
						style={ styles.input }
						onChangeText={ name => this.setState({ name }) }
						onSubmitEditing={ () => this.schoolField.focus() }
						keyboardType='default'
						returnKeyType="next"
						placeholder='Full name'
						underlineColorAndroid={ this.getUnderlineColour('name') }
						placeholderTextColor='rgba(0,0,0,0.7)'
					/>
					<TextInput
						ref={ c => this.schoolField = c }
						style={ styles.input }
						onChangeText={ school => this.setState({ school }) }
						onSubmitEditing={ () => this.phoneField.focus() }
						keyboardType='default'
						returnKeyType="next"
						placeholder='School name'
						underlineColorAndroid={ this.getUnderlineColour('school') }
						placeholderTextColor='rgba(0,0,0,0.7)'
					/>
					<TextInput
						ref={ c => this.phoneField = c }
						style={ styles.input }
						autoCapitalize="none"
						onChangeText={ phone => this.setState({ phone }) }
						onSubmitEditing={ () => this.usernameField.focus() }
						autoCorrect={ false }
						keyboardType='phone-pad'
						returnKeyType="next"
						placeholder='Mobile number'
						underlineColorAndroid={ this.getUnderlineColour('phone') }
						placeholderTextColor='rgba(0,0,0,0.7)'
					/>
					<TextInput
						ref={ c => this.usernameField = c }
						style={ styles.input }
						autoCapitalize="none"
						onChangeText={ username => this.setState({ username }) }
						onSubmitEditing={ () => this.passwordField.focus() }
						autoCorrect={ false }
						returnKeyType="next"
						placeholder='Username'
						underlineColorAndroid={ this.getUnderlineColour('username') }
						placeholderTextColor='rgba(0,0,0,0.7)'
					/>
					<TextInput
						ref={ c => this.passwordField = c }
						style={ styles.input }
						onChangeText={ password => this.setState({ password }) }
						onSubmitEditing={ () => this.confirmPasswordField.focus() }
						returnKeyType="next"
						placeholder='Password'
						underlineColorAndroid={ this.getUnderlineColour('password') }
						placeholderTextColor='rgba(0,0,0,0.7)'
						secureTextEntry
					/>
					<TextInput
						ref={ c => this.confirmPasswordField = c }
						style={ styles.input }
						onChangeText={ confirmPassword => this.setState({ confirmPassword }) }
						returnKeyType="go"
						placeholder='Confirm password'
						underlineColorAndroid={ this.getUnderlineColour('confirmPassword') }
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
								<Picker.Item label="1" value={ 1 } />
								<Picker.Item label="2" value={ 2 } />
								<Picker.Item label="3" value={ 3 } />
								<Picker.Item label="4" value={ 4 } />
								<Picker.Item label="5" value={ 5 } />
							</Picker>
						</View>
					</HideWithKeyboard>
					<TouchableOpacity
						activeOpacity={ 0.8 }
						style={ styles.buttonContainer }
						onPress={ this.onRegisterPress }
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
							style={ styles.login }
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

const mapDispatchToProps = dispatch => {
	return {
		onRegister: (userObj, callback) => {
			const API_URL = 'https://water-fest.herokuapp.com/users/insert';
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
					const { user, message, code } = json;
					if (!user) {
						if (code && code === 11000) callback('Username has already been taken!');
						else if (message) callback(message);
						else {
							console.log('Something went wrong', json);
							callback('Oops, something went wrong!');
						}
					} else {
						dispatch(register(user));
						callback(null);
					}
				})
				.catch(err => console.error(err));
		}
	};
};

RegisterForm.propTypes = {
	onRegister: PropTypes.func.isRequired,
	onHaveAccountPress: PropTypes.func.isRequired
};

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		marginTop: 30
	},
	title: {
		fontSize: 25,
		textAlign: 'center',
		fontWeight: 'bold',
		marginBottom: 10
	},
	disclaimer: {
		textAlign: 'center',
		fontStyle: 'italic',
		fontSize: 13,
		marginBottom: 5
	},
	contentContainer: {
		flex: 1,
		height: 440
	},
	footer: {
		alignItems: 'center',
		height: 50,
		marginTop: 10
	},
	input: {
		height: 40,
		marginTop: 10,
		padding: 10,
		color: '#000'
	},
	buttonContainer: {
		backgroundColor: darkBlue,
		paddingVertical: 15,
		borderRadius: 30,
		borderWidth: 1,
		borderColor: lightBlue,
		marginTop: 10
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: '700'
	},
	dayContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		maxHeight: 60,
		marginTop: 30,
		marginBottom: 30
	},
	dayTitle: {
		flex: 0.35,
		alignItems: 'center'
	},
	dayPicker: {
		flex: 0.3,
		height: 50
	},
	noAccount: {
		color: 'black',
		textAlign: 'center'
	},
	login: {
		color: darkBlue,
		width: 100,
		textAlign: 'center',
		fontSize: 15,
		fontWeight: "bold",
		marginTop: 5
	}
});

export default connect(null, mapDispatchToProps)(RegisterForm);
