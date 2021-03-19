import { useState } from "react";
import { useDispatch } from "react-redux";
import { postCategory } from "../Store/actions";

export const CategoryForm = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");

  const changeCategoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const addCategory = (e) => {
    e.preventDefault();
    
    dispatch(postCategory(category));
  };

  return (
    <>
      <h3>Добавить новую категорию слов.</h3>
      <form onSubmit={addCategory}>
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
