// @packages
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

// @scripts
import { config } from '../config';

/**
 * Gets the paramters of a mocked service.
 * @param {{params: object}|{data: string}} call
 * @returns {Object}
 */
export const getMockParams = (call) => {
    return call.params || JSON.parse(call.data);
};

/**
 * Creates a response for a mocked service.
 * @param {Object} data - Data to be sent in the response.
 * @param {number} httpCode - Http code associated with the response.
 * @returns {[
 *  httpCode: number,
 *  response: object
 * ]}
 */
const createMockResponse = ({
    data = null,
    httpCode = 200
}) => ([httpCode, data]);

/**
 * Decodes a Base64 string.
 * @param {string} str - The string to be decoded.
 * @returns {string}
 */
const decodeBase64String = str =>
    window.atob(str);

const mockedServices = {
    mockServiceSecurityLogin: (mockAdapter) => {
        mockAdapter.onPost(config.services.security.login)
            .reply((call) => {
                const { username, password } = getMockParams(call);
                const { username: mockUsername, password: mockPassword } = config.mockData.security.user;

                const success =
                    (username === mockUsername) &&
                    (password === decodeBase64String(mockPassword));

                return createMockResponse({
                    data: success ? config.mockData.security.user : null,
                    httpCode: success ? 200 : 401
                });
            });
    }
}

export const initializeServiceMocker = () => {
    const mockAdapter = new MockAdapter(
        axios, { delayResponse: 2000 }
    );

    const serviceMocker = {
        replyWithMockData: () => {
            mockAdapter.reset();
            Object.values(mockedServices).forEach(service => service(mockAdapter));
            mockAdapter.onAny().passThrough();
        }
    }

    serviceMocker.replyWithMockData();

    return serviceMocker;
}