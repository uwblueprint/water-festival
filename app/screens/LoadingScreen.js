import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import logo from '../images/wwcgf_logo.png';

const LoadingScreen = () => (
	<View style={{ alignItems: 'center' }}>
		<Image resizeMode="contain" style={ styles.logo } source={ logo } />
	</View>
);

const styles = StyleSheet.create({
	logo: {
		justifyContent: 'center',
		marginTop: 70,
		alignItems: 'center',
		height: 180
	}
});

export default LoadingScreen;
