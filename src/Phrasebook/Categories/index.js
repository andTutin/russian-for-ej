import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWordsRequest, setCurrentCategory } from "../../Store/actions";

export const Categories = () => {
  const dispatch = useDispatch();
  const { categories, currentCategory, loadingCategories } = useSelector(
    (state) => state
  );
  /*
  if (categories.length === 0) {
    console.log("ничего не возвращаем т.к. массив категорий пуст");
    return null;
  }

  if (categories.length > 0 && currentCategory === '') {
    console.log("ничего не возвращаем т.к. массив есть но отсутвует категория");
    return null;
  }

  if (currentCategory === '') {
    console.log("ничего не возвращаем т.к. нет текущей категории");
    return null;
  }
  */
  useEffect(() => {
    return () => dispatch(getWordsRequest(currentCategory))
  }, [currentCategory, dispatch])


  const clickHandler = async (e) => {
    e.preventDefault();

    if (e.target.dataset.category) {
      dispatch(setCurrentCategory(e.target.dataset.category));
      //dispatch(getWordsRequest(currentCategory))
    }
  };

  if (loadingCategories) return null;

  return (
    <div className="categories">
      {console.log("рендер категориз")}
      {console.log(categories, currentCategory)}
      <ul className="categories__list" onClick={clickHandler}>
        {categories.map((c) =>
          c.title === currentCategory ? (
            <li
              className="categories__item categories__item--active"
              data-category={c.title}
              key={c._id}
            >
              {c.title}
            </li>
          ) : (
            <li
              className="categories__item"
              data-category={c.title}
              key={c._id}
            >
              {c.title}
            </li>
          )
        )}
      </ul>
    </div>
  );
};
