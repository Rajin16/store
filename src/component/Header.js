import React from 'react'
import { Nav,Navbar,Container } from 'react-bootstrap'

function Header() {
  return (
    <div>
    
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header