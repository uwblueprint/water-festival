import { StyleSheet } from 'react-native';
import { lightGray } from './Colours';

const AlertsStyles = StyleSheet.create({
  alertsView: {
    paddingBottom: 40,
    backgroundColor: 'white',
  },
  listItem: {
		height: 80,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomColor: lightGray,
		borderTopColor: lightGray,
		borderColor: lightGray,
		borderWidth: 1,
		borderBottomWidth: 0,
	},
	listItemText: {
		fontSize: 20,
	},
	footer: {
		borderTopWidth:1,
		borderTopColor: lightGray,
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
});

export default AlertsStyles;