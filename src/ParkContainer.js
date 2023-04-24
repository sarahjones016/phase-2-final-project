import React, {useState} from 'react'
import ParkCard from './ParkCard'
import NewParkForm from './NewParkForm'
import Search from './Search'
import { Link } from 'react-router-dom'

function ParkContainer() {

  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [borough, setBorough] = useState("")
  const [map, setMap] = useState("")
  const [showForm, setShowForm] = useState(false)

  function handleParkSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/parks", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json"
      },
      body: JSON.stringify({
        name,
        image,
        borough,
        map,
      })
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
  }

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
          
          {showForm ? <form onSubmit={handleParkSubmit} className="new-park-form">
          <div className="form-content">
          <label>Park Name</label>
              <input 
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
              ></input>

            <label>Image</label>
              <input 
                value={image}
                type="text"
                onChange={(e) => setImage(e.target.value)}
              ></input>

            <label>Borough</label>
              <select 
                value={borough}
                onChange={(e) => setBorough(e.target.value)}
              >
                <option>Select Borough</option>
                <option>Bronx</option>
                <option>Brooklyn</option>
                <option>Queens</option>
                <option>Manhattan</option>
                <option>Staten Island</option>
              </select>   

            <label>Google Maps URL</label>
              <input 
                value={map} 
                type="text"
                onChange={(e) => setMap(e.target.value)}
              ></input>
          </div>
            
            <div className="form-button">
              <button>Submit</button>
            </div>  
              
          </form> : null}

          
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