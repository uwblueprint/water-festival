import { StyleSheet } from 'react-native';
import { darkBlue, errorRed, lightBlue } from './Colours';

const RegisterFormStyles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		marginTop: 30
	},
	title: {
		fontSize: 25,
		textAlign: 'center',
		fontWeight: 'bold',
		marginBottom: 10
	},
	disclaimer: {
		textAlign: 'center',
		fontStyle: 'italic',
		fontSize: 13,
		marginBottom: 5
	},
	contentContainer: {
		flex: 1,
		height: 440
	},
	footer: {
		alignItems: 'center',
		height: 50,
		marginTop: 10
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
	buttonContainer: {
		backgroundColor: darkBlue,
		paddingVertical: 15,
		borderRadius: 30,
		borderWidth: 1,
		borderColor: lightBlue,
		marginTop: 10
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
		marginTop: 30,
		marginBottom: 30
	},
	dayTitle: {
		flex: 0.35,
		alignItems: 'center'
	},
	dayPicker: {
		flex: 0.3,
		height: 50
	},
	noAccount: {
		color: 'black',
		textAlign: 'center'
	},
	login: {
		color: darkBlue,
		width: 100,
		textAlign: 'center',
		fontSize: 15,
		fontWeight: 'bold',
		marginTop: 5
	}
});

export default RegisterFormStyles;
