import React from 'react';
import axios from 'axios';

const Login = () => {
  const handleLogin = async () => {
    try {
      const response = await axios.get('http://localhost:8000/auth/google');
      window.location.href = response.data.authUrl;
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default Login;