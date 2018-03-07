import { StyleSheet } from 'react-native'
import {
	darkBlue,
	lightGray,
	darkGray,
	grayBlue
} from './Colours';

const FaqStyles = StyleSheet.create({
	faqPadding: {
		paddingBottom: 40,
		backgroundColor: 'white' ,
	},
	titleText: {
		fontSize: 30,
		fontWeight: 'bold',
		color: 'white',
	},
	faqHeader: {
		backgroundColor: darkBlue,
		height: 60,
		alignItems: 'center',
		justifyContent: 'center',
	},
	faqListItem: {
		height: 80,
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomColor: lightGray,
		borderTopColor: lightGray,
		borderTopWidth: 1,
		borderBottomWidth: 0,
	},
	// TODO: can we fix the hard coded stuff?
	faqListItemText: {
		paddingTop: 8,
		paddingBottom: 10,
		paddingLeft: 10,
		fontSize: 20,
		color: darkBlue,
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
		color: darkGray,
	},
	faqDetailsAnswer: {
		fontSize: 17,
		color: darkGray,
	},
	faqSearch: {
		backgroundColor:'white',
		borderTopColor: "white",
		borderBottomColor: "white",
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 10,
	},
	faqSearchInput: {
		backgroundColor: grayBlue,
		borderRadius: 10,
		fontSize: 16,
	},
	faqFooter: {
		borderTopWidth:1,
		borderTopColor: lightGray,
	}
});

export default FaqStyles;
