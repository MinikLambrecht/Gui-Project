/**
 * Script get current error
 */
import { GET_ERRORS } from '../actions/types';    // Imports our types script

// Set start values
const initialState = {};

// Export result
export default function(state = initialState, action ) {
    switch(action.type) {
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
}
