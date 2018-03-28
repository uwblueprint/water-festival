import React from 'react';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';
import Header from '../components/Header'
import MySchedule from '../components/activity/MySchedule';
import ActivityDetails from '../components/activity/ActivityDetails';

class MyScheduleScreen extends React.Component {
	static navigationOptions = ({navigation}) => {
		const {params} = navigation.state;
		if (params != undefined) {
			return {
				header: (
					<Header
						title="My Schedule"
						hasBackButton={ false }
						onEdit={ params.handleEdit }
					/>
				),
				title: 'My Schedule',
			};
		}
	};

	constructor(props) {
		super(props);

		this.state = {
			isEditing: false,
		}

		this.handleEdit = this.handleEdit.bind(this);
	}

	componentDidMount() {
		this.props.navigation.setParams({
			handleEdit: this.handleEdit,
		});
	}

	handleEdit() {
		this.setState(prevState => ({ isEditing: !prevState.isEditing }))
	}

	render() {
		return (
			<MySchedule isEditing={ this.state.isEditing } navigation={ this.props.navigation } />
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
