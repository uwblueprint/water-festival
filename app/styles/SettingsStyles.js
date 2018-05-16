import { StyleSheet } from 'react-native'
import {
	darkBlue,
	lightBlue,
	errorRed
} from './Colours';

const SettingsStyles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		flex: 1,
		paddingTop: 20,
	},
	contentContainer: {
		paddingLeft: 30,
		paddingBottom: 30,
	},
	input: {
		height: 40,
		marginRight: 30,
		marginBottom: 20,
		color: '#000',
		borderBottomWidth: 1,
		borderBottomColor: darkBlue
	},
	inputError: {
		height: 40,
		marginRight: 30,
		marginBottom: 20,
		color: '#000',
		borderBottomWidth: 1,
		borderBottomColor: errorRed
	},
	label: {
		fontSize: 18,
	},
	nameLabel: {
		fontSize: 18,
		paddingTop: 15,
	},
	passwordLabel: {
		fontSize: 18,
		marginTop: 30,
	},
	buttonContainer: {
		backgroundColor: darkBlue,
		paddingVertical: 15,
		borderRadius: 30,
		borderWidth: 1,
		borderColor: lightBlue,
		marginTop: 70,
		marginLeft: 20,
		marginRight: 50,
		marginBottom: 30,
	},
	buttonContainerPassword: {
		backgroundColor: darkBlue,
		paddingVertical: 15,
		borderRadius: 30,
		borderWidth: 1,
		borderColor: lightBlue,
		marginTop: 20,
		marginLeft: 20,
		marginRight: 50,
		marginBottom: 30,
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: '700'
	},
	dayContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		maxHeight: 60,
		marginTop: 65
	},
	dayTitle: {
		flex: 0.45,
		alignItems: 'center',
	},
	dayPicker: {
		flex: 0.3,
		height: 210,
	},
});

export default SettingsStyles;
