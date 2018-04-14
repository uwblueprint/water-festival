import { StyleSheet } from 'react-native'
import {
	darkBlue,
	darkGray,
	deleteRed
} from './Colours';

const HomeStyles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		flex: 1,
		paddingTop: 30,
	},
	scrollContainer: {
		alignItems: 'center',
		paddingBottom: 30,
	},
	topBar: {
		alignItems: 'center',
		flexDirection: 'row',
	},
	logo: {
		justifyContent: 'center',
		marginTop: 10,
		alignItems: 'center',
		height: 110,
		width: 230
	},
	welcomeMessage: {
		padding: 15,
		paddingBottom: 40,
		fontSize: 26,
		fontWeight: "bold",
		color: darkGray,
		textAlign: "center",
	},
	button: {
		width: 300,
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius : 20,
		backgroundColor: darkBlue,
		overflow: 'hidden',
		marginBottom: 15,
	},
	buttonText: {
		fontSize: 19,
		color: "white",
		fontWeight: "300",
	},
	logoutButton: {
		width: 200,
		height: 45,
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius : 20,
		borderWidth: 1,
		marginTop: 15,
		borderColor: darkBlue,
		backgroundColor: "white",
		overflow: 'hidden',
		marginBottom: 15,
	},
	logoutButtonText: {
		fontSize: 17,
		color: darkBlue,
		fontWeight: "300",
	},
	alertIcon: {
		width: 12,
		height: 12,
		minWidth: 5,
		backgroundColor: deleteRed
	},
	alertIconText: {
		color: 'white',
		fontSize: 8,
		fontWeight: '500'
	}
});

export default HomeStyles;
