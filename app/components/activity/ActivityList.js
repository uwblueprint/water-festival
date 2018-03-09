import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	ScrollView,
	RefreshControl,
	SectionList,
	Text,
	AsyncStorage
} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import ActivityStyles from '../../styles/ActivityStyles';
import {
	getActivityList,
	getUserActivities,
	addActivity,
	removeActivity
} from '../../actions';
import { darkBlue } from '../../styles/Colours';

const API_URL = "https://water-fest.herokuapp.com/activities";


class ActivityList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentActivities: props.currentActivities,
			filteredActivities: props.currentActivities,
			userId: props.userId,
			myActivities: props.myActivities,
			refreshList: props.refreshList,
			onAddActivity: props.onAddActivity,
			onRemoveActivity: props.onRemoveActivity,
			isRefreshing: false,
		};

		this.onAddButtonPress = this.onAddButtonPress.bind(this);
		this.onRemoveButtonPress = this.onRemoveButtonPress.bind(this);
		this.onRefresh = this.onRefresh.bind(this);
		this.renderListItem = this.renderListItem.bind(this);
	}

	componentDidMount() {
		this.state.refreshList(this.state.userId);
	}

	componentWillReceiveProps(nextProps) {
		// Avoiding refresh if possible
		console.log('nextProps.myActivities', nextProps.myActivities);
		if (nextProps.currentActivities !== this.state.currentActivities ||
			nextProps.myActivities !== this.state.myActivities) {
			this.setState({
				currentActivities: nextProps.currentActivities,
				myActivities: nextProps.myActivities,
			});
		}
		if (this.state.isRefreshing) this.setState({ isRefreshing: false });
	}

	onRefresh() {
		this.setState({ isRefreshing: true });
		this.state.refreshList(this.state.userId);
	}

	onAddButtonPress(itemId) {
		const { userId, myActivities } = this.state;
		if (myActivities.indexOf(itemId) >= 0) return;
		console.log('add itemId', itemId);
		myActivities.push(itemId);
		this.state.onAddActivity(userId, myActivities);
	}

	onRemoveButtonPress(itemId) {
		console.log('remove itemId', itemId);
		const { userId, myActivities } = this.state;
		const index = myActivities.indexOf(itemId);
		if (index < 0) return;

		myActivities.splice(index, 1);
		this.state.onRemoveActivity(userId, myActivities);
	}

	getSectionList() {
		const sectionList = [];
		for (const activity of this.state.filteredActivities){
			for (const grade of activity.grade){
				var matchingSection = sectionList.find(section => section.key === grade)
				if (matchingSection){
					matchingSection.data.push(activity);
				} else {
					sectionList.push({
						data: [activity],
						key: grade
					})
				}
			}
		}
		sectionList.sort(function(a, b) {
			return a.key - b.key;
		});
		return sectionList;
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
		const addIcon = (
			<Icon
				style={ ActivityStyles.activityListItemIcon }
				name="ios-add-circle"
				color={ darkBlue }
				size={ 35 }
				onPress={ () => this.onAddButtonPress(item.id) }
			/>
		);
		const removeIcon = (
			<Icon
				style={ ActivityStyles.activityListItemIcon }
				name="ios-remove-circle"
				color={ darkBlue }
				size={ 35 }
				onPress={ () => this.onRemoveButtonPress(item.id) }
			/>
		);

		const icon = this.state.myActivities.includes(item.id) ? removeIcon : addIcon;

		return (
			<ListItem
				containerStyle={ ActivityStyles.activityListItem }
				titleStyle={ ActivityStyles.activityListItemText }
				subtitleStyle={ ActivityStyles.activityListItemSubtitle }
				key={ item.id }
				title={ item.title }
				subtitle={ "Station " + item.station }
				onPress={ () => this.renderActivityDetails(item, index) }
				rightIcon={ icon }
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

	renderActivityDetails(activity, index) {
		// Due to SectionList, the passed-in index is for each section (incorrect)
		index = this.state.currentActivities.indexOf(activity);
		this.props.navigation.navigate('ActivityDetails', {
			index,
			currentActivity: activity,
			activitiesList: this.state.currentActivities,
			onAddActivity: this.onAddButtonPress,
			onRemoveActivity: this.onRemoveButtonPress,
			myActivities: this.state.myActivities,
			isMyActivity: this.state.myActivities.includes(activity.id),
		});
	}

	render() {
		const sectionList = this.getSectionList();
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
					sections={ sectionList }
					renderItem={ this.renderListItem }
					keyExtractor={ this.keyExtractor }
					ListHeaderComponent={ this.renderHeader }
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

const mapStateToProps = ({ currentActivities, myActivities, userLogin }) => {
	const userId = (userLogin.hasOwnProperty('_id')) ? userLogin._id : null;
	return {
		currentActivities,
		myActivities,
		userId
	};
};

const mapDispatchToProps = dispatch => {
	return {
		refreshList: (userId) => {
			dispatch(getUserActivities(userId))
			dispatch(getActivityList());
		},
		onAddActivity: (userId, userActivities) => {
			dispatch(addActivity(userId, userActivities));
		},
		onRemoveActivity: (userId, userActivities) => {
			dispatch(removeActivity(userId, userActivities));
		}
	}
};

ActivityList.propTypes = {
	currentActivities: PropTypes.array.isRequired,
	myActivities: PropTypes.array.isRequired,
	userId: PropTypes.string.isRequired,
	refreshList: PropTypes.func.isRequired,
	onAddActivity: PropTypes.func.isRequired,
	onRemoveActivity: PropTypes.func.isRequired,
	navigation: PropTypes.object.isRequired,
	navigate: PropTypes.func
};

ActivityList.defaultProps = {
	navigate:() => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityList);
