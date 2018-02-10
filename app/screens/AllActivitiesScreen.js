import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	SectionList
} from 'react-native';

class AllActivitiesScreen extends React.Component {
	static navigationOptions = {
		title: 'All Activities',
	};
	render() {
		return (
			<View style={ allActivitiesStyles.container }>
				<SectionList
					sections={ [
						{ title: 'Grade 2', data: ['Animals and Water', 'Snow Cone Station', 'Storm Water', 'Watering Hole'] },
						{ title: 'Grade 3', data: ['Down on the Farm', 'Drainwater Detectives', 'No Water off a Duck\'s Back', 'Rethnk your Drink', 'Wet N\' Wild'] },
						{ title: 'Grade 4', data: ['Water Water Water', 'Loo Loo Loo', 'Wellington Visitor'] },
						{ title: 'Grade 5', data: ['I Love Water', 'I <3 Water', 'H20 :)'] },
					] }
					renderItem={ ({ item }) => (
						<Text style={ allActivitiesStyles.item }>{item}</Text>
					) }
					keyExtractor={ (item, index) => index }
					renderSectionHeader={ ({ section }) => (
						<Text
							style={ allActivitiesStyles.sectionHeader }
						>
							{section.title}
						</Text>
					) }
				/>
			</View>
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

export default AllActivitiesScreen;