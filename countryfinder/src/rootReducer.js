import { combineReducers } from 'redux';
import countryReducer from './countrySlice';

const reducers = combineReducers({
    countries: countryReducer
});

export default reducers;