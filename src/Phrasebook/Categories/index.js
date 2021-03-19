import { useDispatch, useSelector } from "react-redux";
import { getWordsRequest } from "../../Store/actions";

export const Categories = () => {
  const dispatch = useDispatch();
  const { categories, currentCategory } = useSelector((state) => state);

  const clickHandler = async (e) => {
    e.preventDefault();

    if (e.target.dataset.category) {
      dispatch(getWordsRequest(e.target.dataset.category));
    }
  };

  if (categories.length === 0) return null;

  return (
    <div className="categories">
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
