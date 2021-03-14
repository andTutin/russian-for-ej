import { useEffect, useState } from "react";
import { Wordform } from "./Wordform";
import { Register } from "./Register";
import { BASE_URL } from "../config";
import { Redirect } from "react-router-dom";

export const Addmin = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [authExpired, setAuthExpired] = useState(false);
  const [error, setError] = useState(false);
  const { token } = JSON.parse(localStorage.getItem("userData")) || '';
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

  useEffect(() => {
    categoriesRequest();
  }, []);

  const changeCategoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const handleCategorySubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}api/category`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ category }),
      });

      if (res.ok) {
        const { message, newcategory } = await res.json();
        alert(message);
        setCategories([...categories, newcategory])
        setCategory("");
      } else {
        const code = res.status;
        const { message } = await res.json();
        const error = { message, code };

        throw error;;
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
      <h3>Добавить новую категорию слов.</h3>
      <form
        onSubmit={handleCategorySubmit}
        style={{
          width: "min-content",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <input
          type="text"
          placeholder="новая категория"
          style={{ margin: "0" }}
          name="newcategory"
          id="newcategory"
          onChange={changeCategoryHandler}
          value={category}
        />
        <button type="submit" style={{ margin: "0 0 0 10px" }}>
          добавить
        </button>
      </form>
      <br />
      <pre>{error && 'Не удалось загрузить список категорий.'}</pre>
      <Wordform categories={categories} />
      <br />
      <Register />
    </>
  );
};
