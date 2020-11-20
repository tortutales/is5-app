// @packages
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import DashboardScreen from '../screens/dashboard';
import {
    getHist
} from '../redux/actions';

const DashboardContainer = ({
    hist,
    onGetHist,
    onGetRisks
}) => <DashboardScreen 
    hist={hist}
    id="dashboard-screen"
    onGetHist={onGetHist}
    onGetRisks={onGetRisks}
/>

const mapStateToProps = ({ dashboard }) => ({
    hist: dashboard.hist
});

const mapDispatchToProps = dispatch => bindActionCreators({
    onGetHist: getHist
}, dispatch);

export default connect(
    mapStateToProps, mapDispatchToProps
)(DashboardContainer);