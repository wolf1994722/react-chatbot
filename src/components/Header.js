import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>
                <i className="fas fa-robot"></i> ChatBot
              </Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <LinkContainer to="/faq">
                  <Nav.Link>
                    <i className="fas fa-question-circle"></i> FAQ
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/help">
                  <Nav.Link>
                    <i className="fas fa-hands-helping"></i> Help
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  )
}

export default Header
