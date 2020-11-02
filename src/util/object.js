import _ from 'lodash';

/**
 * Makes a copy of an object converting all its props to camelCase recursively.
 * @param {Object} source - The object to be copied.
 * @returns {Object}
 */
export const copyObjInCamelCase = (source) => {
    if (Array.isArray(source)) {
        return source.map(item => copyObjInCamelCase(item));
    } else if (source !== null && source.constructor === Object) {
        return Object.keys(source).reduce((result, key) => ({
            ...result,
            [_.lowerFirst(key)]: copyObjInCamelCase(source[key])
        }), {});
    }
    return source;
};

/**
 * Makes a copy of an object converting all its props to PascalCase recursively.
 * @param {Object} source - The object to be copied.
 * @returns {Object}
 */
export const copyObjInPascalCase = (source) => {
    if (Array.isArray(source)) {
        return source.map(item => copyObjInPascalCase(item));
    } else if (source !== null && source.constructor === Object) {
        return Object.keys(source).reduce((result, key) => ({
            ...result,
            [_.upperFirst(key)]: copyObjInPascalCase(source[key])
        }), {});
    }
    return source;
};