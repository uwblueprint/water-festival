import React, { Component } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ContentPage extends Component {
	static navigationOptions = {
		title: 'Content Page',
	};

	constructor(props) { // setup propss
		super(props);

	}

	render() { 
		const { navigate } = this.props.navigation;
		return (
			<View style={allActivitiesStyles.container}>   
				<Text>Event Name</Text>
				<Text>{this.props.name}</Text> 
				<Image source={this.props.pic}/> 
				<Text>Description</Text>
				<Text>{this.props.detail}</Text>
				<Text>Keywords</Text>
				<Button
					// onPress={}
					title="ADD TO MY EVENTS"
					color="#841584"
				/>
			</View> // is the Image property right??????????
		);
	}
}

class Location extends Component {
	render() {
		return (
			<Category name='Waterloo'/> 
		);
	}

}

class Description extends Component {
	render() {
		return (
			<Category detail=''/>
		);
	}
}


class StationImg extends Component {
	render(){
		let pic = { 
			uri: '' // some station image 
		}
		return (
			<Image source={pic}/> // set style

		);
	}
}

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


export default ContentPage;
