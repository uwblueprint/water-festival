import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginScreen from './screens/LoginScreen';
import Container from './Container'

class MainContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: true //props.isLoggedIn
		};
	}

	componentWillReceiveProps(nextProps) {
		const { isLoggedIn } = nextProps;
		if (isLoggedIn !== this.state.isLoggedIn) {
			this.setState({ isLoggedIn });
		}
	}

	render() {
		const view = (this.state.isLoggedIn) ? <Container /> : <LoginScreen />;

		return view;
	}
}

const mapStateToProps = ({ isLoggedIn }) => {
	return { isLoggedIn };
};

MainContainer.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, null)(MainContainer);
