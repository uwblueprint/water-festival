import { StyleSheet } from 'react-native'

const ActivityStyles = StyleSheet.create({
	activityPadding: {
		paddingBottom: 40,
	},
	titleText: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#FFFFFF',
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
	activityHeader: {
		backgroundColor: '#293038',
		height: 60,
		alignItems: 'center',
		justifyContent: 'center',
	},
	activityListItem: {
		height: 80,
		justifyContent: 'center',
		alignItems: 'center',
    borderBottomWidth: 0,
	},
	activityListItemText: {
		paddingTop: 8,
		paddingBottom: 2,
		paddingLeft: 10,
		fontSize: 20,
	},
	activityListItemSubtitle: {
		paddingTop: 2,
		paddingBottom: 10,
		paddingLeft: 10,
		fontSize: 15,
	},
	activityListItemIcon: {
		paddingTop: 10
	},
	activityDetailsContainer: {
		backgroundColor: 'white',
		flex: 1,
		paddingLeft: 30,
		paddingTop: 20,
		paddingRight: 20,
	},
	activityDetailsTitle: {
		fontSize: 25,
	},
	activityDetailsStation: {
		fontSize: 18,
		paddingBottom: 15,
		color: "#1a417a"
	},
	activityDetailsDescription: {
		fontSize: 17,
		paddingBottom: 25
	},
	activityDetailsDescriptionTitle:{
		paddingTop: 25,
		fontSize: 20,
	},
	activityDetailsButton: {
		fontSize: 17,
		paddingRight: 20,
	},
});

export default ActivityStyles;
