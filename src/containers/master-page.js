// @packages
import React from 'react';
import { withRouter } from 'react-router-dom';

// @scripts
import MasterPage from '../screens/master-page';

const MasterPageContainer = () => (
    <MasterPage />
);

export default withRouter(MasterPageContainer);