// @packages
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import DashboardScreen from '../screens/dashboard';

const LoginContainer = ({
    onGetWorks
}) => <DashboardScreen 
    id="dashboard-screen"
    onGetWorks={onGetWorks}
/>

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(
    mapStateToProps, mapDispatchToProps
)(LoginContainer);