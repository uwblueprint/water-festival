import React from 'react';
import PropTypes from 'prop-types';
import {
	Text,
} from 'react-native';
import HomeStyles from '../../styles/HomeStyles';
import Header from '../Header'

class Home extends React.Component {

	static navigationOptions = () => ({
		header: <Header title="Home" hasBackButton={ false } />,
		title: 'Home'
	});

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Text
				style={ HomeStyles.faqLink }
				onPress={ () => this.props.navigation.navigate("FaqScreen") }
			>
				FAQs
			</Text>
		);
	}
}

Home.propTypes = {
	navigation: PropTypes.object.isRequired,
	navigate: PropTypes.func,
};

Home.defaultProps = {
	navigate: () => {}
};

export default Home;
