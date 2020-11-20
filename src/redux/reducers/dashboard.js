// @packages
import { combineReducers } from 'redux';

// @scripts
import { config } from '../../config';
import { GET_HIST } from '../actions';

const histReducer = (
    state = config.initialState.dashboard.hist, action
) => {
    switch (action.type) {
        case GET_HIST:
            return action.payload;
        default:
            return state;
    }
}

export const dashboardReducer = combineReducers({
    hist: histReducer
});