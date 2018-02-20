import React from 'react';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header'
import ActivityList from '../components/activity/ActivityList'
import ActivityDetails from '../components/activity/ActivityDetails'

import {
	View,
	Text,
	StyleSheet,
	SectionList
} from 'react-native';

class AllActivitiesScreen extends React.Component {
	static navigationOptions = {
		header: <Header title="All Activities" hasBackButton={ false } />,
		title: 'All Activities',
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ActivityList navigation={ this.props.navigation } />
		);
	}
}

const AllActivitiesScreenStack = StackNavigator({
	ActivityList: {
		screen: AllActivitiesScreen,
	},
	ActivityDetails: {
		screen: ActivityDetails,
	},
},
{
	mode: 'modal',
});

AllActivitiesScreen.propTypes = {
	navigation: PropTypes.object.isRequired
};
export default AllActivitiesScreenStack;

const allActivitiesStyles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 22
	},
	sectionHeader: {
		paddingTop: 3,
		paddingLeft: 36,
		paddingBottom: 2,
		fontSize: 15,
		fontWeight: 'bold',
		color: '#FFFFFF',
		backgroundColor: '#92D3F9',
	},
	item: {
		fontSize: 16.5,
		color: '#000000',
		alignItems: 'flex-end',
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#F3FAFD',
		paddingTop: 8,
		paddingLeft: 36,
		paddingRight: 20,
		paddingBottom: 10,
		height: 60
	},
	icon: {
		color: "black"
	}
});

//export default AllActivitiesScreen;
