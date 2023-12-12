
import React, { useState } from 'react';

const WeatherScreen = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = '2dea46eb0c0b90c64fbc1252417ecea2';

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
      );

      if (!response.ok) {
        throw new Error('Error fetching weather data');
      }


      
      const weatherData = await response.json();

      if (weatherData.main === undefined) {
        setWeather(null);
        setError('Error, try major cities');
      } else {
        const weatherText = `It's ${weatherData.main.temp} degree in ${weatherData.name}!`;
        setWeather(weatherText);
        setError(null);
      }
    } catch (err) {
      setWeather(null);
      setError('Error, please try again with  major cities');
    }
  };

  return (
    <div className="container">
    <fieldset>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <input
            name="city"
            type="text"
            className="form-control"
            placeholder="Enter a City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Get Weather</button>
      </form>
  
      {weather !== null && <p className="mt-3">{weather}</p>}
  
      {error !== null && <p className="text-danger mt-3">{error}</p>}
    </fieldset>
  </div>
  
  );
};

export default WeatherScreen;
