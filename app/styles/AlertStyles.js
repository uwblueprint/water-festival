import { StyleSheet } from 'react-native';
import { lightBlue, darkGray, green } from './Colours';

const AlertsStyles = StyleSheet.create({
  alertsView: {
    paddingBottom: 40,
    backgroundColor: 'white',
  },
  listItem: {
		height: 80,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomColor: lightBlue,
		borderTopColor: lightBlue,
		borderColor: lightBlue,
		borderWidth: 1,
		borderBottomWidth: 0,
	},
	listItemText: {
		fontSize: 20,
    color: darkGray
	},
  listItemSubtitle: {
    fontSize: 14,
    color: darkGray,
    fontWeight: "300"
  },
	footer: {
		borderTopWidth:1,
		borderTopColor: lightBlue,
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
		width: 270,
		alignSelf: 'center',
		fontSize: 15,
		textAlign: 'center',
	},
  badge: {
    width: 70,
    height: 20,
    marginTop: 10,
    marginRight: 15,
    paddingVertical: 2,
    borderWidth: 0,
    backgroundColor: "white",
    overflow: 'hidden',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "300",
    textAlign: "center",
    color: green
  },
});

export default AlertsStyles;
