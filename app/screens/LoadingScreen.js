import React from 'react';
import {
	View,
	Image,
	StyleSheet
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { darkBlue } from '../styles/Colours';
import drop from '../images/drop.png';
import dropBase from '../images/dropbase.png';

const LoadingScreen = () => (
	<View style={ styles.container }>
		<Animatable.Image
			animation="fadeInDown"
			iterationCount='infinite'
			style={ styles.horizontal }
			source={ drop }
		/>
		<Image style={ styles.horizontal } source={ dropBase } />
		<Animatable.Text
			animation="pulse"
			easing="ease-out"
			iterationCount="infinite"
			style={ styles.text }
		>
			collecting water...
		</Animatable.Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	horizontal: {
		flexDirection: 'row',
		margin: 'auto'
	},
	text: {
		marginTop: 100,
		fontSize: 20,
		color: darkBlue
	}
});

export default LoadingScreen;
