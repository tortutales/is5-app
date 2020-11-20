// @packages
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import React from 'react';
import Redirect from 'react-router-dom/Redirect';
import { withStyles } from '@material-ui/core';

// @scripts
import styles from './styles';
import { config } from '../../config';

const LoginScreen = ({
    classes,
    onLogin,
    userIsLoggedIn
}) => {
    const username = React.useRef();
    const password = React.useRef();

    console.log(userIsLoggedIn);
    if (userIsLoggedIn) {
        debugger;
        return <Redirect to="/dashboard" />
    }
    
    const handleOnLogin = () => onLogin({
        password: password.current.value,
        username: username.current.value
    });

    return (
        <Grid 
            container
            alignItems="center"
            direction="column"
            justify="center"
            className={classes.mainContainer}
        >
            <Input 
                inputRef={username}
                placeholder="username"
            />
            <Input 
                inputRef={password}
                placeholder="password"
            />
            <Button onClick={handleOnLogin}>Login</Button>
        </Grid>
    );
}

export default withStyles(styles)(LoginScreen);