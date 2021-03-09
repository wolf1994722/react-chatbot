import React from 'react'
import '../../App.css'

const Link = () => {
  return (
    <div>
      <a
        style={{ textDecoration: 'none' }}
        href="http://www.rmc.gov.in/rmcwebsite/default.aspx"
        target="_blank"
      >
        <p>1.Official RMC Website</p>
      </a>
      <a
        style={{ textDecoration: 'none' }}
        href="https://www.rmcegov.gov.in/payonline/proftax.php"
        target="_blank"
      >
        <p>2.Professional Tax</p>
      </a>
      <a
        style={{ textDecoration: 'none' }}
        href="https://www.rmcegov.gov.in/payonline/propertytax.php"
        target="_blank"
      >
        3.PropertyTax
      </a>
    </div>
  )
}

export default Link
