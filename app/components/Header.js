import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderStyles from '../styles/HeaderStyles';
import { darkGray } from '../styles/Colours';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
		}

		this.handleOnEdit = this.handleOnEdit.bind(this);
	}

	getBackButton() {
		if (!this.props.hasBackButton) {
			return null;
		}
		return (
			<Icon
				style={ HeaderStyles.backButton }
				name="arrow-back"
				onPress={ () => this.props.goBack() }
				color={ darkGray }
				size={ 25 }
			/>
		);
	}

	handleOnEdit() {
		this.setState(prevState => ({ isEditing: !prevState.isEditing }));
		this.props.onEdit();
	}

	render() {
		const {isEditing} = this.state;
		const title = isEditing ? 'cancel' : 'edit'; 
		const editButton = this.props.onEdit != null
			? (
				<TouchableOpacity style={ HeaderStyles.editButton } onPress={ this.handleOnEdit }>
					<Text style={ HeaderStyles.editButtonText } >
						{ title }
					</Text>
				</TouchableOpacity>
			)
			: null;

		return (
			<View style={ HeaderStyles.headerContainer }>
				<View style={ HeaderStyles.leftContainer }>
					{ this.getBackButton() }
				</View>
				<Text style={ HeaderStyles.headerText }>
					{ this.props.title }
				</Text>
				<View style={ HeaderStyles.rightContainer } >
					{ editButton }
				</View>
			</View>
		);
	}
}

Header.propTypes = {
	hasBackButton: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired,
	goBack: PropTypes.func,
	onEdit: PropTypes.func,
};

Header.defaultProps = {
	onEdit: null,
	goBack: () => {}
}
