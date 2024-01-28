import React from 'react';
import {  Container , Nav , Navbar } from 'react-bootstrap';  

const NavbarComponent = () => {
  return (
    <div>
      <Navbar className='mb-4' bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">MealApp</Navbar.Brand>
          <Nav className="d-flex justify-content-end">
            <Nav.Link href="/">Ingredients</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent