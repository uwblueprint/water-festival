import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	ScrollView,
	RefreshControl,
	SectionList,
	Text,
} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActivityStyles from '../../styles/ActivityStyles';
import { activityLoaded, addActivity, removeActivity } from '../../actions';

const API_URL = "https://water-fest.herokuapp.com/activities";


class ActivityList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentActivities: this.props.currentActivities,
			filteredActivities: this.props.currentActivities,
			myActivities: this.props.myActivities,
			isRefreshing: false,
		};
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
		if (nextProps.currentActivities !== this.state.currentActivities ||
			nextProps.myActivities !== this.state.myActivities) {
			this.setState({ currentActivities: nextProps.currentActivities,
					myActivities: nextProps.myActivities,
					filteredActivities: nextProps.currentActivities,
				});
		}
	}

	onRefresh = () => {
		this.setState({ isRefreshing: true });
		this.fetchData().then(() => {
			this.setState({ isRefreshing: false });
		});
	}

	getSectionList = () => {
		const sectionList = [];
		for (const activity of this.state.filteredActivities){
			for (const grade of activity.grade){
				var matchingSection = sectionList.find(section => section.key === grade)
				if (matchingSection){
					matchingSection.data.push(activity);
				} else {
					sectionList.push({
						data:[activity],
						key:grade
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

	// linting error required that fetchData is placed after getSectionList
	fetchData() {
		return fetch(`${API_URL}/list`)
			.then(response => response.json())
			.then(activityList => this.props.onActivityLoaded(activityList))
			// eslint-disable-next-line no-console
			.catch(err => console.error(err));
	}

	handleSearchChange = (term) => {
		const { currentActivities } = this.state;

		const filteredActivities = currentActivities.filter(item => {
      			return item.title.toLowerCase().trim().indexOf(term.toLowerCase().trim()) > -1;
		});
		
		this.setState({ filteredActivities })
	}

	renderListItem = ({ item, index }) => {
		const addIcon = (
			<Icon
				style={ ActivityStyles.activityListItemIcon }
				name="add-circle-outline"
				color="black"
				size={ 35 }
				onPress={ () => this.props.onAddActivity(item.id) }
			/>
		);
		const removeIcon = (
			<Icon
				style={ ActivityStyles.activityListItemIcon }
				name="remove-circle-outline"
				color="black"
				size={ 35 }
				onPress={ () => this.props.onRemoveActivity(item.id) }
			/>
		);
		const icon = this.state.myActivities.includes(item.id)? removeIcon : addIcon;
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

	renderHeader = () => {
		return (
			<SearchBar 
				placeholder="Search for activities here!"
				cancelButtonTitle="Cancel"
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
			onAddActivity: this.props.onAddActivity,
			onRemoveActivity: this.props.onRemoveActivity,
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
				style={ ActivityStyles.activityPadding, { backgroundColor: 'white' } }
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

const mapStateToProps = ( state ) => {
	return { currentActivities : state.currentActivities,
		myActivities: state.myActivities
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onActivityLoaded: activityList => {
			dispatch(activityLoaded(activityList));
		},
		onAddActivity: activity => {
			dispatch(addActivity(activity));
		},
		onRemoveActivity: activity => {
			dispatch(removeActivity(activity));
		}
	}
};

ActivityList.propTypes = {
	currentActivities: PropTypes.array.isRequired,
	myActivities: PropTypes.array.isRequired,
	onActivityLoaded: PropTypes.func.isRequired,
	onAddActivity: PropTypes.func.isRequired,
	onRemoveActivity: PropTypes.func.isRequired,
	navigation: PropTypes.object.isRequired,
	navigate: PropTypes.func
};

ActivityList.defaultProps = {
	navigate:() => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityList);
