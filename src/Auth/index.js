import { createContext, useState, useEffect } from "react";

export const Auth = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
      setToken(userData.token);
      setIsLoggedIn(true);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("userData", JSON.stringify({ token }));
    setIsLoggedIn(true);
  };

  return (
    <Auth.Provider
      value={{
        token,
        isLoggedIn,
        login,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
