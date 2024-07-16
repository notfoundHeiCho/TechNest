// Home.js
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import About from './About'; // Import your About component
import Dashboard from './Dashboard'; // Import your Dashboard component

const Home = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
      </Navbar>
      <Container style={{ marginTop: '20px' }}>
        <Routes>
          <Route path="/" element={<h1>Welcome to the About Page</h1>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes as needed */}
        </Routes>
      </Container>
    </div>
  );
};

export default Home;