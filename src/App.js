import React, { useState } from 'react'
import SimpleForm from './Components/chatbot/SimpleForm'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Faq from './Components/Faq'
import Help from './Components/Help'
import './App.css'
import Slider from './Components/Slider'

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

          <Route path="/" component={Slider} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
