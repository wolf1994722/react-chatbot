import React, { useState } from 'react'
import SimpleForm from './Components/chatbot/SimpleForm'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import './App.css'

const App = (props) => {
  let [showChat, setShowChat] = useState(false)

  const startChat = () => {
    setShowChat(true)
  }
  const hideChat = () => {
    setShowChat(false)
  }

  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container className="bot mb4">
          <div style={{ display: showChat ? 'none' : '' }}>
            <Route path="/" component={SimpleForm} exact />
          </div>
          {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
          <div>
            {!showChat ? (
              <button className="btn" onClick={() => startChat()}>
                <i className="fa fa-minus"></i>
              </button>
            ) : (
              <button className="btn" onClick={() => hideChat()}>
                <i className="fa fa-plus"></i>
              </button>
            )}
          </div>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
