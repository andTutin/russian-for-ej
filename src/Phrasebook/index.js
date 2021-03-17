import { useSpeaker } from "../Speaker";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesRequest, getWordsRequest, setCurrentCategory } from "../Store/actions";
import { useEffect } from "react";
import "./Phrasebook.css";

export const Phrasebook = () => {
  const dispatch = useDispatch();
  const sayit = useSpeaker();

  useEffect(() => {
    dispatch(getCategoriesRequest());
  }, [dispatch]);

  const { currentCategory, categories, words } = useSelector((state) => state);

  const clickHandler = (e) => {
    e.preventDefault();

    if (e.target.dataset.category) {
      dispatch(setCurrentCategory(e.target.dataset.category));
      dispatch(getWordsRequest(e.target.dataset.category));
    }
  };

  const setClass = (page) => {
    return page === currentCategory
      ? "categories__item categories__item--active"
      : "categories__item";
  };

  return (
    <section className="phrasebook">
      {console.log("рендер фрэйзбук")}
      <div className="categories">
        <ul className="categories__list" onClick={clickHandler}>
          {categories.map((c) => (
            <li
              className={setClass(c.title)}
              data-category={c.title}
              key={c._id}
            >
              {c.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="dictionary" onClick={sayit}>
        <ul className="dictionary__list">
          {words.map((w) => (
            <li className="dictionary__item" key={w._id}>
              <div className="word">
                <div className="word__english">{w.english}</div>
                <div className="word__russian">
                  <span className="listenable" data-say={w.russian}>
                    {w.russian}
                  </span>
                </div>
                <div className="word__translit">{w.translit || "translit"}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
