"use client";
import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

// Create a context for the session
export const SessionContext = createContext(null);

export const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Get token from localStorage
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);

        // You can store any relevant information from the token
        setSession({
          user: {
            email: decodedToken.email,
            name: decodedToken.given_name,
            username: decodedToken.username,
            token, // Store the token as well if needed
          },
        });
      } catch (error) {
        console.error('Invalid token', error);
      }
    }
  }, []);

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};
