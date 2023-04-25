import React from 'react'

function ParkCard({ park }) {
  console.log(park.visited)

  function handleClick() {
    park.visited = !park.visited;
    console.log(park.visited)

  }

  return (
    <div className='park-card'>
        <img src={park.image} alt={park.name} />
        <h3>{park.name}</h3>
        <p>{park.borough}</p>
        {park.visited ? <button onClick={handleClick} className='visited'>Remove from My Parks</button>
        : <button onClick={handleClick} className='not-visited'>Add to My Parks</button>}
    </div>
  )
}

export default ParkCard