import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	RefreshControl,
	ScrollView,
	TouchableOpacity,
	Text,
	View,
	Image,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import SortableList from 'react-native-sortable-list';
import MyScheduleTile from './MyScheduleTile';
import ActivityStyles from '../../styles/ActivityStyles';
import {
	editUser,
	getActivityList,
	getUserActivities,
} from '../../actions';
import emptyImage from '../../images/emptyMySchedule.png';
import { arrayEquals } from '../../utils/arrays';
import { darkBlue } from '../../styles/Colours';

const BEGIN = {
	id: 'BEGIN',
	title: '9:30 - Activities Begin',
};

const LUNCH = {
	id: 'LUNCH',
	title: '11:30 - Lunch'
};

const END = {
	id: 'END',
	title: '1:45 - Activities End',
};

const getMyActivities = (myActivities, currentActivities) => {
	const activities = myActivities.slice(0);
	currentActivities.forEach(item => {
		const index = myActivities.indexOf(item.id);
		if (index !== -1) {
			activities[index] = item;
		}
	});

	const lunchIndex = myActivities.indexOf(LUNCH.id);
	activities[lunchIndex] = LUNCH;

	return activities;
};

class MySchedule extends React.Component {

	constructor(props) {
		super(props);

		const userId = (props.currentUser && props.currentUser.hasOwnProperty('_id')) ? props.currentUser._id : null;
		const myActivities = getMyActivities(props.myActivities, props.currentActivities);

		this.state = {
			user: props.currentUser,
			userId,
			updateUser: props.updateUser,
			refreshList: props.refreshList,
			isRefreshing: false,
			myActivities,
			order: myActivities.map((id, idx) => idx)
		};

		this.onRefresh = this.onRefresh.bind(this);
		this.handleIncomingActivities = this.handleIncomingActivities.bind(this);
		this.reorder = this.reorder.bind(this);
		this.renderListItem = this.renderListItem.bind(this);
		this.navigateToAllActivities = this.navigateToAllActivities.bind(this);
	}

	componentDidMount() {
		this.state.refreshList(this.state.userId);
	}

	componentWillReceiveProps(nextProps) {
		// Avoiding refresh if possible
		const myActivitiesId = this.state.myActivities.map(a => a.id);
		if (!arrayEquals(nextProps.myActivities, myActivitiesId)) {
			this.handleIncomingActivities(nextProps.myActivities, nextProps.currentActivities);
		}

		// Update rearranged activities
		if (!nextProps.isEditing && this.props.isEditing && this.state.order.length) {
			const activities = this.state.order.map(idx => this.state.myActivities[idx].id);
			this.state.updateUser({ id: this.state.userId, activities }, this.state.user);
		}

		if (this.state.isRefreshing) this.setState({ isRefreshing: false });
	}

	shouldComponentUpdate(nextProps) {
		const myActivitiesId = this.state.myActivities.map(a => a.id);
		return !arrayEquals(nextProps.myActivities, myActivitiesId) || nextProps.isEditing !== this.state.isEditing;
	}

	onRefresh() {
		this.setState({ isRefreshing: true });
		this.state.refreshList(this.state.userId);
	}

	handleIncomingActivities(newActivities, currentActivities) {
		const myActivities = getMyActivities(newActivities, currentActivities);
		const order = myActivities.map((_, idx) => idx);
		this.setState({ myActivities, order });
	}

	navigateToAllActivities() {
		this.props.navigation.navigate('ActivityList');
	}

	reorder(nextOrder){
		this.setState({ order: nextOrder });
	}

	renderListItem({ data, active }) {
		if (data.id === 'LUNCH') {
			return (
				<ListItem
					containerStyle={ ActivityStyles.activityListBlueItem }
					titleStyle={ ActivityStyles.activityListItemBlueText }
					key={ LUNCH.id }
					title={ LUNCH.title }
					chevronColor={ darkBlue }
				/>
			);
		}
		return (
			<MyScheduleTile
				item={ data }
				active={ active }
				userId={ this.state.userId }
				realIndex={ this.state.myActivities.indexOf(data) }
				navigate={ this.props.navigation.navigate }
				isEditing={ this.props.isEditing }
			/>
		);
  }

	render() {
		if (this.state.myActivities.length === 0) {
			return (
				<ScrollView style={ ActivityStyles.emptyScreen }>
					<View style={ ActivityStyles.emptyImage }><Image source={ emptyImage } /></View>
					<Text style={ ActivityStyles.emptyTopText }>Nothing Here!</Text>
					<Text style={ ActivityStyles.emptyBottomText }>Please go to the</Text>
					<TouchableOpacity onPress={ this.navigateToAllActivities }>
						<Text style={ ActivityStyles.emptyLinkText } >All Activities Tab</Text>
					</TouchableOpacity>
					<Text style={ ActivityStyles.emptyBottomText }>to add to your schedule</Text>
				</ScrollView>
			);
		}

		const refreshControl = (
			<RefreshControl
				refreshing={ this.state.isRefreshing }
				onRefresh={ this.onRefresh }
				enabled={ !this.props.isEditing }
			/>
		);

		return (
			<ScrollView
				style={ ActivityStyles.activityPadding }
				refreshControl={ refreshControl }
				scrollEnabled={ !this.props.isEditing }
			>
				<ListItem
					containerStyle={ ActivityStyles.activityListBlueItem }
					titleStyle={ ActivityStyles.activityListItemBlueText }
					key={ BEGIN.id }
					title={ BEGIN.title }
					chevronColor={ darkBlue }
				/>
				<SortableList
					data={ this.state.myActivities }
					renderRow={ this.renderListItem }
					onChangeOrder={ this.reorder }
					order={ this.state.order }
					rowActivationTime={ 100 }
				/>
				<ListItem
					containerStyle={ ActivityStyles.activityListBlueItem }
					titleStyle={ ActivityStyles.activityListItemBlueText }
					key={ END.id }
					title={ END.title }
					chevronColor={ darkBlue }
				/>
			</ScrollView>
		);
	}
}

const mapStateToProps = ({ currentActivities, currentUser, myActivities }) => {
	return {
		currentActivities,
		myActivities,
		currentUser
	};
};

const mapDispatchToProps = dispatch => {
	return {
		updateUser: (user, oldUser) => {
			dispatch(editUser(user, oldUser));
		},
		refreshList: (userId) => {
			dispatch(getUserActivities(userId))
			dispatch(getActivityList());
		}
	}
};

MySchedule.propTypes = {
	currentActivities: PropTypes.array.isRequired,
	myActivities: PropTypes.array.isRequired,
	currentUser: PropTypes.object.isRequired,
	updateUser: PropTypes.func.isRequired,
	refreshList: PropTypes.func.isRequired,
	navigation: PropTypes.object.isRequired,
	isEditing: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MySchedule);
