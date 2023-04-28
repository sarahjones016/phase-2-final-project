import React, {useState} from 'react'
import png1 from "mta-subway-bullets/build/png/1.png"
import png2 from "mta-subway-bullets/build/png/2.png"
import png3 from "mta-subway-bullets/build/png/3.png"
import png4 from "mta-subway-bullets/build/png/4.png"
import png5 from "mta-subway-bullets/build/png/5.png"
import png6 from "mta-subway-bullets/build/png/6.png"
import png7 from "mta-subway-bullets/build/png/7.png"
import pnga from "mta-subway-bullets/build/png/a.png"
import pngb from "mta-subway-bullets/build/png/b.png"
import pngc from "mta-subway-bullets/build/png/c.png"
import pngd from "mta-subway-bullets/build/png/d.png"
import pnge from "mta-subway-bullets/build/png/e.png"
import pngf from "mta-subway-bullets/build/png/f.png"
import pngg from "mta-subway-bullets/build/png/g.png"
import pngj from "mta-subway-bullets/build/png/j.png"
import pngl from "mta-subway-bullets/build/png/l.png"
import pngm from "mta-subway-bullets/build/png/m.png"
import pngn from "mta-subway-bullets/build/png/n.png"
import pngq from "mta-subway-bullets/build/png/q.png"
import pngr from "mta-subway-bullets/build/png/r.png"
import pngw from "mta-subway-bullets/build/png/w.png"
import pngz from "mta-subway-bullets/build/png/z.png"
import pngsir from "mta-subway-bullets/build/png/sir.png"

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

  //   const subwayRender = subwayArray.map((line) => {
  //     return <p key={line}>{line}</p>
  // })
  
  const subwayRender = subwayArray.map((icon) => {
    return <img src={icon} key={icon} className="subway-icon" />
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
              <option value={png1}>1</option>
              <option value={png2}>2</option>
              <option value={png3}>3</option>
              <option value={png4}>4</option>
              <option value={png5}>5</option>
              <option value={png6}>6</option>
              <option value={png7}>7</option>
              <option value={pnga}>A</option>
              <option value={pngb}>B</option>
              <option value={pngc}>C</option>
              <option value={pngd}>D</option>
              <option value={pnge}>E</option>
              <option value={pngf}>F</option>
              <option value={pngg}>G</option>
              <option value={pngj}>J</option>
              <option value={pngl}>L</option>
              <option value={pngm}>M</option>
              <option value={pngn}>N</option>
              <option value={pngq}>Q</option>
              <option value={pngr}>R</option>
              <option value={pngw}>W</option>
              <option value={pngz}>Z</option>
              <option value={pngsir}>SIR</option>
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