// @scripts
import DashboardContainer from '../../containers/dashboard';
import LoginContainer from '../../containers/login';

// @constants
const components = {
    DashboardContainer,
    LoginContainer
};

/**
 * @param {string} componentName
 * @returns {function}
 */
export const mapComponent = componentName =>
    components[componentName];
