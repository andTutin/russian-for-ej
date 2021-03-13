import { useState } from "react";
import { BASE_URL } from "../config";

export const Register = () => {
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

  const registerNewUser = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(form),
      });
      if (res.ok) alert("Пользователь добавлен");
      setForm({
        nickname: "",
        password: "",
      });
    } catch (error) {
      alert("Пользователь не добавлен");
    }
  };

  return (
    <>
      <h3>Зарегистрировать нового пользователя.</h3>
      <form
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        onSubmit={registerNewUser}
      >
        <input
          style={{ margin: "0" }}
          type="text"
          name="nickname"
          id="nickname"
          placeholder="никнейм"
          onChange={changeHandler}
          value={form.nickname}
        />
        <input
          style={{ margin: "0" }}
          type="password"
          name="password"
          id="password"
          placeholder="пароль"
          onChange={changeHandler}
          value={form.password}
        />
        <button
          style={{ margin: "0" }}
          disabled={!(form.nickname && form.password)}
        >
          Зарегистрировать
        </button>
      </form>
    </>
  );
};
