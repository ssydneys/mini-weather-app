import React from 'react';
import { useLocation, useParams, NavLink } from 'react-router-dom';

const Results = () => {
  const { city } = useParams();
  const location = useLocation();
  const { list } = location.state;

  return (
    <div className='container'>
      <h1>{city}</h1>
      <div className="weather-results">
        {list.map((item, index) => (
          <div key={index} className="weather-details">
            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`} alt={item.weather[0].description} /><br />
            <div class="weather-rest">has {item.weather[0].description}</div><br />
            <div class="weather-desc">
            <p>The temperature outside is {Math.round(item.main.temp)}°F but it feels like it's {Math.round(item.main.feels_like)}°F</p>
            </div><br />
            <div class="weather-rest">
            Humidity is {item.main.humidity}%<br />
            High is {Math.round(item.main.temp_max)}°F<br />
            Low is {Math.round(item.main.temp_min)}°F<br />
          </div>
          </div>
        ))}
      </div><br /><br />
            <NavLink to="/" >Check another city?</NavLink>
    </div>
  );
}

export default Results;