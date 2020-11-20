// @scripts
import axios from 'axios';
import { config } from '../../config';

export const ON_LOGIN = 'ON_LOGIN';

/**
 * @param {String} username 
 * @param {String} password 
 */
export const onLogin = ({
    username,
    password
}) => dispatch => axios
    .post(config.services.security.login, { username, password })
    .then((response) => dispatch({
        type: ON_LOGIN,
        payload: response
    }))
    .catch(error => Promise.reject(error));
    