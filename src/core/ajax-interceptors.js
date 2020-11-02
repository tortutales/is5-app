// @packages
import axios from 'axios';

const addResponseInterceptors = () => {
    axios.interceptors.response.use(
        (response) => {
            if (!response.data) {
                return null;
            }

            const responseHasProp = prop =>
                Object.prototype.hasOwnProperty.call(response.data, prop);

            const responseMessage = responseHasProp('Message')
                ? response.data.Message
                : response.data.message;

            let responseSuccess;

            if (responseHasProp('Success')) {
                responseSuccess = response.data.Success;
            } else if (responseHasProp('success')) {
                responseSuccess = response.data.success;
            } else {
                responseSuccess = (response.status >= 200 && response.status < 300);
            }

            let responseData;
            
            if (responseHasProp('data')) {
                responseData = response.data.data;
            } else {
                responseData = response.data;
            }

            if (!responseSuccess) {
                return Promise.reject(responseMessage);
            }

            return responseData;
        },
        error => Promise.reject(error)
    );
};

export const addAjaxInterceptors = () => {
    // addRequestInterceptors();
    addResponseInterceptors();
};
