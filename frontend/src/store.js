/**
 * This is our store that holds out whole state tree
 */

import { createStore, applyMiddleware } from 'redux';                           // Imports dependencies from redux
import thunk from 'redux-thunk';                                                // Imports dependencies from redux-thunk
import rootReducer from './reducers';                                           // Imports our reducers
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';   // Imports dependencies from redux-devtools-extension

// Set the starting values
const inititalState = {};

/**
 * This method builds our state tree
 */
const store = createStore(
        rootReducer,
        inititalState,
        composeWithDevTools(applyMiddleware(thunk)));

export default store;
