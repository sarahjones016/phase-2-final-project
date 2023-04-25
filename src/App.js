import './App.css';
import Home from './Home';
import ParkContainer from './ParkContainer';
import VisitedList from './VisitedList';
import ParkPage from './ParkPage';
import Error from './Error';
import { Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ParkDetails from './ParkDetails';

function App() {
  const [parksData, setParksData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/parks')
    .then(resp => resp.json())
    .then(data => setParksData(data))
  }, [])


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
        <Route path='/parks-portal' element={<ParkContainer parks={parksData} />}></Route>
        <Route path='/my-parks' element={<VisitedList />}></Route>
        <Route path='/parks/:id' element={<ParkDetails />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
