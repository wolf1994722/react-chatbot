import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
  constructor(props) {
    super(props)
    const { steps } = this.props
    const { firstname } = steps

    this.state = { firstname }
  }

  componentDidMount() {
    const userObject = {
      first_name: this.state.firstname.value,
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
    return (
      <div speechSynthesis={{ enable: true, lang: 'en' }}>Good to see you!</div>
    )
  }
}

export default Post
