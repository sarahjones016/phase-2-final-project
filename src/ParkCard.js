import React, { useState } from 'react'

function ParkCard({ park, onMyParks }) {
  const [parkVisited, setParkVisited] = useState(park.visited)

  function handleClick() {
    setParkVisited(!parkVisited)

    fetch(`http://localhost:3000/parks/${park.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        visited: !park.visited 
      })
    })
    .then(resp => resp.json())
    .then(data => onMyParks(data))
  }

  return (
    <div className='park-card'>
        <img src={park.image} alt={park.name} />
        <h3>{park.name}</h3>
        <p>{park.borough}</p>
        {parkVisited ? <button onClick={handleClick} className='visited'>Remove from My Parks</button>
        : <button onClick={handleClick} className='not-visited'>Add to My Parks</button>}
    </div>
  )
}

export default ParkCard