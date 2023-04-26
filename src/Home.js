import React from 'react';
import HomeSlider from './HomeSlider';
import { Link } from 'react-router-dom';

function Home({ parks }) {
  return (
    <div className='homepage'>
        <div className='welcome'>
          <h1>Welcome to</h1>
          <h1>parkS<span style={{ color: "#FD95C9", border: "3.5px solid black", borderRadius: "10px" }}>NYC</span>!!!</h1><br></br>
          <p>Your official guide to the greenspaces of New York City.  Explore the beautiful and historic parks located in all five boroughs.  Add parks to your <span style={{ textDecoration: "underline" }}>My Parks</span> list.  Share your favorite spots and connect with other City Park-goers!  Start exploring below!</p><br></br>
          
          <Link to='parks-portal'>
            <button className='home-btn'>Explore the Parks</button>
          </Link>
          <Link to='my-parks'>
            <button className='home-btn'>My Parks</button>
          </Link>
          
        </div>
        
        <HomeSlider parks={parks} />
    </div>
  )
}

export default Home