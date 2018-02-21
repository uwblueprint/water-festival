import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	View,
	Platform,
	ScrollView,
	FlatList,
	RefreshControl,
	SectionList,
	Text,
} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActivityStyles from '../../styles/ActivityStyles';
import { activityLoaded, addActivity, removeActivity } from '../../actions';

const API_URL = `https://water-fest.herokuapp.com/activities`;


class ActivityList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentActivities: this.props.currentActivities,
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
			 });
		}
	}

	onRefresh = () => {
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
			.then(activityList => this.props.onActivityLoaded(activityList))
			// eslint-disable-next-line no-console
			.catch(err => console.error(err));
	}

	getSectionList = () => {
		var sectionList = [];
		for (activity of this.state.currentActivities){
			for (grade of activity.grade){
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

	renderListItem = ({ item, index }) => {
		var addIcon = (
			<Icon
				style={ActivityStyles.activityListItemIcon}
				name="add-circle-outline"
				color="black"
				size={ 35 }
				onPress={() => this.props.onAddActivity(item.id)}
			/>
		);
		var removeIcon = (
			<Icon
				style={ActivityStyles.activityListItemIcon}
				name="remove-circle-outline"
				color="black"
				size={ 35 }
				onPress={() => this.props.onRemoveActivity(item.id)}
			/>
		);
		var icon = this.state.myActivities.includes(item.id)? removeIcon : addIcon;
		return (
			<ListItem
				containerStyle={ ActivityStyles.activityListItem }
				titleStyle={ ActivityStyles.activityListItemText }
				subtitleStyle={ ActivityStyles.activityListItemSubtitle }
				key={ item.id }
				title={ item.title }
				subtitle={ "Station " + item.station }
				onPress= { () => this.renderActivityDetails(item, index) }
				rightIcon={ icon }
			/>
		);
	}

	renderHeader() {
		//TODO: Add actual search
		return <SearchBar placeholder="Search for activities here!" lightTheme />;
	}

	renderActivityDetails(activity, index) {
		this.props.navigation.navigate('ActivityDetails', {
			index,
			currentActivity: activity,
			activitiesList: this.state.currentActivities,
			onAddActivity: this.props.onAddActivity,
			onRemoveActivity: this.props.onRemoveActivity,
			isMyActivity: this.state.myActivities.includes(activity.id),
		});
	}

	render() {
		var sectionList = this.getSectionList();

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
					sections={sectionList}
					renderItem={ this.renderListItem }
					keyExtractor={ this.keyExtractor }
					renderSectionHeader={ ({ section }) => (
						<Text
							style={ ActivityStyles.sectionHeader }
						>
							Grade {section.key}
						</Text>
					)}
				/>
			</ScrollView>
		);
	}
}

const mapStateToProps = ( state, ownProps ) => {
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
