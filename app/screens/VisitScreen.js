import React from 'react';
import { View, Text } from 'react-native';
import Button from 'react-native-button';
import { NavigationActions } from 'react-navigation'
import ActivityStyles from '../styles/ActivityStyles';
import Header from '../components/Header'
import {
	RefreshControl,
	ScrollView,
	FlatList,
} from 'react-native';
import { List,ListItem, Icon } from 'react-native-elements';
import PrepCheckTile from '../components/checkList/prepCheckTile'

const myList = [
  {
    text: 'REVIEW the Health and Safety Protocol'
  },
  {
    text: 'Attend one of the Orientation / Planning sessions OR Download the WWCGF App'
  },
  {
    text: 'Using your class list, divide students into small groups (6 students / 1 adult)'
  },
  {
    text: 'Assign one adult supervisor per group (All supervisors are admitted free of charge).'+
          ' Please use name tags provided for all supervisors (parents and teachers)'
  },
  {
    text: 'Advise all group supervisors that they are responsible for the behaviour of their group' +
          ' during the  visit, and the students must be accompanied by an adult at all times.'+
          ' Please ask supervisors to keep children out of the Schneider Creek.'
  },
  {
    text: 'All parent volunteers to arrive with the bus. NO CAR PARKING ON-SITE '+
          'Note: Please contact WWCGF coordinator for any special needs concerns, to arrange for a Parking Pass'
  },
  {
    text: 'Distribute copies of the Visit Scheduler, Activity Centre List and  the Site Map to all group leaders ( teachers and parent volunteers)'+
          ' Or Download the NEW WWCGF App'
  },
  {
    text: 'Familiarize yourself with the site map and plan ahead by selecting activities and exhibits which best suit your groups’ interest.'+
          ' A Visit Scheduler and an Attendance form has been provided for your convenience.'
  },
  {
    text: 'Start each group from a different location and move in rotation to avoid congestion.'+
          ' Each activity Centre has been described for planning and organization. Note there are two entrances to the site.'
  },
  {
    text: 'Please note that the lunch period is from 11:30 a.m. – 12:00 p.m.'+
          ' Have students pack litter-free lunches which they will carry with them. You will not be able to purchase food on site.'
  },
  {
    text: 'By planning ahead and preparing all supervisors for your visit, everyone can take an active role in this valuable learning experience.'
  },
  {
    text: 'School will be invoiced - no payment on day of visit. (8.50 per student all adult supervisors free)'
  }
]



class VisitScreen extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		header: (
			<Header
				title="Preparation"
				hasBackButton
				// Need NavigationActions to access prev page bc nested stack navigators
				goBack={ () => navigation.dispatch(NavigationActions.back()) }
			/>
		),
		title: "Home", // to keep the title on the nav bar the same
	});

	constructor(props) {
		super(props);
		this.state = {
			userId: props.userId
		};
	}

	renderListItem({ item }) {
		return(
			<PrepCheckTile
				item={ item }
				userId={ this.state.userId }
			/>
		)
	}

	keyExtractor = (item) => item.id

	render() {
		return (
			<ScrollView style={ ActivityStyles.activityPadding }>
				<FlatList
					data={ myList }
					renderItem= { this.renderListItem }
					keyExtractor= { this.keyExtractor}
				/>
			</ScrollView>
		);
	}
}

export default VisitScreen;
