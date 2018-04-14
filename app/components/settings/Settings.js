import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	Picker,
	View,
	Text,
	TextInput,
	ScrollView,
	TouchableOpacity
} from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import SettingsStyles from '../../styles/SettingsStyles';
import validate from '../../utils/validation';
import ErrorMessage from '../login/ErrorMessage';
import { editUser } from '../../actions';
import { objectEquals } from '../../utils/arrays';

class Settings extends React.Component {

	static navigationOptions = () => ({
		header: null,
		title: 'Home'
	});

	constructor(props) {
		super(props);
		this.state = {
			currentUser: this.props.currentUser,
			name: this.props.currentUser.name,
			school: this.props.currentUser.school,
			phone: this.props.currentUser.phoneNumber,
			day: this.props.currentUser.day,
			password: '',
			confirmPassword: '',
			errorMsg: '',
			errorField: '',
			successMsg: 'Update Settings',
			passwordErrorMsg: '',
			passwordSuccessMsg: 'Update Password',
		};
	}

	componentWillReceiveProps(nextProps) {
		if (!objectEquals(nextProps.currentUser, this.state.currentUser)) {
			this.setState({ currentUser: nextProps.currentUser });
		}
	}

	onUpdatePassword = () => {
		const {
			password,
			confirmPassword
		} = this.state;

		if (password !== confirmPassword) {
			this.setState({
				passwordErrorMsg: 'Passwords do not match',
				errorField: 'confirmPassword'
			});
			return;
		}

		validate({
			password: password,
		}, 'PASSWORD', (error, field) => {
			if (!error) {
				this.setState({
					passwordErrorMsg: '',
					errorField: '',
					passwordSuccessMsg: 'New Password Saved!',
				});

				const user = {
					password,
					id: this.state.currentUser._id
				};

				this.props.onEditUser(user, this.state.currentUser);
			} else {
				this.setState({
					passwordErrorMsg: error,
					errorField: field
				});
			}
		});
	}

	onUpdateSettings = () => {
		const {
			name,
			school,
			phone,
			day,
		} = this.state;

		validate({
			fullName: name,
			schoolName: school,
			mobileNumber: phone,
		}, 'SETTINGS', (error, field) => {
			if (!error) {
				this.setState({
					errorMsg: '',
					errorField: '',
					successMsg: 'Settings Saved!',
				});

				const user = {
					name,
					school,
					phoneNumber: phone,
					day,
					id: this.state.currentUser._id
				};

				this.props.onEditUser(user, this.state.currentUser);
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
			? SettingsStyles.inputError
			: SettingsStyles.input;
	}

	render() {
		return (
			<ScrollView
				style={ SettingsStyles.container }
				contentContainerStyle={ SettingsStyles.contentContainer }
			>
				<ErrorMessage msg={ this.state.errorMsg } />
				<Text style={ SettingsStyles.nameLabel }>
					New Name:
				</Text>
				<TextInput
					style={ this.getUnderlineColour('name') }
					onChangeText={ name => this.setState({ name }) }
					autoCorrect={ false }
					returnKeyType='next'
					value={ this.state.name }
					underlineColorAndroid='rgba(0,0,0,0)'
					placeholderTextColor='rgba(0,0,0,0.7)'
				/>
				<Text style={ SettingsStyles.label }>
					New School:
				</Text>
				<TextInput
					style={ this.getUnderlineColour('school') }
					onChangeText={ school => this.setState({ school }) }
					autoCorrect={ false }
					returnKeyType='next'
					value={ this.state.school }
					underlineColorAndroid='rgba(0,0,0,0)'
					placeholderTextColor='rgba(0,0,0,0.7)'
				/>
				<Text style={ SettingsStyles.label }>
					New Phone Number:
				</Text>
				<TextInput
					style={ this.getUnderlineColour('phone') }
					onChangeText={ phone => this.setState({ phone }) }
					autoCorrect={ false }
					returnKeyType='next'
					value={ this.state.phone }
					keyboardType='phone-pad'
					underlineColorAndroid='rgba(0,0,0,0)'
					placeholderTextColor='rgba(0,0,0,0.7)'
				/>
				<HideWithKeyboard>
					<View style={ SettingsStyles.dayContainer }>
						<View style={ SettingsStyles.dayTitle }>
							<Text>
								New Day Attending:
							</Text>
						</View>
						<Picker
							style={ SettingsStyles.dayPicker }
							selectedValue={ this.state.day }
							onValueChange={ day => this.setState({ day }) }
						>
							<Picker.Item label='Mon' value={ 1 } />
							<Picker.Item label='Tue' value={ 2 } />
							<Picker.Item label='Wed' value={ 3 } />
							<Picker.Item label='Thu' value={ 4 } />
							<Picker.Item label='Fri' value={ 5 } />
						</Picker>
					</View>
				</HideWithKeyboard>
				<TouchableOpacity
					activeOpacity={ 0.8 }
					style={ SettingsStyles.buttonContainer }
					onPress={ this.onUpdateSettings }
				>
					<Text style={ SettingsStyles.buttonText }> { this.state.successMsg } </Text>
				</TouchableOpacity>
				<ErrorMessage msg={ this.state.passwordErrorMsg } />
				<Text style={ SettingsStyles.passwordLabel }>
					New Password:
				</Text>
				<TextInput
					style={ this.getUnderlineColour('password') }
					underlineColorAndroid='rgba(0,0,0,0)'
					onSubmitEditing={ () => this.confirmPasswordField.focus() }
					onChangeText={ password => this.setState({ password }) }
					placeholder='*********'
					value={ this.state.password }
					placeholderTextColor='rgba(0,0,0,0.7)'
					secureTextEntry
				/>
				<Text style={ SettingsStyles.label }>
					Confirm New Password:
				</Text>
				<TextInput
					ref={ c => this.confirmPasswordField = c }
					style={ this.getUnderlineColour('confirmPassword') }
					underlineColorAndroid='rgba(0,0,0,0)'
					onChangeText={ confirmPassword => this.setState({ confirmPassword }) }
					returnKeyType='go'
					placeholder='*********'
					placeholderTextColor='rgba(0,0,0,0.7)'
					secureTextEntry
				/>
				<TouchableOpacity
					activeOpacity={ 0.8 }
					style={ SettingsStyles.buttonContainerPassword }
					onPress={ this.onUpdatePassword }
				>
					<Text style={ SettingsStyles.buttonText }>{ this.state.passwordSuccessMsg }</Text>
				</TouchableOpacity>
			</ScrollView>
		);
	}
}

const mapStateToProps = ({ currentUser }) => {
	return { currentUser };
};

const mapDispatchToProps = dispatch => {
	return {
		onEditUser: (newUser, oldUser) => {
			dispatch(editUser(newUser, oldUser));
		},
	}
};

Settings.propTypes = {
	// Action
	onEditUser: PropTypes.func.isRequired,
	// Reducer
	currentUser: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
