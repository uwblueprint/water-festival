import { StyleSheet } from 'react-native';
import { darkBlue, errorRed, lightBlue, darkGray } from './Colours';

const RegisterFormStyles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		marginTop: 30
	},
	title: {
		fontSize: 30,
		textAlign: 'center',
		fontWeight: 'bold',
		marginBottom: 10,
		color: darkGray
	},
	disclaimer: {
		textAlign: 'center',
		fontSize: 11,
		marginBottom: 5,
		paddingLeft: 10,
		paddingRight: 10,
		color: darkGray
	},
	contentContainer: {
		flex: 1,
		height: 440
	},
	footer: {
		alignItems: 'center',
		height: 90,
		marginTop: 10,
	},
	input: {
		height: 40,
		marginTop: 10,
		marginHorizontal: 10,
		paddingTop: 10,
		paddingHorizontal: 5,
		color: '#000',
		borderBottomWidth: 1,
		borderBottomColor: darkBlue
	},
	inputError: {
		height: 40,
		marginTop: 10,
		marginHorizontal: 10,
		paddingTop: 10,
		paddingHorizontal: 5,
		color: '#000',
		borderBottomWidth: 1,
		borderBottomColor: errorRed
	},
	buttonCenter: {
		paddingTop: 10,
		alignItems: 'center',
	},
	buttonContainer: {
		backgroundColor: darkBlue,
		paddingVertical: 13,
		borderRadius: 30,
		borderWidth: 1,
		borderColor: lightBlue,
		width: 240,
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 18,
	},
	dayContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		maxHeight: 60,
		marginTop: 30,
		marginBottom: 30
	},
	dayTitle: {
		flex: 0.35,
		alignItems: 'center'
	},
	dayPicker: {
		flex: 0.3,
		height: 50,
	},
	noAccount: {
		color: darkBlue,
		textAlign: 'center',
		paddingLeft: 70,
		paddingBottom: 8,
		fontSize: 12
	},
	loginButton: {
		backgroundColor: "white",
		paddingVertical: 10,
		borderRadius: 30,
		borderWidth: 1,
		borderColor: darkBlue,
		width: 200,
	},
	loginText: {
		color: darkBlue,
		textAlign: 'center',
		fontSize: 16,
	},
});

export default RegisterFormStyles;
