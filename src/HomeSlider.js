import React from 'react'
import './Slider.css'
import { useState } from 'react'

function HomeSlider({ parks }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slideData = parks.map((park) => {
        return {
            name: park.name,
            image: park.image
        }
    })
    console.log(slideData)

  return (
    <div className='slider-container'>
        {slideData.map((slide, index) => {
            return (
                <div className={index === currentSlide ? "current-slide" : "slide"} key={slide.name}>
                    {index === currentSlide ?
                    <>
                        <img src={slide.image} alt={slide.name} />
                        <h1>{slide.name}</h1>
                    </> : null}
                </div>
            )
        })
        }
    </div>
  )
}

export default HomeSlider