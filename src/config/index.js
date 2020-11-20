// @scripts
import initialState from './initial-state';
import masterData from './master-data';
import mockData from './mock-data';
import routes from './routes';
import { getServices } from './services';

// TODO: Change this
const apiUrl = 'https://is-api-g05.herokuapp.com/api/v1' && 'http://localhost:3000/api/v1';

const getConfiguration = () => {
    const services = getServices(apiUrl);
    const config = {
        initialState,
        masterData,
        mockData,
        routes,
        services
    };

    return config;
};

export const config = getConfiguration();
