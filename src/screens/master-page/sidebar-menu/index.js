// @packages
import { withStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import React from 'react';

// @scripts
import styles from './styles';

const SidebarMenu = ({
    classes,
    visible
}) => {
    if (!visible) {
        return false;
    }

    return (
        <div className={classes.mainContainer}>
            <List component="nav">

            </List>
        </div>
    )   
};

export default withStyles(styles)(SidebarMenu);