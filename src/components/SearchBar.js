import React, { useRef, useEffect } from 'react';

function SearchBar({ handleSubmit, searchTerm, handleChange, id, children, isFocused = true }) {
  const inputRef = useRef();
  useEffect(() => {
    if(isFocused && inputRef.current){
      inputRef.current.focus();
    }
  }, [isFocused]);
  return (
    <section className='search-bar-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search-city'>
          { children }
          <br />
          <input
           type='text' 
           placeholder='Where to?' 
           id='search-city' 
           name='search-city' 
           className='search-city'
           onChange={handleChange} 
           value={searchTerm}
           ref={inputRef}
           />
        </label>
        <button type='submit' className='submit-search-city'>
          Look Up
        </button>
      </form>
    </section>
  )
}

export default SearchBar;