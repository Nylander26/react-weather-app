import { useState } from 'react';
import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather.js';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api'
import Forecast from './components/forecast/forecast';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    // console.log(searchData)
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const currentweatherResponse = await response[0].json();
        const forecastweatherResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...currentweatherResponse });
        setForecastWeather({ city: searchData.label, ...forecastweatherResponse });
      })
      .catch((err) => console.log(err))
  }

  console.log(currentWeather);
  console.log(forecastWeather);
  

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecastWeather && <Forecast data={forecastWeather}/>}
    </div>
  );
}

export default App;

