import React from 'react'

function ParkCard({ park }) {
  
  return (
    <div className='park-card'>
        <img src={park.image} alt={park.name} />
        <h3>{park.name}</h3>
        <p>{park.borough}</p>
    </div>
  )
}

export default ParkCard