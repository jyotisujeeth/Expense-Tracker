import React from 'react'

import { Navbar, Nav, Container, } from 'react-bootstrap';
import { Link, } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        
        <Navbar.Brand>
          <Link to="/home" style={{color:"white",textDecoration:"none"}}>Expense-Tracker</Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Products</Nav.Link>