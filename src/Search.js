import React from 'react'

function Search({search, onSearch, toggle, onToggle}) {

  return (
    <div className="search-fields">
      <h3>Find A Park</h3>
      <div className="inputs">
        <div className="filter-bar-div">
          <input 
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            className="filter-bar"
            type="text"
            placeholder="Type a park to search..."
          ></input>
        </div>
        <div className="dropdown-div">
          <select
            value={toggle}
            onChange={(e) => onToggle(e.target.value)}
            className="dropdown"
          >
              <option>Select Borough</option>
              <option>Bronx</option>
              <option>Brooklyn</option>
              <option>Queens</option>
              <option>Manhattan</option>
              <option>Staten Island</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Search