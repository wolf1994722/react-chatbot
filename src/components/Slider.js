import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css'

const AutoplaySlider = withAutoplay(AwesomeSlider)

const Slider = () => {
  return (
    <AutoplaySlider>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </AutoplaySlider>
  )
}

export default Slider
