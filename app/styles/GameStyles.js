import { StyleSheet } from 'react-native'
import {
	darkBlue,
	lightGray,
	darkGray,
	green,
	deleteRed,
	grayBlue
} from './Colours';

const GameStyles = StyleSheet.create({
	gamePadding: {
		paddingBottom: 40,
		backgroundColor: 'white' ,
	},
	titleText: {
		fontSize: 30,
		fontWeight: 'bold',
		color: darkGray,
    paddingLeft: 60,
    paddingRight: 60
	},
	gameDetailsContainer: {
		backgroundColor: 'white',
		flex: 1,
	},
	gameDetailsContainerText: {
		paddingLeft: 70,
		paddingRight: 20,
	},
	gameDetailsContainerButtons: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	gameDetailsDescription: {
		fontSize: 14,
    paddingTop: 15,
		paddingBottom: 20,
    paddingLeft: 70,
    paddingRight: 60,
		color: darkGray
	},
	gameDetailsDescriptionTitle:{
		paddingTop: 25,
		fontSize: 20,
		color: darkGray
	},
	gameDetailsMapButton: {
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius : 30,
		marginBottom: 20,
		backgroundColor: darkBlue,
		overflow: 'hidden',
		width: 235,
	},
	gameDetailsMapButtonText: {
		fontSize: 20,
		fontWeight: "300",
		color: "white",
		textAlign: "center",
	},
	gameDetailsButton: {
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius : 30,
		backgroundColor: "white",
		borderColor: green,
		borderWidth: 2,
		overflow: 'hidden',
		width: 200,
	},
	gameDetailsButtonRemove: {
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius : 30,
		backgroundColor: "white",
		borderColor: deleteRed,
		borderWidth: 2,
		overflow: 'hidden',
		width: 220,
	},
	gameDetailsButtonText: {
		fontSize: 19,
		color: green,
		textAlign: "center",
	},
	gameDetailsButtonRemoveText: {
		fontSize: 19,
		color: deleteRed,
		textAlign: "center",
	},
	gameDetailsImage:{
		width: 300,
		height: 180,
	},
	gameSearch: {
		backgroundColor:'white',
		borderTopColor: "white",
		borderBottomColor: "white",
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 10,
	},
	gameSearchInput: {
		backgroundColor:grayBlue,
		borderRadius: 10,
		fontSize: 16,
	},
});

export default GameStyles;
