import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	ScrollView,
	FlatList,
	RefreshControl,
} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import FaqStyles from '../../styles/FaqStyles';
import { faqLoaded } from '../../actions';

const API_URL = `https://water-fest.herokuapp.com/faq`;


class FaqList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentQuestions: this.props.currentQuestions,
			isRefreshing: false,
		};

		this.renderListItem = this.renderListItem.bind(this);
	}

	componentDidMount() {
		this.fetchData()
			// eslint-disable-next-line no-console
			.then(() => console.log("Finished mounting!"))
			// eslint-disable-next-line no-console
			.catch(err => console.error(err));
	}

	componentWillReceiveProps(nextProps) {
		// Avoiding refresh if possible
		if (nextProps.currentQuestions !== this.state.currentQuestions) {
			this.setState({ currentQuestions: nextProps.currentQuestions });
		}
	}

	onRefresh() {
		this.setState({ isRefreshing: true });
		this.fetchData().then(() => {
			this.setState({ isRefreshing: false });
		});
	}
  // linting error required that keyExtractor is placed after onRefresh
	keyExtractor = (item) => item.id;

	fetchData() {
		return fetch(`${API_URL}/list`)
			.then(response => response.json())
			.then(faqList => this.props.onFAQLoaded(faqList))
			// eslint-disable-next-line no-console
			.catch(err => console.error(err));
	}

	renderListItem({ item, index }) {
		let rowBg = index % 2 == 1 ? FaqStyles.faqListItemOdd : null;
		const icon = (
			<Icon
				name="chevron-thin-right"
				size={ 30 }
				color="#787878"
				style={{ marginTop: 5 }}
			/>
		);
		return (
			<ListItem
				containerStyle={ FaqStyles.faqListItem, rowBg }
				titleStyle={ FaqStyles.faqListItemText }
				key={ item.id }
				title={ item.question }
				onPress={ () => this.renderFaqDetails(item, index) }
				rightIcon={ icon }
			/>
		);
	}

	renderHeader() {
		//TODO: Add actual search
		return <SearchBar placeholder="Search for questions here!" lightTheme />;
	}

	renderFaqDetails(question, index) {
		this.props.navigation.navigate('FaqDetails', {
			index,
			currentQuestion: question,
			questionList: this.state.currentQuestions,
		});
	}

	render() {
		const refreshControl = (
			<RefreshControl
				refreshing={ this.state.isRefreshing }
				onRefresh={ this.onRefresh }
			/>
		);
		return (
			<ScrollView
				style={ FaqStyles.faqPadding, { backgroundColor: 'white' } }
				refreshControl={ refreshControl }
			>
				<FlatList
					data={ this.state.currentQuestions }
					renderItem={ this.renderListItem }
					extraData={ this.state }
					keyExtractor={ this.keyExtractor }
					ListHeaderComponent={ this.renderHeader }
				/>
			</ScrollView>
		);
	}
}

const mapStateToProps = ({ currentQuestions }) => {
	return { currentQuestions };
};

const mapDispatchToProps = dispatch => {
	return {
		onFAQLoaded: faqList => {
			dispatch(faqLoaded(faqList));
		},
	}
};

FaqList.propTypes = {
	navigation: PropTypes.object.isRequired,
	navigate: PropTypes.func,
	// Action
	onFAQLoaded: PropTypes.func.isRequired,
	// Reducer
	currentQuestions: PropTypes.array.isRequired,
};

FaqList.defaultProps = {
	navigate: () => {}
};


export default connect(mapStateToProps, mapDispatchToProps)(FaqList);
