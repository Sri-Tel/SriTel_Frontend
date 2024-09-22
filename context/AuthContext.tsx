import React, { createContext, useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const [decodedToken, setDecodedToken] = useState(null); // Store decoded token data

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken); // Restore token from localStorage
      const decoded = jwtDecode(storedToken); // Decode the token
      setDecodedToken(decoded); // Save decoded token data
    }
    setLoading(false); // Mark loading as complete
  }, []); // Only run once on component mount

  const login = (jwtToken) => {
    localStorage.setItem('token', jwtToken); // Save token in localStorage
    setToken(jwtToken); // Save token in state
    const decoded = jwtDecode(jwtToken); // Decode the token
    setDecodedToken(decoded); // Save decoded token data
  };

  const logout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    setToken(null); // Clear token from state
  };

  return (
    <AuthContext.Provider value={{ token, decodedToken,login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
