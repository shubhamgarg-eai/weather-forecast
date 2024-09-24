import React from 'react';
import CityName from '../atoms/CityName';
import Temperature from '../atoms/Temperature';
import WeatherIcon from '../atoms/WeatherIcon';

const CurrentWeather = ({ weather, unit }) => {
    const temp = unit === 'Celsius' ? weather.main.temp : (weather.main.temp * 9/5) + 32;

    return (
        <div>
            <CityName name={weather.name} />
            <Temperature temp={temp.toFixed(1)} unit={unit} />
            <WeatherIcon icon={weather.weather[0].icon} description={weather.weather[0].description} />
        </div>
    );
};

export default CurrentWeather;
