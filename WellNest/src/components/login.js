import React from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { IoPulseSharp, IoCloseSharp } from 'react-icons/io5';
import './Style.css';

const Login = () => {
  const handleLogin = async () => {
    console.log('Attempting login...');
    try {
      const response = await axios.get('http://localhost:8000/auth/google');
      console.log('Response:', response);
      window.location.href = response.data.authUrl;
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    
    <div>

          <header style={{ background: "#212529" }}  className="header" data-header>
      <div  className="container" >
      <a href="/" className="logo">
      <IoPulseSharp aria-hidden="true" style={{color:"red"}} />
        <span className="span" style={{color:"red"}}>WellNest</span>
      </a>

      <nav className="navbar" data-navbar>
        <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
        <IoCloseSharp aria-hidden="true" />
        </button>
        <ul className="navbar-list">
          <li>
            <a href="/" className="navbar-link active" data-nav-link>Home</a>
          </li>
          <li>
            <a href="/#about" className="navbar-link" data-nav-link>About Us</a>
          </li>
        </ul>
      </nav>
      
      </div>
      </header><br />
     <body>      
      <Form style={{ marginTop: '250px', textAlign: 'center' }}>
        <h2>Hello There 🙋‍♂️</h2><br />
        <h5>Welcome back! Please login to your account.</h5><br /><br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
          <Button
            variant="light"
            style={{
              backgroundColor: '#4c8bf5',
              color: '#333',
              boxShadow: '0px 1px 2px rgba(0,0,0,0.1)',
              borderRadius: '25px',
              border: '1px solid #ccc',
              padding: '10px 15px',
              fontSize: '12px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.3s ease',
              cursor: 'pointer',
              maxWidth: '200px',
            }}
            onClick={handleLogin}
          >
            <img
              src="https://cdn-teams-slug.flaticon.com/google.jpg"
              alt="Google Icon"
              style={{
                borderRadius: '30px',
                width: '55px',
                height: '40px',
                marginRight: '10px',
              }}
            />
            Sign in with Google
          </Button><br />
        </div>
        
        Don't have an Account?<a href="/signup"><u>Register</u></a><br />
        <a href="/"><u>Forgot your password?</u></a>
      </Form>
      </body>

       <div style={{marginTop: "300px" }} className="footer-bottom">
          <div className="container">
            <p className="copyright">
              &copy; 2024 WellNest. All Rights Reserved By <a href="https://notfoundheicho.github.io/TechNest/" className="copyright-link" target="_blank">TechNest</a>
            </p>
            <ul className="footer-bottom-list">
              <li>
                <a href="/" className="footer-bottom-link has-before">Privacy Policy</a>
              </li>
              <li>
                <a href="/" className="footer-bottom-link has-before">Terms & Condition</a>
              </li>
            </ul>
          </div>
        </div>
    </div>
    
    
);
};

export default Login;