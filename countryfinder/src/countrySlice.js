import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

export const fetchCountries = createAsyncThunk(
    'countries/fetchCountries',
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch(
                `https://countries-search-data-prod-812920491762.asia-south1.run.app/countries`
            );

            if (!res.ok) throw new Error("Failed to fetch");

            const data = await res.json();
            return data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);


const countrySlice = createSlice({
    name: 'countries',
    initialState: {
        countries: [],
        searchResults: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCountries.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.loading = false;
                state.countries = action.payload;
            })
        .addCase(fetchCountries.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

}
});

export default countrySlice.reducer;