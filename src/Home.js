import React from 'react';
import HomeSlider from './HomeSlider';

function Home({ parks }) {
  return (
    <div>
        <h1>Homepage</h1>
        {/* Will contain buttons that route to portal and visited pages  */}
        <HomeSlider parks={parks} />
    </div>
  )
}

export default Home