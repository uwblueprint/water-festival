import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Button from 'react-native-button';
import { NavigationActions } from 'react-navigation'
import GameStyles from '../styles/GameStyles';
import Header from '../components/Header'

class GameScreen extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		header: (
			<Header
				title=""
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
	render() {
		return (
			<ScrollView style={ GameStyles.gameDetailsContainer }>
				<Text style={ GameStyles.titleText } > Groundwater Detective Game </Text>
				<View style={ GameStyles.gameDetailsContainerText }>
					<Text style={ GameStyles.gameDetailsDescriptionTitle }>
						{"Description"}
					</Text>
				</View>
				<Text style={ GameStyles.gameDetailsDescription }>
					{"As students make their way around the Festival site,"+
					" they are asked to look for 'water drops' with the answers to"+
					" the questions on the Groundwater Detective sheet. These game"+
					"sheets can be picked up at the Information Booth located at three"+
					" locations throughout the site. #3 on the site map.\n \n"+
					"Enter the game sheet in the ballot box (Information Booth)"+
						" at the end of the day, for your group’s chance to win a class"+
						"prize of an 'Edible Aquifer' party. Build an edible aquifer,"+
						" which includes ice cream and pop, representing the component"+
						"of an aquifer."}
				</Text>
				<View style={ GameStyles.gameDetailsContainerButtons }>
					<Button
						activeOpacity={ 1 }
						containerStyle={ GameStyles.gameDetailsMapButton }
						style={ GameStyles.gameDetailsMapButtonText }
					>
						SHOW ON MAP
					</Button>
				</View>
			</ScrollView>
		);
	}
}

export default GameScreen;
