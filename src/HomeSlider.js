import React from 'react'
import { useState } from 'react'

function HomeSlider({ parks }) {
    //console.log(parks, 'from slider')

    const slideData = parks.map((park) => {
        return {
            name: park.name,
            image: park.image
        }
    })
    console.log(slideData)

  return (
    <div>
        {/* Homepage photo slider */}
    </div>
  )
}

export default HomeSlider