import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (mobile, password) => {
    if (mobile === "7667267787" && password === "1234") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const logout = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
