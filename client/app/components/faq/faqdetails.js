import React from 'react';
import {
	AppRegistry,
	Text,
	View,
} from 'react-native';
import BottomNavigation, { Tab, NavigationComponent } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/Entypo'
import { TabNavigator, StackNavigator, HeaderBackButton } from 'react-navigation'
import FaqStyles from '../../styles/FaqStyles'
import Header from '../Header'
import ListSlider from '../ListSlider'

class FaqDetails extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		header: <Header
					title={'Information'}
					hasBackButton={true}
					navigation={navigation}
				  />
	});

	constructor(props) {
		super(props);
	}

	render() {
		const { state } = this.props.navigation;
		return (
			<ListSlider
				renderItem={this._renderItem}
				currentIndex={state.params.index}
				itemList={state.params.questionList}
			/>
		);
	}

	_renderItem(item, index) {
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
}

export default FaqDetails;
