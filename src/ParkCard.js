import React from 'react'
import { useNavigate } from "react-router-dom"


function ParkCard({ park }) {

const navigate = useNavigate()

function handleCardClick() {
  console.log("card has been clicked")
  navigate(`/parks/${park.id}`, { state: park})
}
  
  return (
    <div onClick={handleCardClick} className='park-card'>
        <img src={park.image} alt={park.name} />
        <h3>{park.name}</h3>
        <p>{park.borough}</p>
    </div>
  )
}

export default ParkCard