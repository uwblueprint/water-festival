import React from 'react';
import PropTypes from 'prop-types';
import {
	Text,
	View,
} from 'react-native';
import FaqStyles from '../../styles/FaqStyles';
import Header from '../Header'
import ListSlider from '../ListSlider';

class FaqDetails extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		header: (
			<Header
				title="Information"
				hasBackButton={ true }
				goBack = { navigation.goBack}
			/>
		)
	});

	constructor(props) {
		super(props);
	}

	renderItem(item, index) {
		return (
			<View key={ index } style={ FaqStyles.faqDetailsContainer }>
				<Text style={ FaqStyles.faqDetailsQuestion }>
					{item.question}
				</Text>
				<Text style={ FaqStyles.faqDetailsAnswer }>
					{item.answer}
				</Text>
			</View>
		);
	}

	render() {
		const { state } = this.props.navigation;
		return (
			<ListSlider
				renderItem={ this.renderItem }
				currentIndex={ state.params.index }
				itemList={ state.params.questionList }
			/>
		);
	}
}

FaqDetails.propTypes = {
	navigation: PropTypes.object.isRequired
};

export default FaqDetails;
