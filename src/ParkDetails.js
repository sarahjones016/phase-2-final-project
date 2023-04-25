import React from 'react'
import { Link, useLocation,  useParams } from "react-router-dom"

export default function Details() {
    const params = useParams()
    console.log(params)
  
  
    const location = useLocation()
    const state = location.state
    console.log(state)

    const featuresArray = state.features.map((feature) => {
        return <li>{feature}</li>
    })

    const subwayArray = state.transit.subway.map((subwayOption) => {
        return <li>{subwayOption}</li>
    })

    const busArray = state.transit.bus.map((busOption) => {
        return <li>{busOption}</li>
    })

    const ferryArray = state.transit.ferry.map((ferryOption) => {
        return <li>{ferryOption}</li>
    })

    return (
        <div>
            <div className="parkDetails">
                <div className="left-panel">
                    <div className="park-content">
                        <div className="park-basics">
                            <h1>{state.name}</h1>
                            <h3>{state.borough}</h3>
                            <a href={state.map}>Google Maps</a>
                        </div>
                        
                        <div className="transit">
                            <h4>Transportation:</h4>
                            <div className="transit-options">
                                <h5>Subway: </h5>
                                    <ul>{subwayArray}</ul>
                                <h5>Bus: </h5>
                                    <ul>{busArray}</ul>
                                <h5>Ferry: </h5>
                                    <ul>{ferryArray}</ul>
                            </div>
                        </div>
                        

                        <div className="features">
                            <h4>Features & Attractions:</h4>
                                <ul className="list-of-features">
                                    {featuresArray}
                                </ul>
                        </div>
                        
                    </div>
                </div>
                <div className="right-panel">
                    <img src={state.image}></img>
                </div>
            </div>
        </div>
      )
}