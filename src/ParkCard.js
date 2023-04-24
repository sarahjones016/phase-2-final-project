import React from 'react'

function ParkCard({ park }) {
  
  const features = park.features

  const renderFeatures = features.map((feat) => {
    return <li>{feat}</li>
  })
  return (
    <div className='park-card'>
        <img src={park.image} alt={park.name} />
        <h2>{park.name}</h2>
        <h3>{park.borough}</h3>
        <a href={park.map}>Google Maps</a>
        {/* <section>
          <p>How to get there: </p>
          <p>Subway: {park.transit.subway}</p>
          <p>Bus: {park.transit.bus}</p>
          <p>Ferry: {park.transit.ferry}</p>
        </section> */}
        <p>Features & Attractions</p>
        <ul>
          {renderFeatures}
        </ul>
    </div>
  )
}

export default ParkCard