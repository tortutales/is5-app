// @packages
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import LoginScreen from '../screens/login';
import { onLogin } from '../redux/actions';

const LoginContainer = ({
    onLogin,
    userIsLoggedIn
}) => <LoginScreen 
    onLogin={onLogin}
    userIsLoggedIn={userIsLoggedIn}
/>

const mapStateToProps = ({ user }) => ({
    userIsLoggedIn: user.isLoggedIn
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onLogin
}, dispatch);

export default connect(
    mapStateToProps, mapDispatchToProps
)(LoginContainer);