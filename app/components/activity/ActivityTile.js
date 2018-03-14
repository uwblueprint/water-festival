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
			index,
			realIndex,
			userId
		} = props;

		this.state = {
			onAddActivity,
			onRemoveActivity,
			myActivities,
			item,
			index,
			realIndex,
			isAdded: myActivities.includes(item.id),
			userId
		};

		this.onAddButtonPress = this.onAddButtonPress.bind(this);
		this.onRemoveButtonPress = this.onRemoveButtonPress.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		// only update if isAdded needs to be changed
		const hasItem = nextProps.myActivities.includes(this.state.item.id);
	  if (!this.state.isAdded && hasItem) this.setState({ isAdded: true });
		else if (this.state.isAdded && !hasItem) this.setState({ isAdded: false });
		if (!arrayEquals(this.state.myActivities, nextProps.myActivities)) {
			this.setState({ myActivities: nextProps.myActivities });
		}
	}

	renderActivityDetails(activity, index) {
		// Due to SectionList, the passed-in index is incorrect for each section (must use "realIndex")
		this.props.navigation.navigate('ActivityDetails', {
			index: this.state.realIndex,
			currentActivity: activity,
			activitiesList: this.state.currentActivities,
			onAddActivity: this.onAddButtonPress,
			onRemoveActivity: this.onRemoveButtonPress,
			myActivities: this.state.myActivities,
			isMyActivity: this.state.myActivities.includes(activity.id),
		});
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

	render() {
		const {
			onAddActivity,
			onRemoveActivity,
			item,
			index,
			isAdded
		} = this.state;

		console.log('hullo');
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
					onPress={ () => renderActivityDetails(item, index) }
					rightIcon={ icon }
				/>
			);
	}
}

ActivityTile.propTypes = {
	onAddActivity: PropTypes.func.isRequired,
	onRemoveActivity: PropTypes.func.isRequired,
	myActivities: PropTypes.array.isRequired,
	item: PropTypes.object.isRequired,
	userId: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	realIndex: PropTypes.number.isRequired,
};

const mapStateToProps = ({ myActivities }) => ({ myActivities });

const mapDispatchToProps = dispatch => {
	return {
		onAddActivity: (userId, userActivities) => {
			dispatch(addActivity(userId, userActivities));
		},
		onRemoveActivity: (userId, userActivities) => {
			dispatch(removeActivity(userId, userActivities));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityTile);
