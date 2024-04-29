import React, { useState } from 'react';
 //import { loginUser } from '../api'; // Uncomment and ensure this path is correct
import { useAuth } from '../AuthContext'; // Adjust the import path as necessary

const Login = () => {
  const { login } = useAuth(); // Destructure the login function from useAuth
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform login using API call
      // const { token, role, userId } = await loginUser(username, password);
      // login(token, role, userId); // Use login function from context
      // Redirect user to dashboard or other appropriate page
      // replace below with your logic
      setError('Login functionality not implemented');
    } catch (err) {
      setError(err.message || 'An error occurred during login.');
    }
  };

  // Inline styles
  const styles = {
    loginContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      backgroundColor: '#f4f7fa',
      
    },
    loginForm: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      padding: '20px',
      borderRadius: '17px',
      boxShadow: '0 15px 15px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#ffffff',
      width: '100%',
      maxWidth: '400px',
      color:"#000"
    },
    input: {
      marginBottom: '10px',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '4px',
      border: '1px solid #ccc',
      backgroundColor: '#bfd3f2',
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
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
    },

  };

  return (
    <div style={styles.loginContainer}>
      <form style={styles.loginForm} onSubmit={handleSubmit}>
      <h1 style={styles.title}>PURDUE UNIVERSITY FORT WAYNE</h1>

        <h2 style={{ ...styles.title, marginTop: 0 }}>Course Assessment Management System (CAMS)</h2>
        <h3>Login to Your Account</h3>
        
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
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        
        {error && <p style={styles.error}>{error}</p>}
        
        <button style={styles.button} type="submit">Log In</button>
        <div style={styles.link}>
          Don't have an account? <a href="/signup" style={{ color: '#0056b3' }}>Sign up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
