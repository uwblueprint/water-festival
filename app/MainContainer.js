import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginScreen from './screens/LoginScreen';
import LoggedIn from './LoggedIn';

const MainContainer = ({ isLoggedIn }) => {
	return (isLoggedIn) ? <LoggedIn /> : <LoginScreen />;
}

const mapStateToProps = ({ isLoggedIn }) => {
	return { isLoggedIn };
};

MainContainer.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, null)(MainContainer);
