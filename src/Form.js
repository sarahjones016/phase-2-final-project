import React, {useState} from 'react'

function Form({addPark}) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [borough, setBorough] = useState("")
    const [map, setMap] = useState("")

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
            transit: {
              subway: [],
              bus: [],
              ferry: []
            },
            features: [],
            visited: false,
          })
        })
        .then((res) => res.json())
        .then((data) => addPark(data))
      }

  return (
    
    <div>
        <form onSubmit={handleParkSubmit} className="new-park-form">
          <div className="basic-form-content">
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
            
            <div className="form-button-div">
              <button className="form-btn">Submit</button>
            </div>  
              
          </form>
    </div>
  )
}

export default Form