import { StyleSheet } from 'react-native'

const ActivityStyles = StyleSheet.create({
	activityPadding: {
		paddingBottom: 40,
		backgroundColor: 'white' ,
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
	},
	activityDetailsContainerText: {
		paddingLeft: 60,
		paddingTop: 30,
		paddingRight: 20,
	},
	activityDetailsContainerButtons: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	activityDetailsTitle: {
		fontSize: 25,
		color: "#696969"
	},
	activityDetailsStation: {
		fontSize: 18,
		paddingBottom: 10,
		color: "#696969"
	},
	activityDetailsGrade: {
		fontSize: 20,
		paddingBottom: 50,
		color: "#696969"
	},
	activityDetailsDescription: {
		fontSize: 17,
		paddingBottom: 25,
		color: "#696969"
	},
	activityDetailsDescriptionTitle:{
		paddingTop: 25,
		fontSize: 20,
		color: "#696969"
	},
	activityDetailsMapButton: {
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius : 30,
		marginBottom: 20,
		backgroundColor: "#0288D1",
		overflow: 'hidden',
		width: 235,
	},
	activityDetailsMapButtonText: {
		fontSize: 20,
		fontWeight: "300",
		color: "#FFFFFF",
		textAlign: "center",
	},
	activityDetailsButton: {
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius : 30,
		backgroundColor: "white",
		borderColor: "#8DDC99",
		borderWidth: 2,
		overflow: 'hidden',
		width: 200,
	},
	activityDetailsButtonRemove: {
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius : 30,
		backgroundColor: "white",
		borderColor: "#CD2A2A",
		borderWidth: 2,
		overflow: 'hidden',
		width: 220,
	},
	activityDetailsButtonText: {
		fontSize: 19,
		color: "#8DDC99",
		textAlign: "center",
	},
	activityDetailsButtonRemoveText: {
		fontSize: 19,
		color: "#CD2A2A",
		textAlign: "center",
	},
	activityDetailsImage:{
		width: 300,
		height: 180,
	},
	activitySearch: {
		backgroundColor:'#FFFFFF',
		borderTopColor: "#FFFFFF",
		borderBottomColor: "white",
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 10,
	},
	activitySearchInput: {
		backgroundColor:'#F2F6FF',
		borderRadius: 10,
		fontSize: 16,
	},
});

export default ActivityStyles;
