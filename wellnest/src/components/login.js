import React from 'react';
import axios from 'axios';
import { Form, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

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
    <div> <hr />
      <Form style={{ textAlign: 'center' }}>
        <h2>Hello There 🙋‍♂️</h2><br />
        <h5>Welcome back! Please login to your account.</h5><br />
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
          </Button>
        </div>
        <br /><hr style={{ width: '1250px', margin: 'auto', textAlign: 'center' }} />OR<hr style={{ width: '1250px', margin: 'auto', textAlign: 'center' }} /><br />
        <FormGroup className="mb-3" controlId="formGroupEmail">
          <FormLabel>Email address</FormLabel>
          <FormControl
            style={{ fontSize: '14px', width: '250px', margin: 'auto', textAlign: 'center' }}
            type="email"
            placeholder="Enter email"
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="formGroupPassword">
          <FormLabel>Password</FormLabel>
          <FormControl
            style={{ fontSize: '14px', width: '250px', margin: 'auto', textAlign: 'center' }}
            type="password"
            placeholder="Password"
          />
        </FormGroup>
        <Button>Login</Button>
        <br />
        <br />
        <a href="/"><u>Forgot your password?</u></a>
      </Form>
    </div>
  );
};

export default Login;