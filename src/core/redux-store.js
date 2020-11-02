// @packages
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../redux/reducers';

export const initializeReduxStore = () => {
    const middleware = [thunk];
    
    // if (config.settings.reduxLogger.isEnabled) {
        middleware.push(createLogger());
    // }

    const store = createStore(
        rootReducer,
        applyMiddleware(...middleware)
    );

    return store;
}