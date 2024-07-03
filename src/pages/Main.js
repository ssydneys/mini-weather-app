import React, { useState, useEffect, useCallback } from 'react';
import SearchBar from '../components/SearchBar';
import { getWeatherData } from '../services/WeatherService';
import { useNavigate } from 'react-router-dom';
import opImage from '../images/op.png';

const Main = () => {
  const persistedLocation = localStorage.getItem('searchTerm');
  const [searchTerm, setSearchTerm] = useState(persistedLocation || 'New York');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [city, setCity] = useState(searchTerm);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await getWeatherData(searchTerm);
      setLoading(false);
      setError(false);
      navigate(`/results/${searchTerm}`, { state: { list: response.data.list } });
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

const handleChange = (event) => {
  setSearchTerm(event.target.value);
};

  useEffect(() => {
    localStorage.setItem('searchTerm', searchTerm);
  }, [searchTerm]);

  return (
    <div id='main' className='container'>
      <h1>Path2Tech Mini Weather App</h1><br />
    <img src={opImage} alt='Weather icons' />
    <br /><br />
      <SearchBar handleSubmit={handleSubmit} searchTerm={searchTerm} handleChange={handleChange} id={'search-city'}>
      <p class="weather-rest">Check the weather somewhere?</p>
      </SearchBar>
      {error && <p>Can you try that again?</p>}
    </div>
  );
}

export default Main;