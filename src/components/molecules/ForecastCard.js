import React from 'react';

const ForecastCard = ({ day, unit }) => {
    const temp = unit === 'Celsius' ? day.main.temp : (day.main.temp * 9/5) + 32;

    // Extract the day from the timestamp
    const date = new Date(day.dt * 1000);
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    const formattedDate = date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });

    return (
        <div className="forecast-card">
            <p>{dayOfWeek}, {formattedDate}</p>
            <p>{temp.toFixed(1)}° {unit}</p>
            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt={day.weather[0].description} />
        </div>
    );
};

export default ForecastCard;
