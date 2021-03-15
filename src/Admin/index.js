import { useEffect, useState } from "react";
import { CategoryForm } from "./CategoryForm";
import { WordForm } from "./WordForm";
import { RegisterForm } from "./RegisterForm";
import { Redirect } from "react-router-dom";
import { BASE_URL } from "../config";

export const Admin = () => {
  const userData = localStorage.getItem("userData");
  const token = userData ? JSON.parse(userData).token : "invalid_token";
  const [authExpired, setAuthExpired] = useState(null);
  const checkAuth = async (token) => {
    try {
      const res = await fetch(`${BASE_URL}api/auth/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        setAuthExpired(false);
      } else {
        setAuthExpired(true);
      }
    } catch (error) {
        setAuthExpired(true);
    }
  };

  useEffect(() => {
    checkAuth(token);
  }, [token]);

  if (authExpired === null) return null;
  if (authExpired) return <Redirect to="/login" />;

  return (
    <>
      {console.log("render admin")}
      <CategoryForm token={token}/>
      <WordForm token={token}/>
      <RegisterForm token={token}/>
    </>
  );
};
