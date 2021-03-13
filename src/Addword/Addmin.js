import { useEffect, useState } from "react";
import { Wordform } from "./Wordform";
import {Register} from './Register'

export const Addmin = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const categoriesRequest = async () => {
    try {
      const res = await fetch("api/category", {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      const data = await res.json();
      setCategories(data);
      setCategory("");
    } catch (error) {}
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
      const res = await fetch("api/category/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ category }),
      });
      if (res.ok) {
        const { message } = await res.json();
        alert(message);
        categoriesRequest();
      } else {
        const { message } = await res.json();
        alert(message);
      }
    } catch (e) {
      alert('Что-то пошло не так! Попробуйте снова.');
    }
  };

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
      <Wordform categories={categories} />
      <br />
      <Register />
    </>
  );
};
