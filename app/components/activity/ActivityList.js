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
			activities: props.activities,
			userId: props.userId,
			refreshList: props.refreshList,
			isRefreshing: false,
			sectionList: this.getSectionList(props.activities),
		};

		this.onRefresh = this.onRefresh.bind(this);
		this.handleSearchChange = this.handleSearchChange.bind(this);
		this.renderHeader = this.renderHeader.bind(this);
		this.renderListItem = this.renderListItem.bind(this);
	}

	componentDidMount() {
		this.state.refreshList(this.state.userId);
	}

	componentWillReceiveProps(nextProps) {
		// Avoiding refresh if possible
		if (!arrayOfObjectEquals(nextProps.activities, this.state.activities)) {
			this.setState({
				activities: nextProps.activities,
				sectionList: this.getSectionList(nextProps.activities)
			});
		}
		if (this.state.isRefreshing) this.setState({ isRefreshing: false });
	}

	shouldComponentUpdate(nextProps) {
		if (!arrayOfObjectEquals(nextProps.activities, this.state.activities))
			return !arrayOfObjectEquals(nextProps.activities, this.state.activities);
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

		return list;
	}

	// linting error required that keyExtractor is placed after getSectionList
	keyExtractor = (item) => item.id;

	handleSearchChange(term) {
		const { activities } = this.state;

		const filteredActivities = activities.filter(item => {
			return item.title.toLowerCase().trim().indexOf(term.toLowerCase().trim()) > -1;
		});

		const sectionList = this.getSectionList(filteredActivities);
		this.setState({ sectionList });
	}

	renderListItem({ item }) {
		return (
			<ActivityTile
				renderActivityDetails={ this.renderActivityDetails }
				item={ item }
				userId={ this.state.userId }
				realIndex={ this.state.activities.indexOf(item) }
				navigate={ this.props.navigation.navigate }
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

	renderSectionHeader({ section }) {
		return (section.data.length > 0)
			? (
				<Text
					style={ ActivityStyles.sectionHeader }
				>
					Grade { section.key }
				</Text>
				)
			: null;
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
					initialNumToRender={ 9 }
					renderSectionHeader={ this.renderSectionHeader }
				/>
			</ScrollView>
		);
	}
}

const mapStateToProps = ({ currentActivities, currentUser }) => {
	const userId = (currentUser && currentUser.hasOwnProperty('_id')) ? currentUser._id : null;
	return {
		activities: currentActivities,
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
	activities: PropTypes.array.isRequired,
	userId: PropTypes.string.isRequired,
	refreshList: PropTypes.func.isRequired,
	navigation: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityList);
