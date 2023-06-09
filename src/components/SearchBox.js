import React, { useState } from 'react';

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={query} onChange={handleInputChange} placeholder="Search..." />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;