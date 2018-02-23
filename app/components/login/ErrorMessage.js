import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { errorRed } from '../../styles/Colours';

const ErrorMessage = ({ msg }) => (
	<View style={ styles.messageContainer }>
		<Text style={ styles.error }>
			{ msg }
		</Text>
	</View>
);

ErrorMessage.propTypes = {
	msg: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
	messageContainer: {
		height: 20
	},
	error: {
		fontSize: 15,
		color: errorRed,
		textAlign: 'center'
	}
});

export default ErrorMessage;
