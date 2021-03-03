import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
  constructor(props) {
    super(props)
    const { steps } = this.props
    const { firstname, lastname, zip, phone, pets, email } = steps

    this.state = { firstname, lastname, zip, phone, pets, email }
  }

  componentDidMount() {
    const userObject = {
      first_name: this.state.firstname.value,
      last_name: this.state.lastname.value,
      zip_code: this.state.zip.value,
      phone: this.state.phone.value,
      email: this.state.email.value,
    }
    axios
      .post(`/api`, userObject)
      .then((res) => {
        console.log(res.status)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
    return <div>Thank you! Your data was submitted successfully!</div>
  }
}

export default Post
