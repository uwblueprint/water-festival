import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ScrollView } from 'react-native';
import RegisterForm from './RegisterForm';

class Register extends React.Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);

		const { goBack } = props.navigation;

		this.goBack = goBack;
		this.onHaveAccountPress = this.onHaveAccountPress.bind(this);
	}

	onHaveAccountPress() {
		this.goBack();
	}

	render() {
		return (
			<ScrollView style={ styles.container }>
				<RegisterForm onHaveAccountPress={ this.onHaveAccountPress } />
			</ScrollView>
		);
	}
}

Register.propTypes = {
	navigation: PropTypes.object.isRequired,
}

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f2f6ff'
	}
});

export default Register;
