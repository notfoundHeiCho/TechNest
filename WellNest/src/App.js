import React from 'react';
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/login';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <div className="App">
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
