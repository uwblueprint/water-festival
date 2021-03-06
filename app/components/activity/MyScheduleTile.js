import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { ListItem, Icon } from 'react-native-elements';
import { addActivity, removeActivity } from '../../actions';
import { arrayEquals } from '../../utils/arrays';
import ActivityStyles from '../../styles/ActivityStyles';
import { darkGray, deleteRed } from '../../styles/Colours';

class ActivityTile extends Component {

	constructor(props) {
		super(props);

		const {
			onAddActivity,
			onRemoveActivity,
			myActivities,
			item,
			realIndex,
			userId,
			navigate
		} = props;

		this.state = {
			onAddActivity,
			onRemoveActivity,
			myActivities,
			item,
			realIndex,
			userId,
			navigate
		};

		this.onAddButtonPress = this.onAddButtonPress.bind(this);
		this.onRemoveButtonPress = this.onRemoveButtonPress.bind(this);
		this.renderActivityDetails = this.renderActivityDetails.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		// only update if isAdded needs to be changed
		if (!arrayEquals(this.state.myActivities, nextProps.myActivities)) {
			this.setState({ myActivities: nextProps.myActivities });
		}
	}

	onAddButtonPress(itemId) {
		const { userId, myActivities } = this.state;
		if (myActivities.indexOf(itemId) >= 0) return;

		const newActivities = [...myActivities, itemId];
		this.state.onAddActivity(userId, myActivities, newActivities);
	}

	onRemoveButtonPress(itemId) {
		const { userId, myActivities } = this.state;
		const index = myActivities.indexOf(itemId);
		if (index < 0) return;

		const newActivities = myActivities.filter(a => a !== itemId);
		this.state.onRemoveActivity(userId, myActivities, newActivities);
	}

	renderActivityDetails(activity) {
		// Due to SectionList, the passed-in index is incorrect for each section (must use "realIndex")
		this.state.navigate('ActivityDetails', {
			index: this.state.realIndex,
			currentActivity: activity,
			activitiesList: this.state.currentActivities,
			onAddActivity: this.onAddButtonPress,
			onRemoveActivity: this.onRemoveButtonPress,
			myActivities: this.state.myActivities,
			isMyActivity: this.state.myActivities.includes(activity.id),
		});
	}

	renderActivityBadge(item){
		if (!item.isOpen){
			return (
				<View
					style={ [ActivityStyles.activityBadge, ActivityStyles.activityBadgeClosed] }
				>
					<Text style={ [ActivityStyles.badgeText, ActivityStyles.badgeTextClosed] }>CLOSED</Text>
				</View>
			);
		} else if (item.isNewActivity){
			return (
				<View
					style={ [ActivityStyles.activityBadge, ActivityStyles.activityBadgeNew] }
				>
					<Text style={ [ActivityStyles.badgeText, ActivityStyles.badgeTextNew] }>NEW</Text>
				</View>
			);
		} else{
			return (<View />);
		}
	}

	render() {
		const { item } = this.state;
		const badge = this.renderActivityBadge(item);

		if (this.props.isEditing) {
			const icon = (
				<Icon
					name='delete'
					size={ 30 }
					color={ deleteRed }
					style={{ marginTop: 5 }}
					onPress={ () => this.onRemoveButtonPress(item.id) }
				/>
			);

			const containerStyle = (this.props.active) ? ActivityStyles.activityListItemActive : ActivityStyles.activityListItem;

			return (
				<ListItem
					containerStyle={ containerStyle }
					titleStyle={ ActivityStyles.activityListItemText }
					subtitleStyle={ ActivityStyles.activityListItemSubtitle }
					key={ item.id }
					title={ item.title }
					subtitle={ "Station " + item.station }
					badge={{ element: badge }}
					rightIcon={ icon }
				/>
			);
		} else {
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
					onPress={ () => this.renderActivityDetails(item) }
					rightIcon={ icon }
					badge={{ element: badge }}
				/>
			);
		}
	}
}

ActivityTile.propTypes = {
	item: PropTypes.object.isRequired,
	isEditing: PropTypes.bool.isRequired,
	userId: PropTypes.string.isRequired,
	realIndex: PropTypes.number.isRequired,
	navigate: PropTypes.func.isRequired,
	active: PropTypes.bool,
	// Reducers
	myActivities: PropTypes.array.isRequired,
	// Action creators
	onAddActivity: PropTypes.func.isRequired,
	onRemoveActivity: PropTypes.func.isRequired,
};

ActivityTile.defaultProps = {
	active: false
};

const mapStateToProps = ({ myActivities }) => ({ myActivities });

const mapDispatchToProps = dispatch => {
	return {
		onAddActivity: (userId, oldActivities, newActivities) => {
			dispatch(addActivity(userId, oldActivities, newActivities));
		},
		onRemoveActivity: (userId, oldActivities, newActivities) => {
			dispatch(removeActivity(userId, oldActivities, newActivities));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityTile);
