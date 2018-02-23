import { StyleSheet } from 'react-native';
import { darkBlue, lightBlue } from './Colours';

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
			height: 50,
			marginTop: 80
		},
		input: {
			height: 40,
			marginTop: 15,
			marginHorizontal: 10,
			paddingTop: 10,
			paddingHorizontal: 5,
			color: '#000',
			borderBottomWidth: 1,
			borderBottomColor: darkBlue
		},
		buttonContainer: {
			backgroundColor: darkBlue,
			paddingVertical: 15,
			borderRadius: 30,
			borderWidth: 1,
			borderColor: lightBlue
		},
		buttonText: {
			color: '#fff',
			textAlign: 'center',
			fontWeight: '700'
		},
		forgotPassText: {
			color: lightBlue,
			textAlign: 'right',
			fontSize: 13,
			marginBottom: 25,
			marginRight: 20
		},
		noAccount: {
			color: 'black',
			textAlign: 'center'
		},
		register: {
			color: darkBlue,
			width: 100,
			textAlign: 'center',
			fontSize: 15,
			fontWeight: 'bold',
			marginTop: 5
		}
});

export default LoginFormStyles;
