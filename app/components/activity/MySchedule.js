import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	RefreshControl,
	ScrollView,
	FlatList,
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import ActivityStyles from '../../styles/ActivityStyles';
import {
	getActivityList,
	getUserActivities,
	addActivity,
	removeActivity
} from '../../actions';
import { darkGray,darkBlue } from '../../styles/Colours';

const BEGIN = {
	id: 'BEGIN',
	title: '9:30 - Activities Begin',
}

const END = {
	id: 'END',
	title: '1:45 - Activities End',
}

class MySchedule extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentActivities: props.currentActivities,
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
		if (nextProps.myActivities !== this.state.myActivities) {
			this.setState({ myActivities: nextProps.myActivities });
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

		myActivities.push(itemId);
		this.state.onAddActivity(userId, myActivities);
	}

	onRemoveButtonPress(itemId) {
		const { userId, myActivities } = this.state;
		const index = myActivities.indexOf(itemId);
		if (index < 0) return;

		myActivities.splice(index, 1);
		this.state.onRemoveActivity(userId, myActivities);
	}

	renderListItem({ item, index }) {	
		if (item.id === 'BEGIN' || item.id === 'END') {
			return (
				<ListItem
					containerStyle={ ActivityStyles.activityListBlueItem }
					titleStyle={ ActivityStyles.activityListItemBlueText }
					key={ item.id }
					title={ item.title }
					chevronColor={ darkBlue }
				/>
			)
		}

		if (!this.state.myActivities.includes(item.id)) {
      return null;
		}

		const icon = (
			<Icon
				name='arrow-forward'
				size={ 30 }
				color={ darkGray }
				style={{ marginTop: 5 }}
			/>
		);

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
		const activities = [BEGIN, ...this.state.currentActivities, END];

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
				<FlatList
					data={ activities }
					renderItem={ this.renderListItem }
					extraData={ this.state }
					keyExtractor={ item => item.id }
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
			dispatch(getUserActivities(userId));
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

MySchedule.propTypes = {
	currentActivities: PropTypes.array.isRequired,
	myActivities: PropTypes.array.isRequired,
	userId: PropTypes.string.isRequired,
	refreshList: PropTypes.func.isRequired,
	onAddActivity: PropTypes.func.isRequired,
	onRemoveActivity: PropTypes.func.isRequired,
	navigation: PropTypes.object.isRequired,
	navigate: PropTypes.func
};

MySchedule.defaultProps = {
	navigate:() => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(MySchedule);
