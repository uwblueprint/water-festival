import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginScreen from './screens/LoginScreen';
import Container from './Container'

const MainContainer = ({ isLoggedIn }) => {
	const view = (isLoggedIn) ? <Container /> : <LoginScreen />;
	return view;
}

const mapStateToProps = ({ isLoggedIn }) => {
	return { isLoggedIn };
};

MainContainer.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, null)(MainContainer);
