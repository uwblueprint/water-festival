import { StyleSheet } from 'react-native';

const HeaderStyles = StyleSheet.create({
	headerContainer: {
		backgroundColor: '#FFFFFF',
		height: 60,
		flexDirection: 'row',
		alignItems: 'center',
	},
	headerText: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#696969',
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
