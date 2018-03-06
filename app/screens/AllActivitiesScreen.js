import React from 'react';
import PropTypes from 'prop-types';
import { StackNavigator, NavigationActions} from 'react-navigation'
import Header from '../components/Header'
import ActivityList from '../components/activity/ActivityList'
import ActivityDetails from '../components/activity/ActivityDetails'

class AllActivitiesScreen extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		header: (
			<Header
				title="All Activities"
				hasBackButton
				// Need NavigationActions to access prev page bc nested stack navigators
				goBack={ () => navigation.dispatch(NavigationActions.back()) }
			/>
		),
		title: 'All Activities',
	});

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
