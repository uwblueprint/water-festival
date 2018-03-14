import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	ScrollView,
	RefreshControl,
	SectionList,
	Text
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import ActivityTile from './ActivityTile';
import ActivityStyles from '../../styles/ActivityStyles';
import {
	getActivityList,
	getUserActivities
} from '../../actions';
import { arrayOfObjectEquals } from '../../utils/arrays';

class ActivityList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentActivities: props.currentActivities,
			filteredActivities: props.currentActivities,
			userId: props.userId,
			refreshList: props.refreshList,
			onAddActivity: props.onAddActivity,
			onRemoveActivity: props.onRemoveActivity,
			isRefreshing: false,
			sectionList: this.getSectionList(props.currentActivities),
		};

		this.onRefresh = this.onRefresh.bind(this);
		this.renderListItem = this.renderListItem.bind(this);
	}

	componentDidMount() {
		this.state.refreshList(this.state.userId);
	}

	componentWillReceiveProps(nextProps) {
		// Avoiding refresh if possible
		if (!arrayOfObjectEquals(nextProps.currentActivities, this.state.currentActivities)) {
			this.setState({
				currentActivities: nextProps.currentActivities,
				sectionList: this.getSectionList(nextProps.currentActivities)
			});
		}
		if (this.state.isRefreshing) this.setState({ isRefreshing: false });
	}

	onRefresh() {
		this.setState({ isRefreshing: true });
		this.state.refreshList(this.state.userId);
	}

	getSectionList(activities) {
		const list = [
			{
				key: 2,
				data: []
			},
			{
				key: 3,
				data: []
			},
			{
				key: 4,
				data: []
			},
			{
				key: 5,
				data: []
			},
		];
		activities.forEach(a => a.grade.forEach(grade => list[grade - 2].data.push(a)));

		console.log('list', list);
		return list;
	}

	// linting error required that keyExtractor is placed after getSectionList
	keyExtractor = (item) => item.id;

	handleSearchChange(term) {
		const { currentActivities } = this.state;

		const filteredActivities = currentActivities.filter(item => {
			return item.title.toLowerCase().trim().indexOf(term.toLowerCase().trim()) > -1;
		});

		this.setState({ filteredActivities })
	}

	renderListItem({ item, index }) {
		return (
			<ActivityTile
				renderActivityDetails={ this.renderActivityDetails }
				item={ item }
				userId={ this.state.userId }
				index={ index }
				realIndex={ this.state.currentActivities.indexOf(item) }
			/>
		);
	}

	renderHeader() {
		return (
			<SearchBar
				placeholder="Search"
				cancelButtonTitle="Cancel"
				containerStyle={ ActivityStyles.activitySearch }
				inputStyle={ ActivityStyles.activitySearchInput }
				onClearText={ this.handleSearchChange }
				onCancel={ this.handleSearchChange }
				onChangeText={ this.handleSearchChange }
				lightTheme
			/>
		);
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
				style={ ActivityStyles.activityPadding }
				refreshControl={ refreshControl }
			>
				<SectionList
					sections={ this.state.sectionList }
					renderItem={ this.renderListItem }
					keyExtractor={ this.keyExtractor }
					ListHeaderComponent={ this.renderHeader }
					initialNumToRender={9}
					renderSectionHeader={ ({ section }) => (
						<Text
							style={ ActivityStyles.sectionHeader }
						>
							Grade { section.key }
						</Text>
					) }
				/>
			</ScrollView>
		);
	}
}

const mapStateToProps = ({ currentActivities, currentUser }) => {
	const userId = (currentUser && currentUser.hasOwnProperty('_id')) ? currentUser._id : null;
	return {
		currentActivities,
		userId
	};
};

const mapDispatchToProps = dispatch => {
	return {
		refreshList: (userId) => {
			dispatch(getUserActivities(userId))
			dispatch(getActivityList());
		}
	}
};

ActivityList.propTypes = {
	currentActivities: PropTypes.array.isRequired,
	userId: PropTypes.string.isRequired,
	refreshList: PropTypes.func.isRequired,
	navigation: PropTypes.object.isRequired,
	navigate: PropTypes.func
};

ActivityList.defaultProps = {
	navigate:() => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityList);
