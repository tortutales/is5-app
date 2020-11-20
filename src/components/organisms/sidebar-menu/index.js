// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import { useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core';

// @scripts
import styles from './styles';
import { config } from '../../../config';

const SidebarMenu = ({
    classes,
    routes,
    id
}) => {
    const userPermissions = useSelector(({ user }) => user.permissions);
    const avaliableRoutes = config.routes
        .filter(configRoute => routes.some(route => route.name === configRoute.name))
        .filter(configRoute => !configRoute.permission || userPermissions.includes(configRoute.permission))
        .map(configRoute => ({
            ...configRoute,
            ...routes.find(route => route.name === configRoute.name)
        }));
    
    return (
        <div className={classes.mainContainer} id={id}>
            <List>
                {avaliableRoutes.map((route, index) => (
                    <Link 
                        key={`${id}-item-${index}`}
                        to={route.url} 
                        style={{ textDecoration: 'none' }} 
                        className={classes.listItem}
                    >
                        <ListItem>
                            <ListItemIcon>
                                <Icon>
                                    {route.icon}
                                </Icon>
                            </ListItemIcon>
                            <ListItemText>
                                {route.name}
                            </ListItemText>
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    )
}

SidebarMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    routes: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        route: PropTypes.string.isRequired
    })),
    id: PropTypes.string.isRequired
};

SidebarMenu.defaultProps = {
    routes: []
};

export default withStyles(styles)(SidebarMenu);