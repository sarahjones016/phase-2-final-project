import './App.css';
import Home from './Home';
import ParkContainer from './ParkContainer';
import VisitedList from './VisitedList';
import ParkCard from './ParkCard';
import Error from './Error';
import { Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [parksData, setParksData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/parks')
    .then(resp => resp.json())
    .then(data => setParksData(data))
  }, [])


  return (
    <div className="App">
      <h1>NYC Parks Portal</h1>
      <nav className="nav-bar">
        {/* Links will go here */}
        <Link to='/'>Home</Link>
        <Link to='parks-portal'>Parks Portal</Link>
        <Link to='my-parks'>My Parks</Link>
      </nav>

      {/* Browser Routes to components will be down here */}
      <Routes>
        <Route path='/' element={<Home parks={parksData} />}></Route>
        <Route path='/parks-portal' element={<ParkContainer />}></Route>
        <Route path='/my-parks' element={<VisitedList />}></Route>
        <Route path='/park/:id' element={<ParkCard />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
