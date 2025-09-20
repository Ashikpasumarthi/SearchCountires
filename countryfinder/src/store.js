import { configureStore } from '@reduxjs/toolkit';
import reducerMapping from './rootReducer';

const countryStore = configureStore({
    reducer: {
        countries: reducerMapping
    }
})

export default countryStore;