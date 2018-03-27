import { StyleSheet } from 'react-native';
import { darkGray } from './Colours';

const HeaderStyles = StyleSheet.create({
	headerContainer: {
		backgroundColor: 'white',
		marginTop: Expo.Constants.statusBarHeight,
		height: 60,
		flexDirection: 'row',
		alignItems: 'center',
	},
	headerText: {
		fontSize: 28,
		fontWeight: 'bold',
		color: darkGray,
		textAlign: 'center'
	},
	leftContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		paddingLeft: 20,
	},
	rightContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
});

export default HeaderStyles;
