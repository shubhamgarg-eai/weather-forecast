import React from 'react';
import CurrentWeather from '../molecules/CurrentWeather';
import ForecastCard from '../molecules/ForecastCard';

const WeatherDisplay = ({ weather, forecast, unit }) => {
    // Filter the forecast to display only one entry per day
    const dailyForecast = forecast.list.filter((_, index) => index % 8 === 0); // Picking 12:00 PM entries
debugger
    return (
        <div>
            {weather && <CurrentWeather weather={weather} unit={unit} />}
            <div className="forecast">
                {dailyForecast.map((day, index) => (
                    <ForecastCard key={index} day={day} unit={unit} />
                ))}
            </div>
        </div>
    );
};

export default WeatherDisplay;
