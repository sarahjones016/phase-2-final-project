import React from 'react'
import './Slider.css'
import { useState, useEffect } from 'react'

function HomeSlider({ parks }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slideData = parks.map((park) => {
        return {
            name: park.name,
            image: park.image
        }
    })

    useEffect(() => {
        setCurrentSlide(0)
    }, [])

    useEffect(() => {
        const timeId = setTimeout(() => {
            if (currentSlide < slideData.length - 1) {
                setCurrentSlide(currentSlide + 1)
            } else {
                setCurrentSlide(0);
            }
        }, 5000);
        return () => {
            clearTimeout(timeId);
        }
    })

    function handlePrevClick() {
        currentSlide === 0 ? setCurrentSlide(slideData.length - 1) : setCurrentSlide(currentSlide - 1)
    }

    function handleNextClick() {
        currentSlide === slideData.length - 1 ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1)
    }

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
        <button onClick={handlePrevClick} className='prev'>&#8678;</button>
        <button onClick={handleNextClick} className="next">&#8680;</button>
    </div>
  )
}

export default HomeSlider