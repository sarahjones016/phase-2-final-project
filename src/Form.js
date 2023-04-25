import React, {useState} from 'react'

function Form({addPark}) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [borough, setBorough] = useState("")
    const [map, setMap] = useState("")
    const [subway, setSubway] = useState("")
    const [ferry, setFerry] = useState("")

    const [subwayArray, setSubwayArray] = useState([]);
    const [ferryArray, setFerryArray] = useState([]);

    function handleSubwayChange(e) {
      let selected = e.target.value;
      selected === "Select Line" ? setSubway("") : setSubway(e.target.value)
      selected === "Select Line" ? setSubwayArray(subwayArray) : setSubwayArray([...subwayArray, selected])
    }

    function handleFerryChange(e) {
      let selected = e.target.value;
      selected === "Select Service" ? setFerry("") : setFerry(e.target.value)
      selected === "Select Service" ? setFerryArray(ferryArray) : setFerryArray([...ferryArray, selected])
    }
    
    function handleParkSubmit(e) {
        e.preventDefault();
    
        fetch("http://localhost:4001/parks", {
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
              subway: subwayArray,
              bus: [],
              ferry: ferryArray
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
            
            <label>NYC Subway</label>
              <select onChange={handleSubwayChange} value={subway}>
                <option>Select Line</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
                <option>F</option>
                <option>G</option>
                <option>J</option>
                <option>L</option>
                <option>M</option>
                <option>N</option>
                <option>Q</option>
                <option>R</option>
                <option>W</option>
                <option>SIR</option>
              </select>
              <div>{subwayArray}</div>
              <div></div>

              <label>NYC Ferry</label>
              <select onChange={handleFerryChange} value={ferry}>
                <option>Select Service</option>
                <option>ER</option>
                <option>RW</option>
                <option>SB</option>
                <option>AST</option>
                <option>SV</option>
                <option>SG</option>
                <option>GI</option>
              </select>
              <div>{ferryArray}</div>
              <div></div>
            </div>

            <div className="form-button-div">
              <button className="form-btn">Submit</button>
            </div>  
              
          </form>
    </div>
  )
}

export default Form