import { StyleSheet } from 'react-native'
import {
	darkGray,
} from './Colours';

const AlertsStyles = StyleSheet.create({
  alertsView: {
    paddingBottom: 40,
    backgroundColor: 'white',
  },
  listItem: {
		height: 80,
		justifyContent: 'center',
		alignItems: 'center',
	},
	listItemText: {
		paddingTop: 8,
		paddingBottom: 10,
		paddingLeft: 10,
		fontSize: 20,
	},
	name: {
		fontSize: 30,
		fontWeight: "bold",
		color: darkGray,
		textAlign: 'center',
	},
	description: {
		fontSize: 17,
		color: darkGray,
		textAlign: 'center',
	}
});

export default AlertsStyles;