// @packages
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// @scripts
import { mapComponent } from './component-mapper';
import { config } from '../../config';

const Routes = ({
    userIsLoggedIn,
    userPermissions
}) => {
    const routes = config.routes
        .filter(route => route.requiresLogout === !userIsLoggedIn)
        .filter(route => route.permission === null || userPermissions.includes(route.permission));

    return (
        <Switch>
            {routes.map((route, index) => (
                <Route 
                    component={mapComponent(route.component)}
                    exact
                    key={index}
                    path={route.url}
                />
            ))}
        </Switch>
    )
}

export default Routes;