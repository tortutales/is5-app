import { appReducer } from './app';
import { userReducer } from './user';
import { combineReducers } from 'redux';
import { dashboardReducer } from './dashboard';

export const rootReducer = combineReducers({
    app: appReducer,
    dashboard: dashboardReducer,
    user: userReducer
});