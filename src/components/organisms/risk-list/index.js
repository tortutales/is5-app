// @packages
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';
import ListItemCollapse from '../../molecules/list-item-collapse';

// @scripts
import styles from './styles'

const RiskList = ({
    id,
    items,
    onSelectItem,
    selectedItems 
}) => {
    return (
        <List>
            {items.map((item, index) => (
                <ListItemCollapse 
                    creationDate={item.creationDate}
                    deliveryDate={item.deliveryDate}
                    id={`${id}-item-${index}`}
                    key={`${id}-item-${index}`}
                    isExpanded={selectedItems.includes(item.id)}
                    items={items}
                    name={item.name}
                    onSelect={onSelectItem}
                    status={item.status}
                    value={item.id}
                />
            ))}
        </List>
    )
}

RiskList.propTypes = {
    id: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        creationDate: PropTypes.string.isRequired,
        deliveryDate: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired
    })),
    onSelectItem: PropTypes.func.isRequired,
    selectedItems: PropTypes.array
};

RiskList.defaultProps = {
    items: [],
    selectedItems: []
};

RiskList.defaultProps = {};

export default withStyles(styles)(RiskList);