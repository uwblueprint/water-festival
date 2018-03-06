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
		fontSize: 17,
		color: '#FFFFFF',
		backgroundColor: '#0288D1',
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
    borderBottomWidth: 1,
		borderBottomColor: "#C0C0C0",
	},
	activityListItemText: {
		paddingTop: 8,
		paddingBottom: 2,
		paddingLeft: 10,
		fontSize: 20,
		color: "#777777",
	},
	activityListItemSubtitle: {
		paddingBottom: 10,
		paddingLeft: 10,
		fontSize: 15,
		color: "#5DB3E2",
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
		paddingBottom: 10,
	},
	activityDetailsGrade: {
		fontSize: 18,
		paddingBottom: 20.
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
		paddingRight: 20,
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius : 20,
		backgroundColor: "#0288D1",
		overflow: 'hidden',
	},
	activityDetailsButtonRemove: {
		paddingRight: 20,
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius : 20,
		backgroundColor: "red",
		overflow: 'hidden',
	},
	activityDetailsButtonText: {
		fontSize: 17,
		color: "white",
	},
	activityDetailsImage:{
		width: 300,
		height: 180,
	},
	activitySearch: {
		backgroundColor:'#FFFFFF',
		borderTopColor: "#FFFFFF",
		borderBottomColor: "#C0C0C0",
	},
});

export default ActivityStyles;
