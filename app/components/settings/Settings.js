import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	View,
	Image,
	Text,
	TextInput,
	ScrollView
} from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SettingsStyles from '../../styles/SettingsStyles';
import { editUser } from '../../actions';
import { darkGray } from '../../styles/Colours';

class Settings extends React.Component {

	static navigationOptions = () => ({
		header: null,
		title: 'Settings'
	});

	constructor(props) {
		super(props);
		this.state = {
			currentUser: this.props.currentUser,
		};
	}

	onUpdateSettings = (settings) => {

		const user = {
			...settings,
			id: this.state.currentUser._id
		};

		this.props.onEditUser(user);
	}

	updateUser(field, value){
		this.setState(prevState => ({
			currentUser: {
					...prevState.currentUser,
					[field]: value
			}
		}))
	}

	render() {
		return (
			<ScrollView
				contentContainerStyle={ SettingsStyles.container }
			>
				<TextInput
					style={ SettingsStyles.input }
					onChangeText={ newSchool => this.updateUser("school", newSchool) }
					autoCorrect={ false }
					onSubmitEditing={ () => this.onUpdateSettings({ school: this.state.currentUser.school }) }
					returnKeyType='next'
					placeholder='New school'
					underlineColorAndroid='rgba(0,0,0,0)'
					placeholderTextColor='rgba(0,0,0,0.7)'
				/>
				<TextInput
					style={ SettingsStyles.input }
					onChangeText={ newName => this.updateUser("name", newName) }
					autoCorrect={ false }
					onSubmitEditing={ () => this.onUpdateSettings({ name: this.state.currentUser.name }) }
					returnKeyType='next'
					placeholder='New name'
					underlineColorAndroid='rgba(0,0,0,0)'
					placeholderTextColor='rgba(0,0,0,0.7)'
				/>
			</ScrollView>
		);
	}
}

const mapStateToProps = ({ currentUser }) => {
	return { currentUser };
};

const mapDispatchToProps = dispatch => {
	return {
		onEditUser: (userId, editedFields) => {
			dispatch(editUser(userId, editedFields));
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
