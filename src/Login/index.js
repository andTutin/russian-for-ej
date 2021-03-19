import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginRequest } from "../Store/actions";
import "./Login.css";

export const Login = () => {
  const dispatch = useDispatch();

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

  const login = (e) => {
    e.preventDefault();

    dispatch(loginRequest(form));
  };

  return (
    <section className="login">
      <form className="login__form" onSubmit={login}>
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
        <button disabled={!(form.nickname && form.password)}>Войти</button>
      </form>
    </section>
  );
};
