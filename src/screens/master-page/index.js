// @packages
import React from 'react';

// @scripts
import Routes from './routes';
import { connect } from 'react-redux';

const MasterPage = ({
    userIsLoggedIn,
    userPermissions
}) => (
    <div id="master-page">
        <Routes 
            userIsLoggedIn={userIsLoggedIn}
            userPermissions={userPermissions} 
        />
    </div>
);

const mapStateToProps = ({ user }) => ({
    userIsLoggedIn: user.isLoggedIn,
    userPermissions: user.permissions
});

export default connect(
    mapStateToProps, null
)(MasterPage);