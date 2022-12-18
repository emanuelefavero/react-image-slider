import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// Define an array of objects 'sliderData' with an image property
interface Props {
  sliderData: {
    image: string
  }[]
}

const ImageSlider = ({ sliderData }: Props) => {
  const [current, setCurrent] = useState(0)
  const length = sliderData.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  // Check if sliderData is an array and has at least one element, if not, return null
  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null
  }

  return (
    <section className='slider'>
      <FaChevronLeft className='left-arrow' onClick={prevSlide} />
      <FaChevronRight className='right-arrow' onClick={nextSlide} />
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel' className='image' />
            )}
          </div>
        )
      })}
    </section>
  )
}

export default ImageSlider
