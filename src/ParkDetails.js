import React, {useState} from 'react'
import { useLocation,  useParams } from "react-router-dom"


export default function ParkDetails({ onMyParks}) {
    const params = useParams()
    // console.log(params)
  
  
    const location = useLocation()
    const state = location.state
    console.log(state.visited)

    const [parkFav, setParkFav] = useState(state.visited)

    function handleClick() {
        setParkFav(!parkFav)
        console.log(parkFav)
    
        fetch(`http://localhost:4001/parks/${state.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            visited: !parkFav
          })
        })
        .then(resp => resp.json())
        .then(data => onMyParks(data))
      }

    const featuresArray = state.features.map((feature) => {
        return <li key={feature}>{feature}</li>
    })

    const subwayArray = state.transit.subway.map((subwayOption) => {
        return <li key={subwayOption}>{subwayOption}</li>
    })

    const busArray = state.transit.bus.map((busOption) => {
        return <li key={busOption}>{busOption}</li>
    })

    const ferryArray = state.transit.ferry.map((ferryOption) => {
        return <li key={ferryOption}>{ferryOption}</li>
    })

    return (
        <div>
            <div className="park-name">
                <h1>{state.name}</h1>
            </div>
            <div className="parkDetails">
                <div className="left-panel">
                    <div className="park-content">
                        <div className="park-basics">
                            <h3>{state.borough}</h3>
                            <a href={state.map}>Find On Google Maps</a>
                            <div>
                            {parkFav ? <button onClick={handleClick} className='visited'>Remove from My Parks</button>
                            : <button onClick={handleClick} className='not-visited'>Add to My Parks</button>}
                            </div>
                        </div>
                        
                        <div className="transit">
                            <h3>Transportation:</h3>
                            <div className="transit-options">
                                <h4>Subway: </h4>
                                    <ul className="subway">{subwayArray}</ul>
                                <h4>Bus: </h4>
                                    <ul className="bus">{busArray}</ul>
                                <h4>Ferry: </h4>
                                    <ul className="ferry">{ferryArray}</ul>
                            </div>
                        </div>
                        

                        <div className="features">
                            <h3>Features & Attractions:</h3>
                                <ul className="list-of-features">
                                    {featuresArray}
                                </ul>
                        </div>
                        
                    </div>
                </div>
                <div className="right-panel">
                    <img className="details-image"src={state.image}></img>
                </div>
            </div>
        </div>
      )
}

