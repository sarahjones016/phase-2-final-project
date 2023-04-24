import React from 'react';
import HomeSlider from './HomeSlider';
import { Link } from 'react-router-dom';

function Home({ parks }) {
  return (
    <div className='homepage'>
        <div className='welcome'>
          <h1>Welcome to NYC Parks!</h1><br></br>
          <p>Your official guide to the true gems of NYC.  Explore the beautiful and historic parks of the City.  Share your favorite spots and connect!  Click below to start exploring!</p><br></br>
          
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