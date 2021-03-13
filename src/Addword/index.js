import { useState } from "react";
import { Addmin } from "./Addmin";
import { Login } from "./Login";

export const Addword = () => {
  const { token } = JSON.parse(localStorage.getItem("userData")) || '';

  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  if (isLoggedIn) {
    return <Addmin />;
  }

  const login = (token, userId) => {
    localStorage.setItem("userData", JSON.stringify({ token, userId }));
    setIsLoggedIn(true);
  };

  return <Login login={login} />;
};
 