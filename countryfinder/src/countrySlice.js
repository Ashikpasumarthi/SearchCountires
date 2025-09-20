import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async (_, { rejectWithValue }) => {
    try {
        const res = await fetch('https://countries-search-data-prod-812920491762.asia-south1.run.app/countries');
        const data = await res.json();
        console.log('API response:', data);
        return data
    }
    catch (error) {
        return rejectWithValue(error.response?.data || "Something went wrong");
    }
})


const countrySlice = createSlice({
    name: 'countries',
    initialState: {
        countries: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.loading = false;
                state.countries = Array.isArray(action.payload) ? action.payload : [];
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

    }
});

export default countrySlice.reducer;