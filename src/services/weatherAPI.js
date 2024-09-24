import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
debugger
export const fetchWeatherData = async (city) => {
    try {
        console.log(process.env.REACT_APP_WEATHER_API_KEY)
        const currentWeather = await axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const forecast = await axios.get(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
        return { currentWeather: currentWeather.data, forecast: forecast.data };
    } catch (error) {
        throw new Error('Failed to fetch weather data');
    }
};
