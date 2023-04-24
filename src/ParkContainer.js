import React, {useState} from 'react'
import ParkCard from './ParkCard'
import NewParkForm from './NewParkForm'
import Search from './Search'
import { Link } from 'react-router-dom'
import Form from './Form'

function ParkContainer() {

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
            <button onClick={handleFormClick}>{showForm ? "Hide Form" : "Show Form"}</button>
          </div>
            {showForm ? <Form /> : null}
         </div>

         <div className="right-screen">
          <h3>Parks Portal</h3>
         </div>
        </div>
        {/* Will serve as main portal and render main cards and new park form */}
    </div>
  )
}

export default ParkContainer