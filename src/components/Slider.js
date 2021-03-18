import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../App.css'

export default function Slider() {
  return (
    <Carousel fade className="mb-8">
      <Carousel.Item>
        <img
          style={{ height: '500px', width: '500px' }}
          className="d-block w-100"
          src="https://github.com/Akash52/awesome-Javascript-collection/blob/master/Awesome-JavaScript-Example/Images/1.png?raw=true"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: '500px', width: '500px' }}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1431794015670-1761ebb156ba?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: '500px', width: '500px' }}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1414146782248-462e06300dbf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
