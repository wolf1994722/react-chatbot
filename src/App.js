import React, { useState } from 'react'
import SimpleForm from './Components/chatbot/SimpleForm'
import { Container, Jumbotron } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Faq from './Components/Faq'
import Help from './Components/Help'
import Slider from './Components/Slider'
import './App.css'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <div className="bot">
            <Route path="/" component={SimpleForm} exact />
          </div>
          <Route path="/faq" component={Faq} />
          <Route path="/help" component={Help} />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
