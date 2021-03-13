import { useState } from "react";
import { BASE_URL } from "../config";

export const Login = ({ login }) => {
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
        const {token , userId} = await res.json()
        login(token, userId)
      }
    } catch (error) {}
  };

  return (
    <>
      <form
        style={{
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
        }}
        onSubmit={loginRequest}
      >
        <input
          style={{ margin: "0" }}
          type="text"
          name="nickname"
          id="nickname"
          placeholder="никнейм"
          onChange={changeHandler}
        />
        <input
          style={{ margin: "0" }}
          type="password"
          name="password"
          id="password"
          placeholder="пароль"
          onChange={changeHandler}
        />
        <button style={{ margin: "0" }} disabled={!(form.nickname && form.password)}>Войти</button>
      </form>
      <br />
      <br />
      <h3
        style={{
          width: "max-content",
          margin: "0 auto",
        }}
      >
        This page is for russian viewers. Пиши в личку PyMbIH_, чтобы получить
        доступ.
      </h3>
    </>
  );
};
