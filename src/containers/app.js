// @packages
import { HashRouter, Route } from 'react-router-dom';
import MasterPageContainer from './master-page';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../core';

const AppContainer = () => (
    <Provider store={store}>
        <HashRouter>
            <Route component={MasterPageContainer}/>
        </HashRouter>
    </Provider>
);

export default AppContainer;