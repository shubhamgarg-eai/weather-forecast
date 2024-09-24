const WeatherIcon = ({ icon, description }) => (
    <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={description} />
);
export default WeatherIcon;
