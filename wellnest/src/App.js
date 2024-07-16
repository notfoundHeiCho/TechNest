import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Home from './components/Home'; // Import your Home component
import Dashboard from './components/Dashboard'; // Import your Home component
import About from './components/About'; // Import your About component
import Login from './components/Login'; // Import your Login component

function App() {
  return (
    <Router>
      <div className="App">
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
              <Nav.Link href="/about">About</Nav.Link>
              {/* Add more Nav.Link components for other pages */}
            </Nav>
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Button variant="outline-light" href="/signup">SignUp</Button>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
       </Routes>
      </div>
    </Router>
  );
}

export default App;