import React from 'react';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';
import Header from '../components/Header'
import MySchedule from '../components/activity/MySchedule';
import ActivityDetails from '../components/activity/ActivityDetails';

class MyScheduleScreen extends React.Component {
	static navigationOptions = () => ({
		header: (
			<Header
				title="My Schedule"
				hasBackButton={ false }
			/>
		),
		title: 'My Schedule',
	});

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<MySchedule navigation={ this.props.navigation } />
		);
	}
}

MyScheduleScreen.propTypes = {
	navigation: PropTypes.object.isRequired
};

const MyScheduleScreenStack = StackNavigator({
	MyScheduleScreen: {
		screen: MyScheduleScreen,
	},
	ActivityDetails: {
		screen: ActivityDetails,
	},
},
{
	mode: 'modal',
});

export default MyScheduleScreenStack;
