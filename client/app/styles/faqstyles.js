import { StyleSheet } from 'react-native'

export const FaqStyles = StyleSheet.create({
	faqPadding: {
		paddingBottom: 40,
	},
	titleText: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#FFFFFF',
	},
	faqHeader: {
		backgroundColor: '#293038',
		height: 60, 
		alignItems: 'center', 
		justifyContent: 'center',
	}, 
	faqListItem: {
		height: 80,
		justifyContent: 'center',
		alignItems: 'center',
	},
	// TODO: can we fix the hard coded stuff? 
	faqListItemText: {
		paddingTop: 8,
		paddingBottom: 10,
		paddingLeft: 10,
		fontSize: 20,
	},
	faqListItemOdd: {
		backgroundColor: '#F1F1F1',
	},
	faqDetailsContainer: {
		backgroundColor: 'white',
		flex: 1,
		paddingLeft: 30,
		paddingTop: 20
	},
	faqDetailsQuestion: {
		fontSize: 25,	
		paddingBottom: 25
	},
	faqDetailsAnswer: {
		fontSize: 17,
	},
});

