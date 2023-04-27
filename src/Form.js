import React, {useState} from 'react'

function Form({addPark}) {

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [borough, setBorough] = useState("")
    const [map, setMap] = useState("")
    const [subway, setSubway] = useState("")
    const [ferry, setFerry] = useState("")
    const [bus, setBus] = useState("");
    const [feature1, setFeature1] = useState("")
    const [feature2, setFeature2] = useState("")
    const [feature3, setFeature3] = useState("")

    const [subwayArray, setSubwayArray] = useState([]);
    const [ferryArray, setFerryArray] = useState([]);

    const subwayRender = subwayArray.map((line) => {
      return <p key={line}>{line}</p>
  })

  const ferryRender = ferryArray.map((line) => {
    return <p key={line}>{line}</p>
})

    function handleSubwayChange(e) {
      let selected = e.target.value;
      selected === "Select Subway" ? setSubway("") : setSubway(e.target.value)
      selected === "Select Subway" ? setSubwayArray(subwayArray) : setSubwayArray([...subwayArray, selected])
    }

    function handleFerryChange(e) {
      let selected = e.target.value;
      selected === "Select Ferry" ? setFerry("") : setFerry(e.target.value)
      selected === "Select Ferry" ? setFerryArray(ferryArray) : setFerryArray([...ferryArray, selected])
    }
    
    function handleParkSubmit(e) {
        e.preventDefault();

        let busArray = bus.split(" ");
        let featureArray = [feature1, feature2, feature3]
        let truthyFeatureArray = featureArray.filter((feature) => {
          return !!feature
        })
        // https://www.samanthaming.com/pictorials/how-to-remove-all-falsy-values-from-an-array/

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
              bus: busArray,
              ferry: ferryArray
            },
            features: truthyFeatureArray,
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
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            ></input>

            <label>Image</label>
            <input 
              value={image}
              type="text"
              placeholder="Enter Image URL"
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
              placeholder="Enter Maps URL"
              onChange={(e) => setMap(e.target.value)}
            ></input>
            
            <label>Park Features</label>
            <input type="text" placeholder="Enter Feature" value={feature1} onChange={(e) => setFeature1(e.target.value)}></input>
            <div></div>
            <input type="text" placeholder="Enter Feature" value={feature2} onChange={(e) => setFeature2(e.target.value)}></input>
            <div></div>
            <input type="text" placeholder="Enter Feature" value={feature3} onChange={(e) => setFeature3(e.target.value)}></input>
            

            <label>Public Transit:</label>
            <div></div>


            <select onChange={handleSubwayChange} value={subway}>
              <option>Select Subway</option>
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
            <div className="transit-form-render">{subwayRender}</div>

            <input value={bus} type="text" placeholder="Enter Bus Route(s)" onChange={(e) => setBus(e.target.value)}></input>
            <div></div>

            <select onChange={handleFerryChange} value={ferry}>
              <option>Select Ferry</option>
              <option>ER</option>
              <option>RW</option>
              <option>SB</option>
              <option>AST</option>
              <option>SV</option>
              <option>SG</option>
              <option>GI</option>
            </select>
            <div className='transit-form-render'>{ferryRender}</div>
              
          </div>

          

          <div className="form-button-div">
            <button className="form-btn">Submit</button>
          </div>  
              
          </form>
    </div>
  )
}

export default Form