import React from 'react'
import NavbarComponent from './NavbarComponent'
import { Container, Spinner } from 'react-bootstrap'

const LoadingComponent = () => {
  return (
    <div>
    <NavbarComponent />
    <Container>
      <div className="d-flex justify-content-center" style={{ fontSize: "40px" }}>
      <Spinner animation="border" role="status" />
      </div>
        <h1 className="text-center text-light">Loading...</h1>
    </Container>
  </div>
  )
}

export default LoadingComponent