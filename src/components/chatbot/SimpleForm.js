import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import Post from './Post'

// all available theme props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#0f4d4a',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#0f4d4a',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

// all available config props
const config = {
  width: '300px',
  height: '400px',
  hideUserAvatar: true,
  placeholder: 'Type your response.',
  headerTitle: 'ChatBot',
}

class SimpleForm extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          speechSynthesis={{ enable: true, lang: 'en' }}
          recognitionEnable={true}
          steps={[
            {
              id: 'welcome',
              message: 'Hello!',
              trigger: 'q-firstname',
            },
            /* Paste */
            {
              id: 'q-firstname',
              message: 'What is your first name?',
              trigger: 'firstname',
            },
            {
              id: 'firstname',
              user: true,
              validator: (value) => {
                if (/^[A-Za-z]+$/.test(value)) {
                  return true
                } else {
                  return 'Please input alphabet characters only.'
                }
              },
              trigger: 'q-lastname',
            },
            {
              id: 'q-lastname',
              message: 'Hello, {previousValue}. What is your last name?',
              trigger: 'lastname',
            },
            {
              id: 'lastname',
              user: true,
              validator: (value) => {
                if (/^[A-Za-z]+$/.test(value)) {
                  return true
                } else {
                  return 'Please input alphabet characters only.'
                }
              },
              trigger: 'q-zip',
            },
            {
              id: 'q-zip',
              message: 'Please enter your zip code.',
              trigger: 'zip',
            },
            {
              id: 'zip',
              user: true,
              validator: (value) => {
                if (/^[0-9]{5}(?:-[0-9]{4})?$/.test(value)) {
                  return true
                } else {
                  return 'Please enter a vaild zip code.'
                }
              },
              trigger: 'q-email',
            },
            {
              id: 'q-email',
              message: 'What is you email?',
              trigger: 'email',
            },
            {
              id: 'email',
              user: true,
              trigger: 'q-phone',
            },
            {
              id: 'q-phone',
              message: 'What is your phone number?',
              trigger: 'phone',
            },
            {
              id: 'phone',
              user: true,
              validator: (value) => {
                if (
                  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
                    value
                  )
                ) {
                  return true
                } else {
                  return 'Please enter a valid phone number.'
                }
              },
              trigger: 'q-submit',
            },
            {
              id: 'q-submit',
              message: 'Do you wish to submit?',
              trigger: 'submit',
            },
            {
              id: 'submit',
              options: [
                { value: 'y', label: 'Yes', trigger: 'end-message' },
                { value: 'n', label: 'No', trigger: 'no-submit' },
              ],
            },
            {
              id: 'no-submit',
              message: 'Your information was not submitted.',
              end: true,
            },
            {
              id: 'end-message',
              component: <Post />,
              asMessage: true,
              end: true,
            },
          ]}
          {...config}
        />
      </ThemeProvider>
    )
  }
}

export default SimpleForm
