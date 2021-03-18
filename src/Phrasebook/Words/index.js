//import { useEffect } from "react";
import { useSelector,/* useDispatch*/ } from "react-redux";
//import { getWordsRequest } from "../../Store/actions";

export const Words = ({ sayit }) => {
  //const dispatch = useDispatch();
  const { words, loadingWords, /*currentCategory */} = useSelector(
    (state) => state
  );

  /*
  useEffect(() => {
    if (currentCategory) dispatch(getWordsRequest(currentCategory))
  }, [dispatch, currentCategory])
  */

  if (words.length === 0 || loadingWords === true) return null;


  return (
    <div className="dictionary" onClick={sayit}>
      {console.log("рендер вордс")}
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
  );
};
