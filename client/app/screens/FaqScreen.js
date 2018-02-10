import React from 'react';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation'
import Header from '../components/Header'
import FaqList from '../components/faq/FaqList'
import FaqDetails from '../components/faq/FaqDetails'


class FaqScreen extends React.Component {
	static navigationOptions = () => ({
		header: <Header title="Information" hasBackButton={ true } />,
		title: 'Information'
	});

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<FaqList navigation={ this.props.navigation } />
		);
	}
}

const FaqScreenStack = StackNavigator({
	FaqList: {
		screen: FaqScreen,
	},
	FaqDetails: {
		screen: FaqDetails,
	},
},
{
	mode: 'modal',
});

FaqScreen.propTypes = {
	navigation: PropTypes.object.isRequired
};
export default FaqScreenStack;
