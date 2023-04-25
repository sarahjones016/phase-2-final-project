import './App.css';
import Home from './Home';
import ParkContainer from './ParkContainer';
import VisitedList from './VisitedList';
import ParkPage from './ParkPage';
import Error from './Error';
import { Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [parksData, setParksData] = useState([])
  const [myParks, setMyParks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/parks')
    .then(resp => resp.json())
    .then(data => setParksData(data))
  }, [])

  function addToMyParks(park, id) {
    if (park.visited) {
      setMyParks([...myParks, park])
    } else {
      setMyParks(myParks.filter((park) => {
        return park.id !== id
      }))
    }
  }


  return (
    <div className="App">
      {/* <h1>NYC Parks Portal</h1> */}
      <header className="header">
        <h2>NYC Parks</h2>
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
        <Route path='/parks-portal' element={<ParkContainer parks={parksData} onMyParks={addToMyParks} />}></Route>
        <Route path='/my-parks' element={<VisitedList />}></Route>
        <Route path='/park/:id' element={<ParkPage />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
