/**
 * This scrip combines our two reducer classes for easier
 * management
 */

import { combineReducers } from 'redux';      // Imports dependencies from redux
import errorReducer from './errorReducer';    // Imports our errorReducer script
import authReducer from './authReducer';      // Imports our authReducer script

// Combines out reducers
export default combineReducers({
    errors: errorReducer,
    auth: authReducer
});
