// @packages
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

// @scripts
import styles from './styles'
import { uploadFile } from '../../../util';

const ModalWorkCreate = ({
    classes,
    id,
    onClose,
    visible
}) => {
    return (
        <Modal 
            id={id}
            className={classes.modal}
            aria-describedby="simple-modal-description"
            aria-labelledby="simple-modal-title"
            keepMounted
            onClose={onClose} 
            open={visible}
        >
            <div className={classes.paper}>
                <Grid 
                    // className={classes.}
                    container
                >
                    <Grid item xs={12}>
                        <Typography variant="h2">Create new work</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            label="Title"
                            variant="outlined"

                            id={`${id}-work-name`}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            label="Description"
                            variant="outlined"
                            id={`${id}-work-description`}
                        />
                    </Grid>
                </Grid>
            </div>
        </Modal>
    );
}

ModalWorkCreate.propTypes = {
    classes: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired
};

ModalWorkCreate.defaultProps = {};

export default withStyles(styles)(ModalWorkCreate);