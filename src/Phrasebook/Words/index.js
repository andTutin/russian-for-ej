import { useSelector } from "react-redux";

export const Words = ({ sayit }) => {
  const { words, currentCategory, categoriesError, wordsError } = useSelector(
    (state) => state
  );

  if (categoriesError)
    return (
      <div className="dictionary">
        <ul className="dictionary__list">
          <li className="dictionary__item">
            <div className="word">
              <div className="word__english">And it's not my fault :kappa:</div>
            </div>
          </li>
        </ul>
      </div>
    );

  if (wordsError)
    return (
      <div className="dictionary">
        <ul className="dictionary__list">
          <li className="dictionary__item">
            <div className="word">
              <div className="word__english">Failed to load Categories</div>
            </div>
          </li>
        </ul>
      </div>
    );

  if (currentCategory === "") return null;

  return (
    <div className="dictionary" onClick={sayit}>
      {words.length === 0 ? (
        <ul className="dictionary__list">
          <li className="dictionary__item">
            <div className="word">
              <div className="word__english">Category is empty yet</div>
            </div>
          </li>
        </ul>
      ) : (
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
      )}
    </div>
  );
};
