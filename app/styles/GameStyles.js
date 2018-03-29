import { StyleSheet } from 'react-native'
import {
	darkBlue,
	darkGray,
} from './Colours';

const GameStyles = StyleSheet.create({
	gamePaddingContainer: {
		width: '70%'
	},
	titleText: {
		fontSize: 30,
		fontWeight: 'bold',
		color: darkGray
	},
	gameDetailsContainer: {
		backgroundColor: 'white',
		flex: 1
	},
	gameDetailsContainerButtons: {
		marginTop: 15,
		alignItems: 'center',
		justifyContent: 'center',
	},
	gameDetailsDescription: {
		fontSize: 14,
    paddingTop: 15,
		paddingBottom: 20,
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
});

export default GameStyles;
