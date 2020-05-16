import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Link from 'next/link';

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">Joe Straathof</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/index" passHref>
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Link href="/about" passHref>
            <Nav.Link>About</Nav.Link>
          </Link>
          <Nav.Link href="https://github.com/dodger012">Github</Nav.Link>
          <Link href="/photography" passHref>
            <Nav.Link>Photography</Nav.Link>
          </Link>
          <NavDropdown title="Projects" id="basic-nav-dropdown">
            <Link href="/projects/printer" passHref>
              <NavDropdown.Item>3d Printer</NavDropdown.Item>
            </Link>
            <Link href="/projects/project2" passHref>
              <NavDropdown.Item>Project 2</NavDropdown.Item>
            </Link>
            <Link href="/projects/project3" passHref>
              <NavDropdown.Item>Project 3</NavDropdown.Item>
            </Link>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Something here</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
