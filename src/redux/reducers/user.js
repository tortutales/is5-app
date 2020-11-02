import { combineReducers } from 'redux';
import { config } from '../../config';
import { ON_LOGIN } from '../actions';

export const userReducer = (
    state = config.initialState.user, action
) => {
    switch (action.type) {
        case ON_LOGIN:
            return { ...action.payload, 
                isLoggedIn: true,
                permissions: ['Dashboard']
            }
        default: 
            return state;
    }
};