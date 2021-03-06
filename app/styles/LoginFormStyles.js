import { StyleSheet } from 'react-native';
import { darkBlue, lightBlue, darkGray } from './Colours';

const LoginFormStyles = StyleSheet.create({
		container: {
			flex: 1,
			padding: 20
		},
		contentContainer: {
			flex: 1
		},
		footer: {
			alignItems: 'center',
			height: 70,
			marginTop: 40,
			paddingBottom: 20
		},
		input: {
			height: 40,
			marginTop: 15,
			marginHorizontal: 10,
			paddingTop: 10,
			paddingHorizontal: 5,
			color: '#000',
			borderBottomWidth: 1,
			borderBottomColor: darkGray
		},
		buttonCenter: {
			alignItems: 'center',
		},
		buttonContainer: {
			backgroundColor: darkBlue,
			paddingVertical: 13,
			borderRadius: 30,
			borderWidth: 1,
			borderColor: lightBlue,
			width: 240,
			marginTop: 40
		},
		buttonText: {
			color: '#fff',
			textAlign: 'center',
			fontSize: 18,
			marginLeft: 10,
			marginRight: 10,
		},
		forgotPassText: {
			color: darkBlue,
			textAlign: 'right',
			fontSize: 12,
			marginBottom: 25,
			marginRight: 20,
			marginTop: 10,
		},
		noAccount: {
			color: darkBlue,
			textAlign: 'center',
			paddingLeft: 70,
			paddingBottom: 8,
			fontSize: 12
		},
		register: {
			color: darkBlue,
			width: 100,
			textAlign: 'center',
			fontSize: 15,
			fontWeight: 'bold',
			marginTop: 5
		},
		registerButton: {
			backgroundColor: "white",
			paddingVertical: 10,
			borderRadius: 30,
			borderWidth: 1,
			borderColor: darkBlue,
			width: 200,
		},
		registerText: {
			color: darkBlue,
			textAlign: 'right',
			fontSize: 16,
			width: 115,
			marginLeft: 20,
			marginRight: 20
		},
});

export default LoginFormStyles;
