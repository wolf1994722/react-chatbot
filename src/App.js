import React, { useState } from 'react'
import SimpleForm from '../src/components/chatbot/SimpleForm'
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
    <>
      <div className="bot">
        <div style={{ display: showChat ? 'none' : '' }}>
          <SimpleForm></SimpleForm>
        </div>
        {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
        <div>
          {!showChat ? (
            <button className="btn" onClick={() => startChat()}>
              <i class="fa fa-minus"></i>
            </button>
          ) : (
            <button className="btn" onClick={() => hideChat()}>
              <i class="fa fa-plus"></i>
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default App
