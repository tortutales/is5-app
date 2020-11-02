// @scripts
import LoginContainer from '../../containers/login';

// @constants
const components = {
    LoginContainer
};

/**
 * @param {string} componentName
 * @returns {function}
 */
export const mapComponent = componentName =>
    components[componentName];
