import { useState } from "react";
import { BASE_URL } from "../config";
import { Redirect } from "react-router-dom";

export const CategoryForm = ({ updateSelector }) => {
  const userData = localStorage.getItem("userData");
  const token = userData ? JSON.parse(userData).token : "invalid_token";
  const [category, setCategory] = useState("");
  const [authExpired, setAuthExpired] = useState(false);

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
        setCategory("");
        updateSelector(newcategory);
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

    return <Redirect to="/login" />;
  }

  return (
    <>
      <h3>Добавить новую категорию слов.</h3>
      <form
        onSubmit={handleCategorySubmit}
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
    </>
  );
};
