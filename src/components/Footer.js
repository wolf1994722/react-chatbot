import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-4">
            Copyright &copy;2021 Chatbot IT students
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
