import React from 'react'
import ParkCard from './ParkCard'

function VisitedList({ myParks }) {
  console.log(myParks, "from visited")

  const renderMyParks = myParks.map((park) => {
    return <ParkCard key={park.name} park={park} />
  })

  return (
    <div>
        {/* This page will be a profile style page which will hold a list of parks that the user has visited */}
        <h1>My Parks</h1>
        <div>
          {renderMyParks}
        </div>
    </div>
  )
}

export default VisitedList