import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Image,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomNavigation, { Tab, NavigationComponent } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TabNavigator } from 'react-navigation'
import { ContentPage } from './ContentPage'

class AllActivitiesScreen extends Component {
  static navigationOptions = {
    title: 'All Activities',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={allActivitiesStyles.container}>
        <SectionList
          sections={[
            {title: 'Grade 2', data: ['Animals and Water', 'Snow Cone Station', 'Storm Water', 'Watering Hole']},
            {title: 'Grade 3', data: ['Down on the Farm', 'Drainwater Detectives', 'No Water off a Duck\'s Back', 'Rethnk your Drink', 'Wet N\' Wild']},
            {title: 'Grade 4', data: ['Water Water Water', 'Loo Loo Loo', 'Wellington Visitor']},
            {title: 'Grade 5', data: ['I Love Water', 'I <3 Water', 'H20 :)']},
          ]}
          renderItem={({item}) => <Text style={allActivitiesStyles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={allActivitiesStyles.sectionHeader}>{section.title}</Text>}
          />
      </View>
    );
  }
}

class MyActivitiesScreen extends Component {
  static navigationOptions = {
    title: 'My Activities',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>These are my activities.</Text>
      </View>
    );
  }
}

class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map',
  };
  constructor(props) {
    super(props);
    this.state = {label: props.initialInput, x: props.x, y: props.y};
  }
  input() {
    this.setState({label: 'hello world'})
  }
  onClick(evt) {
    this.setState({label: '', x: evt.nativeEvent.locationX, y: evt.nativeEvent.locationY});
    x = evt.nativeEvent.locationX;
    y =  evt.nativeEvent.locationY;
    this.setState({label: ''});

    // LANDMARK #1
    if(x > 375 && x < 390 && y > 470 && y < 490){
      this.setState({label: 'LANDMARK #1 >'});
    }
    // LANDMARK #2
    else if(x > 305 && x < 315 && y > 445 && y < 455){
      this.setState({label: 'LANDMARK #2 >'});
    }
    // LANDMARK #2
    else if(x > 535 && x < 545 && y > 260 && y < 270){
      this.setState({label: 'LANDMARK #2 >'});
    }
    // LANDMARK #2
    else if(x > 680 && x < 690 && y > 280 && y < 290){
      this.setState({label: 'LANDMARK #2 >'});
    }
    // LANDMARK #3
    else if(x > 190 && x < 210 && y > 365 && y < 375){
      this.setState({label: 'LANDMARK #3 >'});
    }
    // LANDMARK #3
    else if(x > 550 && x < 560 && y > 205 && y < 215){
      this.setState({label: 'LANDMARK #3 >'});
    }
    // LANDMARK #4
    else if(x > 610 && x < 620 && y > 240 && y < 250){
      this.setState({label: 'LANDMARK #4 >'});
    }
    // LANDMARK #5
    else if(x > 670 && x < 680 && y > 165 && y < 175){
      this.setState({label: 'LANDMARK #5 >'});
    }
    // LANDMARK #6
    else if(x > 590 && x < 610 && y > 95 && y < 105){
      this.setState({label: 'LANDMARK #6 >'});
    }
    // LANDMARK #7
    else if(x > 515 && x < 525 && y > 90 && y < 105){
      this.setState({label: 'LANDMARK #7 >'});
    }
    // LANDMARK #8
    else if(x > 435 && x < 445 && y > 164 && y < 175){
      this.setState({label: 'LANDMARK #8 >'});
    }
    // LANDMARK #9
    else if(x > 510 && x < 520 && y > 210 && y < 220){
      this.setState({label: 'LANDMARK #9 >'});
    }
    // LANDMARK #10
    else if(x > 375 && x < 385 && y > 225 && y < 245){
      this.setState({label: 'LANDMARK #10 >'});
    }
    // LANDMARK #11
    else if(x > 260 && x < 275 && y > 225 && y < 235){
      this.setState({label: 'LANDMARK #11 >'});
    }
    // LANDMARK #12
    else if(x > 270 && x < 280 && y > 210 && y < 220){
      this.setState({label: 'LANDMARK #12 >'});
    }
    // LANDMARK #13
    else if(x > 270 && x < 285 && y > 265 && y < 275){
      this.setState({label: 'LANDMARK #13 >'});
    }
    // LANDMARK #14
    else if(x > 190 && x < 210 && y > 275 && y < 285){
      this.setState({label: 'LANDMARK #14 >'});
    }
    // LANDMARK #14
    else if(x > 570 && x < 580 && y > 155 && y < 165){
      this.setState({label: 'LANDMARK #14 >'});
    }
    // LANDMARK #15
    else if(x > 175 && x < 185 && y > 225 && y < 235){
      this.setState({label: 'LANDMARK #15 >'});
    }
    // LANDMARK #16
    else if(x > 185 && x < 195 && y > 190 && y < 200){
      this.setState({label: 'LANDMARK #16 >'});
    }
    // LANDMARK #17
    else if(x > 130 && x < 140 && y > 300 && y < 315){
      this.setState({label: 'LANDMARK #17 >'});
    }
    // LANDMARK #18
    else if(x > 160 && x < 170 && y > 310 && y < 320){
      this.setState({label: 'LANDMARK #18 >'});
    }
    // LANDMARK #19
    else if(x > 135 && x < 145 && y > 385 && y < 395){
      this.setState({label: 'LANDMARK #19 >'});
    }
    // LANDMARK #20
    else if(x > 295 && x < 305 && y > 380 && y < 390){
      this.setState({label: 'LANDMARK #20 >'});
    }
    // LANDMARK #21
    else if(x > 345 && x < 355 && y > 360 && y < 370){
      this.setState({label: 'LANDMARK #21 >'});
    }
    // LANDMARK #22
    else if(x > 270 && x < 285 && y > 440 && y < 450){
      this.setState({label: 'LANDMARK #22 >'});
    }
    // LANDMARK #23
    else if(x > 655 && x < 665 && y > 385 && y < 395){
      this.setState({label: 'LANDMARK #23 >'});
    }
    // LANDMARK #24
    else if(x > 600 && x < 610 && y > 345 && y < 355){
      this.setState({label: 'LANDMARK #24 >'});
    }

  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView horizontal={true} maximumZoomScale={5.0} >
        <ScrollView>
          <TouchableOpacity onPress={(evt) => this.onClick(evt) } activeOpacity={1.0}>
            <Image
              source = {{ uri: 'https://water-festival.herokuapp.com/map.png' }}
              style = {{ width: 838, height: 648 }}
            >
            <Text style={{backgroundColor: 'white', top: this.state.y - 5, left: this.state.x-5, position: "absolute"}}>
              {this.state.label}
            </Text>
            </Image>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    );
  }
}
MapScreen.defaultProps = { initialInput: '', x: 0, y: 0 };

class InformationScreen extends Component {
  static navigationOptions = {
    title: 'Information',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>More information can be found here.</Text>
      </View>
    );
  }
}


const WaterFestivalApp = TabNavigator({
  AllActivitiesScreen: { screen: AllActivitiesScreen },
  MyActivitiesScreen: {screen: MyActivitiesScreen},
  ContentPage: { screen: ContentPage },
  InformationScreen: {screen: InformationScreen}
}, {
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    bottomNavigationOptions: {
      style: {
        height: 60
      },
      labelColor: 'black',
      backgroundColor: '#C4C4C4',
      rippleColor: 'white',
      tabs: {
        AllActivitiesScreen: {
          icon: <Icon size={24} color="black" name="account-circle" />
        },
        MyActivitiesScreen: {
          icon: <Icon size={24} color="black" name="map" />
        },
        ContentPage: {
          icon: <Icon size={24} color="black" name="add" />
        },
        InformationScreen: {
          icon: <Icon size={24} color="black" name="perm-device-information" />
        }
      }
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    position: 'relative',
    fontSize: 40,
  },
  textinputContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinput: {
    width: 60,
    marginVertical: 2,
    marginHorizontal: 2,
    borderRadius: 5,
    borderColor: '#c7c7cc',
    backgroundColor: 'white',
  },

})

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
    paddingTop: 8,
    paddingLeft: 36,
    paddingBottom: 10,
    fontSize: 16.5,
    color: '#000000',
    height: 44,
    backgroundColor: '#F3FAFD',
  },
});

export default WaterFestivalApp;
