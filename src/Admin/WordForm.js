import { useState } from "react";
import { BASE_URL } from "../config";

export const WordForm = ({ categories, error }) => {
  const userData = localStorage.getItem("userData");
  const token = userData ? JSON.parse(userData).token : "invalid_token";
  const [word, setWord] = useState({
    english: "",
    russian: "",
    category: "",
  });

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
      <form onSubmit={handleWordSubmit}>
        <input
          type="text"
          placeholder="новое слово англ"
          name="english"
          id="english"
          onChange={changeWordHandler}
          value={word.english}
        />
        <input
          type="text"
          placeholder="перевод на рус"
          name="russian"
          id="russian"
          onChange={changeWordHandler}
          value={word.russian}
        />
        <select
          id="category"
          name="category"
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
