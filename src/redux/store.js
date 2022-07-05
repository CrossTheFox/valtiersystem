import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/loginReducers.js';

const appReducer = combineReducers({
    authReducer: authReducer,
})

export default createStore(appReducer);