import React from 'react';
import PropTypes from 'prop-types';
import {
	Text,
	View,
} from 'react-native';
import FaqStyles from '../../styles/FaqStyles';
import Header from '../Header'

class FaqDetails extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		header: (
			<Header
				title="Information"
				hasBackButton
				goBack={ () => navigation.goBack() }
			/>
		),
		title: "Information",
		swipeEnabled: false,
	});

	constructor(props) {
		super(props);
	}

	render() {
		const { state } = this.props.navigation;
		const item = state.params.currentQuestion;
		return (
			<View key={ state.params.index } style={ FaqStyles.faqDetailsContainer }>
				<Text style={ FaqStyles.faqDetailsQuestion }>
					{item.question}
				</Text>
				<Text style={ FaqStyles.faqDetailsAnswer }>
					{item.answer}
				</Text>
			</View>
		);
	}
}

FaqDetails.propTypes = {
	navigation: PropTypes.object.isRequired
};

export default FaqDetails;
