import React from 'react';
import PropTypes from 'prop-types';
import {
	Text,
	View,
	Image,
} from 'react-native';
import Button from 'react-native-button';
import ActivityStyles from '../../styles/ActivityStyles';
import Header from '../Header'

class ActivityDetails extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		header: (
			<Header
				title="Activity Details"
				hasBackButton
				navigation={ navigation }
				goBack={ () => navigation.goBack() }
			/>
		),
		title: "All Activities",
		swipeEnabled: false,
	});

	constructor(props) {
		super(props);
		this.state = {
			myActivities: this.props.navigation.state.params.myActivities,
		};
	}

	addActivity(id){
		const { state } = this.props.navigation;
		state.params.onAddActivity(id);

		this.setState({ myActivities:[...this.state.myActivities, id] });
	}

	removeActivity(id){
		const { state } = this.props.navigation;
		state.params.onRemoveActivity(id);

		var newActivities = this.state.myActivities;
		var index = newActivities.indexOf(id);
		newActivities.splice(index, 1);
		this.setState({ myActivities:newActivities });
	}

	renderButton(id){
		const addButton = (
			<Button
				onPress={ () => this.addActivity(id) }
				activeOpacity={ 1 }
				containerStyle={ ActivityStyles.activityDetailsButton }
				style={ ActivityStyles.activityDetailsButtonText }
			>
				Add to My Schedule
			</Button>
		);
		const removeButton = (
			<Button
				onPress={ () => this.removeActivity(id) }
				activeOpacity={ 1 }
				containerStyle={ ActivityStyles.activityDetailsButtonRemove }
				style={ ActivityStyles.activityDetailsButtonText }
			>
				Remove from My Schedule
			</Button>
		);
		return this.state.myActivities.includes(id) ? removeButton : addButton;
	}

	renderImage(imageURI){
		if(imageURI){
			return (
				<Image
					style={ ActivityStyles.activityDetailsImage }
					source={{uri: imageURI}}
				/>
			);
		}
		return (null);
	}

	render() {
		const { state } = this.props.navigation;
		const activity = state.params.currentActivity;
		const button = this.renderButton(activity.id);
		const image = this.renderImage(activity.imageURI);
		return (
			<View key={ state.params.index } style={ ActivityStyles.activityDetailsContainer }>
				<Text style={ ActivityStyles.activityDetailsTitle }>
					{activity.title}
				</Text>
				<Text style={ ActivityStyles.activityDetailsStation }>
					{"Station " + activity.station}
				</Text>
				{image}
				<Text style={ ActivityStyles.activityDetailsDescriptionTitle }>
					{"Description"}
				</Text>
				<Text style={ ActivityStyles.activityDetailsDescription }>
					{activity.description}
				</Text>
				<Text style={ ActivityStyles.activityDetailsGrade }>
					{"Grade(s): " + activity.grade}
				</Text>
				{button}
			</View>
		);
	}
}

ActivityDetails.propTypes = {
	navigation: PropTypes.object.isRequired,
};

export default ActivityDetails;
