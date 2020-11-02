// @scripts
import initialState from './initial-state';
import routes from './routes';
import { getServices } from './services';

// TODO: Change this
const apiUrl = 'http://localhost:3000/api/v1';

const getConfiguration = () => {
    const services = getServices(apiUrl);
    const config = {
        initialState,
        routes,
        services
    };

    return config;
};

export const config = getConfiguration();
