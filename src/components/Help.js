import React from 'react'
import { Container, Jumbotron } from 'react-bootstrap'

const Help = () => {
  return (
    <Jumbotron>
      <h3>About Rajkot Municipal Corporation (RMC)</h3>
      <span>
        Rajkot Municipal Corporation (RMC) is a local government committed to
        provide basic infrastructure facilities including entertainment
        facilities to the people of the city. RMC is very well known for the
        managing the city by using private sector participation as well as
        introduction of innovative mechanism in management to serve people
        efficiently. City has prepared different plans for improving services
        and to nullify gap between services and demands.
      </span>
      <div className="mt-5">
        <h3>Help</h3>
        <ul>
          <li>Property Tax FAQs</li>
          <li>Professional Tax FAQs</li>
          <li>Professional Tax FAQs</li>
          <li>Shops & Establishment FAQs</li>
          <li>Election Department FAQs</li>
          <li>Building Plan Approval FAQs</li>
          <li>FAQs for Fire & Emergency Services</li>
          <li>FAQs for Birth & Death Certificate</li>
        </ul>
      </div>
      <div className="mt-5">
        <h3>Contact</h3>
        <p> Fax: +91-281-2224258</p>
        <p>
          {' '}
          E-Mail:<a href="mailto:mc_rmc@yahoo.co.in"> mc_rmc@rmc.gov.in</a>{' '}
        </p>
        <p>
          {' '}
          Website:{' '}
          <a href="http://www.rmc.gov.in/rmcwebsite/default.aspx">
            {' '}
            www.rmc.gov.in
          </a>
        </p>
      </div>
    </Jumbotron>
  )
}

export default Help
