import React, {useState} from 'react'
import Form from "./Form"
import Search from './Search'

function Sidebar({addPark, search, onSearch, toggle, onToggle}) {

const [showForm, setShowForm] = useState(false)

function handleFormClick() {
    setShowForm(!showForm)
  }

  return (
    <div className="left-screen">
          <div>
            <Search search={search} onSearch={onSearch} toggle={toggle} onToggle={onToggle}/>
          </div>

          <div className="form-header">
            <h3>Add New Park</h3>
            <button id="drop-down" className="form-btn" onClick={handleFormClick}>{showForm ? "Hide Form" : "Show Form"}</button>
          </div>
            {showForm ? <Form addPark={addPark} /> : null}
    </div>
  )
}

export default Sidebar