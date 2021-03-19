import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postWord } from "../Store/actions";

export const WordForm = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state);
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

  const addWord = (e) => {
    e.preventDefault();

    dispatch(postWord(word));
  };

  return (
    <>
      <h3>Добавить новое слово.</h3>
      <form onSubmit={addWord}>
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
