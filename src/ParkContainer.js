import React, {useState} from 'react'
import ParkCard from './ParkCard'
import Sidebar from './Sidebar'

function ParkContainer({ parks, onMyParks, addPark, search, onSearch, toggle, onToggle}) {

  const [showSidebar, setShowSidebar] = useState(false)

  function handleSliderClick() {
    setShowSidebar(!showSidebar)
  }

  return (
    <div>
        <button onClick={handleSliderClick} className="expand-btn-mobile">{showSidebar ? "↑" : "↓"}</button>
        <div className="parks-container-screens">
        {showSidebar ? <Sidebar addPark={addPark} search={search} onSearch={onSearch} toggle={toggle} onToggle={onToggle}/> : null}
         <button onClick={handleSliderClick} className="expand-btn-desktop">{showSidebar ? "←" : "→"}</button>

         {/* {showSidebar ? <Sidebar addPark={addPark} search={search} onSearch={onSearch} toggle={toggle} onToggle={onToggle}/> : null} */}
        
         <div className="right-screen">
          <h1>Parks Portal</h1>
          <div className='park-portal'>
            {parks.map((park) => {
              return <ParkCard park={park} key={park.name} onMyParks={onMyParks} />
            })}
          </div>
         </div>
        </div>
    </div>
  )
}

export default ParkContainer