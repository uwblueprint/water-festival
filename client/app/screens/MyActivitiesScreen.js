import React from 'react';
import { View, Text } from 'react-native';

class MyActivitiesScreen extends React.Component {
	/* eslint-enable */
	static navigationOptions = {
		title: 'My Activities',
	};
	render() {
		return (
			<View>
				<Text>These are my activities.</Text>
			</View>
		);
	}
}
export default MyActivitiesScreen;