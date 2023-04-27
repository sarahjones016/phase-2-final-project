import React from 'react'
import ParkCard from './ParkCard'

function VisitedList({ myParks, onMyParks }) {
  
  const renderMyParks = myParks.map((park) => {
    return <ParkCard key={park.name} park={park} onMyParks={onMyParks} />
  })

  return (
    <div className="my-parks-container">
        <h1>My Parks</h1>
        <div className="my-parks">
          {renderMyParks}
        </div>
    </div>
  )
}

export default VisitedList