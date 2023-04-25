import React from 'react'

function VisitedList({ myParks }) {
  console.log(myParks, "from visited")

  return (
    <div>
        {/* This page will be a profile style page which will hold a list of parks that the user has visited */}
        <h1>My Parks</h1>
    </div>
  )
}

export default VisitedList