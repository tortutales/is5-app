import { appReducer } from './app';
import { userReducer } from './user';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    app: appReducer,
    user: userReducer
});