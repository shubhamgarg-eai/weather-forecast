import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentWeather: JSON.parse(localStorage.getItem('currentWeather')) || null,
    forecast: JSON.parse(localStorage.getItem('forecast')) || [],
    loading: false,
    error: null,
    unit: 'Celsius',
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        fetchWeatherStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchWeatherSuccess(state, action) {
            state.loading = false;
            state.currentWeather = action.payload.currentWeather;
            state.forecast = action.payload.forecast;

            // Cache the weather data in localStorage
            localStorage.setItem('currentWeather', JSON.stringify(action.payload.currentWeather));
            localStorage.setItem('forecast', JSON.stringify(action.payload.forecast));
        },
        fetchWeatherFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        toggleUnit(state) {
            state.unit = state.unit === 'Celsius' ? 'Fahrenheit' : 'Celsius';
        },
    },
});

export const { fetchWeatherStart, fetchWeatherSuccess, fetchWeatherFailure, toggleUnit } = weatherSlice.actions;
export default weatherSlice.reducer;
