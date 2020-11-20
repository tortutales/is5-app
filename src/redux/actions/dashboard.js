// @packages 
import axios from 'axios';

// @scripts
import { config } from '../../config';

export const GET_HIST = 'GET_HIST_OPVAR';

export const getHist = () => 
    dispatch => {
        const histOpvar = axios.get(config.services.hist.opvar)
            .then(res => res.map(el => ({ ...el, type: 'opvar' })));
        const histLda = axios.get(config.services.hist.lda)
            .then(res => res.map(el => ({ ...el, type: 'lda' })));
    

        Promise.all([histOpvar, histLda])
            .then(responses => dispatch({
                type: GET_HIST,
                payload: responses?.flat()
            }))
            .catch(error => Promise.reject(error))
    };