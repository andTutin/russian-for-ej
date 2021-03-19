import { useState } from "react";
import { useDispatch } from "react-redux";
import { registrationRequest } from "../Store/actions";

export const RegisterForm = () => {
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

  const registerNewUser = (e) => {
    e.preventDefault();

    dispatch(registrationRequest(form))
  }

  return (
    <>
      <h3>Зарегистрировать нового пользователя.</h3>
      <form onSubmit={registerNewUser}>
        <input
          type="text"
          name="nickname"
          id="nickname"
          placeholder="никнейм"
          onChange={changeHandler}
          value={form.nickname}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="пароль"
          onChange={changeHandler}
          value={form.password}
        />
        <button disabled={!(form.nickname && form.password)}>
          Зарегистрировать
        </button>
      </form>
    </>
  );
};
