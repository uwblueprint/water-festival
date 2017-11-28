import { StyleSheet } from 'react-native';

export const HeaderStyles = StyleSheet.create({
	headerContainer: {
		backgroundColor: '#293038',
		height: 60, 
		flexDirection: 'row', 
		alignItems: 'center'
	},
	headerText: {
		fontSize: 22,
		fontWeight: 'bold',
		color: '#FFFFFF',
		textAlign: 'center'
	},
	leftContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	rightContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
});
