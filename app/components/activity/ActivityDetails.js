import React from 'react';
import PropTypes from 'prop-types';
import {
	Text,
	View,
	Button,
} from 'react-native';
import ActivityStyles from '../../styles/ActivityStyles';
import Header from '../Header'
import ListSlider from '../ListSlider';

class ActivityDetails extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		header: (
			<Header
				title="Activity Details"
				hasBackButton
				navigation={ navigation }
			/>
		)
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
				title="Add to My Activities"
				color="#1a417a"
				onPress={ () => this.addActivity(id) }
				style={ ActivityStyles.activityDetailsButton }
			/>
		);
		const removeButton = (
			<Button
				title="Remove from My Activities"
				color="#1a417a"
				onPress={ () => this.removeActivity(id) }
				style={ ActivityStyles.activityDetailsButton }
			/>
		);
		return this.state.myActivities.includes(id) ? removeButton : addButton;
	}

	renderItem = (item, index) => {
		const button = this.renderButton(item.id);
		return (
			<View key={ index } style={ ActivityStyles.activityDetailsContainer }>
				<Text style={ ActivityStyles.activityDetailsTitle }>
					{item.title}
				</Text>
				<Text style={ ActivityStyles.activityDetailsStation }>
					{"Station " + item.station}
				</Text>
				<Text style={ ActivityStyles.activityDetailsDescriptionTitle }>
					{"Description"}
				</Text>
				<Text style={ ActivityStyles.activityDetailsDescription }>
					{item.description}
				</Text>
				{button}
			</View>
		);
	}

	render() {
		const { state } = this.props.navigation;
		return (
			<ListSlider
				renderItem={ this.renderItem }
				currentIndex={ state.params.index }
				itemList={ state.params.activitiesList }
			/>
		);
	}
}

ActivityDetails.propTypes = {
	navigation: PropTypes.object.isRequired,
};

export default ActivityDetails;
