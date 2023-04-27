import './App.css';
import Home from './Home';
import ParkContainer from './ParkContainer';
import VisitedList from './VisitedList';
import Error from './Error';
import logo from './logos-icons/logo.png';
import { Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ParkDetails from './ParkDetails';

function App() {
  const [parksData, setParksData] = useState([])
  const [myParks, setMyParks] = useState([])
  const [search, setSearch] = useState("")
  const [toggle, setToggle] = useState("Select Borough")


  useEffect(() => {
    fetch('http://localhost:4001/parks')
    .then(resp => resp.json())
    .then((data) => {
      setParksData(data)
      const visitedParks = data.filter((park) => {
        return park.visited === true;
      })
      setMyParks(visitedParks)
    })
  }, [])

  function handleSearch(newSearch) {
    setSearch(newSearch)
  }

  const searchedParks = parksData.filter((park) => {
    return park.name.toLowerCase().includes(search.toLowerCase())
  })

  function handleToggle(newToggle) {
    setToggle(newToggle)
  }

  const toggledParks = searchedParks.filter((park) => {
    if (toggle === "Select Borough") {
      return true;
    }
    return park.borough === toggle
  })

  function handleMyParks(park) {
    setParksData(parksData.map((item) => {
      if (item.id === park.id) {
        return park;
      } else {
        return item;
      }
    }))  
    if (park.visited) {
        setMyParks([...myParks, park])
      } else {
        setMyParks(myParks.filter((item) => {
          return item.id !== park.id;
        }))
      }
  }

  function addPark(newPark) {
    setParksData([...parksData, newPark])
  }

  return (
    <div className="App">
      
      <header className="header">
        <div className="logo-container">
          <img src={logo} className='logo' />
          <h1>parkS<span style={{ color: "#FD95C9", border: "3.5px solid black", borderRadius: "10px" }}>NYC</span></h1>
        </div>
        <nav>
          <ul className="nav-bar">
            {/* Links will go here */}
            <li><Link to='/'>Home</Link></li>
            <li><Link to='parks-portal'>Parks Portal</Link></li>
            <li><Link to='my-parks'>My Parks</Link></li>
          </ul>
        </nav>
      </header>

      {/* Browser Routes to components will be down here */}
      <Routes>
        <Route path='/' element={<Home parks={parksData} />}></Route>
        <Route path='/parks-portal' element={<ParkContainer search={search} onSearch={handleSearch} toggle={toggle} onToggle={handleToggle} addPark={addPark} parks={toggledParks} onMyParks={handleMyParks} />}></Route>
        <Route path='/my-parks' element={<VisitedList myParks={myParks} onMyParks={handleMyParks} />}></Route>
        <Route path='/parks/:id' element={<ParkDetails onMyParks={handleMyParks}/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
