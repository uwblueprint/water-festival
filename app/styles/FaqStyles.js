import { StyleSheet } from 'react-native'

const FaqStyles = StyleSheet.create({
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
		borderBottomColor: "#C0C0C0"
	},
	// TODO: can we fix the hard coded stuff?
	faqListItemText: {
		paddingTop: 8,
		paddingBottom: 10,
		paddingLeft: 10,
		fontSize: 20,
		color: "#0288D1",
	},
	faqListItemOdd: {
		backgroundColor: '#F1F1F1',
	},
	faqDetailsContainer: {
		backgroundColor: 'white',
		flex: 1,
		paddingLeft: 30,
		paddingTop: 20,
		paddingRight: 30,
	},
	faqDetailsQuestion: {
		fontSize: 30,
		paddingBottom: 25,
		fontWeight: "bold",
		color: "#696969",
	},
	faqDetailsAnswer: {
		fontSize: 17,
	},
	faqSearch: {
		backgroundColor:'#FFFFFF',
		borderTopColor: "#FFFFFF",
		borderBottomColor: "#C0C0C0",
	},
});

export default FaqStyles;
