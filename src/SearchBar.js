import React from 'react';

function SearchBar({ handleSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for books..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
