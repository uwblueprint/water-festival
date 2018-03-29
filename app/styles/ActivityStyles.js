import { StyleSheet } from 'react-native'
import {
	darkBlue,
	lightGray,
	darkGray,
	green,
	deleteRed,
	grayBlue
} from './Colours';

const ActivityStyles = StyleSheet.create({
	activityPadding: {
		paddingBottom: 40,
		backgroundColor: 'white' ,
	},
	titleText: {
		fontSize: 30,
		fontWeight: 'bold',
		color: 'white',
	},
	sectionHeader: {
		paddingTop: 3,
		paddingLeft: 36,
		paddingBottom: 2,
		fontSize: 17,
		color: 'white',
		backgroundColor: darkBlue,
	},
	activityHeader: {
		backgroundColor: darkGray,
		height: 60,
		alignItems: 'center',
		justifyContent: 'center',
	},
	activityListItem: {
		height: 80,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: lightGray,
	},
	activityListBlueItem: {
		height: 80,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: lightGray,
		backgroundColor: darkBlue,
	},
	activityListItemText: {
		paddingTop: 8,
		paddingBottom: 2,
		paddingLeft: 10,
		fontSize: 20,
		color: darkGray,
	},
	activityListItemBlueText: {
		paddingTop: 8,
		paddingBottom: 2,
		paddingLeft: 10,
		fontSize: 20,
		color: 'white',
	},
	activityListItemSubtitle: {
		paddingBottom: 10,
		paddingLeft: 10,
		fontSize: 15,
		color: darkBlue,
		fontWeight: "400",
	},
	activityListItemIcon: {
		paddingTop: 10
	},
	activityDetailsContainer: {
		backgroundColor: 'white',
		flex: 1,
	},
	activityDetailsContainerText: {
		paddingLeft: 50,
		paddingTop: 20,
		paddingRight: 50,
	},
	activityDetailsContainerButtons: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingBottom: 30
	},
	activityDetailsTitle: {
		fontSize: 25,
		color: darkGray,
	},
	activityDetailsStation: {
		fontSize: 18,
		paddingBottom: 10,
		color: darkGray
	},
	activityDetailsGrade: {
		fontSize: 20,
		paddingBottom: 25,
		color: darkGray
	},
	activityDetailsDescription: {
		fontSize: 17,
		paddingBottom: 25,
		color: darkGray
	},
	activityDetailsDescriptionTitle:{
		paddingTop: 25,
		fontSize: 20,
		color: darkGray
	},
	activityDetailsMapButton: {
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius : 30,
		marginBottom: 20,
		backgroundColor: darkBlue,
		overflow: 'hidden',
		width: 235,
	},
	activityDetailsMapButtonText: {
		fontSize: 20,
		fontWeight: "300",
		color: "white",
		textAlign: "center",
	},
	activityDetailsButton: {
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius : 30,
		backgroundColor: "white",
		borderColor: green,
		borderWidth: 2,
		overflow: 'hidden',
		width: 200,
	},
	activityDetailsButtonRemove: {
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius : 30,
		backgroundColor: "white",
		borderColor: deleteRed,
		borderWidth: 2,
		overflow: 'hidden',
		width: 220,
	},
	activityDetailsButtonText: {
		fontSize: 19,
		color: green,
		textAlign: "center",
	},
	activityDetailsButtonRemoveText: {
		fontSize: 19,
		color: deleteRed,
		textAlign: "center",
	},
	activityDetailsImage:{
		width: '100%',
		height: 180,
	},
	activitySearch: {
		backgroundColor:'white',
		borderTopColor: "white",
		borderBottomColor: "white",
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 10,
	},
	activitySearchInput: {
		backgroundColor:grayBlue,
		borderRadius: 10,
		fontSize: 16,
	},
	activityBadge: {
		width: 70,
		height: 20,
		marginTop: 10,
		marginRight:75,
		paddingVertical: 2,
		borderRadius : 20,
		borderWidth: 1,
		backgroundColor: "white",
		overflow: 'hidden',
	},
	badgeText: {
		fontSize: 10,
		fontWeight: "300",
		textAlign: "center",
	},
	activityBadgeNew: {
		borderColor: green,
	},
	badgeTextNew: {
		color: green,
	},
	activityBadgeClosed: {
		borderColor: deleteRed,
	},
	badgeTextClosed: {
		color: deleteRed,
	},
	errorMessage: {
		backgroundColor: deleteRed,
		paddingHorizontal: 10,
		paddingVertical: 15,
		alignItems: 'center',
		justifyContent: 'center',
	},
	errorMessageText: {
		color: "white",
		textAlign: "center",
		fontSize: 12,
	},
	emptyScreen: {
		paddingBottom: 40,
		backgroundColor: 'white',
	},
	emptyImage: {
		paddingTop: 80,
		alignSelf: 'center',
	},
	emptyTopText: {
		paddingTop: 30,
		paddingBottom: 10,
		fontSize: 20,
		textAlign: 'center',
	},
	emptyBottomText: {
		fontSize: 15,
		textAlign: 'center',
	},
	emptyLinkText: {
		fontSize: 15,
		textAlign: 'center',
		color: darkBlue,
	},
});

export default ActivityStyles;
