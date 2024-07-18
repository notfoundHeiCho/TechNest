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
      <header style={{ background: "#212529" }} className="header" data-header>
        <div className="container">
          <a href="/" className="logo">
            <IoPulseSharp aria-hidden="true" style={{ color: "red" }} />
            <span className="span" style={{ color: "red" }}>WellNest</span>
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
      </header>
      <br />
      <body>
        <Form style={styles.form}>
          <h2 style={styles.heading}>Hello There 🙋‍♂️</h2><br />
          <h5 style={styles.subHeading}>Welcome back! Please login to your account.</h5><br /><br />
          <div style={styles.buttonContainer}>
            <Button
              variant="light"
              style={styles.button}
              onClick={handleLogin}
            >
              <img
                src="https://cdn-teams-slug.flaticon.com/google.jpg"
                alt="Google Icon"
                style={styles.googleIcon}
              />
              Sign in with Google
            </Button><br />
          </div>
          <div style={styles.linksContainer}>
            Don't have an Account? <a href="/signup"><u>Register</u></a><br />
            <a href="/"><u>Forgot your password?</u></a>
          </div>
        </Form>

        <div style={{ marginTop: "300px" }} className="footer-bottom">
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
      </body>
    </div>
  );
};

const styles = {
  form: {
    marginTop: '150px',
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '40px 20px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
  },
  subHeading: {
    fontSize: '1rem',
    color: '#777',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#4c8bf5',
    color: '#fff',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '25px',
    border: 'none',
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
    maxWidth: '200px',
  },
  googleIcon: {
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    marginRight: '10px',
  },
  linksContainer: {
    marginTop: '20px',
    fontSize: '0.9rem',
    color: '#555',
  },
};

export default Login;
