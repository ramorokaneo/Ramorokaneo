import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const login = (name) => {
    setLoggedIn(true);
    setUserName(name);
  };

  const logout = () => {
    // Replace this with your actual logout logic
    // For example, make a request to the server to log the user out
    // Clear local storage or session storage
    // Update client-side state
    setLoggedIn(false);
    setUserName('');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
