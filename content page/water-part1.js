import React, { Component } from 'react';
// import { Text } from 'react-native';

class Category extends Component {
	static navigationOptions = {
		title: 'Category',
	};

	constructor(props) { // setup propss
		super(props);

	}

	render() { 
		return (
			<View style={allActivitiesStyles.container}>   
				<Text>Event Name</Text>
				<Text>{this.props.name}</Text> 
				<Image source={this.props.pic}/> 
				<Text>Description</Text>
				<Text>{this.props.detail}</Text>
				<Text>Keywords</Text>
				<Button
					onPress={}
					title="ADD TO MY EVENTS"
					color="#841584"
				/>
			</View> // is the Image property right??????????
		);
	}
}

export default class Location extends Component {
	render() {
		return (
			<Category name='Waterloo'/> 
		);
	}

}

export default class Description extends Component {
	render() {
		return (
			<Category detail=''/>
		);
	}
}


export default class StationImg extends Component {
	render(){
		let pic = { 
			uri: '' // some station image 
		}
		return (
			<Image source={pic} style={}/> // set style

		);
	}
}
