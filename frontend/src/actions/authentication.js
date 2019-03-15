/**
 * A script to handle API calls for hte register/login system
 */
import axios from 'axios';                                // Imports dependencies from axios
import { GET_ERRORS, SET_CURRENT_USER } from './types';   // Imports our types script
import setAuthToken from '../setAuthToken';               // Imports our setAuthToken script
import jwt_decode from 'jwt-decode';                      // Imports dependencies from jwt-decode

/**
 * API Call to handle user registrations
 */
export const registerUser = (user, history) => dispatch => {
    axios.post('/api/users/register', user)
            .then(res => history.push('/login'))
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

/**
 * API Call to handle user logins
 */
export const loginUser = (user) => dispatch => {
    axios.post('/api/users/login', user)
            .then(res => {
                const { token } = res.data;
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentUser(decoded));
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}

/**
 * Method to easier get the current user
 */
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

/**
 * Method to logout the current user
 */
export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push('/login');
}
