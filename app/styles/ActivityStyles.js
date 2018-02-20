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
	// TODO: can we fix the hard coded stuff?
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
		paddingBottom: 5
	},
  activityDetailsStation: {
    fontSize: 18,
    paddingBottom: 30
  },
	activityDetailsDescription: {
		fontSize: 17,
    paddingBottom: 25
	},
  activityDetailsDescriptionTitle:{
    paddingTop: 25,
    fontSize: 20,
  },
  activityDetailsStation: {
    fontSize: 17,
  },
  activityDetailsButton: {
    fontSize: 17,
    paddingRight: 20,
  },
});

export default ActivityStyles;
