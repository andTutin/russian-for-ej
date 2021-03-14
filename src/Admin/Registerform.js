import { useState, useContext } from "react";
import { Auth } from "../Auth";
import { BASE_URL } from "../config";
import { Redirect } from "react-router-dom";

export const Register = () => {
  const [form, setForm] = useState({
    nickname: "",
    password: "",
  });
  const [authExpired, setAuthExpired] = useState(false);
  const { token } = useContext(Auth);
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
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Пользователь добавлен");
        setForm({
          nickname: "",
          password: "",
        });
      } else {
        const code = res.status;
        const { message } = await res.json();
        const error = { message, code };

        throw error;
      }
    } catch (error) {
      alert(error.message);
      if (error.code === 401) {
        setAuthExpired(true);
      }
    }
  };

  if (authExpired) {
    localStorage.removeItem("userData");

    return <Redirect to="/add" />;
  }

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
