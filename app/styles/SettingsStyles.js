import { StyleSheet } from 'react-native'
import {
	darkBlue,
	darkGray,
} from './Colours';

const SettingsStyles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		flex: 1,
		paddingTop: 30,
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
});

export default SettingsStyles;
