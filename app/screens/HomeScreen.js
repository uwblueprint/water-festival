import React from 'react';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation'
import Header from '../components/Header'
import FaqScreen from './FaqScreen'
import Home from '../components/home/Home'


class HomeScreen extends React.Component {
	static navigationOptions = () => ({
		header: <Header title="Home" hasBackButton={ false } />,
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
		screen: FaqScreen,
	},
},
{
	mode: 'modal',
});

HomeScreen.propTypes = {
	navigation: PropTypes.object.isRequired
};

export default HomeScreenStack;
