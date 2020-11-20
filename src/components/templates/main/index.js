// @packages
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';

// @scripts
import SidebarMenu from '../../organisms/sidebar-menu';
import styles from './styles';
import { config } from '../../../config';

const MainTemplate = ({
    content,
    classes,
    id
}) => {

    return (
        <div className={classes.mainContainer} id={id}>
            <SidebarMenu 
                id={`${id}-sidebar-menu`}
                routes={config.masterData.sidebarMenu}
            />
            <div className={classes.contentContainer}>
                {content}
            </div>
        </div>
    )
}

MainTemplate.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

export default withStyles(styles)(MainTemplate)