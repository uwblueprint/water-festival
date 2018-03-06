import { StyleSheet } from 'react-native'

const HomeStyles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		flex: 1,
    alignItems: 'center',
		paddingTop: 30,
	},
	topBar: {
		flexDirection: 'row',
	},
	logo: {
		justifyContent: 'center',
		marginTop: 10,
		alignItems: 'center',
		height: 120
	},
	welcomeMessage: {
		padding: 15,
		paddingBottom: 40,
		fontSize: 35,
		fontWeight: "bold",
		color: '#696969',
		textAlign: "center",
	},
	button: {
		width: 300,
		paddingTop: 10,
		paddingBottom: 10,
		borderRadius : 20,
		backgroundColor: "#0288D1",
		overflow: 'hidden',
		marginBottom: 15,
	},
	buttonText: {
		fontSize: 17,
		color: "white",
	},
});

export default HomeStyles;
