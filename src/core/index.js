// @scripts
import { addAjaxInterceptors } from './ajax-interceptors';
import { initializeReduxStore } from './redux-store';

export * from './constants';

const initializeApp = () => {
    const store = initializeReduxStore();

    global.core = {
        store
    };

    addAjaxInterceptors();

    return global.core;
}

export const {
    store
} = initializeApp();