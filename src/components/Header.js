import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'; // Import custom CSS file for styling

const Header = () => (
  <div className="header-container">
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-none bg-transparent position-absolute w-100" style={{ zIndex: 999 }}>
      <div className="container-fluid d-flex align-items-center">
        <Navbar.Brand className="d-flex align-items-center">
          <img
            src="/carousel/logo.png"
            width="120"
            height="120"
            className="d-inline-block align-top"
            alt="Company logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mx-auto mb-2 mb-lg-0">
            <Nav.Link href="#portfolio" className="text-lg mx-4">Portfolio</Nav.Link>
            <Nav.Link href="#objective" className="text-lg mx-4">Objectives</Nav.Link>
            <Nav.Link href="#about" className="text-lg mx-4">About</Nav.Link>
            <Nav.Link href="#contact-form" className="text-lg mx-4">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>

    <Carousel className="carousel-background" controls={false} interval={3000}>
      <Carousel.Item>
        <div className="carousel-image-wrapper">
          <img
            className="d-block w-100 carousel-image"
            src="/carousel/1.jpg"
            alt="First slide"
          />
          <div className="overlay"></div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-wrapper">
          <img
            className="d-block w-100 carousel-image"
            src="/carousel/10.jpg"
            alt="Second slide"
          />
          <div className="overlay"></div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-wrapper">
          <img
            className="d-block w-100 carousel-image"
            src="/carousel/2.jpg"
            alt="Third slide"
          />
          <div className="overlay"></div>
        </div>
      </Carousel.Item>
    </Carousel>
    <Carousel.Caption className="custom-caption">
      <h1 className="text-4xl font-extrabold mb-6 mt-12">
        Building Legacies, Elevating Dreams
      </h1>
    </Carousel.Caption>
  </div>
);

export default Header;
