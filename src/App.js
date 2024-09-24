import React, { useEffect, useState, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherStart, fetchWeatherSuccess, fetchWeatherFailure, toggleUnit } from './redux/weatherSlice';
import { fetchWeatherData } from './services/weatherAPI';
import './styles/main.css';
import Search from './components/Search';
// Lazy-load WeatherDisplay component
const WeatherDisplay = lazy(() => import('./components/organisms/WeatherDisplay'));


function App() {
    const dispatch = useDispatch();
    const { currentWeather, forecast, loading, unit } = useSelector((state) => state.weather);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [pullText, setPullText] = useState('');  // New state to show pull feedback

    // Function to fetch data for a specific city
    const fetchCityWeather = (city) => {
        dispatch(fetchWeatherStart());
        fetchWeatherData(city)
            .then((data) => dispatch(fetchWeatherSuccess(data)))
            .catch((error) => dispatch(fetchWeatherFailure(error.message)));
    };

    // Fetch default weather (New York) when the app loads
    useEffect(() => {
        fetchCityWeather('New York');
    }, [dispatch]);

    // Pull-to-refresh functionality
    useEffect(() => {
        const handleTouchStart = (event) => {
            // Detect when the user starts pulling down at the top of the page
            if (window.scrollY === 0) {
                setPullText('Pull to refresh...');
            }
        };

        const handleTouchMove = (event) => {
            // If the user is pulling down, show the refreshing text
            if (window.scrollY === 0 && event.touches[0].clientY > 50) {
                setPullText('Release to refresh...');
            }
        };

        const handleTouchEnd = (event) => {
            // When the user releases the pull, refresh the data
            if (window.scrollY === 0 && event.changedTouches[0].clientY > 100) {
                setIsRefreshing(true);
                setPullText('');
                fetchCityWeather('New York');  // Re-fetch data for New York
                setTimeout(() => {
                    setIsRefreshing(false);
                }, 1500);
            } else {
                setPullText('');
            }
        };

        window.addEventListener('touchstart', handleTouchStart);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    }, [dispatch]);

    const handleToggleUnit = () => {
        dispatch(toggleUnit());
    };

  return (
    <div className="App">
        <h1>Weather Forecast</h1>
        <Search onSearch={fetchCityWeather} />
        {pullText && <p>{pullText}</p>}
        {isRefreshing && <p>Refreshing...</p>}
        {loading ? (
            <div className="spinner">Loading...</div> // Replace with a spinner or loading animation
        ) : (
            <>
                <Suspense fallback={<p>Loading weather...</p>}>
                    <WeatherDisplay weather={currentWeather} forecast={forecast} unit={unit} />
                </Suspense>
                <button onClick={handleToggleUnit}>Switch to {unit === 'Celsius' ? 'Fahrenheit' : 'Celsius'}</button>
            </>
        )}
    </div>
);
}

export default App;
