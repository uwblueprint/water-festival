import React from 'react';
import { View, Text } from 'react-native';
import Button from 'react-native-button';
import { NavigationActions } from 'react-navigation'
import GameStyles from '../styles/GameStyles';
import ActivityStyles from '../styles/ActivityStyles';
import Header from '../components/Header'
import {
	RefreshControl,
	ScrollView,
	FlatList,
} from 'react-native';
import { List,ListItem, Icon } from 'react-native-elements';
import { darkGray,darkBlue } from '../styles/Colours';

const list = [
  {
    text: 'REVIEW the Health and Safety Protocol',
    checked: false
  },
  {
    text: 'Attend one of the Orientation / Planning sessions OR Download the WWCGF App',
    checked: false
  },
  {
    text: 'Using your class list, divide students into small groups (6 students / 1 adult)',
    checked: false
  },
  {
    text: 'Assign one adult supervisor per group (All supervisors are admitted free of charge).'+
          ' Please use name tags provided for all supervisors (parents and teachers)',
    checked: false
  },
  {
    text: 'Advise all group supervisors that they are responsible for the behaviour of their group' +
          ' during the  visit, and the students must be accompanied by an adult at all times.'+
          ' Please ask supervisors to keep children out of the Schneider Creek.',
    checked: false
  },
  {
    text: 'All parent volunteers to arrive with the bus. NO CAR PARKING ON-SITE '+
          'Note: Please contact WWCGF coordinator for any special needs concerns, to arrange for a Parking Pass',
    checked: false
  },
  {
    text: 'Distribute copies of the Visit Scheduler, Activity Centre List and  the Site Map to all group leaders ( teachers and parent volunteers)'+
          ' Or Download the NEW WWCGF App',
    checked: false
  },
  {
    text: 'Familiarize yourself with the site map and plan ahead by selecting activities and exhibits which best suit your groups’ interest.'+
          ' A Visit Scheduler and an Attendance form has been provided for your convenience.',
    checked: false
  },
  {
    text: 'Start each group from a different location and move in rotation to avoid congestion.'+
          ' Each activity Centre has been described for planning and organization. Note there are two entrances to the site.',
    checked: false
  },
  {
    text: 'Please note that the lunch period is from 11:30 a.m. – 12:00 p.m.'+
          ' Have students pack litter-free lunches which they will carry with them. You will not be able to purchase food on site.',
    checked: false
  },
  {
    text: 'By planning ahead and preparing all supervisors for your visit, everyone can take an active role in this valuable learning experience.',
    checked: false
  },
  {
    text: 'School will be invoiced - no payment on day of visit. (8.50 per student all adult supervisors free)',
    checked: false
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
	}

  check(item){
    item.setState({text: item.state.text, checked: !item.state.checked})
  }

  setIcon(item){
    const checkIcon = (
      <Icon
        name='ios-checkmark-circle'
        type='ionicon'
        size={ 30 }
        color= '#17B730'
        style={{ marginTop: 5 }}
      />
    );

    const uncheckIcon = (
      <Icon
        name='ios-checkmark-circle-outline'
        type='ionicon'
        size={ 30 }
        color= '#17B730'
        style={{ marginTop: 5 }}
      />
    )

    if(item.checked){
      return checkIcon;
    }else{
     return uncheckIcon;
    }
  }

	render() {
		return (
			<View style={ GameStyles.gameDetailsContainer }>
      <List containerStyle={{marginBottom: 20}}>
        {
          list.map((l, i) => (
            <ListItem
            key={i}
            title={l.text}
            onPress={() => this.check(l)}
            rightIcon={this.setIcon(l)}
            />
          ))
        }
        </List>
			</View>
		);
	}
}

export default VisitScreen;
