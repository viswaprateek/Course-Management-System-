import React, { useState } from 'react';
import { registerUser } from '../api'; // Adjust the import path as necessary

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        username,
        email,
        password,
      };
      const response = await registerUser(userData);
      // Handle successful registration (e.g., redirect to login or dashboard)
    } catch (err) {
      setError(err.message || 'An error occurred during signup.');
    }
  };

  // Inline styles
  const styles = {
    signupContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width:  '100vw',
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      backgroundColor: '#f4f7fa',
    },
    signupForm: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      padding: '20px',
      borderRadius: '17px',
      boxShadow: '0 15px 15px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#ffffff',
      width: '100%',
      maxWidth: '400px',
      color: '#000', // All text color set to black
    },
    input: {
      marginBottom: '10px',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      backgroundColor: '#bfd3f2',
      color: '#000', // Text color set to black
    },
    button: {
      backgroundColor: '#0056b3',
      color: 'white',
      padding: '10px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    error: {
      color: 'red',
      textAlign: 'center',
      marginBottom: '10px',
    },
    link: {
      textAlign: 'center',
      marginTop: '10px',
      fontSize: '16px',
      color: '#000', // Text color set to black
    },
    title: {
      textAlign: 'center',
      color: '#000',
      marginBottom: '20px',
    },
    
  };

  return (
    <div style={styles.signupContainer}>
      <form style={styles.signupForm} onSubmit={handleSubmit}>
        <h1 style={styles.title}>PURDUE UNIVERSITY FORT WAYNE</h1>
        
        <h2 style={{ ...styles.title, marginTop: 0 }}>Course Assessment Management System (CAMS)</h2>
        <h3>Signup Your Account</h3>
        
        <input
          style={styles.input}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          style={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          style={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        
        {error && <p style={styles.error}>{error}</p>}
        
        <button style={styles.button} type="submit">Sign Up</button>
        <div style={styles.link}>
          Already have an account? <a href="/login" style={{ color: '#0056b3' }}>Sign in</a>
        </div>
      </form>
    </div>
  );
};

export default Signup;
