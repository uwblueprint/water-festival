import { StyleSheet } from 'react-native'

const FaqStyles = StyleSheet.create({
	faqPadding: {
		paddingBottom: 40,
		backgroundColor: 'white' ,
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
		borderBottomColor: "#C0C0C0",
		borderTopColor: "#C0C0C0",
		borderTopWidth: 1,
		borderBottomWidth: 0,
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
		paddingLeft: 60,
		paddingTop: 20,
		paddingRight: 30,
	},
	faqDetailsQuestion: {
		fontSize: 30,
		paddingBottom: 30,
		fontWeight: "bold",
		color: "#696969",
	},
	faqDetailsAnswer: {
		fontSize: 17,
		color: "#696969",
	},
	faqSearch: {
		backgroundColor:'#FFFFFF',
		borderTopColor: "#FFFFFF",
		borderBottomColor: "#FFFFFF",
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 10,
	},
	faqSearchInput: {
		backgroundColor:'#F2F6FF',
		borderRadius: 10,
		fontSize: 16,
	},
	faqFooter: {
		borderTopWidth:1,
		borderTopColor: "#C0C0C0",
	}
});

export default FaqStyles;
