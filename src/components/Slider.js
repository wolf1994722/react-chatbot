import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../App.css'

export default function Slider() {
  return (
    <Carousel pause="hover" className="bg-dark">
      <Carousel.Item>
        <img
          src="https://github.com/Akash52/react-chatbot/blob/master/public/images/first.jpg?raw=true"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h2>Welcome to RMC chatbot</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://github.com/Akash52/react-chatbot/blob/master/public/images/first.jpg?raw=true"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h2>Fisrt Slide</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://github.com/Akash52/react-chatbot/blob/master/public/images/first.jpg?raw=true"
          fluid
        />
        <Carousel.Caption className="carousel-caption">
          <h2>Fisrt Slide</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
