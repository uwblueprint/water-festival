import React from 'react';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation'
import FaqScreenstack from './FaqScreen'
import Home from '../components/home/Home'


class HomeScreen extends React.Component {
	static navigationOptions = () => ({
		header: null,
		title: 'Home'
	});

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Home navigation={ this.props.navigation } />
		);
	}
}

const HomeScreenStack = StackNavigator({
	Home: {
		screen: HomeScreen,
	},
	FaqScreen: {
		screen: FaqScreenstack,
	},
},
{
	mode: 'modal',
});

HomeScreen.propTypes = {
	navigation: PropTypes.object.isRequired
};

export default HomeScreenStack;
