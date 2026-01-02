import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("ef_auth");
    setIsAuthenticated(stored === "1");
  }, []);

  const login = (email) => {
    // Very simple mock auth - store flag in localStorage
    localStorage.setItem("ef_auth", "1");
    localStorage.setItem("ef_user", email);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("ef_auth");
    localStorage.removeItem("ef_user");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
