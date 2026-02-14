import { configureStore } from '@reduxjs/toolkit';
import reducerMapping from './rootReducer';

const countryStore = configureStore({
    reducer:  reducerMapping
    
})

export default countryStore;