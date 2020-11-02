// @packages
import { combineReducers } from 'redux';
import { config } from '../../config';

const nameReducer = (
    state = config.initialState.app.name, action 
) => {
    switch (action.type) {
        default:
            return state
    }
};

const versionReducer = (
    state = config.initialState.app.version, action 
) => {
    switch (action.type) {
        default:
            return state
    }
};

export const appReducer = combineReducers({
    name: nameReducer,
    version: versionReducer
});