import React from 'react';
import HomeSlider from './HomeSlider';

function Home({ parks }) {
  return (
    <div>
        <h1>Welcome to Patrick and Sarah's Website!</h1>
        <p>This paragraph will contain a little description of what we're doing here!</p>
        {/* Will contain buttons that route to portal and visited pages  */}
        <HomeSlider parks={parks} />
        <button>Get Started</button>
        <button>My Parks</button>
    </div>
  )
}

export default Home