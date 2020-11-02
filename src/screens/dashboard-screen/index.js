// @packages
import React from 'react';
import { withStyles } from '@material-ui/core';

import styles from  './styles';

const DashboardScreen = ({
    classes,
    id,
    onGetWorks,
    works
}) => {
    React.useEffect(() => {
        onGetWorks();
    })

    return (
        <div className={classes.mainContainer}>
            {works.map(e => <div>{e}</div>)}
        </div>
    );
};

export default withStyles(styles)(DashboardScreen);