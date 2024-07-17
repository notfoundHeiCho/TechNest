import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Dashboard from './Dashboard'; // Import your Dashboard component

const Home = () => {
  return (
    <div>
     <Navbar bg="dark" variant="dark">
            <div className="logo">
              <img
                src="https://storage.googleapis.com/openscreenshot/7%2Fd%2FU/aR9OpPUd7.png"
                alt="Screenshot"
                style={{ float: 'left', width: '200px', height: 'auto', borderRadius: '15px' }}
              />
            </div>
            <Container>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="https://notfoundheicho.github.io/TechNest">About</Nav.Link>
                {/* Add more Nav.Link components for other pages */}
              </Nav>
              <Nav>
                <Nav.Link href="/Login">Login</Nav.Link>
                <Button variant="outline-light" href="/signup">SignUp</Button>
              </Nav>
            </Container>
          </Navbar>
      <Container style={{ marginTop: '20px' }}>
        <Routes>
          <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Container>
    </div>
  );
};

export default Home;