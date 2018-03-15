import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { addActivity, removeActivity } from '../../actions';
import { arrayEquals } from '../../utils/arrays';
import ActivityStyles from '../../styles/ActivityStyles';
import { darkBlue } from '../../styles/Colours';

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
			isAdded: myActivities.includes(item.id),
			userId,
			navigate
		};

		this.onAddButtonPress = this.onAddButtonPress.bind(this);
		this.onRemoveButtonPress = this.onRemoveButtonPress.bind(this);
		this.renderActivityDetails = this.renderActivityDetails.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		// only update if isAdded needs to be changed
		const hasItem = nextProps.myActivities.includes(this.state.item.id);
		if (!this.state.isAdded && hasItem) {
			this.setState({ isAdded: true });
		} else if (this.state.isAdded && !hasItem) {
			this.setState({ isAdded: false });
		}
		if (!arrayEquals(this.state.myActivities, nextProps.myActivities)) {
			this.setState({ myActivities: nextProps.myActivities });
		}
	}

	shouldComponentUpdate(nextProps) {
		const hasItem = nextProps.myActivities.includes(this.state.item.id);
		return (!this.state.isAdded && hasItem) || (this.state.isAdded && !hasItem);
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

	render() {
		const { item, isAdded } = this.state;
		const icon = isAdded
			? (
				<Icon
					style={ ActivityStyles.activityListItemIcon }
					name="ios-remove-circle"
					color={ darkBlue }
					size={ 35 }
					onPress={ () => this.onRemoveButtonPress(item.id) }
				/>
				)
			: (
				<Icon
					style={ ActivityStyles.activityListItemIcon }
					name="ios-add-circle"
					color={ darkBlue }
					size={ 35 }
					onPress={ () => this.onAddButtonPress(item.id) }
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
				/>
			);
	}
}

ActivityTile.propTypes = {
	item: PropTypes.object.isRequired,
	userId: PropTypes.string.isRequired,
	realIndex: PropTypes.number.isRequired,
	navigate: PropTypes.func.isRequired,
	// Reducers
	myActivities: PropTypes.array.isRequired,
	// Action creators
	onAddActivity: PropTypes.func.isRequired,
	onRemoveActivity: PropTypes.func.isRequired,
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
