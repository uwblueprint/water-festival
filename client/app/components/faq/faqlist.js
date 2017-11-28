import React, { Component } from 'react';
import {
	ScrollView,
	Text,
	View,
	FlatList,
	RefreshControl,
} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements'
import BottomNavigation, { Tab, NavigationComponent } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/Entypo'
import { TabNavigator, StackNavigator, HeaderBackButton } from 'react-navigation'
import { FaqStyles } from '../../styles/faqstyles'

const API_URL = 'http://localhost:9090/faq';

export class FaqList extends Component {
	//TODO: Remove warning for keys 
	_keyExtractor = (item, index) => item.id;

	constructor(props) {
		super(props);
		this.state = { 
			currentQuestions: this.props.currentQuestions,
			isRefreshing: false,	
		};
	}
	
	componentDidMount() {
		this.fetchData().then(() => {
			console.log("Finished mounting!");		
		});
	}

	componentWillReceiveProps(nextProps) {
	// Avoiding refresh is possible
	  if (nextProps.currentQuestions !== this.state.currentQuestions) {
		 this.setState({ currentQuestions: nextProps.currentQuestions });
	  }
	}

	render() {
		return (
			<ScrollView 
				style={FaqStyles.faqPadding, {backgroundColor: 'white'}}
				refreshControl={
					<RefreshControl
						refreshing={this.state.isRefreshing}
						onRefresh={this._onRefresh.bind(this)}
					/>
				}
			>
				<FlatList 
					data={this.state.currentQuestions}
					renderItem={this._renderListItem}
					extraData={this.state}
					keyExtractor={this._keyExtractor}
					ListHeaderComponent={this._renderHeader}
				/>
			</ScrollView>
		);
	}

	fetchData() {
		return fetch(`${API_URL}/list`)
			.then(response => response.json())
			.then(responseJson => {
				this.setState({ currentQuestions: responseJson });
			})
			.catch(err => err);
	}

	_onRefresh() {
		this.setState({isRefreshing: true});
		this.fetchData().then(() => {
			this.setState({isRefreshing: false});
		});
	}

	_renderListItem = ({ item, index }) => {
		let rowBg = index % 2 == 1 ? FaqStyles.faqListItemOdd : null;
		return (
			<ListItem 
				containerStyle={FaqStyles.faqListItem, rowBg}
				titleStyle={FaqStyles.faqListItemText}
				key={item.id}
				title={item.question}
				onPress={() => this._renderFaqDetails(item, index)}
				rightIcon={<Icon 
								name={'chevron-thin-right'}
								size={30}
								color={'#787878'}
								style={{marginTop: 5}}
						  />}
			/>
		);
	}

	_renderHeader = () => {
		//TODO: Add actual search
		return <SearchBar placeholder="Search for questions here!" lightTheme />;
	}

	_renderFaqDetails = (question, index) => {
		this.props.navigation.navigate('FaqDetails', { 
			index: index,
			currentQuestion: question, 
			questionList: this.state.currentQuestions,
		});
	}
}
