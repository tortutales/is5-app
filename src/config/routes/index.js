// @scripts
import routes from './routes.json';

const getRoutes = () => {
    return routes;
};

/**
 * @param {string} name - The route's name.
 * @return {{
*  component: string,
*  name: string,
*  permission: string,
*  requiresLogout: boolean,
*  url: string
* }}
*/
export const getRoute = (name) => {
    const routes = getRoutes();
    return routes.find(route => route.name === name);
};

export default getRoutes();