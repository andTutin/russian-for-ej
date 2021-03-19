import { useSelector } from "react-redux";

export const Words = ({ sayit }) => {
  const { words, currentCategory } = useSelector((state) => state);

  if (currentCategory === "") return null;

  return (
    <div className="dictionary" onClick={sayit}>
      {words.length === 0 ? (
        <h3>Category is empty yet</h3>
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
