import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	ScrollView,
	FlatList,
} from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import ActivityStyles from '../../styles/ActivityStyles';
import { addActivity, removeActivity } from '../../actions';
import { darkGray } from '../../styles/Colours';

class MySchedule extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentActivities: this.props.currentActivities,
			myActivities: this.props.myActivities,
			// isRefreshing: false,
    };

    this.renderListItem = this.renderListItem.bind(this);
  }

  keyExtractor = (item) => item.id;

	renderListItem = ({ item, index }) => {
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
			onAddActivity: this.props.onAddActivity,
			onRemoveActivity: this.props.onRemoveActivity,
			myActivities: this.state.myActivities,
			isMyActivity: this.state.myActivities.includes(activity.id),
		});
	}

	render() {

		return (
			<ScrollView
				style={ ActivityStyles.activityPadding }
			>
				<FlatList
					data={ this.state.currentActivities }
					renderItem={ this.renderListItem }
					extraData={ this.state }
					keyExtractor={ this.keyExtractor }
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
		onAddActivity: activity => {
			dispatch(addActivity(activity));
		},
		onRemoveActivity: activity => {
			dispatch(removeActivity(activity));
		}
	}
};

MySchedule.propTypes = {
	currentActivities: PropTypes.array.isRequired,
	myActivities: PropTypes.array.isRequired,
	onAddActivity: PropTypes.func.isRequired,
	onRemoveActivity: PropTypes.func.isRequired,
	navigation: PropTypes.object.isRequired,
	navigate: PropTypes.func
};

MySchedule.defaultProps = {
	navigate:() => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(MySchedule);
