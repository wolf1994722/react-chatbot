import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

const Help = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h3>About Rajkot Municipal Corporation (RMC)</h3>
        <h5>
          Rajkot Municipal Corporation (RMC) is a local government committed to
          provide basic infrastructure facilities including entertainment
          facilities to the people of the city. RMC is very well known for the
          managing the city by using private sector participation as well as
          introduction of innovative mechanism in management to serve people
          efficiently. City has prepared different plans for improving services
          and to nullify gap between services and demands.
        </h5>
        <Jumbotron fluid>
          <h3>Help</h3>
          <h5>
            - Property Tax , Professional Tax , Shops & Establishment , Election
            Department , Building Plan Approval
          </h5>
        </Jumbotron>
      </Container>
    </Jumbotron>
  )
}

export default Help
