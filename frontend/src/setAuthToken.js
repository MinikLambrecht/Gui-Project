/**
 * This method is used to generate and send an authentication token from axios
 */

import axios from 'axios';    // Imports dependencies from axios

/**
 * You can either Create or Delete an token with this method
 */
const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common['Authorization'] = token;
    }
    else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

export default setAuthToken;
