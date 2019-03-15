/**
 * Script to set the current user after authentication
 */
import { SET_CURRENT_USER } from '../actions/types';    // Imports our types script
import isEmpty from '../validation/is-empty';           // Imports our is-empty script

// This will set out start values
const initialState = {
    isAuthenticated: false,
    user: {}
}

// Return the result
export default function(state = initialState, action ) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        default:
            return state;
    }
}
