// AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { setAuthToken } from './api'; // Ensure this is the correct path to your API utility
import { useCookies } from 'react-cookie';

// Create a context for managing authentication state
const AuthContext = createContext();

export function AuthProvider({ children }) {
  // State variables for authentication status, access token, and user info
  const [authenticated, setAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState('');
  const [userRole, setUserRole] = useState('');
  const [userId, setUserId] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken', 'userRole', 'userId']);

  useEffect(() => {
    // When the component mounts, check for existing auth cookies
    const token = cookies.accessToken;
    const role = cookies.userRole;
    const id = cookies.userId;

    if (token) {
      setAuthenticated(true);
      setAccessToken(token);
      setUserRole(role);
      setUserId(id);
      setAuthToken(token); // Set authorization header for future API requests
    }
  }, [cookies]);

  const login = (token, role, id) => {
    // Save auth data in state and cookies
    setAuthenticated(true);
    setAccessToken(token);
    setUserRole(role);
    setUserId(id);
    setCookie('accessToken', token, { path: '/' });
    setCookie('userRole', role, { path: '/' });
    setCookie('userId', id, { path: '/' });
    setAuthToken(token); // Set authorization header
  };

  const logout = () => {
    // Clear auth data from state and cookies
    setAuthenticated(false);
    setAccessToken('');
    setUserRole('');
    setUserId('');
    removeCookie('accessToken', { path: '/' });
    removeCookie('userRole', { path: '/' });
    removeCookie('userId', { path: '/' });
    setAuthToken(null); // Clear authorization header
  };

  // Provide auth state and control methods to children
  return (
    <AuthContext.Provider value={{ authenticated, accessToken, userRole, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  // Custom hook to use the auth context
  return useContext(AuthContext);
}
    