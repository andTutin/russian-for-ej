import { useEffect, useState } from "react";
import { CategoryForm } from "./CategoryForm";
import { WordForm } from "./WordForm";
import { RegisterForm } from "./RegisterForm";
import { Redirect } from "react-router-dom";
import { BASE_URL } from "../config";
import "./Admin.css";

export const Admin = () => {
  const userData = localStorage.getItem("userData");
  const token = userData ? JSON.parse(userData).token : "invalid_token";
  const [authExpired, setAuthExpired] = useState(null);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const categoriesRequest = async () => {
    try {
      const res = await fetch(`${BASE_URL}api/category`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });

      const data = await res.json();

      setCategories(data);
    } catch (error) {
      setError(true);
    }
  };
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
        categoriesRequest();
      } else {
        setAuthExpired(true);
      }
    } catch (error) {
      setAuthExpired(true);
    }
  };

  const updateSelector = (category) => {
    setCategories([...categories, category]);
  };

  useEffect(() => {
    checkAuth(token);
  }, []);

  if (authExpired === null) return null;
  if (authExpired) return <Redirect to="/login" />;

  return (
    <section className="admin">
      <CategoryForm updateSelector={updateSelector} />
      <WordForm categories={categories} error={error} />
      <RegisterForm />
    </section>
  );
};
