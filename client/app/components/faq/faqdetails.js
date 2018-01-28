import React from 'react';
import {
	Text,
	View,
} from 'react-native';
import { FaqStyles } from '../../styles/faqstyles'
import { Header } from '../header'
import { ListSlider } from '../listslider'

class FaqDetails extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		header: (
			<Header
				title="Information"
				hasBackButton
				navigation={navigation}
			/>
		)
	});

	constructor(props) {
		super(props);
	}

	renderItem(item, index) {
		return (
			<View key={index} style={FaqStyles.faqDetailsContainer}>
				<Text style={FaqStyles.faqDetailsQuestion}>
					{item.question}
				</Text>
				<Text style={FaqStyles.faqDetailsAnswer}>
					{item.answer}
				</Text>
			</View>
		);
	}

	render() {
		const { state } = this.props.navigation;
		return (
			<ListSlider
				renderItem={this.renderItem}
				currentIndex={state.params.index}
				itemList={state.params.questionList}
			/>
		);
	}
}

export default FaqDetails