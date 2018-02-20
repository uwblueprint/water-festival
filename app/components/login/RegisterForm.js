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
import { register } from '../../actions';

class RegisterForm extends Component {
	constructor(props) {
		super(props);

		const { onRegister, onHaveAccountPress } = props;
		this.state = {
			name: '',
			school: '',
			email: '',
			phone: '',
			day: 0,
			password: '',
			onRegister,
			onHaveAccountPress
		};

		this.onRegisterPress = this.onRegisterPress.bind(this);
	}

	onRegisterPress() {
		const {
			name,
			school,
			email,
			phone,
			day,
			password
		} = this.state;

		this.state.onRegister({
			name,
			school,
			email,
			phone,
			day,
			password
		});
	}

	render() {
		return (
			<View style={ styles.container }>
				<StatusBar barStyle="light-content" />
				<View>
					<Text style={ styles.title }>
						Create An Account
					</Text>
				</View>
				<View style= { styles.contentContainer }>
					<TextInput
						style={ styles.input }
						onChangeText={ name => this.setState({ name }) }
						onSubmitEditing={ () => this.refs.schoolField.focus() }
						keyboardType='default'
						returnKeyType="next"
						placeholder='Full name'
						underlineColorAndroid={ darkBlue }
						placeholderTextColor='rgba(0,0,0,0.7)'
					/>
					<TextInput
						ref='schoolField'
						style={ styles.input }
						onChangeText={ school => this.setState({ school }) }
						onSubmitEditing={ () => this.refs.emailField.focus() }
						keyboardType='default'
						returnKeyType="next"
						placeholder='School Name'
						underlineColorAndroid={ darkBlue }
						placeholderTextColor='rgba(0,0,0,0.7)'
					/>
					<TextInput
						ref='emailField'
						style={ styles.input }
						autoCapitalize="none"
						onChangeText={ email => this.setState({ email }) }
						onSubmitEditing={ () => this.refs.phoneField.focus() }
						autoCorrect={ false }
						keyboardType='email-address'
						returnKeyType="next"
						placeholder='Email Address'
						underlineColorAndroid={ darkBlue }
						placeholderTextColor='rgba(0,0,0,0.7)'
					/>
					<TextInput
						ref='phoneField'
						style={ styles.input }
						autoCapitalize="none"
						onChangeText={ phone => this.setState({ phone }) }
						onSubmitEditing={ () => this.refs.passwordField.focus() }
						autoCorrect={ false }
						keyboardType='phone-pad'
						returnKeyType="next"
						placeholder='Mobile Number'
						underlineColorAndroid={ darkBlue }
						placeholderTextColor='rgba(0,0,0,0.7)'
					/>
					<TextInput
						ref='passwordField'
						style={ styles.input }
						onChangeText={ password => this.setState({ password }) }
						returnKeyType="go"
						placeholder='Password'
						underlineColorAndroid={ darkBlue }
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
								onValueChange={ (itemValue, itemIndex) => this.setState({
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
		onRegister: (user) => {
			dispatch(register(user));
		}
	};
};

RegisterForm.propTypes = {
	onRegister: PropTypes.func.isRequired,
	onHaveAccountPress: PropTypes.func.isRequired
};

// define your styles
const darkBlue = '#0288D1';
const lightBlue = '#03A9F4';

const styles = StyleSheet.create({
	title: {
		fontSize: 25,
		textAlign: 'center',
		fontWeight: 'bold',
		marginBottom: 20
	},
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
		marginTop: 30
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
		color: 'blue',
		width: 100,
		textAlign: 'center',
		fontSize: 15,
		fontWeight: "bold",
		marginTop: 10
	}
});

export default connect(null, mapDispatchToProps)(RegisterForm);
