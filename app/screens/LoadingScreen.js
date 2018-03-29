import React from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Image,
	StyleSheet,
	ProgressBarAndroid,
	ProgressViewIOS,
	Platform
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { darkBlue } from '../styles/Colours';
import drop from '../images/drop.png';
import dropBase from '../images/dropbase.png';


const LoadingScreen = ({ progress }) => {
	const progressBar = (Platform.OS === 'ios')
		? <ProgressViewIOS progress={ progress } />
		: (
			<ProgressBarAndroid
				progress={ progress }
				styleAttr="Horizontal"
				indeterminate={ false }
			/>
		);

	return (
		<View style={ styles.container }>
			<Animatable.Image
				animation="fadeInDown"
				iterationCount='infinite'
				style={ styles.horizontal }
				source={ drop }
				useNativeDriver
			/>
			<Image style={ styles.horizontal } source={ dropBase } />
			<Animatable.Text
				animation="pulse"
				easing="ease-out"
				iterationCount="infinite"
				style={ styles.text }
				useNativeDriver
			>
				collecting water...
			</Animatable.Text>
			<View style={ styles.progressContainer }>
				{ progressBar }
			</View>
		</View>
	)
};

LoadingScreen.propTypes = {
	progress: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Expo.Constants.statusBarHeight + 50,
		justifyContent: 'center',
		alignItems: 'center'
	},
	horizontal: {
		flexDirection: 'row',
		margin: 'auto'
	},
	text: {
		marginTop: 100,
		marginBottom: 100,
		fontSize: 20,
		color: darkBlue
	},
	progressContainer: {
		width: '70%',
		margin: 'auto'
	}
});

export default LoadingScreen;
