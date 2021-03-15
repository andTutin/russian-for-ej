import { useState, useEffect } from "react";
import { BASE_URL } from "../config";

export const WordForm = ({ token }) => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(false);
  const [word, setWord] = useState({
    english: "",
    russian: "",
    category: "",
  });

  useEffect(() => {
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

    categoriesRequest();
  }, [token]);

  const changeWordHandler = (e) => {
    setWord({
      ...word,
      [e.target.name]: e.target.value,
    });
  };

  const handleWordSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}api/word`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(word),
      });

      if (res.ok) {
        const { message } = await res.json();

        alert(message);
        setWord({
          english: "",
          russian: "",
          category: "",
        });
      } else {
        const { message } = await res.json();

        alert(message);
      }
    } catch (e) {
      alert("Что-то пошло не так! Попробуйте снова.");
    }
  };

  return (
    <>
      {error && <pre>Не удалось загрузить список категорий</pre>}
      <h3>Добавить новое слово.</h3>
      <form
        onSubmit={handleWordSubmit}
        style={{
          maxWidth: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <input
          type="text"
          placeholder="новое слово англ"
          name="english"
          id="english"
          style={{ margin: "0" }}
          onChange={changeWordHandler}
          value={word.english}
        />
        <input
          type="text"
          placeholder="перевод на рус"
          name="russian"
          id="russian"
          style={{ margin: "0" }}
          onChange={changeWordHandler}
          value={word.russian}
        />
        <select
          id="category"
          name="category"
          style={{ margin: "0" }}
          value={word.category}
          onChange={changeWordHandler}
        >
          <option value="" disabled>
            Выбери категорию:
          </option>
          {categories.map((c) => (
            <option key={c._id} value={c.title}>
              {c.title}
            </option>
          ))}
        </select>
        <button type="submit">добавить</button>
      </form>
    </>
  );
};