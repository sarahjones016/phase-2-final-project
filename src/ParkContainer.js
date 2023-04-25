import React, {useState} from 'react'
import ParkCard from './ParkCard'
import Search from './Search'
// import { Link } from 'react-router-dom'
import Form from './Form'

function ParkContainer({ parks, onMyParks, addPark }) {

  const [showForm, setShowForm] = useState(false)

  function handleFormClick() {
    setShowForm(!showForm)
  }

  return (
    <div>
        <div className="parks-container-screens">
          
         <div className="left-screen">
          <div className="form-header">
            <h3>Add New Park</h3>
            <button id="drop-down" className="form-btn" onClick={handleFormClick}>{showForm ? "Hide Form" : "Show Form"}</button>
          </div>
            {showForm ? <Form addPark={addPark} /> : null}
         </div>

         <div className="right-screen">
          <h3>Parks Portal</h3>
          <div className='park-portal'>
            {parks.map((park) => {
              return <ParkCard park={park} key={park.name} onMyParks={onMyParks} />
            })}
          </div>
         </div>
        </div>
    </div>
  )
}

export default ParkContainer