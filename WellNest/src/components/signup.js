import React, { useState } from 'react';
import axios from 'axios';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/signup', {
        email,
        password,
        displayName,
      });

      console.log('Signup successful:', response.data);
      // Handle success - redirect, show message, etc.
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle error - show message, reset form, etc.
    }
  };

  return (
    <form>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="text" placeholder="Display Name" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
      <Button onClick={handleSignup}>Signup</Button>
    </form>
    
  );
}

export default SignupForm;