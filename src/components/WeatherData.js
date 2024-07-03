import React from 'react';

export default function WeatherData({list}) {
  function handleClick(event) {
    console.log(event.target.value)
  }
  return (
    <>
    <p>Here is the list of the current 7-day forecast:</p>
      {list.map((item) => (
        <div key={item.day} className="weather-card">
          <button type='button' onClick={handleClick} value ={item.main.temperature}>Check my temperature</button>
          <p>Temperature is {item.main.temp}</p>
          <p>Humidity: {item.main.humidity}</p>
          <p>Lowest Temperature: {item.main.temp_min}</p>
          <p>Highest Temperature: {item.main.temp_max}</p>
        </div>
      ))}
   </>
  )
}