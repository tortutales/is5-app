// @packages
import Collapse from '@material-ui/core/Collapse';
import Icon from '@material-ui/core/Icon';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { withStyles } from '@material-ui/core';

// @scripts
import styles from './styles';

// @constants 
const FORMAT_DATE = 'DD/MM/YYYY HH:mm';

const WorkListItemCollapse = ({
    classes,
    id,
    creationDate,
    deliveryDate,
    isExpanded,
    name,
    value,
    onSelect,
    status
}) => (
    <div id={id}>
        <ListItem button onClick={() => onSelect(value)}>
            <ListItemIcon>
                <Icon>work</Icon>
            </ListItemIcon>
            <ListItemText primary={name} />
            <div className={classes.status}>
                {status}
            </div>
            <Icon>
                {isExpanded
                    ? 'expand_less'
                    : 'expand_more'}
            </Icon>
        </ListItem>
        <Collapse 
            in={isExpanded}
            timeout="auto"
            unmountOnExit
        >
            <div>
                <Typography>
                    Creation date: {moment(creationDate).format(FORMAT_DATE)}
                </Typography>
                <Typography>
                    Delivery date: {moment(deliveryDate).format(FORMAT_DATE)}
                </Typography>
            </div>                    
        </Collapse>
    </div>
);

WorkListItemCollapse.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    creationDate: PropTypes.string.isRequired,
    deliveryDate: PropTypes.string.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default withStyles(styles)(WorkListItemCollapse);