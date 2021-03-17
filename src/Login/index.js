import { useState } from "react";
import { Redirect } from "react-router-dom";
import { BASE_URL } from "../config";
import "./Login.css";

export const Login = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const login = (token) => {
    localStorage.setItem("userData", JSON.stringify({ token }));
  };
  const [form, setForm] = useState({
    nickname: "",
    password: "",
  });

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const loginRequest = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        const { token } = await res.json();
        login(token);
        setLoginStatus(true);
      } else {
        const { message } = await res.json();
        const error = { message };

        throw error;
      }
    } catch (error) {
      alert(error.message);
    }
  };

  if (loginStatus) return <Redirect to="/admin" />;

  return (
    <section className="login">
      {console.log("рендер логин")}
      <form className="login__form" onSubmit={loginRequest}>
        <input
          type="text"
          name="nickname"
          id="nickname"
          placeholder="никнейм"
          onChange={changeHandler}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="пароль"
          onChange={changeHandler}
        />
        <button
          disabled={!(form.nickname && form.password)}
        >
          Войти
        </button>
      </form>
    </section>
  );
};
